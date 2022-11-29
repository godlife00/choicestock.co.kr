<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Maintool {

    protected $data = array(                                                       
        'type' => null,
        'nation' => null,
        'available_types' => array(


                /* Comment Start ==========>
                array(
                    'key' => 'mobile_brand_keywords',              // 메인툴 생성 파일(~.info) 
                    'name' => 'Brand_Keywords',             // adminpanel 왼쪽탭명 
                    'template' => 'maintool_template',      // 기본 템플릿(maintool_template) / 커스텀 템플릿 가능

                    // 기본 템플릿(maintool_template)일때, 아래 설정 가능

                    'option' => array(

                        // WIDGET type 설정
                        'tab' => array(
                            'is_use' => false,              // WIDGET 사용유무 
                            'is_category' => false,         // WIDGET 타이틀 CATEGORY로 설정 유무
                            'category' => ''                // CATEGORY 설정시, 해당 카테고리 ex.'MAINMENU'
                        ),

                        // TEXT type 설정
                        'text' => array(
                            'is_use' => true,               // TEXT 사용유무
                            'title' => 'Brand Keywords',    // 해당 영역 타이틀
                            'name' => true,                 // name 사용유무 * 필수 true
                            'url' => true,                  // url 사용유무
                            'target' => true,               // target 사용유무
                            'default_count' => 2,           // 기본 노출 row수
                            'add' => true,                  // row 추가 버튼
                            'del' => true                   // del 추가 버튼
                            'comments' => '
                                <ul>
                                    <li><b>[1]</b> 코멘트가 노출됩니다.</li>
                                    <li><b>[2]</b> 코멘트가 노출됩니다.</li>
                                </ul>'                      // 코멘터리 
                        ),

                        // BANNER type 설정
                        'banner' => array(
                            'is_use' => false,              // BANNER 사용유무
                            'title' => '',                  // 해당 영역 타이틀
                            'url' => false,                 // url 사용유무
                            'target' => false,              // target 사용유무
                            'map' => false,                 // map 사용유무
                            'date' => false,                // date 사용유무 (start_date ~ end_date)
                            'default_count' => 1,           // 기본 노출 row수
                            'add' => false,                 // row 추가 버튼
                            'del' => false                  // del 추가 버튼
                            'comments' => '
                                <ul>
                                    <li><b>[1]</b> 코멘트가 노출됩니다.</li>
                                    <li><b>[2]</b> 코멘트가 노출됩니다.</li>
                                </ul>'                      // 코멘터리 
                        ),

                        // ITEMS type 설정
                        'items' => array(
                            'is_use' => false,              // ITEMS 시용유무
                            'title' => '',                  // 해당 영역 타이틀
                            'col' => 5,                     // 아이템 col 수
                            'row' => 2,                     // 아이템 row 수
                            'add' => true,                  // row 추가 버튼
                            'del' => true,                  // del 추가 버튼
                            'comments' => '
                                <ul>
                                    <li><b>[1]</b> 코멘트가 노출됩니다.</li>
                                    <li><b>[2]</b> 코멘트가 노출됩니다.</li>
                                </ul>'                      // 코멘터리 
                        )
                    )
                ),
                <========== Comment End */
        )
    );

    protected $DISPLAY_PATH;
    protected $DISPLAY_URL = '/webdata/display';

                                                    

    public function __construct($params=null){
        $this->CI =& get_instance();
        $this->CI->load->helper(array('form', 'url'));

        $this->DISPLAY_PATH = APP_PATH.$this->DISPLAY_URL;


        // *** ADMIN에서 라이브러리 호출시 @params를 사용한다.
        // --- /controllers/adminpanel/manage_display()
        // --- /controllers/adminpanel/manage_display_write()
        $nation = '';
        if(is_null($params) === false) {
			if(is_string($params)) {
				$params = array('type' => $params);
			}
			if(strlen($params['type']) > 0) {
				$type = $params['type'];
				$this->setData($type);
			}

			if(isset($params['nation']) && strlen($params['nation']) > 0) {
                $nation = $params['nation'];
            }
        }else {
        // SHOPVIEW에서 고객이 선택한 COOKIE 값을 참조하여 호출
            $nation = isset($_COOKIE['lang']) ? $_COOKIE['lang'] : '';
        }

	    $this->setNation($nation);
    }

    public function getTypes() {
        return $this->data['available_types'];
    }

    public function setData($type) {
        if($this->_check_available_type($type)) {
			$this->data['type'] = $type;
		}
		return $this;
    }
  
    public function setNation($nation) {
	    $this->data['nation'] = $nation;

        if(strlen($nation) > 0 && strtolower($nation) != strtolower(NATION)) {
            $this->DISPLAY_PATH = DISPLAY_PATH.'/'.strtolower($nation);
            $this->DISPLAY_URL = $this->DISPLAY_URL.'/'.strtolower($nation);

            if(@mkdir($this->DISPLAY_PATH, 0755)) { 
                if(is_dir($this->DISPLAY_PATH)) { 
                    @chmod($this->DISPLAY_PATH, 0755); 
                } 
            }
        }else {
            $this->DISPLAY_PATH = DISPLAY_PATH;
            $this->DISPLAY_URL = $this->DISPLAY_URL;
        }
    }


    public function openRegisterFile($strip_tab=true, $mode='') {

        $type = $this->data['type'];
        $this->_check_available_type($type);

        $maintool_file = $this->DISPLAY_PATH.'/'.$type.'.info';
        $info_data = null;
        if(file_exists($maintool_file) === true) {
            $info_data = array(file_get_contents($maintool_file));
        }else {

            if($mode != 'admin') {
                // 해당 info 파일이 없을때, DEFAULT info 파일에서 가져온다.
                $default_file = DISPLAY_PATH.'/'.$type.'.info';
                if(file_exists($default_file) === true) {
                    $info_data = array(file_get_contents($default_file));
                }else {
                    //show_error('info file does not exist.');
                    return $this->_returnBlankOption();
                }
            }else {
                return $this->_returnBlankOption();
            }
        }

        if(is_array($info_data) === false || sizeof($info_data) != 1) {
            show_error('data does not exist in info file.');
        }

        $result_data = unserialize($info_data[0]);

        $options = $this->getOption();
        $use_tab = $options['tab']['is_use'];
        if($use_tab == false && $strip_tab == true) {
            $result_data = $result_data[0];
        } 
        
        return $result_data;
    }

    private function _returnBlankOption() {
        $options = $this->getOption();
        if($options['tab']['is_use'] == true) {
            return array();
        } else {
            $result_data = array();
            foreach(array_keys($options) as $key) {
                if($key == 'tab') {
                    continue;
                }
                if($options[$key]['is_use'] == true) {
                    $result_data[$key] = array();
                }
            }
            return $result_data;
        }
    }


    public function getOption() {
        $type = $this->data['type'];
        $this->_check_available_type($type);

        $maintool_types = $this->CI->common->getDataByPK($this->data['available_types'],'key');
        return $maintool_types[$type]['option'];
    }


    // info file write
    public function doRegisterFile($filedata) {
        $type = $this->data['type'];
        $this->_check_available_type($type);
        
        $maintool_file = $this->DISPLAY_PATH.'/'.$type.'.info';

        // 입력할 데이터 유효성 체크
        if(unserialize($filedata) === false) {
            show_error('Contents validate error - unserialize fail');
            return false;
        }
        
        // 기존 메인툴 데이터 백업
        $prev_file_bak = '';
        if(is_file($maintool_file)) {
            $prev_file_bak = file_get_contents($maintool_file);
        }
        
        // 신규 데이터 등록 실패 시, 기존 데이터 복원 
        if(file_put_contents($maintool_file, $filedata) === false) {
            if(unserialize($prev_file_bak) !== false) {
                file_put_contents($maintool_file, $prev_file_bak);
            }
            show_error('Fail to write info_file');
            return false;
        }
        
        // 입력된 요소 동치가 아니면 기존 데이터 복원
        if(unserialize($filedata) !== unserialize(file_get_contents($maintool_file))) {
            if(unserialize($prev_file_bak) !== false) {
                file_put_contents($maintool_file, $prev_file_bak);
            }
            show_error('Fail to write info_file');
            return false;
        }

        $this->CI->load->model('solution/admin_setting_tb_model');
        $this->CI->admin_setting_tb_model->deleteContentCache('mobile', 'all');
        
        return true;
    }


    // (다중)이미지 파일 업로드시 return :: web image path
    public function doUpload($_FILES, $field) {
        $type = $this->data['type'];
        $this->_check_available_type($type);

        $display_path = '/webdata/display';

        $files = $_FILES;
        $cpt = count($_FILES[$field]['name']);

        $result_data = array();
        for($i=0; $i<$cpt; $i++) {

            if(strlen($files[$field]['name'][$i]) <= 0 && $files[$field]['error'][$i] != 0) continue;

            $_FILES[$field]['name']= $files[$field]['name'][$i];
            $_FILES[$field]['type']= $files[$field]['type'][$i];
            $_FILES[$field]['tmp_name']= $files[$field]['tmp_name'][$i];
            $_FILES[$field]['error']= $files[$field]['error'][$i];
            $_FILES[$field]['size']= $files[$field]['size'][$i];    


            $config = array();
            $config = $this->_set_upload_options();
            $config['file_name'] = $type.'_'.$i.'.jpg';
            $this->CI->load->library('upload', $config);
            $this->CI->upload->initialize($config);


            if(file_exists($this->DISPLAY_PATH.'/'.$config['file_name'])) {
                unlink($this->DISPLAY_PATH.'/'.$config['file_name']);
            }

            if (!$this->CI->upload->do_upload($field)){
                $error = array('error' => $this->CI->upload->display_errors());
                show_error($error['error']);
            }else{
                $data = array('upload_data' => $this->CI->upload->data());
                //echo print_r($data)."<BR><BR>";
                $result_data[$i] = $display_path.'/'.$data['upload_data']['file_name'];
            }
        }
        return $result_data;
    }



    /*  
        이미지 순서 변경을 위해 [IMG_TEMP_PATH]에서 복사후, 
        RENAME 파일명에 '_temp'를 붙여 중복된 파일 RENAME 발생을 하지 않게함.
        위젯의 foreach문을 끝내고 uploadFileRemoveTemp()를 싱행시켜 파일명에 '_temp' 제거
    */
    public function doUploadForPath($image_filename, $orin_no=0, $new_no=0) {
        $type = $this->data['type'];
        $this->_check_available_type($type);

        $result_data = array();

        $dirs = dir($this->DISPLAY_PATH);
        while(false !== ($entry = $dirs->read())) {
            if(($entry != '.') && ($entry != '..')) {
                $ext = substr(strrchr($entry, '.'), 1); 
               
                $filename = $type.'_'.$orin_no.'_';
                if(
                    $ext != 'info' && 
                    strpos($entry, $filename) === 0 &&
                    strpos($entry, '_temp') === false 
                ) {
                    @rename($this->DISPLAY_PATH.'/'.$entry, IMG_TEMP_PATH.'/'.$entry);
                }
            }
        }

        foreach($image_filename as $key=>$image) {
            if(strlen($image) <= 0) {
                $result_data[$key]['file'] = '';
                $result_data[$key]['path'] = '';
            }else {
                $filename = $type.'_'.$new_no.'_'.$key.'.jpg';
                $temp_file = $type.'_'.$new_no.'_'.$key.'_temp.jpg';

                if(strpos($image, IMG_TEMP_PATH) === 0) {
                    rename($image, $this->DISPLAY_PATH.'/'.$temp_file);
                }else {
                    rename(IMG_TEMP_PATH.'/'.$image, $this->DISPLAY_PATH.'/'.$temp_file);
                }
                $result_data[$key]['file'] = $filename;
                $result_data[$key]['path'] = $this->DISPLAY_URL.'/'.$filename;
            }
        }
        return $result_data;
    }


    // doUploadForPath() 에서 업로드된 파일명에서 '_temp' 문자열 제거
    public function uploadFileRemoveTemp() {
        $type = $this->data['type'];
        $this->_check_available_type($type);

        $dirs = dir($this->DISPLAY_PATH);
        while(false !== ($entry = $dirs->read())) {
            if(($entry != '.') && ($entry != '..')) {
                $ext = substr(strrchr($entry, '.'), 1); 
               
                $filename = $type.'_';
                if($ext != 'info' && strpos($entry, $filename) === 0) {
                    @rename($this->DISPLAY_PATH.'/'.$entry, $this->DISPLAY_PATH.'/'.str_replace('_temp', '', $entry));
                }
            }
        }
    }



    private function _set_upload_options() {
        $options = array();
        $options['upload_path'] = $this->DISPLAY_PATH;
        //$options['allowed_types'] = 'gif|jpg|png|jpe|jpeg';
        $options['allowed_types'] = '*';

        return $options;
    }


    private function _check_available_type($type) {
        $is_validate = false;
        foreach($this->data['available_types'] as $value) {
            if($value['key'] == $type) {
                $is_validate = true;
				break;
            }
        }
        if($is_validate === false) {
            show_error('Available key does not exist.');
        }
		return $is_validate;
    }


    // 등록될 type 별 이미지 삭제
    public function rm_type_image() {

        $type = $this->data['type'];
        $this->_check_available_type($type);

        $dirs = dir($this->DISPLAY_PATH);
        while(false !== ($entry = $dirs->read())) {
            if(($entry != '.') && ($entry != '..')) {
                $filename = substr($entry, 0, strrpos($entry, '.')); 
                $ext = substr(strrchr($entry, '.'), 1); 
                if($ext != 'info' && strpos($entry, $type) === 0) {
                    //echo $entry."<BR>";
                    @unlink($this->DISPLAY_PATH.'/'.$entry);
                }
            }
        }
    }


    // 배열 검사 하여 빈 주소는 unset 시킨다
    public function setInputArray ($array) {
        $buffer = Array();
        if (true === is_array($array) && sizeof($array) != 0) {
            for ($i=0; $i < sizeof($array); $i++) {
                if (strlen(trim($array[$i])) != 0) {
                    array_push($buffer, $array[$i]);
                }
            }
            return $buffer;
        }
        return $array;
    }
}
