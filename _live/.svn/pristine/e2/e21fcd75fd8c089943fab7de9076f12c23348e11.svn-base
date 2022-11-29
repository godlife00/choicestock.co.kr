<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once dirname(__FILE__).'/base_mobile.php';
class Master extends BaseMobile_Controller {
    function __construct() {
        parent::__construct();
    }

    public function index() {
        $this->common->locationhref('/master/lists');
    }
    public function lists() {
        $this->_view('/master/lists');
    }
    public function view() {
        $this->_view('/master/view');
    }
}
