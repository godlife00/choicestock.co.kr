<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');


/*
각 테이블 모델의 부모클래스.
모델 CRUD 가능토록 뼈대구성함.

최종 테이블 모델에서는 __filter(), __validate() 를 알맞게 작성하고,
특수한 DB 데이터 처리 메서드만을 구현한다.

이 부모 모델에서 기본적으로 

[select]
PK를 이용하여 1개의 디비 row를 가져오는 get(),
여러가지 조건검색이 가능한 getList(),
여러가지 조건검색 결과 행 수를 반환하는 getCount(),

[insert]
데이터 저장을 위한 doInsert(),

[update]
PK를 이용하여 1개 디비 row를 수정하는 doUpdate(),
조건검색에 매칭되는 모든 데이터를 수정하는 doMultiUpdate(),

[delete]
PK를 이용하여 1개 디비 row를 삭제하는 doDelete(),
조건검색에 매칭되는 모든 데이터를 삭제하는 doMultiDelete()


메서드들을 구현하였음.



컨트롤러부에서 사용할때는 '디비명/테이블명'을 로드하여 아래 예시와 같이 사용.

============================== 예시 ==========================================
[ get() ]
$this->load->model('shopnote2/member');

if($this->member->get(11)->isSuccess() == false) {
	echo $this->member_getErrorMsg(); // 없는 PK 등의 메시지가 리턴된다.	
	exit;
}

$member_data = $this->member->getData();


[ getCount(), getList() ]

// 아래 Key들 중 필요한거만 설정하면 됨
$params = array(

	    '=' => array(								// 같다
	        'member_id' => 'hamt',
	        'email_send_chk' => '1',
	        ),
	    '!='    => array(							// 같지않다 
	        'utilization_agree_chk' => '0',
	        'member_id' => 'hamt',
	        ),
	    '<' => array(								// 작다
	        'regdate' => '2013-12-31 23:59:59',
	        'idx' => '1000',
	        ),
	    '>' => array(								// 크다
	        'regdate' => '2013-01-01 00:00:00',
	        'idx' => '10',
	        ),
	    '<='    => array(							//  작거나 같다
	        'lastdate' => '2013-12-31 23:59:59',
	        ),
	    '>='    => array(							// 크거나 같다	
	        'regdate' => '2013-01-01 00:00:00',
	        ),
	    'like'  => array(							// like '%word%' 검색
	        'field1' => 'keyword',
	        'field2' => 'keyword',
	        ),
	    '_like'  => array(							// like '%word' 검색
	        'field1' => 'keyword',
	        'field2' => 'keyword',
	        ),
	    'like_'  => array(							// like 'word%' 검색
	        'field1' => 'keyword',
	        'field2' => 'keyword',
	        ),
	    'between'   => array(						// between 검색
	        'regdate' => array('2013-01-01 00:00:00', '2013-12-31 23:59:59'),  // between 필드 => array(작은값, 큰값)
	        ),
	    'in'  => array(								// in 검색
	        'field1' => array('val1', 'val2'),
	        'field2' => array('val1', 'val2'),
	        ),
	    'not in'  => array(							// not in 검색
	        'field1' => array('val1', 'val2'),
	        'field2' => array('val1', 'val2'),
	        ),
	    'or_raw'	=> array('idx > 100'), 			// where절 마지막 or 문 직접작성
	    'raw'		=> array('idx in (select aaa_idx from bbb)'), // where절 AND 조건 직접작성
	);

$total_count = $this->member->getCount($params)->getData();

// 아래 Key들 중 필요한거만 설정하면 됨 (아래 설정은 말도 안되지만. Key의 종류를 명시하기 위한 예시임)
$extra = array(
	'fields'	=> array('idx', 'member_id', 'regdate')
	'group_by'	=> array('biz_auth_status'),
	'order_by'	=> array('member_name ASC', 'regdate DESC'),
	'offset'	=> ($page-1)*20, // offset 은 limit의 앞자리로써, limit이 셋팅되지 않으면 무의미함.
	'limit'		=> 20
)
$page_data = $this->member->getList($params, $extra)->getData();


[ doInsert() ]

[ doUpdate() ]

[ doDelete() ]

[ doMultiUpdate() ]

[ doMultiDelete() ]



2014.1.2. 함승목
*/


class MY_Model extends CI_Model {

	protected $pk = 'idx';			

	protected $db;			        // DB
	protected $db_name = '';		// 데이터베이스명. get(), getList()에서 모델인스턴스로 리턴시 참조됨.
	protected $table = '';			// 테이블명. 생성자에서 자동으로 채워짐.
	protected $fields = array();	// 테이블 필드들. 생성자에서 자동으로 채워짐.
	protected $elastic_table = '';			// elastic 테이블명.
	protected $elastic_fields = array();	// elastic 필드들.

	protected $is_success = true;	// 메서드 수행시 정상종료 여부
	protected $result_data; 		// 메서드 내 질의 결과를 담는다.
	protected $error_message;		// 비정상 파라메터에 의한 에러내용을 담는다.

	protected $use_sphinx = false;
	protected $sphinx_conn = null;
	protected $sphinx_db = null;
	protected $slave_db = array();
	protected $quandl_db = array();


	// NOT NULL 필드들에대한 정의. 각 모델에서 재정의
	protected $emptycheck_keys = array();

	// ENUM 필드마다 가질 수 있는 값들을 KEY => VALUE 형태의 배열로 정의. 각 모델에서 재정의
	protected $enumcheck_keys = array();

	public function getEnginCount($where='') {
		if($this->use_sphinx == false) {
			$this->setSuccessResult('0');
			return $this;
		}
		if($this->sphinx_conn === null) {
			$this->sphinx_conn = mysql_connect('127.0.0.1:9306', '', '') or die('Failed');
			$db = mysql_select_db($this->table, $this->sphinx_conn);
			mysql_query('set names utf8');
		}

		$count_query = 'select count(*) as cou from '.$this->table;
		if(strlen($where) > 0) {
			$count_query .= ' where '.$where;
		}
		//echo $count_query;
		$result = mysql_query($count_query, $this->sphinx_conn);
		if(is_resource($result) == false || mysql_num_rows($result) <= 0) {
			$this->setSuccessResult('0');
			return $this;
		}

		$cou = mysql_result($result,false);
		$this->setSuccessResult($cou);
		return $this;
	}
	public function getEnginList($field, $where='', $has_limit=false) {
		$data = array();
		if($this->use_sphinx == false) {
			$this->setSuccessResult($data);
			return $this;
		}
		if($this->sphinx_conn === null) {
			$this->sphinx_conn = mysql_connect('127.0.0.1:9306', '', '') or die('Failed');
			$db = mysql_select_db($this->table, $this->sphinx_conn);
			mysql_query('set names utf8');
		}

		$postfix = '';
		if($has_limit == false) {
			$postfix = $this->getEnginCount($where)->getData();
			if($postfix <= 0) {
				$this->setSuccessResult($data);
				return $this;
			}
			$postfix = ' limit '.$postfix;
		}

		$query = "select $field from $this->table";
		if(strlen($where) > 0) {
			$query .= ' where '.$where;
		}
		if(strlen($postfix) > 0) {
			$query .= $postfix;
		}

        $query .= ' option max_matches=10000';

		$result = mysql_query($query, $this->sphinx_conn);
		if(is_resource($result) == false) {
			$this->setSuccessResult($data);
			return $this;
		}
		while($row = mysql_fetch_object($result)) {
			$data[] = get_object_vars($row);
		}

		$this->setSuccessResult($data);
		return $this;
	}


	/*
	최종 테이블 클래스의 생성자를 아래와 같이 구성할것.
	function __construct() {
		parent::__construct();
		$this->db_name = array_pop(explode('/', dirname(__FILE__)));
		$this->table = strtolower(__CLASS__);
		$this->fields = $this->db->list_fields($this->table);
	}
	*/
	function __construct() {
		parent::__construct();
        $this->db = $this->load->database($this->db_name, true);
    }

	public function getFields() {
		return $this->fields;
	}



	/*
		@ 용도 : 메서드 내 로직 수행이 정상적으로 끝까지 되었나 확인하는 메서드
		@ 결과 : true or false
	*/
	public function isSuccess() {
		return $this->is_success;
	}



	/*
		@ 용도 : model->isSuccess() == false 일때 비정상 리턴 이유를 문자열로 반환
		@ 결과 : true or false
	*/
	public function getErrorMsg() {
		return $this->error_message;
	}



	/*
		@ 용도 : model->isSuccess() == true일때 리턴할 데이터를 result_data에 담아둔다.
				 메서드가 수행하여 제작한 데이터값을 반환.
		@ 결과 : 메서드가 담은 데이터에 따라 달라요. ㅋ.
	*/
	public function getData() {
		return $this->result_data;
	}



	/*
		@ 용도 : 1개 row 를 구함. 

		params : 
			idx : 테이블 PK 또는 uniq한 "필드명 => 값" 들 배열
			[$type] : object | array | class
				object : $리턴변수->필드명 으로 사용토록 리턴
				array  : $리턴변수['필드명'] 으로 사용토록 리턴
				class  : $리턴변수->필드명 으로 사용가능. 클래스 인스턴스를
						 리턴하므로 메서드도 사용 가능
	*/
	public function get($idx, $type='array') {
		$this->db->from($this->table);
		if(is_array($idx) == false) {
			$this->db->where($this->fields[0], $idx);
		} else {
			foreach($idx as $k => $v) {
				$this->db->where($k, $v);
			}
		}
		$query = $this->db->get();

		if($query->num_rows() < 1) {
			$this->setErrorResult('조회된 데이터가 없습니다.');
			return $this;
		}
		if($query->num_rows() > 1) {
			$this->setErrorResult('유일한 데이터가 아닙니다.');
			return $this;
		}

		switch(strtolower($type)) {
			case 'object' :
				$result_data = $query->row();
				break;
			case 'array' :
				$result_data =  $query->row_array();
				break;
			case 'class' :
				$result_data =  $query->row(0, ucfirst($this->table));
				break;
			default :
				$result_data =  $query->row();
				break;
		}
		$this->setSuccessResult($result_data);
		return $this;
	}


	/*
	@ 용도 :  getList()에 넘기는 인자로 실행되는 SELECT쿼리만 반환

	@ $params :  getList()와 동일
	@ $extra  :  getList()와 동일
	*/
	public function getListQuery($params = array(), $extra = array()) {
		$extra['get_query_only'] = true;
		$query = $this->getList($params, $extra);

		$this->setSuccessResult($query);
		return $this;
	}


	public function getElasticList($params = array(), $extra = array()) {
		$query = $this->getListQuery($params, $extra)->getData();
		$query = str_replace('`', '', $query); 
		$query = str_replace('\'', '"', $query); 
		$query = str_replace('('.$this->table.')', $this->elastic_table, $query); 
		$cmd = ('/usr/local/bin/curl -XGET "'.ELASTIC_HOST.'/_sql?sql='.urlencode($query).'&pretty"');
		echo $cmd; exit;
		$result = json_decode(shell_exec($cmd), true); 

		$result_data = array(
			'count'	=> $result['hits']['total'],
			'data'	=> array(),
			'aggregate'	=> array(),
		);

		if(sizeof($result['hits']['hits']) > 0) {
			foreach($result['hits']['hits'] as $res) {
				$result_data['data'][] = $res['_source'];
			}
		}

		// 집계데이터 
		if(isset($result['aggregations'])) {
			$result_data['aggregate'] = $result['aggregations'];
		}

		$this->setSuccessResult($result_data);

		return $this;
	}

	/* getList, getCount 를 위한 쿼리결과 캐싱 관련 메서드. 함승목. 2014.07.07 */
	protected function getQueryCachePath() {
		//$cache_path = realpath(dirname(__FILE__).'/../../webdata');
		$cache_path = realpath(dirname(__FILE__).'/../../../wallstreet/webdata');
		//$cache_path = '/home/hoon/html/wallstreet/webdata';
		$mkdirs = array();
		if(is_dir($cache_path) == false) {
			$mkdirs[] = $cache_path;
		}
		$cache_path .= '/query_cache';
		if(is_dir($cache_path) == false) {
			$mkdirs[] = $cache_path;
		}
		if(sizeof($mkdirs) > 0) {
			exec('mkdir '.implode(' ', $mkdirs));
			exec('chmod -R 777 '.$mkdirs[0]);
		}
		return $cache_path;
	}

	protected function getContentCachePath() {
		$cache_path = realpath(dirname(__FILE__).'/../../webdata');
		$mkdirs = array();
		if(is_dir($cache_path) == false) {
			$mkdirs[] = $cache_path;
		}
		$cache_path .= '/content_cache';
		if(is_dir($cache_path) == false) {
			$mkdirs[] = $cache_path;
		}
		if(sizeof($mkdirs) > 0) {
			exec('mkdir '.implode(' ', $mkdirs));
			exec('chmod -R 777 '.$mkdirs[0]);
		}
		return $cache_path;
	}


	protected function setCacheData($cache_file_name, $data) {
		$cache_path = $this->getQueryCachePath();
		@file_put_contents($cache_path.'/'.$cache_file_name, serialize($data));
		return is_file($cache_path.'/'.$cache_file_name);
	}
	protected function getCacheData($cache_file_name, $life_sec) {
		$cache_path = $this->getQueryCachePath();

		if(is_file($cache_path.'/'.$cache_file_name) && time() - filemtime($cache_path.'/'.$cache_file_name) < $life_sec) {
			return array('is_success' => true, 'data' => unserialize(file_get_contents($cache_path.'/'.$cache_file_name)));
		}
		return array('is_success' => false, 'data' => array());
	}
	public function deleteAllTableCache($cache_name='') {
		$path = $this->getQueryCachePath();

		$handle = opendir($path);

		while ($file = readdir($handle)) {
			if ($file!="." && $file!="..")  {
				$tmp = "$path/$file";
				if (strpos($tmp, '_SQL_CACHE_'.$this->db_name.'__'.$this->table)>0 ) {
					if($cache_name == '' || in_array($cache_name, explode('__', $file))) {
						@unlink($tmp);
					}
				}
			}
		}
		closedir($handle);
	}
	public function deleteAllCache() {
		$path = $this->getQueryCachePath();

		$handle = opendir($path);

		while ($file = readdir($handle)) {
			if ($file!="." && $file!="..")  {
				$tmp = "$path/$file";
				if (strpos($tmp, '_SQL_CACHE_'.$this->db_name.'__')>0 ) {
					@unlink($tmp);
				}
			}
		}
		closedir($handle);
	}



	/*
	@ 용도 : content_cache 삭제 

	@ $device :  /all/pc/mobile
	@ $controller  :  /all/product/이후 추가되는 controller명
	*/
    public function deleteContentCache($device='pc', $controller='') {
         
		$path = $this->getContentCachePath();

        if(strtolower($device) == 'pc') $prefix = '';
        else $prefix = strtolower($device);
        
        if($controller == 'main' || $controller == 'index') $controller = '';

		$handle = opendir($path);
		while ($file = readdir($handle)) {
			if ($file!="." && $file!="..")  {
				$tmp = "$path/$file";

                if($prefix == 'all') {
                    @unlink($tmp);
                }else {
                    if($controller == 'all') {
                        if (strpos($tmp, $prefix.'__')>0 ) {
                            @unlink($tmp);
                        }
                    }else {
                        if (strpos($tmp, $prefix.'__'.$controller.'_')>0 ) {
                            @unlink($tmp);
                        }
                    }
                }
			}
		}
		closedir($handle);
    }


	/*
	@ 용도 : 조건별 rows 수를 구함

	@ 파라메터 : $params

	shopnote2.member 테이블 검색조건 예시.
	$params = array(

	    '=' => array(								// 같다
	        'member_id' => 'hamt',
	        'email_send_chk' => '1',
	        ),
	    '!='    => array(							// 같지않다 
	        'utilization_agree_chk' => '0',
	        'member_id' => 'hamt',
	        ),
	    '<' => array(								// 작다
	        'regdate' => '2013-12-31 23:59:59',
	        'idx' => '1000',
	        ),
	    '>' => array(								// 크다
	        'regdate' => '2013-01-01 00:00:00',
	        'idx' => '10',
	        ),
	    '<='    => array(							//  작거나 같다
	        'lastdate' => '2013-12-31 23:59:59',
	        ),
	    '>='    => array(							// 크거나 같다	
	        'regdate' => '2013-01-01 00:00:00',
	        ),
	    'like'  => array(							// like '%word%' 검색
	        'field1' => 'keyword',
	        'field2' => 'keyword',
	        ),
	    '_like'  => array(							// like '%word' 검색
	        'field1' => 'keyword',
	        'field2' => 'keyword',
	        ),
	    'like_'  => array(							// like 'word%' 검색
	        'field1' => 'keyword',
	        'field2' => 'keyword',
	        ),
	    'between'   => array(						// between 검색
	        'regdate' => array('2013-01-01 00:00:00', '2013-12-31 23:59:59'),  // between 필드 => array(작은값, 큰값)
	        ),
	    'in'  => array(								// in 검색
	        'field1' => array('val1', 'val2'),
	        'field2' => array('val1', 'val2'),
	        ),
	    'not in'  => array(							// not in 검색
	        'field1' => array('val1', 'val2'),
	        'field2' => array('val1', 'val2'),
	        ),
	);
	*/

	protected function getSlaveDB($name) {
            $this->load->config('database');
            $allow_names = $this->config->item('slave_db_names');
            if(sizeof($allow_names) <= 0) {
                return $this->db;
            }

            if($name === true || strtolower($name) === 'true') {
                $name = $allow_names[0];
            }

            if( ! in_array($name, $allow_names)) {
                if( ! IS_REAL_SERVER) {
                    echo 'Check Slave DB Name [ '.$name.' ]. (Allow DB names : '.implode(', ', $allow_names).')';
                    exit;
                }
                return $this->db;
            }

			if( ! isset($this->slave_db[$name])) {
				$this->slave_db[$name] = $this->load->database($name, true);
			}
			return $this->slave_db[$name];
	}

	protected function getQuandlDB($name) {
            $this->load->config('database');
            $allow_names = $this->config->item('quandl_db_names');
            if(sizeof($allow_names) <= 0) {
                return $this->db;
            }

            if($name === true || strtolower($name) === 'true') {
                $name = $allow_names[0];
            }

            if( ! in_array($name, $allow_names)) {
                if( ! IS_REAL_SERVER) {
                    echo 'Check Quandl DB Name [ '.$name.' ]. (Allow DB names : '.implode(', ', $allow_names).')';
                    exit;
                }
                return $this->db;
            }

			if( ! isset($this->quandl_db[$name])) {
				$this->quandl_db[$name] = $this->load->database($name, true);
			}
			return $this->quandl_db[$name];
	}

	public function getCount($params=array()) {
		$cache_mode = false;
		$cache_filename = '';

		// 실시간 정보가 필요치 않은. 부하절감이 필요할때(메인 진열 리스팅 등) $params['cache_sec'] 에 초단위를 입력
		if(isset($params['cache_sec'])) {
			$cache_sec = $params['cache_sec'];
			unset($params['cache_sec']);
			$cache_name = '';
			if(isset($params['cache_name']) && strlen($params['cache_name']) > 0) {
				$cache_name = '__'.$params['cache_name'].'__';
				unset($params['cache_name']);
			}

			$cache_mode = true;
			$cache_filename = '_SQL_CACHE_'.$this->db_name.'__'.$this->table.'__count__'.$cache_name.md5(serialize($params)).'.inc';
			$cache_result = $this->getCacheData($cache_filename, $cache_sec);
			if($cache_result['is_success'] == true) {
					$this->setSuccessResult($cache_result['data']);
					return $this;
			}
		}

		// 캐시가 생성된 timestamp를 얻고싶을때 $params['cache_mtime'] 파라메터에 SET
		if(isset($params['cache_mtime'])) {
			unset($params['cache_mtime']);
			$cache_name = '';
			if(isset($params['cache_name']) && strlen($params['cache_name']) > 0) {
				$cache_name = '__'.$params['cache_name'].'__';
				unset($params['cache_name']);
			}
			$cache_path = $this->getQueryCachePath();
			$cache_filename = '_SQL_CACHE_'.$this->db_name.'__'.$this->table.'__count__'.$cache_name.md5(serialize($params)).'.inc';

			$filemtime= 0;
			if(is_file($cache_path.'/'.$cache_file_name)) {
				$filemtime = filemtime($cache_path.'/'.$cache_file_name);
			}
			$this->setSuccessResult($filemtime);
			return $this;
		}

		$db = $this->db;
		$is_slave = false;
		if(isset($params['slavedb']) && $params['slavedb'] == true) {
			$db = $this->getSlaveDB($params['slavedb']);
			$is_slave = true;
			unset($params['slavedb']);
		}

		if(sizeof($params) > 0) {
			if($is_slave) {
				$this->__genSlaveQuery($params, 'select', $db);
			}
			else {
				$this->__genQuery($params, 'select', $db);
			}
		}

		$db->from($this->table);

		$count_all_results = $db->count_all_results();
		$this->setSuccessResult($count_all_results);

		if($cache_mode) {
			$this->setCacheData($cache_filename, $count_all_results);
		}

		return $this;
	}







	/*
	@ 용도 :  여러개 리스트 반환. 

	@ $params :  where 조건을 getCount()와 같은 방식으로 전달.
	@ $extra  :  fields, order_by, group_by, offset, limit 을 Key로 배열 전달
	@ [$type] : object | array | class
			object : $리턴변수->필드명 으로 사용토록 리턴
			array  : $리턴변수['필드명'] 으로 사용토록 리턴
			class  : $리턴변수->필드명 으로 사용가능. 클래스 인스턴스를
					 리턴하므로 메서드도 사용 가능
	*/
	public function getList($params = array(), $extra = array(), $type='array') {

		$cache_mode = false;
		$cache_filename = '';
		if(isset($extra['cache_sec'])) {
			$cache_sec = $extra['cache_sec'];
			unset($extra['cache_sec']);
			$cache_name = '';
			if(isset($extra['cache_name']) && strlen($extra['cache_name']) > 0) {
				$cache_name = '__'.$extra['cache_name'].'__';
				unset($extra['cache_name']);
			}
			$cache_mode = true;
			$cache_filename = '_SQL_CACHE_'.$this->db_name.'__'.$this->table.'__list__'.$cache_name.md5(serialize(array('params' => $params, 'extra' => $extra)).'___'.$type).'.inc';
			$cache_result = $this->getCacheData($cache_filename, $cache_sec);
			if($cache_result['is_success'] == true) {
					$this->setSuccessResult($cache_result['data']);
					return $this;
			}
		}
		if(isset($extra['cache_mtime'])) {
			unset($extra['cache_mtime']);
			$cache_name = '';
			if(isset($extra['cache_name']) && strlen($extra['cache_name']) > 0) {
				$cache_name = '__'.$extra['cache_name'].'__';
				unset($extra['cache_name']);
			}
			$cache_path = $this->getQueryCachePath();
			$cache_filename = '_SQL_CACHE_'.$this->db_name.'__'.$this->table.'__list__'.$cache_name.md5(serialize(array('params' => $params, 'extra' => $extra)).'___'.$type).'.inc';

			$filemtime= 0;
			if(is_file($cache_path.'/'.$cache_filename)) {
				$filemtime = filemtime($cache_path.'/'.$cache_filename);
			}
			$this->setSuccessResult($filemtime);
			return $this;
		}

		//$db = &$this->db;
		$db = $this->db;
		$is_slave = false;
		if(isset($extra['slavedb']) && $extra['slavedb'] == true) {
			$db = &$this->getSlaveDB($extra['slavedb']);
			$is_slave = true;
			unset($extra['slavedb']);
		}
		else if(isset($extra['quandldb']) && $extra['quandldb'] == true) {
			$db = $this->getQuandlDB($extra['quandldb']);
			$is_slave = true;
			unset($extra['quandldb']);
		}

		if(sizeof($params) > 0) {
			if($is_slave) {
				$this->__genSlaveQuery($params, 'select', $db);
			}
			else {
				$this->__genQuery($params, 'select', $db);
			}
		}
		$db->from($this->table);

		if(isset($extra['order_by']) == false) {
			// order_by 절이 없으면 최신순 지정
			$order_field = $this->pk;
			if(is_array($order_field) == true) {
				$order_field = $this->pk[0];
			}
			$extra['order_by'] = $this->table.'.'.$order_field.' DESC';
		} else if(is_array($extra['order_by']) == true) {
			// order_by 절이 배열이면 String 으로 변환
			$extra['order_by'] = implode(',', $extra['order_by']);
		}

		if(sizeof($extra) > 0) {
			foreach($extra as $k => $v) {
				switch(strtolower($k)) {
					case 'fields' : 				// 가져올 특정 필드. 배열 혹은 문자열을 값으로 넘긴다.
						$db->select($v);
						break;
					case 'group_by' : 				// 그룹 필드. 배열 혹은 문자열을 값으로 넘긴다.
						$db->group_by($v);
						break;
					case 'order_by' : 				// 문자열
						if(strlen($v) > 0) {
							$db->order_by($v);
						}
						break;
					case 'offset' :
						// limit 와 함께 쓰이는 놈이므로 continue;
						break;
					case 'limit' :
						if(isset($extra['offset']) == false) {
							$db->limit($v);
						} else {
							$db->limit($v, $extra['offset']);
						}
						break;
				}
			}
		}

		if((isset($params['join']) || isset($params['left_join'])) && empty($extra['fields'])) {
			$fields = array();

			$join_tables = array($this->table);
			if(isset($params['join']) == true) {
				$join_tables = array_merge($join_tables, array_keys($params['join']));
			}
			if(isset($params['left_join']) == true) {
				$join_tables = array_merge($join_tables, array_keys($params['left_join']));
			}

			foreach($join_tables as $join_table) {
				$add_fields = $db->list_fields($join_table);
				foreach($add_fields as $add_field) {
					if($join_table == $this->table) {
						$fields[] = $join_table.'.'.$add_field.' as '.$add_field.'';
						continue;
					}
					$fields[] = $join_table.'.'.$add_field.' as `'.$join_table.'.'.$add_field.'`';
				}
			}

			$db->select(implode(', ', $fields));
		}

		if(isset($extra['get_query_only']) && $extra['get_query_only'] == true) {
			return $db->get_query();
		}
		$query = $db->get();


		$result_data = array();
		if(is_object($query) == false || $query->num_rows() < 1) {
			$this->setSuccessResult($result_data);
			if($cache_mode) {
				$this->setCacheData($cache_filename, $result_data);
			}
			return $this;
		}

		switch(strtolower($type)) {
			case 'object' :
				$result_data = $query->result();
				break;
			case 'array' :
				$result_data =  $query->result_array();
				break;
			case 'class' :
				foreach($query->result(ucfirst($this->table)) as $row) {
					$result_data[] = $row;
				}
				break;
			default :
				$result_data = $query->result();
				break;
		}
		$this->setSuccessResult($result_data);
		if($cache_mode) {
			$this->setCacheData($cache_filename, $result_data);
		}
		return $this;
	}



	/* 
		@ 용도 :  insert 수행 메서드
		@ $params : array(
					'field1' => 'value1',
					'field2' => 'value2',
					'field3' => 'field3 + 1'
						)
		@ [skip_escape] = array('field3')

		@ [exec_type] :
			 'exec' 	: insert 쿼리 실행
			 'query' 	: insert 쿼리만 반환. (실행X)
	*/
	public function doInsert($params, $skip_escape=array(), $exec_type='exec') {
		// 서버에서 채울 값 셋팅
		$params = $this->__filter($params);

		if($this->__validate($params) == false) {
			// __validate() 에서 setErrorResult($msg)를 호출하였을거다.
			// 컨트롤러에서는  $obj->doInsert($data)->isSuccess() 를 검사하여
			// false를 받게되면 $obj->getErrorMsg() 로 사유를 뿌리면 됨.
			return $this;
		}

		if(
			is_array($skip_escape) == false 
			&& strlen($skip_escape) > 0
			&& in_array($skip_escape, $this->fields)
		) {
			$skip_escape = array($skip_escape);
		}

		if(is_array($skip_escape) && sizeof($skip_escape) > 0) {
			// in_array 로 탐색보다는 hash map 접근이 빠르다.
			$skip_escape = array_flip($skip_escape);
		} else {
			$skip_escape = array();
		}

		foreach($params as $field => $value) {

			if(in_array($field, $this->fields) === false) {
				// 테이블 필드가 아닌 값은 패스
				continue;
			}

			$escape = !isset($skip_escape[$field]);
			$this->db->set($field, $value, $escape);
		}

		if($exec_type != 'query') {
			if( ! $this->db->insert($this->table)) {
				$this->setErrorResult($this->db->_error_number().':'.$this->db->_error_message());
				return $this;
			}
            $this->setSuccessResult($this->db->insert_id());
		} else {
			$query = $this->db->insert_query($this->table);
			$this->setSuccessResult($query);
		}


		// elastic insert
		if(strlen($this->elastic_table) > 0) {
			if($this->is_success == true) {
				$id = $this->getData();
				$this->saveElastic($id);
			    $this->setSuccessResult($id);
			}
		}

		return $this;
	}



	/* 
		@ 용도 :  PK를 이용한 1행 update 수행 메서드
				  이 메서드에서는 일부 필드만도 업데이트 가능하므로
				  유효성 체크는 controller쪽에서 미리 확실히 한 후 이 메서드로 넘길것.

		@ $data_params : array(
					'field1' => 'value1',
					'field2' => 'value2',
					'field3' => 'field3 + 1'
					)

		@ [skip_escape] = array('field3')

		@ [exec_type] :
			 'exec' 	: insert 쿼리 실행
			 'query' 	: insert 쿼리만 반환. (실행X)
	*/
	public function doUpdate($pk, $data_params, $skip_escape=array(), $exec_type='exec') {
		if(is_array($data_params) == false || sizeof($data_params) <= 0) {
			$this->setErrorResult('수정할 데이터가 없습니다.');
			return $this;
		}

		if(is_array($skip_escape) && sizeof($skip_escape) > 0) {
			// in_array 로 탐색보다는 hash map 접근이 빠르다.
			$skip_escape = array_flip($skip_escape);
		} else {
			$skip_escape = array();
		}

		if(is_array($this->pk) == false) {

			$this->db->where($this->pk, $pk);
		} else {
			if(is_array($this->pk) == true && sizeof($this->pk) > 0) {
				foreach($this->pk as $field) {
					if(isset($pk[$field]) == false) {
						$this->setErrorResult('수정 정보 데이터가 유효하지 않습니다.');
						return $this;
					}
					$this->db->where($field, $pk[$field]);
				}
			} else {

				$this->setErrorResult('수정 정보 데이터가 유효하지 않습니다.');
				return $this;
			}
		}

		foreach($data_params as $field => $value) {

			if(in_array($field, $this->fields) === false) {
				// 테이블 필드가 아닌 값은 패스
				continue;
			}

			$escape = !isset($skip_escape[$field]);
			$this->db->set($field, $value, $escape);
		}



		if($exec_type != 'query') {
			if( ! $this->db->update($this->table)) {
                $this->setErrorResult('('.$this->db->_error_number().') '.$this->db->_error_message());
                return $this;
            }
            $af_rows = $this->db->affected_rows();
			$this->setSuccessResult($af_rows);
		} else {
			$query = $this->db->update_query($this->table);
			$this->setSuccessResult($query);
		}

		// elastic update
		if(strlen($this->elastic_table) > 0) {
			if($this->getData() == 1) {		// affected_row 가 0 이상
				$this->saveElastic($pk);
				$this->setSuccessResult($res);
			}
		}



		return $this;
	}
	public function doUpdateWithWhere($pk, $data_params, $wheres=array(), $skip_escape=array(), $exec_type='exec') {
		if(sizeof($wheres) > 0) {
			$this->__genQuery($wheres);
		}
		return $this->doUpdate($pk, $data_params, $skip_escape, $exec_type);
	}


	/* 
		@ 용도 :  PK를 이용한 1행 delete 수행 메서드
				  이 메서드에서는 pk 해당 행 즉시 삭제이므로
			  	  유효성 체크는 controller쪽에서 미리 확실히 한 후 이 메서드로 넘길것.

		@ $pk: 삭제할 행 auto increment 필드 번호

		@ [exec_type] :
			 'exec' 	: insert 쿼리 실행
			 'query' 	: insert 쿼리만 반환. (실행X)

	*/
	public function doDelete($pk, $exec_type='exec') {

		if(is_array($this->pk) == false) {

			$this->db->where($this->pk, $pk);
		} else {
			if(is_array($this->pk) == true && sizeof($this->pk) > 0) {
				foreach($this->pk as $field) {
					if(isset($pk[$field]) == false) {
						$this->setErrorResult('삭제 정보 데이터가 유효하지 않습니다.');
						return $this;
					}
					$this->db->where($field, $pk[$field]);
				}
			} else {

				$this->setErrorResult('삭제 정보 데이터가 유효하지 않습니다.');
				return $this;
			}
		}

		if($exec_type != 'query') {
			if( ! $this->db->delete($this->table)) {
                $this->setErrorResult('('.$this->db->_error_number().') '.$this->db->_error_message());
                return $this;
            }

            $af_rows = $this->db->affected_rows();
			$this->setSuccessResult($af_rows);
		} else {
			$query = $this->db->delete_query($this->table);
			$this->setSuccessResult($query);
		}

		// elastic delete 
		if(strlen($this->elastic_table) > 0) {
			if($this->getData() == 1) {
				$this->deleteElastic($pk);
			}
		}


		return $this;
	}
	public function doDeleteWithWhere($pk, $wheres=array(), $exec_type='exec') {
		if(sizeof($wheres) > 0) {
			$this->__genQuery($wheres);
		}
		return $this->doDelete($pk, $exec_type);
	}


	/* 
		@ 용도 :  여러행 update 수행 메서드
		  		  이 메서드에서는 일부 필드만도 업데이트 가능하므로
		  		  유효성 체크는 controller쪽에서 미리 확실히 한 후 이 메서드로 넘길것.

		@ $data_params : array(
					'field1' => 'value1',
					'field2' => 'value2',
					'field3' => 'field3 + 1'
					)

		@ where_params : getCount()의 파라메터와 같은 조건배열
						 ## 주의 ## 
						 무조건 1개이상 조건이 존재해야 함. 통업데이트 위섬성 내포.
						 의도적인 통업데이트의 경우 'update_all' => true 를 담기 바람.

		@ [skip_escape] = array('field3')

		@ [exec_type] :
			 'exec' 	: insert 쿼리 실행
			 'query' 	: insert 쿼리만 반환. (실행X)
	*/
	public function doMultiUpdate($data_params, $where_params, $skip_escape=array(), $exec_type='exec') {
		if((is_array($where_params) && sizeof($where_params) > 0) == false) {
				$this->setErrorResult('수정대상들의 조건 데이터 형태가 올바르지 않습니다.');
				return $this;
		}

        // 엘라스틱 사용 시, where절로 key를 먼저 확보
        $updated_pks = array();
        if(strlen($this->elastic_table) > 0) {
            $extra = array();
            $extra['fields'] = $this->pk;

            $elastic_where = $where_params;
            if(isset($elastic_where['update_all'])) {
                unset($elastic_where['update_all']);
            }

            $updated_pks = $this->getList($elastic_where, $extra)->getData();
            if(sizeof($updated_pks) > 0) {
                $updated_pks = array_keys($this->common->getDataByPK($updated_pks, $this->pk));
            }
        }


		if(is_array($skip_escape) && sizeof($skip_escape) > 0) {
			// in_array 로 탐색보다는 hash map 접근이 빠르다.
			$skip_escape = array_flip($skip_escape);
		} else {
			$skip_escape = array();
		}

		foreach($data_params as $field => $value) {

			if(in_array($field, $this->fields) === false) {
				// 테이블 필드가 아닌 값은 패스
				continue;
			}

			$escape = !isset($skip_escape[$field]);
			$this->db->set($field, $value, $escape);
		}

		if($this->__genQuery($where_params) <= 0) { 
			// 추가된 where가 없다. 테이블 전체 업데이트가 되려한다.

			if((sizeof($where_params) == 1 && $where_params['update_all'] === true) == false) {
				// 의도적인 테이블 전체업데이트가 아니다.
				$this->setErrorResult('수정대상들의 조건이 설정되지 않았습니다.');
				return $this;
			}
		}

		if($exec_type != 'query') {
			if( ! $this->db->update($this->table)) { 
                $this->setErrorResult('('.$this->db->_error_number().') '.$this->db->_error_message());
                return $this;
            }
            $af_rows = $this->db->affected_rows();

			$this->setSuccessResult($af_rows);
		} else {
			$query = $this->db->update_query($this->table);
			$this->setSuccessResult($query);
		}

		// elastic update
        // - affected row가 존재하고, where절로 검색되는 키에 한하여 일래스틱 업데이트 처리 
		if(strlen($this->elastic_table) > 0 && $this->getData() > 0 && sizeof($updated_pks) > 0) {
			$this->saveElastic($updated_pks);
		}

        return $this;
	}


	/* 
		@ 용도 :  여러행 delete 수행 메서드
		  이 메서드에서는 조건만족 행을 즉시 삭제하므로
		  유효성 체크는 controller쪽에서 미리 확실히 한 후 이 메서드로 넘길것.

		@ where_params : getCount()의 파라메터와 같은 조건배열
						 ## 주의 ## 
						 무조건 1개이상 조건이 존재해야 함. 통업데이트 위섬성 내포.
						 의도적인 통업데이트의 경우 'update_all' => true 를 담기 바람.

		@ [exec_type] :
			 'exec' 	: insert 쿼리 실행
			 'query' 	: insert 쿼리만 반환. (실행X)

	*/
	public function doMultiDelete($where_params, $exec_type='exec') {

		if((is_array($where_params) && sizeof($where_params) > 0) == false) {
				$this->setErrorResult('삭제대상들의 조건 데이터 형태가 올바르지 않습니다.');
				return $this;
		}

		// elastic delete
		$ids = array();
		if(strlen($this->elastic_table) > 0) {
			$ela_params = $where_params;	
			if(isset($ela_params['update_all']) == true) {
				unset($ela_params['update_all']);
			}
			$ids = array_keys($this->common->getDataByPk($this->getList($ela_params, $extra=array('fields'=>array($this->pk)))->getData(), $this->pk));
		}


		if($this->__genQuery($where_params) <= 0) { 
			// 추가된 where가 없다. 테이블 전체 업데이트가 되려한다.

			if((sizeof($where_params) == 1 && $where_params['update_all'] === true) == false) {
				// 의도적인 테이블 전체업데이트가 아니다.
				$this->setErrorResult('삭제대상들의 조건이 설정되지 않았습니다.');
				return $this;
			}
		}

		if($exec_type != 'query') {
			if(sizeof($where_params) == 1 && isset($where_params['update_all']) && $where_params['update_all'] === true) {
                // 통 딜리트
			    $this->db->empty_table($this->table);
            } else {
			    $this->db->delete($this->table);
            }

			$af_rows = $this->db->affected_rows();
            if($af_rows < 0) {
                $this->setErrorResult('('.$this->db->_error_number().') '.$this->db->_error_message());
                return $this;
            }

			$this->setSuccessResult($af_rows);
		} else {
			$query = $this->db->delete_query($this->table);
			$this->setSuccessResult($query);
		}

		// elastic delete
		if(strlen($this->elastic_table) > 0) {
			if($this->getData() > 0) {		// affected_row 가 0 이상
				$this->deleteElastic($ids);
			}
		}

		return $this;
	}

	// ElasticSearch insert / update
	public function saveElastic($ids, $data=array()) {
		if(is_numeric($ids) && $ids > 0) {
			$ids = array($ids);
		}
		$rows = $data;

		if(sizeof($rows) < 1) {
			$params = array();
			$params['in'][$this->pk] = $ids;
			$extra = array();
			$extra['order_by'] = '';
			$rows = $this->getList($params, $extra)->getData();
		}

		if(sizeof($rows) <= 0) return;

		$elastic_fields = $this->elastic_fields;

		$result = array();
		
		foreach($rows as $row) {
			$params = array();
			foreach($elastic_fields as $f) {
				$params[$f] = $row[$f];
			}
			$cmd = ("/usr/local/bin/curl -XPOST ".ELASTIC_HOST."/".$this->elastic_table."/".$row[$this->pk]." -H 'Content-type: application/json' -d ".escapeshellarg(json_encode($params)));
			$result[] = print_r(json_decode(shell_exec($cmd)), true);
		}
		return implode("\n", $result);
	}

	// ElasticSearch delete
	public function deleteElastic($ids) {
		if(is_numeric($ids) && $ids > 0) {
			$ids = array($ids);
		}

		if(sizeof($ids) <= 0) return;
		$result = array();
		foreach($ids as $id) {
			$cmd = ("/usr/local/bin/curl -XDELETE ".ELASTIC_HOST."/".$this->elastic_table."/".$id);
			$result[] = print_r(json_decode(shell_exec($cmd)), true);
		}
		return implode("\n", $result);
	}


	public function getLastQuery() {
		return $this->db->last_query();
	}
	public function getLastSlaveDBQuery($name='') {
        if($name == '') {
            $name = true;
        }
        $slavedb = $this->getSlaveDB($name);
		return $slave_db->last_query();
	}

	protected function __filter($params) {
		// 저장일, 아이피 등 form에서 입력받지 않고 서버에서 기본으로 넣을 필드가 있으면
		// 이 메서드를 각 모델에서 재정의 하여 사용하자.

		return $params;
	}
	protected function __validate($params) {
		// insert 하기 위한 데이터 배열 $params 유효성 체크
		// 누락되면 안되는 필드 및 enum 필드들을 테이블 모델에서 정의하고 
		// 그것을 바탕으로 insert 데이터 유효성을 검사할 메서드.
		// 추가적인 검사는 테이블 모델에서 진행.
		$msg = array();
		foreach($this->emptycheck_keys as $field => $message) {
			if(isset($params[$field]) == false) {
				$msg[] = $message;
			}
		}

		foreach($this->enumcheck_keys as $field => $info) {
			if(isset($params[$field]) && in_array($params[$field], $info['enum']) == false) {
				$msg[] = $info['message'];
			}
		}

		if(sizeof($msg) > 0) {
			// alert() 등으로 노출될 것으로 예상되여 \n 개행문자가 찍히는 형태로 셋팅함.
			$this->setErrorResult(implode('\n', $msg));
			return false;
		}
		return true;
	}
	protected function __genQuery($params, $mode='update') {
		$add_where_count = 0;
		if((is_array($params) && sizeof($params) > 0) == false) {
			return $add_where_count;
		}
		foreach($params as $operator => $field_values) {
			switch(strtolower($operator)) {
				case '=' :
				case '!=' :
				case '<' :
				case '>' :
				case '<=' :
				case '>=' :
					foreach($field_values as $field => $value) {
						$this->db->where($field.' '.$operator, $value);
						$add_where_count++;
					}
					break;
				case 'like' :
					foreach($field_values as $field => $value) {
						$this->db->like($field, $value, 'both');
						$add_where_count++;
					}
					break;
				case '_like' :
					foreach($field_values as $field => $value) {
						$this->db->like($field, $value, 'before');
						$add_where_count++;
					}
					break;
				case 'like_' :
					foreach($field_values as $field => $value) {
						$this->db->like($field, $value, 'after');
						$add_where_count++;
					}
					break;
				case 'between' :
					foreach($field_values as $field => $value) {
						if(sizeof($value) != 2) {
							continue;
						}
						list($start, $end) = $value;
						$this->db->where($field.' >=', $start);
						$this->db->where($field.' <=', $end);
						$add_where_count++;
					}

					break;
				case 'in' :
					foreach($field_values as $field => $value) {
						if(is_array($value) != true || sizeof($value) <= 0) {
							continue;
						}
						foreach($value as &$item) {
							if(is_numeric($item)) {
								$item = intval($item);
							}
						}
						$this->db->where_in($field, $value);
						$add_where_count++;
					}
					break;
				case 'not in' :
					foreach($field_values as $field => $value) {
						if(is_array($value) != true || sizeof($value) <= 0) {
							continue;
						}
						$this->db->where_not_in($field, $value);
						$add_where_count++;
					}
					break;
				case 'or_raw' :
					if(is_array($field_values) == false) {
						$field_values = array($field_values);
					}

					foreach($field_values as $or_raw) {
						$this->db->or_where($or_raw, null, false);
						$add_where_count++;
					}
					break;
				case 'raw' :
					if(is_array($field_values) == false) {
						$field_values = array($field_values);
					}

					foreach($field_values as $raw) {
						$this->db->where($raw, null, false);
						$add_where_count++;
					}
					break;
				case 'join' :
					if(is_array($field_values) == false) {
						continue;
					}

					foreach($field_values as $table => $on) {
						$this->db->join($table, $on);
					}
					break;
				case 'left_join' :
					if(is_array($field_values) == false) {
						continue;
					}

					foreach($field_values as $table => $on) {
						$this->db->join($table, $on, 'left');
					}
					break;
				default :
					// getList, getCount 에서 호출시 $mode는 'select'이다.
					// 주로 where는  = 을 사용하므로, 매칭 조건츨 수행토록 해주자.
					// select 이외 쿼리에서의 호출은 무조건 정해진 양식으로 where제작 배열을 넘길것. 2013.1.7. 함승목.
					if(strtolower($mode) == 'select' && is_array($field_values) == false && strlen($field_values) > 0) {
						$this->db->where($operator, $field_values);
					}
			}
		}
		return $add_where_count;
	}

	protected function __genSlaveQuery($params, $mode='select', $slavedb) {
		$add_where_count = 0;
		if((is_array($params) && sizeof($params) > 0) == false) {
			return $add_where_count;
		}
		foreach($params as $operator => $field_values) {
			switch(strtolower($operator)) {
				case '=' :
				case '!=' :
				case '<' :
				case '>' :
				case '<=' :
				case '>=' :
					foreach($field_values as $field => $value) {
						$slavedb->where($field.' '.$operator, $value);
						$add_where_count++;
					}
					break;
				case 'like' :
					foreach($field_values as $field => $value) {
						$slavedb->like($field, $value, 'both');
						$add_where_count++;
					}
					break;
				case '_like' :
					foreach($field_values as $field => $value) {
						$slavedb->like($field, $value, 'before');
						$add_where_count++;
					}
					break;
				case 'like_' :
					foreach($field_values as $field => $value) {
						$slavedb->like($field, $value, 'after');
						$add_where_count++;
					}
					break;
				case 'between' :
					foreach($field_values as $field => $value) {
						if(sizeof($value) != 2) {
							continue;
						}
						list($start, $end) = $value;
						$slavedb->where($field.' >=', $start);
						$slavedb->where($field.' <=', $end);
						$add_where_count++;
					}

					break;
				case 'in' :
					foreach($field_values as $field => $value) {
						if(is_array($value) != true || sizeof($value) <= 0) {
							continue;
						}
						foreach($value as &$item) {
							if(is_numeric($item)) {
								$item = intval($item);
							}
						}
						$slavedb->where_in($field, $value);
						$add_where_count++;
					}
					break;
				case 'not in' :
					foreach($field_values as $field => $value) {
						if(is_array($value) != true || sizeof($value) <= 0) {
							continue;
						}
						$slavedb->where_not_in($field, $value);
						$add_where_count++;
					}
					break;
				case 'or_raw' :
					if(is_array($field_values) == false) {
						$field_values = array($field_values);
					}

					foreach($field_values as $or_raw) {
						$slavedb->or_where($or_raw, null, false);
						$add_where_count++;
					}
					break;
				case 'raw' :
					if(is_array($field_values) == false) {
						$field_values = array($field_values);
					}

					foreach($field_values as $raw) {
						$slavedb->where($raw, null, false);
						$add_where_count++;
					}
					break;
				case 'join' :
					if(is_array($field_values) == false) {
						continue;
					}

					foreach($field_values as $table => $on) {
						$slavedb->join($table, $on);
					}
					break;
				case 'left_join' :
					if(is_array($field_values) == false) {
						continue;
					}

					foreach($field_values as $table => $on) {
						$slavedb->join($table, $on, 'left');
					}
					break;
				default :
					// getList, getCount 에서 호출시 $mode는 'select'이다.
					// 주로 where는  = 을 사용하므로, 매칭 조건츨 수행토록 해주자.
					// select 이외 쿼리에서의 호출은 무조건 정해진 양식으로 where제작 배열을 넘길것. 2013.1.7. 함승목.
					if(strtolower($mode) == 'select' && is_array($field_values) == false && strlen($field_values) > 0) {
						$slavedb->where($operator, $field_values);
					}
			}
		}
		return $add_where_count;
	}

	protected function setSuccessResult($data) {
		$this->is_success = true;
		$this->result_data = $data;
		$this->error_message = '';
		
	}
	protected function setErrorResult($msg) {
		$this->is_success = false;
		$this->result_data = null;
		$this->error_message = $msg;
	}
}

?>
