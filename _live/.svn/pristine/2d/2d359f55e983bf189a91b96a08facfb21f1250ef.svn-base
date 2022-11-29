<?php
/*
Database 내 테이블(들) 대응 elasticsearch index / documentType 제작 툴 개발

사용방법 : 


*********************************************
*       ./elastic_syncer db명 테이블명 [scheme_create | scheme_apply | change_alias | sync]
*********************************************

@ mysql table scheme 에 매칭되는 인덱스 맵핑json 만들기 (DBName-TableName-yyyymmdd 인덱스에 TableName 도큐먼트타입을 가진 맵핑 생성됨)
=>  ./elastic_syncer db명 테이블명 scheme_create

@ 인덱스 생성 및 맵핑 적용
=>  ./elastic_syncer db명 테이블명 scheme_apply

@ 생성한 인덱스에 mysql 데이터 밀어넣기  (DBName-TableName-yyyymmdd/TableName 에 저장됨)
=>  ./elastic_syncer db명 테이블명

@ 인덱스 Alias 설정. (기등록된 Alias있으면 제거됨.) (DBName-TableName 으로. 시간버전 posfix 떼어낸 Alias 생성)
=>  ./elastic_syncer db명 테이블명 change_alias

@ alias명으로 현 데이터 전체 재저장(sync)
=>  ./elastic_syncer db명 테이블명 sync

2018.10.17. 함승목
*/ 



// 실섭 / 개발섭 구분 IS_REAL_SERVER, 엘라스틱 HOST 등 상수 정의
$is_real_server = false;
if(strpos(realpath(dirname(__FILE__)), '/home/httpd/') === 0) { 
    $is_real_server = true;
}

define('IS_REAL_SERVER', $is_real_server);      // 실서버 여부


define('ELASTIC_HOST', 'http://localhost:9200');  // 엘라스틱서치 서버 호스트





if(strlen($_SERVER['REMOTE_ADDR']) > 0 && $_SERVER['REMOTE_ADDR'] != '127.0.0.1') {
	die('<h1>Bad Request</h1>');
}




// 인덱스별 데이터베이스 연결 정보 정의. 다중 정의 가능.
$db = array();
$db['taillist'] = array(
        'hostname' => 'localhost',      // db host
        'username' => 'taillist',        // db user ID
        'password' => 'dbpassword',    // db user Password
        'database' => 'taillist',    // 커맨드 실행시 첫번째 파라메터가 $db['xxxx']['database'] 에 들어 있는 값이어야 함.
);


// 엘라스틱 구성 테이블 구성 정의

$elastic_tables = array();

/*
$elastic_tables['elasitc_user_tb'] = array(
    'query'             => 'select * from user_tb',    // 데이터 리스트 쿼리. join문도 가능. (겹치는 필드는 alias로 안겹치게.)
    'tables'            => array('user_tb'),           // 쿼리문에서 다루고있는 테이블명들.
    'unserialize'       => array(),
    'skip_fields'       => array(),
    'strip_tags'        => array(),
    'pk_field_name'     => 'u_id',                      // 쿼리 데이터 중 PK값. 엘라스틱서티 데이터의 pk로 사용됨.
);


ex) 사용법

엘라스틱용 스키마 json 생성 
>> php ./elastic_syncer.php taillist elastic_user_tb scheme_create

인덱스 생성, 맵핑 json(스키마) 적용
>> php ./elastic_syncer.php taillist elastic_user_tb scheme_apply

mysql 테이블 데이터 일괄 엘라스틱 인덱스에 밀어넣기
>> php ./elastic_syncer.php taillist elastic_user_tb

인덱스명에 오늘날짜(-yyyymmdd) 없는 이름으로 alias 명 적용하기
>> php ./elastic_syncer.php taillist elastic_user_tb change_alias

수 일 후 전체 데이터를 mysql테이블 데이터로 전체갱신 하고싶을때
>> php ./elastic_syncer.php taillist elastic_user_tb sync
*/






function getDataType($dataType) {

  	$arrType = array ('enum', 'set', 'decimal', 'numeric');
  	$tmpColumnType = explode('(', $dataType         );
  		if (count($tmpColumnType) > 1) {
  			$tmpColumnSize = explode(')', $tmpColumnType[1] );
  			$tmpSigned     = explode(' ', $tmpColumnSize[1] );
  		} else {
  			$tmpColumnSize[0] = null;
  		}
  		foreach($arrType AS $value) {
  			if ($value == $tmpColumnType[0]) {
  				$rtn = "array (".$tmpColumnSize[0].")";
  				$tmpColumnSize[0] = '';
  			}
  		}

  		if (!isset($rtn)) {
  			$rtn = "''";
  		}
  		if (isset($tmpSigned[1])) {
  			$tempSigned = 1;
  		} else {
  			$tempSigned = null;
  		}

  		return $reseult = array(
  			'type' => $tmpColumnType[0],
  			'size' => $tmpColumnSize[0],
  			'value'  => $rtn,
  			'signed' => $tempSigned                
  			);
}
function prettyPrint( $json )
{
    $result = '';
    $level = 0;
    $in_quotes = false;
    $in_escape = false;
    $ends_line_level = NULL;
    $json_length = strlen( $json );

    for( $i = 0; $i < $json_length; $i++ ) {
        $char = $json[$i];
        $new_line_level = NULL;
        $post = "";
        if( $ends_line_level !== NULL ) {
            $new_line_level = $ends_line_level;
            $ends_line_level = NULL;
        }
        if ( $in_escape ) {
            $in_escape = false;
        } else if( $char === '"' ) {
            $in_quotes = !$in_quotes;
        } else if( ! $in_quotes ) {
            switch( $char ) {
                case '}': case ']':
                    $level--;
                    $ends_line_level = NULL;
                    $new_line_level = $level;
                    break;

                case '{': case '[':
                    $level++;
                case ',':
                    $ends_line_level = $level;
                    break;

                case ':':
                    $post = " ";
                    break;

                case " ": case "\t": case "\n": case "\r":
                    $char = "";
                    $ends_line_level = $new_line_level;
                    $new_line_level = NULL;
                    break;
            }
        } else if ( $char === '\\' ) {
            $in_escape = true;
        }
        if( $new_line_level !== NULL ) {
            $result .= "\n".str_repeat( "\t", $new_line_level );
        }
        $result .= $char.$post;
    }

    return $result;
}
function get_answer($question, $default='', $condition=array()) {
		echo $question;
		if(strlen($default) > 0) {
			echo ' [Default : '.$default.'] : ';
		}
		$fp = fopen('/dev/stdin', 'r');
		$answer = trim(fgets($fp, 255));
		
		if(strlen($default) > 0 && sizeof($condition) > 0) {
			$condition[] = '';
		}
		if(is_array($condition) && sizeof($condition) > 0 && in_array($answer, $condition) == false) {
			echo "\n 입력값이 올바르지 않습니다. 다시 입력하세요 \n\n";
			$answer = get_answer($question, $default, $condition);
		}
		

		if(strlen($default) > 0 && strlen($answer) <= 0) {
			$answer = $default;
		}

		return trim($answer);
}

if (sizeof($argv) >= 2 && sizeof($argv) <= 4) {
    $database = $argv[1];

    $db_info = array();
    foreach($db as $key => $value) {
        if($db[$key]['database'] == $database) {
            $db_info = $value;
            break;
        }
    }

    if(sizeof($db_info) <= 0) {

        echo "\n Error : \n
        {$database} 데이터베이스를 찾지 못했습니다.
        ";
        exit;
    }

    $conn = mysql_connect($db_info['hostname'], $db_info['username'], $db_info['password']);
    mysql_select_db($db_info['database']);
    $result = mysql_query("show tables");
    $tables = array();
    while($row = mysql_fetch_array($result)) {
        $tables[] = $row[0];
    }


    $doc_type = '';
    if(sizeof($argv) >= 3) {
        $doc_type = $argv[2];
        if( ! isset($elastic_tables[$doc_type])) {
            echo "\n Error : \n
            \$elastic_tables['{$doc_type}'] 도큐먼트 타입 정의을 찾지 못했습니다.
            ";
            exit;
        }
        $tables = $elastic_tables[$doc_type]['tables'];
    }



    $allow_scheme_modes = array('scheme_create', 'scheme_apply', 'change_alias', 'sync');

    $scheme_mode = '';
    if(sizeof($argv) >= 4) {
        $scheme_mode = $argv[3];
        if( ! in_array($scheme_mode, $allow_scheme_modes)) {
            echo "\n Error : \n
            scheme mode Error [{$scheme_mode}] : 테이블 최초 작업 모드 입력시 [ ".implode(' or ', $allow_scheme_modes)." ] 중 하나로 입력하세요!
            ";
            exit;
        }
    }



    $table_info_array = array();
    foreach($tables as $table) {
        $result = mysql_query("desc `{$table}`");

        while($desc = mysql_fetch_object($result)) {
            $dataType = getDataType($desc->Type);
            $table_info_array[$table][$desc->Field] = array_merge($dataType, array(
                        'null'		=> $desc->Null,
                        'key'		=> $desc->Key,
                        'default'	=> $desc->Default,
                        'extra'		=> $desc->Extra
                        ));
        }
    }

    foreach($elastic_tables as $key => $setting) {
        if(strlen($doc_type) > 0 && $key != $doc_type) continue;

    	foreach($setting['tables'] as $table) {
			foreach($table_info_array[$table] as $f => $v) {
        		$table_info_array[$key][$f] = $table_info_array[$table][$f];
			}
		}
    }

    //mysql_select_db('information_schema');
    mysql_query("/*!40101 set names utf8 */;");


    // $elastic_tables는 _applications/config/database.php 하단에 정의함.

    $index_postfix = '-'.date('Ymd');
	if($scheme_mode == 'sync') {
		$scheme_mode = '';
		$index_postfix = '';
	}
    //$index_postfix = date('Ymd', time()-86400);
	$row_data = array('');
    foreach($elastic_tables as $tbl => $setting) {
        if(strlen($doc_type) > 0 && $tbl != $doc_type) continue;

        if(isset($table_info_array[$tbl]) == false) {
            echo $tbl." : 존재하지 않는 테이블\n";
            continue;
        }

        $query = $setting['query'];
        $result = mysql_query($query);
        if(! $result) {
            echo '[Mysql Error - '.mysql_errno().'] '.mysql_error()."\n";
            continue;
        }

        $total_rows = mysql_num_rows($result);
        $current_row = 0;

        while($row = mysql_fetch_object($result)) {
            $row = get_object_vars($row);
            $current_row++;

            // serialize fields unserialize
            if($scheme_mode == '') {
                // 전체 밀어넣을때만 unserial 필드 구성.
                foreach($setting['unserialize'] as $f) {
                    if(isset($row[$f])) {
                        if(strlen($row[$f]) > 5) {
                            $set_field_data = @unserialize($row[$f]);
                            if( ! is_array($set_field_data)) {
                                $set_field_data = array();
                            }
                        } else {
                            $set_field_data = array();
                        }
                        $row[$f.'_unserial'] = $set_field_data;
                    }
                }
            }

            // skip fields unset
            foreach($setting['skip_fields'] as $f) {
                if(isset($row[$f])) unset($row[$f]);
            }

            // strip_tags
            foreach($setting['strip_tags'] as $f) {
                if(isset($row[$f])) $row[$f.'_strip_tags'] = strip_tags($row[$f]);
            }

            // 첫번재 필드가 AutoIncrement PK Field임.
            $pk = $setting['pk_field_name'];
            $pknum = $row[$pk];

            $cmd = 'curl -XPOST '.ELASTIC_HOST."/{$database}-{$tbl}{$index_postfix}/{$tbl}/{$pknum} -H 'Content-type: application/json' -d ".escapeshellarg(json_encode($row));

            if(strlen($scheme_mode)) {
                switch($scheme_mode) {
                    case 'scheme_create' :

                        require_once dirname(__FILE__).'/TemplateHam.php';

                        $tpl = new TemplateHam();
                        $template = "elastic_mapping_template";
                        $tpl->tp_read($template);

                        $tpl->tp_dynamic('same_type');
                        $tpl->tp_dynamic('text');
                        $tpl->tp_dynamic('date');
                        $tpl->tp_dynamic('scaled_float');

                        $table_info = $table_info_array[$tbl];
                        //print_r($table_info);exit;
                        $cnt = 0;
                        $size = sizeof($table_info);

                        $map = array(
                                    'int'       => 'long',
                                    'smallint'  => 'integer',
                                    'tinyint'   => 'integer',
                                    'long'      => 'long',

                                    'float'     => 'float',
                                    'double'    => 'double',
                                    'decimal'   => 'double',

                                    'enum'      => 'keyword',
                                    'varchar'   => 'text',
                                    'char'      => 'text',
                                    'text'      => 'text',
                                    'mediumtext'=> 'text',
                                    'longtext'  => 'text',

                                    'date'      => 'date',
                                    'datetime'  => 'date',
                        );


                        $column_size = sizeof($row);
                        foreach($row as $field => $v) {
                            $field_info = $table_info[$field];
                            $ftype = $field_info['type'];

                            if( ! isset($map[$ftype])) {
                                echo "\n\n\n!!!! $ftype 필드타입이 정의되지 않았습니다. 정의 후 재실행 해주세요. \n\n\n\n";
                                exit;
                            }

                            $match_type = $map[$ftype];

                            if($match_type == 'integer') {
                                if($field_info['extra'] == 'auto_increment') {
                                    // auto_increment PK면 long타입으로 승격
                                    $match_type = 'long';
                                } else if($field_info['signed']) {
                                    // unsigned 면 음수범위까지 정수로 사용하기 위함으로 간주. long으로 승격.
                                    $match_type = 'long';
                                }
                            }


                            switch($match_type) {
                                case 'float' :
                                case 'double' :
                                    if($ftype == 'decimal') {
                                        $field_info['size'] = $field_info['value'];
                                    }
                                    if(strlen($field_info['size']) >= 3 && strpos($field_info['size'], ',') > 0) {
                                        // 소수점이 정해진 필드. scaled_float으로 전환.
                                        list($float_scale, $pow) = explode(',',$field_info['size']);
                                        $pow = intval(trim(array_shift(explode(',',$pow))));

                                        $dot_count = pow(10, $pow);

                                        $tpl->tp_set("scaled_float", array(
                                                    "field" => $field,
                                                    "dot_count" => $dot_count,
                                                    ));
                                        $tpl->tp_parse('scaled_float');
                                        echo $field.'   =>  scaled_float'."\n";
                                        break;
                                    }


                                    $tpl->tp_set("same_type", array(
                                                "field" => $field,
                                                "type" => $match_type,
                                                ));
                                    $tpl->tp_parse('same_type');
                                    echo $field.'   =>  '."{$match_type}\n";
                                    break;
                                case 'date' :
                                    $hhmmss = '';
                                    if($ftype == 'datetime') {
                                        $hhmmss = ' HH:mm:ss';
                                    }
                                    $tpl->tp_set("date", array(
                                                "field" => $field,
                                                "hhmmss" => $hhmmss,
                                                ));
                                    $tpl->tp_parse('date');
                                    echo $field.'   =>  date'."\n";
                                    break;
                                case 'text' :
                                    $is_sortable = in_array($ftype, array('varchar', 'char')) ? 'true' : 'false';

                                    $keyword = '';
                                    if($is_sortable == 'true') {
                                        $is_sortable .= ',';
                                        $keyword = '
            "fields": {
                "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                }
            }';
                                    }

                                    $tpl->tp_set("text", array(
                                                "field" => $field,
                                                "is_sortable" => $is_sortable,
                                                "keyword" => $keyword,
                                                ));
                                    $tpl->tp_parse('text');
                                    echo $field.'   =>  text'."\n";
                                    break;
                                default : 
                                    $tpl->tp_set("same_type", array(
                                                "field" => $field,
                                                "type" => $match_type,
                                                ));
                                    $tpl->tp_parse('same_type');           
                                    echo $field.'   =>  '."{$match_type}\n";
                            }

                        }

                        $result = str_replace("\r", '', $tpl->tp_fetch());
                        $result = str_replace("},\n\n    }\n}", "}\n\n    }\n}", $result);
                        file_put_contents(dirname(__FILE__).'/tmp/elastic_schemes/'.$tbl.'.mapping.json', $result);


                        echo "{$database}-{$tbl}{$index_postfix}".' 인덱스 맵핑용 ./tmp/elastic_schemes/'.$tbl.'.mapping.json 파일이 생성되었습니다.'."\n";
                        break;
                        /*
                    case 'scheme_create' :
                        // 인덱스 존재여부 검사 존재시 삭제
                        $rm_index_cmd = 'curl -XDELETE '.ELASTIC_HOST."/{$database}-{$tbl}{$index_postfix}";

                        $result = json_decode(shell_exec('curl '.ELASTIC_HOST."/{$database}-{$tbl}{$index_postfix}/_mapping"), true);
                        if( ! (isset($result['error']) && $result['status'] == '404')) {
                            // 이미 존재하는 인덱스. 삭제
                            echo '기존 인덱스 존재. 삭제! -- ';
                            $result = json_decode(shell_exec($rm_index_cmd), true);
                            if(isset($result['error'])) {
                                echo "실패\n\n\n";
                                print_r($result);
                                exit;
                            }
                            echo "완료\n";
                        }

                        // 인덱스 생성
                        $result = json_decode(shell_exec('curl -XPUT '.ELASTIC_HOST."/{$database}-{$tbl}{$index_postfix}"), true);
                        echo '인덱스 생성!'."\n";
                        print_r($result);
                        echo "\n\n\n";


                        // 1. 데이터 삽입
                        $result = json_decode(shell_exec($cmd), true); 
                        echo '데이터 삽입! : ';
                        print_r($result);
                        $todo_delete = ($result['result'] == 'created') ? true : false;
						if(isset($result['error'])) {
                            shell_exec($rm_index_cmd);

                            echo "스키마 획득을 위한 데이터 insert 실패\n[Error:".$result['status'].'] '.$result['error']['root_cause']['reason']."\n";
                            echo $cmd;
                            echo "\n\n\n";
                            print_r($result);
                            exit;
						}

                        // 맵핑파일 생성
                        $cmd_mapping_view = 'curl '.ELASTIC_HOST."/{$database}-{$tbl}{$index_postfix}/_mapping/{$tbl}?pretty";

                        $result = json_decode(shell_exec($cmd_mapping_view), true);

                        //$mapping_json = json_encode($result->$database->mappings->$tbl, JSON_PRETTY_PRINT); // > php 5.4
                        $mapping_json = prettyPrint(json_encode($result[$database.'-'.$tbl.$index_postfix]['mappings'][$tbl]));

                        echo '맵핑 데이터 조회'."\n";
                        echo $mapping_json;
                        echo "\n\n\n";
                        

                        file_put_contents(dirname(__FILE__).'/tmp/elastic_schemes/'.$tbl.'.mapping.json', $mapping_json);


                        // 원복. 생성한 인덱스 삭제. 
                        //shell_exec($rm_index_cmd);

                        echo "{$database}-{$tbl}{$index_postfix}".' 인덱스 맵핑용 ./tmp/elastic_schemes/'.$tbl.'.mapping.json 파일이 생성되었습니다.'."\n";
                        exit;
                        break;
                    */
                    case 'scheme_apply' :
                        // 인덱스 존재여부 검사
                        $rm_index_cmd = 'curl -XDELETE '.ELASTIC_HOST."/{$database}-{$tbl}{$index_postfix}";

                        
                        $cmd = 'curl '.ELASTIC_HOST."/{$database}-{$tbl}{$index_postfix}/_mapping";
                        $result = json_decode(shell_exec($cmd), true);
                        if( ! (isset($result['error']) && $result['status'] == '404')) {
                            // 이미 존재하는 인덱스. 삭제
                            echo '기존 인덱스 존재. 삭제! -- '."\n";
                            echo $rm_index_cmd."\n\n";
                            $result = json_decode(shell_exec($rm_index_cmd), true);
                            if(isset($result['error'])) {
                                echo "실패\n\n\n";
                                print_r($result);
                                exit;
                            }
                            echo "완료\n";
                        }
                        $cmd = "curl -H 'Content-Type: application/json' -XPUT ".ELASTIC_HOST."/{$database}-{$tbl}{$index_postfix}";
                        shell_exec($cmd);


                        $cmd = "curl -H 'Content-Type: application/json' -XPUT ".ELASTIC_HOST."/{$database}-{$tbl}{$index_postfix}/_mapping/{$tbl} -d @tmp/elastic_schemes/{$tbl}.mapping.json";
                        $result = json_decode(shell_exec($cmd), true);
                        if(isset($result['error'])) {
                            echo "스키마 적용 실패\n[Error:".$result['status'].'] '.$result['error']['root_cause']['reason']."\n";
                            echo $cmd."\n";
                            print_r($result);
                            exit;
                        } 
                        echo 'Result : '."\n";
                        print_r($result);
                        echo "\n\n";
                        break;
                    case 'change_alias' :
                        // 1. 인덱스 존재 검사
                        echo "Alias 로 사용할 명의 테이블이 이미 존재하는지 검사.....\n";
                        $cmd = "curl  ".ELASTIC_HOST."/_aliases";
                        echo $cmd."\n\n";

                        $index_lists = json_decode(shell_exec($cmd), true);


                        if( ! isset($index_lists[$database.'-'.$tbl.$index_postfix])) {
                            print_r($result);
                            echo "\n\n";
                            echo '[ Error! ]'.$database.'-'.$tbl.$index_postfix.' 인덱스가 존재하지 않습니다. scheme_apply 진행 후 수행하세요.';
                            echo "\n\n";
                            exit;
                        }




                        $exist_index_name = '';
                        if(isset($index_lists[$database.'-'.$tbl])) {
                            $exist_index_name = $database.'-'.$tbl;
                            print_r($index_lists);
                            // alias 할 이름이 인덱스로 이미 존재시.
                            echo "\n\nalias Name으로 사용할 {$database}-{$tbl} 이름의 인덱스가 이미 존재합니다. \nalias명으로 존재하는 인덱스를 삭제 후 시도하세요.\n\ncurl -XDELETE ".ELASTIC_HOST."/{$exist_index_name}\n\n";
                            exit;
                        } else {
                            if(sizeof($index_lists["{$database}-{$tbl}{$index_postfix}"]) > 0) {
                                if(sizeof($index_lists["{$database}-{$tbl}{$index_postfix}"]['aliases']) > 0) {
                                    $exist_index_name = array_shift(array_keys($index_lists["{$database}-{$tbl}{$index_postfix}"]['aliases']));
                                }
                            }
                        }
                        echo ' 기존 aliased index Name : '.$exist_index_name."\n\n";



                        if($exist_index_name == "{$database}-{$tbl}") {
                            print_r($index_lists);
                            echo "이미 {$database}-{$tbl}{$index_postfix} 인덱스에 {$database}-{$tbl} alias가 걸려있습니다.\n\n";
                            exit;
                        }

                        // 사용하려는 알리아스를 이미 쓰고있는 인덱스가 있는가 검사
                        $actions = array();
                        $actions['actions'] = array();
                        $action = array();
                        foreach($index_lists as $idxname => $index_alias) {
                            if($idxname == "{$database}-{$tbl}{$index_postfix}") {
                                continue;
                            }
                            if(isset($index_alias['aliases']["{$database}-{$tbl}"])) {
                                $action['remove'] = array(
                                        'index' => $idxname,
                                        'alias' => "{$database}-{$tbl}"
                                );
                                $actions['actions'][] = $action;
                                $action = array();
                                break;
                            }
                        }
                        $action['add'] = array(
                            'index' => $database.'-'.$tbl.$index_postfix,
                            'alias' => $database.'-'.$tbl
                        );
                        $actions['actions'][] = $action;

                        print_r($actions);

                        echo "alias 등록 및 기존 제거 수행!\n";
                        $cmd = 'curl -XPOST -H "Content-type: application/json" '.ELASTIC_HOST."/_aliases -d ".escapeshellarg(json_encode($actions));
                        echo $cmd."\n";
                        $result = json_decode(shell_exec($cmd), true);
                        print_r($result);
                        break;
                }
                exit;
            }
            
			$bulk_data['index'] = array(
				'_index' => $database.'-'.$tbl.$index_postfix,
				'_type'	 => $tbl,
				'_id'	 => $pknum, 
			);
			$row_data[] = json_encode($bulk_data); 
			$row_data[] = json_encode($row);

			if(sizeof($row_data) > 10000) {
				$row_data[] = '';

				file_put_contents(dirname(__FILE__).'/tmp/elastic_schemes/'.$tbl.'.rowdata.json', implode("\n",$row_data));
				$cmd = "curl -H 'Content-Type: application/json' -XPOST ".ELASTIC_HOST."/_bulk --data-binary @".dirname(__FILE__).'/tmp/elastic_schemes/'.$tbl.'.rowdata.json';
				$el_result = json_decode(shell_exec($cmd), true);
				//print_r($el_result);
				
				echo "[ {$tbl} {$current_row} / {$total_rows} ]"."\n";

				$row_data = array('');
			}
        }
		$row_data[] = '';
        
		file_put_contents(dirname(__FILE__).'/tmp/elastic_schemes/'.$tbl.'.rowdata.json', implode("\n",$row_data));

		// bulk insert 실행
		$cmd = "curl -H 'Content-Type: application/json' -XPOST ".ELASTIC_HOST."/_bulk --data-binary @".dirname(__FILE__).'/tmp/elastic_schemes/'.$tbl.'.rowdata.json';
		$el_result = json_decode(shell_exec($cmd));
		
        echo "[ {$tbl} {$current_row} / {$total_rows} ]"."\n";

    }
} else {
			echo <<<MSG

*********************************************
*
*     ./elastic_syncer.php db명 테이블명 [scheme_create | scheme_apply | change_alias | sync]
*
*********************************************


ex) 사용법

엘라스틱용 스키마 json 파일생성 (./tmp/elastic_schemes/ 아래 파일 생성됨. 위치 보존!)
>> php ./elastic_syncer.php taillist elastic_user_tb scheme_create

인덱스 생성, 맵핑 json(스키마) 적용
>> php ./elastic_syncer.php taillist elastic_user_tb scheme_apply

mysql 테이블 데이터 일괄 엘라스틱 인덱스에 밀어넣기
>> php ./elastic_syncer.php taillist elastic_user_tb

인덱스명에 오늘날짜(-yyyymmdd) 없는 이름으로 alias 명 적용하기
>> php ./elastic_syncer.php taillist elastic_user_tb change_alias

수 일 후 전체 데이터를 mysql테이블 데이터로 전체갱신 하고싶을때
>> php ./elastic_syncer.php taillist elastic_user_tb sync


  2018.10.17. 함승목
MSG;
}

