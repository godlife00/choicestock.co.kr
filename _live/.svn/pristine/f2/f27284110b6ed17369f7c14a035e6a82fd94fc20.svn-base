<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
require_once $_SERVER['DOCUMENT_ROOT'].'/_application/controllers/adminpanel/base_admin.php';

class Manage extends BaseAdmin_Controller{

	public function send() {
		$this->load->library('Sms');
		$this->sms->send('010-4696-7030', "동해물과 백두산");
	}
	public function index() {
		$this->admins();
	}

	public function admins() {
		$this->load->model(DBNAME.'/admin_tb_model');
		$sess = $this->session->userdata('admin');
		$request = $this->input->get();

		$data = array();

		if(isset($request['mode']) && $request['mode'] == 'list') {
			// ajax reqeust. ==> grid list data 

			$page = $this->input->get('page');
			$limit = $this->input->get('rows');
			$_search = $this->input->get('_search');

			$params = array();
			$extra = array();

			if(isset($_GET['filters'])){
				$filters = $_GET['filters'];
				$params = $this->common->filter_to_params($filters, $_search, array('a_lastlogin_at','a_created_at','a_updated_at'));
			}


			if(isset($request['sidx']) && strlen($request['sidx']) > 0) {
				$order_by = $request['sidx']." ".$request['sord'];
				$extra['order_by'] = array($order_by);
			}

			$extra['offset'] = ($page-1)*$limit;
			$extra['limit'] = $limit;

			$list = $this->admin_tb_model->getList($params, $extra)->getData();

			$totalCount = $this->admin_tb_model->getCount($params)->getData();

			$json_data = new stdClass;
			$json_data->rows = array();
			foreach($list as $k=>$r){
				$json_data->rows[$k]['id'] = $r['a_id'];
				$json_data->rows[$k]['cell'] = $r;
			}

			$json_data->total = ceil($totalCount / $limit);
			$json_data->page = $page;
			$json_data->records = $totalCount;

			echo json_encode($json_data);
			return;
		}
		if(isset($request['mode']) && $request['mode'] == 'edit') {
			$request = $this->input->post();

			if(isset($request['oper']) && $request['oper'] == 'add') {
				$data = $request;
				unset($data['oper']);
				unset($data['id']);

				$data['a_created_at'] = date('Y-m-d H:i:s');
				$data['a_updated_at'] = date('Y-m-d H:i:s');

				// todo. $request 데이터 이외 셋팅할 부분 이 아래에서 채우기. 함승목.

				if($this->admin_tb_model->doInsert($data)->isSuccess() == false) {
					print_r($this->admin_tb_model->getErrorMsg());
					return;
				}

				$act_key = $this->admin_tb_model->getData();
				$log_array = array();
				$log_array['params'] = $data;
				$this->common->write_history_log($sess, 'INSERT', $act_key, $log_array, 'admin_tb');
				return;
			}

			if(isset($request['id']) && isset($request['ids']) == false) {
				// 1 row 수정
				if($request['edit_action_is'] == 'DEL') {
					// 삭제 상태로 셋팅. 삭제.
					if($this->admin_tb_model->get($request['id'])->isSuccess()){
						$del_data = $this->admin_tb_model->getData();
						$this->admin_tb_model->doDelete($request['id']);
						$act_key = $request['id'];
						$log_array = array();
						$log_array['params'] = $del_data;
						$this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'admin_tb');
					}
					return;
				}

				// row 수정
				$request['a_updated_at'] = date('Y-m-d H:i:s');
				//todo. Update시 추가 셋팅값 여기서 채우기. 함승목

				$this->admin_tb_model->doUpdate($request['id'], $request);
				$act_key = $request['id'];
				$log_array = array();
				$log_array['params'] = $request;
				$this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'admin_tb');
				return;
			}

			// 일괄 상태변경

			$ids = explode(',',$request['ids']);

			if(sizeof($ids) > 0 && sizeof($request['multi_update_field_data_map']) > 0) {
				$data = $request['multi_update_field_data_map'];
				foreach($ids as $id) {
					if($request['edit_action_is'] == 'DEL') {
						if($this->admin_tb_model->get($id)->isSuccess()){
							$del_data = $this->admin_tb_model->getData();
							$this->admin_tb_model->doDelete($id);
							$act_key = $id;
							$log_array = array();
							$log_array['params'] = $del_data;
							$this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'admin_tb');
						}
					} else {
						$this->admin_tb_model->doUpdate($id, $data);
						$act_key = $id;
						$log_array = array();
						$log_array['params'] = $data;
						$this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'admin_tb');
					}
				}
				echo 'success';
			} else {
				echo 'fail';
			}
			return;

		}

		$this->_view('manage/admins', $data);
	}




	public function admins_detail($id=0) {
		$this->load->model(DBNAME.'/admin_tb_model');

		$id = intval($id);

		$assign = array();
		$assign['mode'] = 'insert';
		$assign['pk'] = 'a_id';

		if($id > 0) {
			$this->admin_tb_model->get($id);
			if($this->admin_tb_model->isSuccess() == false) {
				$this->common->alert('pk '.$id.' is empty.');
				$this->common->locationhref('/adminpanel/manage/admins?keep=yes');
				return;
			}
			$assign['mode'] = 'update';
			$values = $this->admin_tb_model->getData();
			foreach($values as $field => &$value) {
				switch($field) {
					// todo. 디폴트값 설정은 여기서
					/*
					   case 'g_status' : 
					   $value = form_dropdown('dr_groups[]', $user_group_sel, $selected_groups, "multiple style='height:200px;width:215px;' required");
					   break;
					 */
					default : 
						$value = htmlspecialchars($value);
				}
			}
			$assign['values'] = $values;
		} else {
			// insert
			$fields = $this->admin_tb_model->getFields();
			$values = array();
			foreach($fields as $field) {
				switch($field) {
					// todo. 디폴트값 설정은 여기서
					/*
					   case 'g_created_at' : 
					   $values[$field] = date('Y-m-d H:i:s');
					   break;
					 */
					default : 
						$values[$field] = '';
				}
			}
			$assign['values'] = $values;
		}

		$this->_view('manage/admins_detail', $assign);
	}

	public function admins_process() {
		$request = $this->input->post();

		$this->load->library('password');

		$id = $request['a_id'];
		unset($request['a_id']);

		$edit_url = '/adminpanel/manage/admins_detail/'.$id;

		$this->load->model(DBNAME.'/admin_tb_model');

		$field_list = $this->admin_tb_model->getFields();

		$data = array();
		foreach($field_list as $key) {
			if(array_key_exists($key, $request)) {
				$data[$key] = $request[$key];

				if($key == 'a_passwd'  ) {
					if(strlen($data['a_passwd']) <= 0) {
						unset($data['a_passwd']);
					} else {
						$data['a_passwd'] = $this->password->genPassword($data['a_passwd']);
					}
				} 
				continue;
			}

			if(array_key_exists($key.'_date', $request) && array_key_exists($key.'_time', $request)) {
				$data[$key] = $request[$key.'_date'].' '.$request[$key.'_time'];
			}
		}

		if($request['mode'] == 'update') {
			$data['a_updated_at'] = date('Y-m-d H:i:s');
			// todo. add update data set.



			if($this->admin_tb_model->doUpdate($id, $data)->isSuccess() == false) {
				$this->common->alert($this->admin_tb_model->getErrorMsg());
			}
			$this->common->locationhref($edit_url);
			return;
		} else if($request['mode'] == 'insert') {
			$data['a_created_at'] = date('Y-m-d H:i:s');
			$data['a_updated_at'] = date('Y-m-d H:i:s');
			// todo. add update data set.

			if($this->admin_tb_model->doInsert($data)->isSuccess() == false) {
				$this->common->alert($this->admin_tb_model->getErrorMsg());
			}
			$id = $this->admin_tb_model->getData();
			$edit_url = '/adminpanel/manage/admins_detail/'.$id;
			$this->common->locationhref($edit_url);
			return;
		} else if($request['mode'] == 'delete') {
			if($this->admin_tb_model->doDelete($id)->isSuccess() == false) {
				$this->common->alert($this->admin_tb_model->getErrorMsg());
			}
			$this->common->locationhref($edit_url);
			return;
		}
	}

	public function history(){
		$request = $this->input->get();
		$this->load->model(DBNAME.'/history_tb_model');
		$data = array();

		if(isset($request['mode']) && $request['mode'] == 'list') {
			// ajax reqeust. ==> grid list data 

			$page = $this->input->get('page');
			$limit = $this->input->get('rows');
			$_search = $this->input->get('_search');

			$params = array();
			$extra = array();

			if(isset($_GET['filters'])){
				$filters = $_GET['filters'];
				$params = $this->common->filter_to_params($filters, $_search, array('h_created_at'));
			}

			if(isset($request['sidx']) && strlen($request['sidx']) > 0) {
				$order_by = $request['sidx']." ".$request['sord'];
				$extra['order_by'] = array($order_by);
			}

			$extra['offset'] = ($page-1)*$limit;
			$extra['limit'] = $limit;

			$list = $this->history_tb_model->getList($params, $extra)->getData();

			$totalCount = $this->history_tb_model->getCount($params)->getData();

			$json_data = new stdClass;
			$json_data->rows = array();
			foreach($list as $k=>$r){
				$json_data->rows[$k]['id'] = $r['h_id'];
				$json_data->rows[$k]['cell'] = $r;
				$json_data->rows[$k]['cell']['h_serialize'] = json_encode(unserialize($json_data->rows[$k]['cell']['h_serialize']));
			}

			$json_data->total = ceil($totalCount / $limit);
			$json_data->page = $page;
			$json_data->records = count($list);

			echo json_encode($json_data);
			return;
		}

		$this->_view('manage/history', $data);
	}


	public function sms_list() {
		$this->load->model(DBNAME.'/sms_tb_model');
		$sess = $this->session->userdata('admin');
		$request = $this->input->get();

		$data = array();

		if(isset($request['mode']) && $request['mode'] == 'list') {
			// ajax reqeust. ==> grid list data 

			$page = $this->input->get('page');
			$limit = $this->input->get('rows');
			$_search = $this->input->get('_search');

			$params = array();
			$extra = array();

			if(isset($_GET['filters'])){
				$filters = $_GET['filters'];
				$params = $this->common->filter_to_params($filters, $_search, array('s_created_at'));
			}


			if(isset($request['sidx']) && strlen($request['sidx']) > 0) {
				$order_by = $request['sidx']." ".$request['sord'];
				$extra['order_by'] = array($order_by);
			}

			$extra['offset'] = ($page-1)*$limit;
			$extra['limit'] = $limit;

			$list = $this->sms_tb_model->getList($params, $extra)->getData();

			$totalCount = $this->sms_tb_model->getCount($params)->getData();

			$json_data = new stdClass;
			$json_data->rows = array();
			foreach($list as $k=>$r){
				$json_data->rows[$k]['id'] = $r['s_id'];
				$json_data->rows[$k]['cell'] = $r;
			}

			$json_data->total = ceil($totalCount / $limit);
			$json_data->page = $page;
			$json_data->records = $totalCount;

			echo json_encode($json_data);
			return;
		}
		if(isset($request['mode']) && $request['mode'] == 'edit') {
			$request = $this->input->post();

			if(isset($request['oper']) && $request['oper'] == 'add') {
				$data = $request;
				unset($data['oper']);
				unset($data['id']);

				$data['s_created_at'] = date('Y-m-d H:i:s');
				$data[''] = date('Y-m-d H:i:s');

				// todo. $request 데이터 이외 셋팅할 부분 이 아래에서 채우기. 함승목.

				if($this->sms_tb_model->doInsert($data)->isSuccess() == false) {
					print_r($this->sms_tb_model->getErrorMsg());
					return;
				}

				$act_key = $this->sms_tb_model->getData();
				$log_array = array();
				$log_array['params'] = $data;
				$this->common->write_history_log($sess, 'INSERT', $act_key, $log_array, 'sms_tb');
				return;
			}

			if(isset($request['id']) && isset($request['ids']) == false) {
				// 1 row 수정
				if($request['edit_action_is'] == 'DEL') {
					// 삭제 상태로 셋팅. 삭제.
					if($this->sms_tb_model->get($request['id'])->isSuccess()){
						$del_data = $this->sms_tb_model->getData();
						$this->sms_tb_model->doDelete($request['id']);
						$act_key = $request['id'];
						$log_array = array();
						$log_array['params'] = $del_data;
						$this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'sms_tb');
					}
					return;
				}

				// row 수정
				$request[''] = date('Y-m-d H:i:s');
				//todo. Update시 추가 셋팅값 여기서 채우기. 함승목

				$this->sms_tb_model->doUpdate($request['id'], $request);
				$act_key = $request['id'];
				$log_array = array();
				$log_array['params'] = $request;
				$this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'sms_tb');
				return;
			}

			// 일괄 상태변경

			$ids = explode(',',$request['ids']);

			if(sizeof($ids) > 0 && sizeof($request['multi_update_field_data_map']) > 0) {
				$data = $request['multi_update_field_data_map'];
				foreach($ids as $id) {
					if($request['edit_action_is'] == 'DEL') {
						if($this->sms_tb_model->get($id)->isSuccess()){
							$del_data = $this->sms_tb_model->getData();
							$this->sms_tb_model->doDelete($id);
							$act_key = $id;
							$log_array = array();
							$log_array['params'] = $del_data;
							$this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'sms_tb');
						}
					} else {
						$this->sms_tb_model->doUpdate($id, $data);
						$act_key = $id;
						$log_array = array();
						$log_array['params'] = $data;
						$this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'sms_tb');
					}
				}
				echo 'success';
			} else {
				echo 'fail';
			}
			return;

		}

		$this->_view('manage/sms_list', $data);
	}

}
?>
