<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

//[[DENY]]

class Common {

	function __construct() {
		$this->ci = & get_instance();
	}

	function get_inc_path() {
		$inc_path = "";
		if(strlen($this->ci->uri->uri_string()) > 0) {
			$inc_path = "..";
		}
		return $inc_path;
	}

	// javascript alert
	function alert($msg) {
		$msg = str_replace("'", "\'", $msg);
		$TMP_HTML = "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />";
		$TMP_HTML .="<script>alert('".$msg."');</script>";
		echo $TMP_HTML;
	}


	// javascript historyback
	function historyback($exit=true) {
		$TMP_HTML = "<script>history.back(-1);</script>";
		echo $TMP_HTML;
		if($exit) {
			exit;
		}
	}

	// javascript self.close
	function selfclose() {
		$TMP_HTML = "<script>self.close();</script>";
		echo $TMP_HTML;
	}



	// javascript location
	function locationhref($url) {
		$TMP_HTML = "<script>location.href='".$url."';</script>";
		echo $TMP_HTML;
	}

	function parent_locationhref($url) {
		$TMP_HTML = "<script>parent.location.href='".$url."';</script>";
		echo $TMP_HTML;
	}


	function parent_fail_alert($msg) {
		$msg = str_replace("'", "\'", $msg);
		$TMP_HTML = "<script>parent.payment_processing_fail('".$msg."');</script>";
		echo $TMP_HTML;
	}

	function popup($url, $name, $width, $height) {
		$TMP_HTML = "<script>window.open('".$url."', '".$name."', 'width=".$width.",height=".$height.",scrollbars=yes');</script>";
		echo $TMP_HTML;
	}

	function array2Map($arr, $key_field, $val_field) {
		$res = array();
		foreach($arr as $row) {
			$res[$row[$key_field]] = $row[$val_field];
		}
		return $res;
	}

	function getDataByPK($arr, $key='idx') {
		$result = array();
		foreach($arr as $item) {
			if(is_array($item)) {
				$result[$item[$key]] = $item;
			} else if(is_object($item)) {
				$result[$item->$key] = $item;
			}
		}
		return $result;
	}
	function getDataByDuplPK($arr, $key='idx') {
		$result = array();
		foreach($arr as $item) {
			if(is_array($item)) {
				$result[$item[$key]][] = $item;
			} else if(is_object($item)) {
				$result[$item->$key][] = $item;
			}
		}
		return $result;
	}
	function indexSort($idxs, $datas, $pk='') {
		if(strlen($pk) > 0) {
			$datas = $this->getDataByPK($datas, $pk);
		}
		$result = array();
		foreach($idxs as $idx) {
			if(isset($datas[$idx]) == false) {
				continue;
			}
			$result[$idx] = $datas[$idx];
		}
		return $result;
	}

	function indexSortAll($idxs, $datas, $pk='') {
		if(strlen($pk) > 0) {
			$datas = $this->getDataByPK($datas, $pk);
		}
		$result = array();
		foreach($idxs as $idx) {
			if(isset($datas[$idx])) {
				$result[$idx] = $datas[$idx];
				unset($datas[$idx]);
			}
		}
		foreach($datas as $data) {
			$result[] = $data;
		}
		return $result;
	}

	function getArrayDiff($removeArr, $standArr){
		$result = array();

		$keydiff = array_diff_key($removeArr, $standArr);
		foreach($keydiff as $key =>$val){
			unset($removeArr[$key]);
		}

		$result = array_diff_assoc($standArr, $removeArr);

		return $result;
	}

	function getArrayURLDecode($params){
		$result = array();
		foreach($params as $key =>$val){
			$decode_key = urldecode($key);
			$decode_val = urldecode($val);
			$result[$decode_key] = $decode_val;
		}
		return $result;
	}

	function getMultiArrayURLDecode($data) {
		if(is_array($data)) {
			$reval = array();
			foreach($data as $key=>$val)  {
				$reval[$key] = $this->getMultiArrayURLDecode($val);
			}
		}else {
			$reval = urldecode($data); 
		}
		return $reval;
	}

	function getMultiArrayURLEncode($data) {
		if(is_array($data)) {
			$reval = array();
			foreach($data as $key=>$val)  {
				$reval[$key] = $this->getMultiArrayURLEncode($val);
			}
		}else {
			$reval = urlencode($data); 
		}
		return $reval;
	}


	function genJqgridOption($array, $nullset=false){
		$string = ":;";
		if($nullset == true) $string = "";

		foreach($array as $key=>$val){
			$string .= $key.':'.$val.';';
		}
		return substr($string, 0, -1);
	}

	/*
	   format define
	   $sdate, $edate => 2014-01-01
	   $period => day, month, year
	   $struct => array()
	 */
	function getDummyDateValue($start, $end, $period='day', $struct=array()){
		$duumy_date = array();
		switch($period){
			case 'day' :
				for($i = strtotime($start); $i <= strtotime($end) ; $i+=86400) {
					$key = date('Y-m-d', $i);
					$dummy_date[$key] = $struct;
				}
				break;
			case 'month' :
				list($y, $m, $d) = explode('-', $start);
				$start = $y.'-'.$m.'-01';
				list($y, $m, $d) = explode('-', $end);
				$end = $y.'-'.$m.'-01';
				while($start <= $end) {
					$key = date('Y-m', strtotime($start));
					$dummy_date[$key] = $struct;
					list($y, $m, $d) = explode('-', $start);
					$start = date('Y-m-d', mktime(0,0,0,$m+1, $d, $y));
				}
				break;
			case 'year' :
				list($y, $m, $d) = explode('-', $start);
				$start = $y.'-01-01';
				list($y, $m, $d) = explode('-', $end);
				$end = $y.'-01-01';
				while($start <= $end) {
					$key = date('Y', strtotime($start));
					$dummy_date[$key] = $struct;
					list($y, $m, $d) = explode('-', $start);
					$start = date('Y-m-d', mktime(0,0,0,$m, $d, $y+1));
				}
				break;
		}
		return $dummy_date;
	}

	function getMicroTime(){
		list($usec, $sec) = explode(" ", microtime());
		return ((float)$usec + (float)$sec);
	}


	/* ======================================================= 
	   [jQuery Grid] filters => return $params array

	 ** Example  ::

	 @input   ::   $filters  = {"groupOp":"AND","rules":[{"field":"g_id","op":"bw","data":"27092"},{"field":"g_sku","op":"bw","data":"49231"}]}

	 @return  ::   $params = Array ( [like_] => Array ( [g_id] => 27092 [g_sku] => 49231 ) )

	 ======================================================= */
	function filter_to_params($filters, $search, $between_fields=array()) {

		$filters = str_replace('%7','}',$filters);
		$between_field_map = array();

		$params = array();
		if(($search==true) &&($filters != "")) {

			if(sizeof($between_fields) > 0) {
				foreach($between_fields as $bf) {
					$between_field_map[$bf.'_from'] = $bf;
					$between_field_map[$bf.'_to'] = $bf;
				}
			}

			$filters = json_decode($filters);
			//echo print_r($filters)."<BR><BR>";
			$rules = $filters->rules;
			$groupOperation = $filters->groupOp;
			foreach($rules as $rule) {

				$fieldName = $rule->field;
				//$fieldData = mysql_real_escape_string($rule->data);
				$fieldData = $this->ci->db->escape_str($rule->data);

				if(isset($between_field_map[$fieldName]) == true) {
					// fieldName_from or fieldName_to 

					$op_type = array_pop(explode('_', $fieldName));
					$fieldName = $between_field_map[$fieldName];

					if($op_type == 'from') {

						// Date type
						if(preg_match("/([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})/", $fieldData)){ 
							$params['>='][$fieldName] = $fieldData.' 00:00:00';
						}else{ 
							$params['>='][$fieldName] = $fieldData;
						}

					} else if($op_type == 'to') {
						// Date type
						if(preg_match("/([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})/", $fieldData)){ 
							$params['<='][$fieldName] = $fieldData." 23:59:59";
						}else{ 
							$params['<='][$fieldName] = $fieldData;
						}
					}
					continue;
				}

				switch ($rule->op) {
					case "eq":
						$fieldOperation = "=";
					break;
					case "ne":
						$fieldOperation = "!=";
					break;
					case "lt":
						$fieldOperation = "<";
					break;
					case "gt":
						$fieldOperation = ">";
					break;
					case "le":
						$fieldOperation = "<=";
					break;
					case "ge":
						$fieldOperation = ">=";
					break;
					case "nu":
						// todo. confirm
						$fieldOperation = "=";
					break;
					case "nn":
						// todo. confirm
						$fieldOperation = "!=";
					break;
					case "in":
						// todo. confirm
						$fieldOperation = "in";
					break;
					case "ni":
						// todo. confirm
						$fieldOperation = "not in";
					break;
					case "bw":
						$fieldOperation = "like_";
					break;
					case "bn":
						// todo. confirm
						$fieldOperation = "not like_";
					break;
					case "ew":
						$fieldOperation = "_like";
					break;
					case "en":
						// todo. confirm
						$fieldOperation = "not _like";
					break;
					case "cn":
						$fieldOperation = "like";
					break;
					case "nc":
						// todo. confirm
						$fieldOperation = "not like";
					break;
					default:
					$fieldOperation = "";
					break;
				}
				$params[$fieldOperation][$fieldName] = $fieldData;
			}
			//echo print_r($params)."<BR><BR>";
		}

		return $params;
	}

	// 로그 파일 생성 (년/월 로 디렉토리 생성됨)
	function logWrite($filepath, $logdata, $filename='') {
		$path = APP_PATH."/logdata";
		$ymd = date("Ymd", time());
		$filename = (strlen($filename) > 0) ? '_'.$filename : '';

		$log_dir_filepath = $path."/".$filepath;

		if(!is_dir($path."/".$filepath)) { 
			@mkdir($path."/".$filepath, 0777, true);
			@chmod($path."/".$filepath, 0777);
		}
		if(!is_dir($log_dir_filepath.'/'.date('Y'))) { 
			mkdir($log_dir_filepath.'/'.date('Y'), 0777, true);
			chmod($log_dir_filepath.'/'.date('Y'), 0777);
		}
		if(!is_dir($log_dir_filepath.'/'.date('Y').'/'.date('m'))) { 
			@mkdir($log_dir_filepath.'/'.date('Y').'/'.date('m'), 0777, true);
			@chmod($log_dir_filepath.'/'.date('Y').'/'.date('m'), 0777);
		}


		$log_dir_filepath = $path."/".$filepath."/".date('Y')."/".date('m');

		$file_name_log = $log_dir_filepath."/".$ymd.$filename.".log";
echo $file_name_log;

		$filep = fopen("$file_name_log","a");


		$log_content = "=========== " . date("Y-m-d H:i:s") . " ==========\n";
		$log_content .= $logdata."\n";
		$log_content .= "=========================================\n\n\n";

		fputs($filep, "$log_content");
		fclose($filep);
		@chmod($file_name_log, 0777);
	}


	function getDirYYMM($base_dir) {
		$path = $base_dir;
		$ymd = date("Ymd", time());

		if(!is_dir($path)) { 
			@mkdir($path, 0777, true);
			@chmod($path, 0777);
		}
		if(!is_dir($path.'/'.date('Y'))) { 
			@mkdir($path.'/'.date('Y'), 0777, true);
			@chmod($path.'/'.date('Y'), 0777);
		}
		if(!is_dir($path.'/'.date('Y').'/'.date('m'))) { 
			@mkdir($path.'/'.date('Y').'/'.date('m'), 0777, true);
			@chmod($path.'/'.date('Y').'/'.date('m'), 0777);
		}

		$log_dir_filepath = $path."/".date('Y')."/".date('m');
		return $log_dir_filepath;
	}




	public function rmdirAll($dir) {
		$dirs = dir($dir);
		while(false !== ($entry = $dirs->read())) {
			if(($entry != '.') && ($entry != '..')) {
				if(is_dir($dir.'/'.$entry)) {
					rmdirAll($dir.'/'.$entry);
				} else {
					@unlink($dir.'/'.$entry);
				}
			}
		}
		$dirs->close();
		@rmdir($dir);
	}

	// CURL 함수
	function restful_curl($url, $param='', $method='POST', $timeout=10) {
		$method = (strtoupper($method) == 'POST') ? '1' : '0';
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_POST, $method);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $param);
		curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_ENCODING, "gzip");
		$result = curl_exec($ch);
		curl_close($ch);

		return $result;
	}

    function get_sync_text($ticker, $lastpricedate=0) {
        $item = $this->get_sync_info($ticker);
        //if(sizeof($item > 0)) {
        if(sizeof($item) > 0) {
            if($item['diff_price'] > 0) {
                $item['diff_price'] = '+ '.$item['diff_price'];
            }
            if($item['diff_rate'] > 0) {
                $item['diff_rate'] = '+'.$item['diff_rate'];
            }
            $item['diff_rate'] .= '%';
        }
        return $item;
    }

    function get_sync_info($ticker, $lastpricedate=0) {
        $item = unserialize(file_get_contents(str_replace('hoon','datahero',WEBDATA).'/current_data/'.$ticker));
        if( ! (is_array($item) && isset($item['updated_at']))) {
            return array();
        }

        if(date('Ymd',$item['updated_at']) <= date('Ymd', strtotime($lastpricedate))) { 
            if(filemtime(str_replace('hoon','datahero',WEBDATA).'/current_data/'.$ticker) < time()-3600) {
                // 1시간 이내 생성된 싱싱한 놈이 아니면 skip
                return array();
            }

            if($item['updated_at'] < time()-1800) {
                // 30분 이내 시점의 주가가 아니면 skip
                return array();
            }
        }

        $item['last_price'] = sprintf('%.2f', $item['last_price']);
        $item['diff_rate'] = sprintf('%.2f', $item['diff_rate']);
        $item['diff_price'] = sprintf('%.2f', $item['diff_price']);
        return $item;
    }

	function password_validate($pw){
		$pw = strtolower($pw);
		if((preg_match('/\d/',$pw) == true && preg_match('/[a-z]/',$pw) == true) == false) {
			return FALSE;
		}
		if(strlen($pw) < 8) {
			return FALSE;
		}
		return TRUE;
	}


	public function get_field_names($table){
		$field = $this->ci->db->list_fields($table);
		return $field;
	}

	public function table_exists($table){
		if($this->ci->db->table_exists($table)){
			return TRUE;
		} else{
			return FALSE;
		}
	}

	public function get_field_data($table){
		$data = $this->ci->db->field_data($table);
		return $data;
	}



	public function replace_search_text($string){
		$replace_string = '';
		$replace_string = trim(strip_tags($string));
		$replace_string = str_replace("'", " ", $replace_string);
		$replace_string = str_replace('"', " ", $replace_string) ;
		$replace_string = str_replace('@', " ", $replace_string);
		$replace_string = str_replace('*', " ", $replace_string);
		$replace_string = str_replace('(', " ", $replace_string);
		$replace_string = str_replace(')', " ", $replace_string);
		$replace_string = str_replace('.', " ", $replace_string);
		$replace_string = str_replace('-', " ", $replace_string);
		$replace_string = str_replace('’', " ", $replace_string);
		$replace_string = str_replace("\\", " ", $replace_string);

		return $replace_string;
	}


	/* 
	   어드민 히스토리 기록
	   log_array example :::
	   array(
	   'params'=>array() or string,
	   'target'=>array() or string,
	   ...
	   );

	 */
	public function write_history_log($sess, $act_mode, $act_key, $log_array, $table) {
		$loginid = '';
		$name = '';
		if(isset($sess['login_id'])) $loginid = $sess['login_id'];
		if(isset($sess['name'])) $name = $sess['name'];

		$serialize = serialize($log_array);

		$params = array();
		$params['h_loginid'] = $loginid;
		$params['h_name'] = $name;
		$params['h_act_mode'] = $act_mode;
		$params['h_act_key'] = $act_key;
		$params['h_serialize'] = $serialize;
		$params['h_act_table'] = $table;

		$this->ci->load->model(DBNAME.'/history_tb_model');

		$reval = $this->ci->history_tb_model->doInsert($params)->isSuccess();

		return $reval;
	}

	public function write_login_log($strUserId) {
		if($strUserId) {
			$params = array();
			$params['ll_userid'] = $strUserId;
			$params['ll_ip'] = $_SERVER['REMOTE_ADDR'];
			$params['ll_date'] = date('Y-m-d H:i:s');
		
			$this->ci->load->model(DBNAME.'/login_log_tb_model');

			$reval = $this->ci->login_log_tb_model->doInsert($params)->isSuccess();
			return $reval;
		}
		else {
			return;
		}
	}

    public function get_valuation_stars_text($score=0) {
        $score_text = '';
		if($score==1) {
            $score_text = '저평가';
		}
		else if($score==3) {
            $score_text = '적정가';
		}
		else if($score==5){
            $score_text = '고평가';
		}
		else {
            $score_text = '';
		}

        return $score_text;
    }

	public function set_pricepoint($value, $type) {
		if($type=='1') {
			$val = explode('.', $value);
			$ret = $val[0].'.<b>'.$val[1].'</b>';
		}
		else {
			$ret = str_replace('%','<b>%</b>',$value);
		}
		return $ret;
	}

	/*
	private $XDigitsChars = array(
			'M','Z','N','H','X',
			'K','D','G','J','L',
			'V','C','S','U','A',
			'Q','R','P','T','W',
			'B','Y','I','O'
			);
	public function getUserCode($usernum) {// 사용자 프로모션 코드. user_tb.u_id 를 인자로 넘기면 해당 사용자 코드를 반환.
		if(strlen($usernum) < 6) {
			$usernum = sprintf('%06d', $usernum);
		}

		$tail = substr($usernum, -3);
		$num = substr($usernum, 0, strlen($usernum)-3);

		$xdigits_chars_count = sizeof($this->XDigitsChars);

		$res = $this->createXDigits($num);
		return $res.$tail;
	}
	public function createXDigits($num, $start_idx=0, $jump=5, $dic=array()) {
		if(sizeof($dic) <= 0) {
			$dic = $this->XDigitsChars;
		}

		$len = sizeof($dic);

		$key  = $start_idx;//시작숫자 다양하도록
		$jump = $jump;//자리수마다 1이 의미하는 알파멧이 바뀌도록. $term 에 더해짐. 
		$term = 0;

		for($i = 1 ; $i < 6 ; $i++) {

			$temp_dic = array();

			for($j = 0 ; $j < $len ; $j++) {
				$temp_dic[] = $dic[($key + $j + $term) % $len];
			}
			${'dic'.$i} = $temp_dic;
			$term += $jump;
		}

		$calc = $num;
		$gen_num_arr = array();

		do { //$num 을 $len진수로 변환.
			$gen_num = floor($calc / $len);
			$gen_num_tail = $calc % $len;

			$gen_num_arr[] = $gen_num_tail;
			$calc = $gen_num;

		}while($calc >= $len);

		$gen_num_arr[] = $calc;
		$res_arr = array();

		$i = (sizeof($gen_num_arr) <= 3) ? 3 : sizeof($gen_num_arr); //이건 4자리로 늘어나면 4자리 출력하는 부분. 함승목.
		//$i = 3; //이건 무조건 세자리. 함승목.

		$var_i = 1;
		for($i-- ; $i >= 0 ; $i--) {
			$dic_idx = isset($gen_num_arr[$i]) ? $gen_num_arr[$i] : 0;
			$res_arr[] = ${'dic'.$var_i++}[intval($dic_idx)];
		}

		// shake
		$temp = $res_arr[sizeof($res_arr)-1];
		$res_arr[sizeof($res_arr)-1] = $res_arr[1];
		$res_arr[1] = $temp;

		return implode('', array_reverse($res_arr));
	}
	*/

}
?>
