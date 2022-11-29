<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

abstract class BaseBusiness extends CI_Model {
	protected $is_success = true;
	protected $result_data = array();
	protected $error_message = '';


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
