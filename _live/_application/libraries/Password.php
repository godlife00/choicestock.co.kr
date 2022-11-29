<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Password{
    public function __construct(){
    }

    function genPassword($pw){
        $merge_token = $this->genRandomChar();
        $md5_pw = md5($merge_token.$pw);

        $complete_pw = $md5_pw.":".$merge_token;

        return $complete_pw;
    }

    function genRandomChar(){
        $str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $str .= "abcdefghijklmnopqrstuvwxyz";
        $str .= "0123456789";

        $shuffled_str = str_shuffle($str);
        return substr($shuffled_str, 0, 2);
    }

    function authPassword($pw, $complete_pw){
        $explode_pw = explode(":", $complete_pw);

        $user_pw_md5 = md5($explode_pw[1].$pw);
        if($user_pw_md5 == $explode_pw[0]) return TRUE; //same password
        else return FALSE;  //not same password
    }

    function genResetPasswordToken($uid, $upw){
        $this->CI = & get_instance();
        $this->CI->load->library('encrypt');

        $date = strtotime(date("Y/m/d H:i:s"));
        $token_info = array($date, $uid, $upw);
        $serialize_token = serialize($token_info);
        
        $token = $this->CI->encrypt->encode($serialize_token);

        return $token;
    }

    function decodeResetPasswordToken($token){
        $this->CI = & get_instance();
        $this->CI->load->library('encrypt');

        $serialize_token = $this->CI->encrypt->decode($token);
        $token_info = unserialize($serialize_token);

        return $token_info;
    }
}
?>
