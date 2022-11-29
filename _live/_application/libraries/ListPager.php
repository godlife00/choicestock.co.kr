<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');
/**
 * ListPager
 * Author : 함승목
 * Date   : 2016-11-28
*/


// todo 템플릿화
class ListPager {
    protected $ci;
    private $url = '';

    function __construct() {
        $this->ci = &get_instance();
		$this->ci->load->library('tt');
	}

    // 어드민 페이징 처리
    public function ViewPageNumber($pPage, $pTotalRow, $pSearch = "", $pMaxRow = 20, $pMaxPage = 10, $varname='page')
    {
        $total_page = 1;

        if ($pTotalRow <= $pMaxRow) return;

        $total_page = ceil($pTotalRow / $pMaxRow);
        $block = ceil($pPage / $pMaxPage);
        $total_block = ceil($total_page / $pMaxPage);
        $next_block = $block * $pMaxPage + 1;
        $prev_block = ($block - 2) * $pMaxPage + 1;
        $start_page = ($block - 1) * $pMaxPage + 1;

        $ret = '';

        if ($block > 1) {
            $ret = "<li class='first'><A href='{$this->url}?$varname=1&$pSearch'><span>".$this->ci->tt->t('FIRST')."</span></a></li> ";
            $ret .= "<li class='prev'><A href='{$this->url}?$varname=$prev_block&$pSearch'><span>".$this->ci->tt->t('PREV')."</span></a></li> ";
        }

        if ($block == $total_block) {
            $viewpagecount = $total_page - $start_page + 1;
		} else {
            $viewpagecount = $pMaxPage;
		}

        for($i = $start_page;$i < $start_page + $viewpagecount; $i++)
        {
            if ($pPage == $i)
            {
                $ret .= "<li class='on'><A href='{$this->url}?$varname=$i&$pSearch'><span>$i</span></a></li>";
            }
            else
            {
                $ret .= "<li><A href='{$this->url}?$varname=$i&$pSearch'><span>$i</span></a></li>";
            }
        }

        if ($total_block > 1 && $block < $total_block){
            $ret .= "<li class='next'><A href='{$this->url}?$varname=$next_block&$pSearch'><span>".$this->ci->tt->t('NEXT')."</span></a></li>";
            $ret .= "<li class='last'><A href='{$this->url}?$varname=$total_page&$pSearch'><span>".$this->ci->tt->t('LAST')."</span></a></li>";
        }

        if(strlen($ret) > 0) {
            $ret = '<div class="paging"><ul>'.$ret.'</ul></div>';
        }

        return $ret;
    }
}
