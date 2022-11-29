<?php
class Sms
{
	var $conf	= array('host' => 'daemon.smstong.co.kr', 'port' => '8888');
	var $sock	= NULL;
	var $packet	= NULL;
	var $CI;

	
	function Sms($conf=array())
	{
		$confs	= (is_array($conf) == true) ? $conf : $this->conf;
		foreach ($confs as $key => $val)
		{
			$this->conf[$key]	= $val;
		}

		$PACKETDATA = array();
		$PACKETDATA['id']	= SMS_ID;
		$PACKETDATA['pw']	= SMS_PW;
		$PACKETDATA['stype']	= "PHP";
		$PACKETDATA['from']	= SUPPORT_TEL;
		$PACKETDATA['indexkey']	= '';
		$PACKETDATA['send_type']= 1;

		$this->packet = $PACKETDATA;

		$this->CI = & get_instance();
		$this->CI->load->model(array(
			DBNAME.'/sms_tb_model'
		));
	}

	function send($to, $msg, $type='SMS', $id='', $pw='') {
		$type_map = array(
			'SMS' => 1,
			'LMS' => 2
		);
		if(isset($type_map[$type]) == false) {
			$type = 'SMS';
		}


		$pack = $this->packet;

		$pack['send_type'] = $type_map[$type];;

		if(strlen($id) > 3 && strlen($pw) > 4) {
			$pack['id'] = $id;
			$pack['pw'] = $pw;
		}

		$pack['msg'] = $msg;
		$pack['to'] = trim(str_replace('-','',$to));

		// log
		$sess = $this->CI->session->userdata('admin');
		$log_params = array();
		$log_params['s_from'] = $pack['from'];
		$log_params['s_to'] = $pack['to'];
		$log_params['s_content'] = $pack['msg'];
		$log_params['s_admin_id'] = $sess['id'];
		$log_params['s_admin_name'] = $sess['name'];


		if($this->socketOpen()) {
			$this->getPaket($pack);
			$this->socketPutData();
			$RESINFO	=  $this->socketReade();
			$this->disConnect();
		}



		$result = array(
			'is_success' => false,
			'msg' => ''
		);
		
		switch($RESINFO['RESULT']) {
			case '1' :
				$res['is_success'] = true;
				$res['msg'] = "전송 성공!\n남은문자수 : [".$RESINFO['TOTALCNT'].'건]';
				if($RESINFO['TOTALCNT'] < 20) {
					$res['msg'] .= "\n\n문자통 충전바람(ID : ".SMS_ID.')';
				}

				$log_params['s_remain_count'] = $RESINFO['TOTALCNT'];
				break;
			case '2' :
				$res['msg'] .= "로그인 실패. \n문자통 계정확인바람(ID : ".SMS_ID.')';
				break;
			case '3' :
				$res['msg'] .= "포인트 부족. \n문자통 충전바람(ID : ".SMS_ID.')';
				break;
			case '4' :
				$res['msg'] .= '문자길이오류 (최대 90Byte 미만)';
				break;
			case '5' :
				$res['msg'] .= 'MMS 그림문자 전송시 이미지 파일 오류';
				break;
				
		}

		$log_params['s_response'] = $res['msg'];

		$this->CI->sms_tb_model->doInsert($log_params);

		return $res;
	}

	function setConnect ()
	{
		$this->sock	= @fsockopen($this->conf['host'], $this->conf['port'], $errno, $errstr);
		return (!$this->sock) ? false : true;
	}

	function getPaket ($data)
	{

		foreach ($data as $key => $val)
		{
			switch ($key)
			{
				case 'id' :
				case 'pw' :
					$packet[$key]	= $key."=".$val;
					break;
				case 'from' :
					$packet[$key]	= $key."=".$val;
					break;
				case 'msg' :
					$packet[$key]	= $key."=".$val;
					break;
				case 'to' :
					$packet[$key]	= $key."=".$val;
					break;
				case 'indexkey' :
					$packet[$key]	= $key."=".$val;
					break;
				case 'send_type' :
					$packet[$key]	= $key."=".$val;
					break;
			}
		}
	
		$datas	= $packet['id'] ."&". $packet['pw']."&".$packet['from']."&". $packet['to'] ."&". $packet['msg']."&". $packet['indexkey']."&". $packet['send_type'];
		$this->packet  = "Host: ".$this->conf['host']."\r\n"; 
		$this->packet .= "Content-Type: application/x-www-form-urlencoded\r\n"; 
		$this->packet .= "Content-Length: ".strlen($datas)."\r\n"; 
		$this->packet .= "Connection: close\r\n\r\n"; 
		$this->packet .= $datas;

	}

	function getMultiPaket ($data,$filedata)
	{
		srand((double)microtime()*1000000); 
		$boundary = "---------------------------".substr(md5(rand(0,32000)),0,10);
		

		foreach ($data as $key => $val)
		{
			$packet .="--".$boundary."\r\n";
			$packet .= "Content-Disposition: form-data; name=\"".$key."\"\r\n";
			$packet .= "\r\n".$val."\r\n";
		}
		
		
		if($filedata["filename"] && $filedata["filedata"] && $filedata["filetype"]){
			$packet .= "--$boundary\r\n";
			$packet .= "Content-Disposition: form-data; name=\"userfile\"; filename=\"".$filedata["filename"]."\"\r\n";
			$packet .= "Content-Type: ".$filedata["filetype"]."\r\n\r\n";
			$packet .= $filedata["filedata"]."\r\n";
			$packet .="--$boundary--\r\n";		
		}
		
		
		$this->packet  = "Host: ".$this->conf['host']."\r\n"; 
		$this->packet .= "Content-type: multipart/form-data; boundary=".$boundary."\r\n";
		$this->packet .= "Content-Length: ".strlen($packet)."\r\n\r\n"; 
		$this->packet .= $packet;
	}

	function socketOpen ()
	{
		return ($this->setConnect()) ? true : false;
	}

	function socketPutData ()
	{
		fputs($this->sock, "POST / HTTP/1.1\r\n");
		fputs($this->sock, $this->packet);
		fputs($this->sock, "\r\n");
	}

	function socketReade ()
	{
		$sockData	= NULL;
		
		$buffer =  fread($this->sock, 1024*10);
		$buffers = explode("\r\n\r\n",$buffer);
		return unserialize(trim($buffers[1]));
	}

	function disConnect ()
	{
		if ($this->sock) { fclose($this->sock); unset($this->sock); }
	}
}
?>
