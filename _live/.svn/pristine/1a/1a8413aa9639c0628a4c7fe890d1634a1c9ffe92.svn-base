<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Api extends CI_Controller {
    private $allow_ips = array(
        '54.213.61.222',
    );

    public function setTickerPrice() {
        $request = $this->input->post();
        if ( ! (isset($_SERVER['REMOTE_ADDR']) && in_array($_SERVER['REMOTE_ADDR'], $this->allow_ips))) {
            return;
        }

        if( ! isset($request['tickers'])) {
            return;
        }
        $tickers = $request['tickers'];

        foreach($tickers as $ticker) {
            if( ! isset($ticker['ticker'])) continue;
            file_put_contents(WEBDATA.'/current_data/'.$ticker['ticker'], serialize($ticker));
        }

        /*
        $tickers[0] 구조 : 
        Array
        (
            [currency] => USD
            [ticker] => MSFT
            [last_price] => 202.8
            [diff_rate] => 12.34
            [diff_price] => 0.13
            [updated_at] => 1595605525
        )
        */
    }

    public function getTickerPrice($tickers) {
        $tickers = explode('_', trim(strtoupper($tickers)));

        $result = array();
        foreach($tickers as $ticker) {
            $item = $this->common->get_sync_info($ticker);
            if( !sizeof($item)) {
                continue;
            }
            $result[$item['ticker']] = $item;
        }
        echo json_encode($result);
    }
}
