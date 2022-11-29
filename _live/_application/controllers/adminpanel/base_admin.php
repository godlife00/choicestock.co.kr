<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

abstract class BaseAdmin_Controller extends CI_Controller {

	protected $sess;
	function __construct() {
		parent::__construct();
		$this->load->library('user_agent');
		

		$exist_data = $this->session->all_userdata();
		if(!(isset($exist_data['admin']) && sizeof($exist_data['admin']) > 0)) {
			$allow_uris = array(
					'/adminpanel/account/login',
					'/adminpanel/account/login_action'
					);
			$url = array_shift(explode('?', $_SERVER['REQUEST_URI'], 2));
			if(in_array($url, $allow_uris) == false) {
				$this->common->locationhref('/adminpanel/account/login?url='.base64_encode($url));
				exit;
			}
		}

		$this->sess = isset($exist_data['admin']) ? $exist_data['admin'] : '';
	}

	public function _view($view, $data){
		$data['sess_data'] = $this->session->all_userdata();
		$this->load->view('/adminpanel/'.$view, $data); 
		$this->load->view('/adminpanel/inc_footer');
	}

	
}

?>
