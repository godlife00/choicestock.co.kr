<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');
/**
 * CodeIgniter
 *
 * An open source application development framework for PHP 4.3.2 or newer
 *
 * @package		CodeIgniter
 * @author		ExpressionEngine Dev Team
 * @copyright	Copyright (c) 2006, EllisLab, Inc.
 * @license		http://codeigniter.com/user_guide/license.html
 * @link		http://codeigniter.com
 * @since		Version 1.0
 * @filesource
 */


// ------------------------------------------------------------------------


/**
 * Pagination Class
 *
 * @package		CodeIgniter
 * @subpackage	Libraries
 * @category	Pagination
 * @author		ExpressionEngine Dev Team
 * @link		http://codeigniter.com/user_guide/libraries/pagination.html
 */
class Pagination {
	var $suffix				= ''; // A custom suffix added to the path.

	var $base_url			= ''; // The page we are linking to
	var $total_rows  		= ''; // Total number of items (database results)
	var $per_page	 		= 10; // Max number of items you want shown per page
	var $num_links			= 9; // Number of "digit" links to show before/after the currently viewed page
	var $cur_page	 		= 0; // The current page being viewed
	var $first_link   		= 'FIRST';
	var $next_link			= 'NEXT';
	var $prev_link			= 'PREV';
	var $last_link			= 'LAST';
	var $uri_segment		= 3;
	var $full_tag_open		= '<div class="paging">';
	var $full_tag_close		= '</div>';
	var $first_tag_open		= '';
	var $first_tag_close	= '&nbsp;';
	var $last_tag_open		= '&nbsp;';
	var $last_tag_close		= '';
	var $cur_tag_open		= '<strong>';
	var $cur_tag_close		= '</strong>';
	var $next_tag_open		= '&nbsp;';
	var $next_tag_close		= '&nbsp;';
	var $prev_tag_open		= '&nbsp;';
	var $prev_tag_close		= '';
	var $num_tag_open		= '&nbsp;';
	var $num_tag_close		= '';


	// Added By Tohin
	var $js_rebind 			= '';
	var $div                = '';
	var $postVar            = '';
    var $additional_param	= '';
    
   // Added by Sean
   var $anchor_class		= '';
   var $show_count      = false;
   var $CI;


	/**
	 * Constructor
	 *
	 * @access	public
	 * @param	array	initialization parameters
	 */
	function Pagination($params = array())
	{
		if (count($params) > 0)
		{
			$this->initialize($params);		
		}

		if(isset($_COOKIE['lang']) == false || strlen($_COOKIE['lang']) < 1) {
			$_COOKIE['lang'] = 'US';
		}

		$this->CI =& get_instance();	
		$this->first_link = $this->CI->tt->t($this->first_link);
		$this->next_link = $this->CI->tt->t($this->next_link);
		$this->prev_link = $this->CI->tt->t($this->prev_link);
		$this->last_link = $this->CI->tt->t($this->last_link);




		log_message('debug', "Pagination Class Initialized");
	}


	// --------------------------------------------------------------------


	/**
	 * Initialize Preferences
	 *
	 * @access	public
	 * @param	array	initialization parameters
	 * @return	void
	 */
	function initialize($params = array())
	{
		if (count($params) > 0)
		{
			foreach ($params as $key => $val)
			{
				if (isset($this->$key))
				{
					$this->$key = $val;
				}
			}		
		}


		// Apply class tag using anchor_class variable, if set.
		if ($this->anchor_class != '')
		{
			$this->anchor_class = 'class="' . $this->anchor_class . '" ';
		}
	}




	/**
	 * Generate the pagination links
	 *
	 * @access	public
	 * @return	string
	 */	
	function create_links()
	{
		// If our item count or per-page total is zero there is no need to continue.
		if ($this->total_rows == 0 OR $this->per_page == 0)
		{
		   return '';
		}


		// Calculate the total number of pages
		$num_pages = ceil($this->total_rows / $this->per_page);


		// Is there only one page? Hm... nothing more to do here then.
		/*
		if ($num_pages == 1)
		{
            $info = 'Showing : ' . $this->total_rows;
			return $info;
		}
		*/


		// Determine the current page number.		
		$this->uri_segment = $this->CI->uri->total_segments();
		if ($this->CI->uri->segment($this->uri_segment) != 0)
		{
			// 처음 페이지가 로딩될 때는 /page/1 파라미터가 붙지 않아서 고정으로 1로 처리되게 함. 
			if($this->CI->uri->segment($this->uri_segment-1) != 'page') {
				$this->cur_page = '1';
			} else {
				$this->cur_page = $this->CI->uri->segment($this->uri_segment);


				// Prep the current page - no funny business!
				$this->cur_page = (int) $this->cur_page;
			}
		}


		$this->num_links = (int)$this->num_links;


		if ($this->num_links < 1)
		{
			show_error('Your number of links must be a positive number.');
		}


		if ( ! is_numeric($this->cur_page))
		{
			$this->cur_page = 0;
		}


		// Is the page number beyond the result range?
		// If so we show the last page
		if ($this->cur_page > $this->total_rows)
		{
			$this->cur_page = ($num_pages - 1) * $this->per_page;
		}


		$uri_page_number = $this->cur_page;
		$this->cur_page = floor(($this->cur_page/$this->per_page) + 1);


		// Calculate the start and end numbers. These determine
		// which number to start and end the digit links with
		/*
		$start = (($this->cur_page - $this->num_links) > 0) ? $this->cur_page - ($this->num_links - 1) : $this->cur_page;
		$end   = (($this->cur_page + $this->num_links) < $num_pages) ? $this->cur_page + $this->num_links : $num_pages;
		*/
		///*
		$mid = $num_pages - $this->num_links;
		$start = ($this->cur_page  > $mid) ? $num_pages - $this->num_links : $this->cur_page;
		$end   = (($this->cur_page + $this->num_links) < $num_pages) ? $this->cur_page + $this->num_links : $num_pages;

		// Add a trailing slash to the base URL if needed
		$this->base_url = rtrim($this->base_url, '/') .'/';


  		// And here we go...
		$output = '';


      // SHOWING LINKS
      if ($this->show_count)
      {
         $curr_offset = $this->CI->uri->segment($this->uri_segment);
         $info = 'Showing ' . ( $curr_offset + 1 ) . ' to ' ;


         if( ( $curr_offset + $this->per_page ) < ( $this->total_rows -1 ) )
            $info .= $curr_offset + $this->per_page;
         else
            $info .= $this->total_rows;


         $info .= ' of ' . $this->total_rows . ' | ';


         $output .= $info;
      }


		// Render the "First" link
		//if  ($this->cur_page > $this->num_links)
		if  (($num_pages > $this->num_links) && ($this->cur_page >= ($num_pages -$this->num_links)))
		{
			$output .= $this->first_tag_open 
					. $this->getAJAXlink( '' , $this->first_link)
					. $this->first_tag_close; 
		}


		// Render the "previous" link
		if  ($this->cur_page != 1)
		{
			$i = $uri_page_number - $this->per_page;
			if ($i == 0) $i = '';
			$output .= $this->prev_tag_open 
					. $this->getAJAXlink( $i, $this->prev_link )
					. $this->prev_tag_close;
		}


		// Write the digit links
		//for ($loop = $start -1; $loop <= $end; $loop++)
		for ($loop = $start; $loop <= $end; $loop++)
		{
			$i = ($loop * $this->per_page) - $this->per_page;


			if ($i >= 0)
			{
				if ($this->cur_page == $loop)
				{
					$output .= $this->cur_tag_open.$loop.$this->cur_tag_close; // Current page
				}
				else
				{
					$n = ($i == 0) ? '' : $i;
					$output .= $this->num_tag_open
						. $this->getAJAXlink( $n, $loop )
						. $this->num_tag_close;
				}
			}
		}


		// Render the "next" link
		if ($this->cur_page < $num_pages)
		{
			$output .= $this->next_tag_open 
				. $this->getAJAXlink( $this->cur_page * $this->per_page , $this->next_link )
				. $this->next_tag_close;
		}


		// Render the "Last" link
		if (($this->cur_page + $this->num_links) < $num_pages)
		{
			$i = (($num_pages * $this->per_page) - $this->per_page);
			$output .= $this->last_tag_open . $this->getAJAXlink( $i, $this->last_link ) . $this->last_tag_close;
		}


		// Kill double slashes.  Note: Sometimes we can end up with a double slash
		// in the penultimate link so we'll kill all double slashes.
		$output = preg_replace("#([^:])//+#", "\\1/", $output);


		// Add the wrapper HTML if exists
		$output = $this->full_tag_open.$output.$this->full_tag_close;


		return $output;		
	}





	// --------------------------------------------------------------------


	/**
	 * Generate the pagination links
	 *
	 * @access	public
	 * @return	string
	 */	
	function create_photo_reviews_links()
	{
		// If our item count or per-page total is zero there is no need to continue.
		if ($this->total_rows == 0 OR $this->per_page == 0)
		{
		   return '';
		}


		// Calculate the total number of pages
		$num_pages = ceil($this->total_rows / $this->per_page);


		// Is there only one page? Hm... nothing more to do here then.
		/*
		if ($num_pages == 1)
		{
            $info = 'Showing : ' . $this->total_rows;
			return $info;
		}
		*/


		// Determine the current page number.		
        $segments = $this->CI->uri->segment_array();
		if (isset($segments[$this->uri_segment]) && $segments[$this->uri_segment] != 0)
		{
			// 처음 페이지가 로딩될 때는 /page/1 파라미터가 붙지 않아서 고정으로 1로 처리되게 함. 
            $page_param_names = array('page', 'sepage');
			if(in_array($this->CI->uri->segment($this->uri_segment-1), $page_param_names) == false) {
				$this->cur_page = '1';
			} else {
				$this->cur_page = $this->CI->uri->segment($this->uri_segment);
				// Prep the current page - no funny business!
				$this->cur_page = (int) $this->cur_page;
			}
		}else {
		    $this->cur_page = 1;
        }

		$this->num_links = (int)$this->num_links;


		if ($this->num_links < 1)
		{
			show_error('Your number of links must be a positive number.');
		}


		if ( ! is_numeric($this->cur_page))
		{
			$this->cur_page = 0;
		}


		// Is the page number beyond the result range?
		// If so we show the last page
		if ($this->cur_page > $this->total_rows)
		{
			$this->cur_page = ($num_pages - 1) * $this->per_page;
		}


		$uri_page_number = $this->cur_page;
		$this->cur_page = floor(($this->cur_page/$this->per_page) + 1);


		// Calculate the start and end numbers. These determine
		// which number to start and end the digit links with
		/*
		$start = (($this->cur_page - $this->num_links) > 0) ? $this->cur_page - ($this->num_links - 1) : $this->cur_page;
		$end   = (($this->cur_page + $this->num_links) < $num_pages) ? $this->cur_page + $this->num_links : $num_pages;
		*/
		///*
		$mid = $num_pages - $this->num_links;
		$start = ($this->cur_page  > $mid) ? $num_pages - $this->num_links : $this->cur_page;
		$end   = (($this->cur_page + $this->num_links) < $num_pages) ? $this->cur_page + $this->num_links : $num_pages;

		// Add a trailing slash to the base URL if needed
		$this->base_url = rtrim($this->base_url, '/') .'/';


  		// And here we go...
		$output = '';


      // SHOWING LINKS
      if ($this->show_count)
      {
         $curr_offset = $this->CI->uri->segment($this->uri_segment);
         $info = 'Showing ' . ( $curr_offset + 1 ) . ' to ' ;


         if( ( $curr_offset + $this->per_page ) < ( $this->total_rows -1 ) )
            $info .= $curr_offset + $this->per_page;
         else
            $info .= $this->total_rows;


         $info .= ' of ' . $this->total_rows . ' | ';


         $output .= $info;
      }


		// Render the "First" link
		//if  ($this->cur_page > $this->num_links)
		if  (($num_pages > $this->num_links) && ($this->cur_page >= ($num_pages -$this->num_links)))
		{
			$output .= $this->first_tag_open 
					. $this->getAJAXlink( '' , $this->first_link)
					. $this->first_tag_close; 
		}


		// Render the "previous" link
		if  ($this->cur_page != 1)
		{
			$i = $uri_page_number - $this->per_page;
			if ($i == 0) $i = '';
			$output .= $this->prev_tag_open 
					. $this->getAJAXlink( $i, $this->prev_link )
					. $this->prev_tag_close;
		}


		// Write the digit links
		//for ($loop = $start -1; $loop <= $end; $loop++)
		for ($loop = $start; $loop <= $end; $loop++)
		{
			$i = ($loop * $this->per_page) - $this->per_page;


			if ($i >= 0)
			{
				if ($this->cur_page == $loop)
				{
					$output .= $this->cur_tag_open.$loop.$this->cur_tag_close; // Current page
				}
				else
				{
					$n = ($i == 0) ? '' : $i;
					$output .= $this->num_tag_open
						. $this->getAJAXlink( $n, $loop )
						. $this->num_tag_close;
				}
			}
		}


		// Render the "next" link
		if ($this->cur_page < $num_pages)
		{
			$output .= $this->next_tag_open 
				. $this->getAJAXlink( $this->cur_page * $this->per_page , $this->next_link )
				. $this->next_tag_close;
		}


		// Render the "Last" link
		if (($this->cur_page + $this->num_links) < $num_pages)
		{
			$i = (($num_pages * $this->per_page) - $this->per_page);
			$output .= $this->last_tag_open . $this->getAJAXlink( $i, $this->last_link ) . $this->last_tag_close;
		}


		// Kill double slashes.  Note: Sometimes we can end up with a double slash
		// in the penultimate link so we'll kill all double slashes.
		$output = preg_replace("#([^:])//+#", "\\1/", $output);


		// Add the wrapper HTML if exists
		$output = $this->full_tag_open.$output.$this->full_tag_close;


		return $output;		
	}



    /****
    Reviews Deatil Pageing
    ****/
    public function create_reviews_links($url, $query_string, $total, $scale, $page, $p_num) {

        $total_page = ceil($total/$scale);
        $page_list = ceil($page/$p_num)-1;


        $navigation = '<div class="review_paging">';

        // 페이지 리스트의 첫번째가 아닌 경우엔 [1]...[prev] 버튼을 생성한다.
        if ($page_list>0){
            $prev_page = ($page_list-1)*$p_num+1;

            $navigation .= ' <a class="left" href="'.$url.'?page='.$prev_page.'&'.$query_string.'"><img src="/shop_assets/img/btn/btn_paging_left.gif" alt="prev" /></a> ';
            $navigation .= ' <a href="'.$url.'?page=1&'.$query_string.'">1 ......</a>';
        }

        // 페이지 목록 가운데 부분 출력
        $page_end=($page_list+1)*$p_num;
        if ($page_end>$total_page) $page_end=$total_page;

        for ($i=$page_list*$p_num+1; $i<=$page_end; $i++){
            if ($i == $page) {
                $navigation .= ' <strong>'.$i.'</strong> ';
            } else {
                $navigation .= ' <a href="'.$url.'?page='.$i.'&'.$query_string.'">'.$i.'</a> ';
            }
        }

        // 페이지 목록 맨 끝이 $total_page 보다 작을 경우에만, [next]...[$total_page] 버튼을 생성한다.
        if ($page_end<$total_page){
            $next_page = ($page_list+1)*$p_num+1;

            $navigation .= '<a href="'.$url.'?page='.$total_page.'&'.$query_string.'">...... '.$total_page.'</a>';
            $navigation .= ' <a class="right" href="'.$url.'?page='.$next_page.'&'.$query_string.'"><img src="/shop_assets/img/btn/btn_paging_right.gif" alt="nsext" /></a> ';
        }

        $navigation .= '</div>';

        return $navigation;
    }


	function getAJAXlink( $count, $text, $type=null) {
		$add_class = '';
		switch($text) {
			case $this->CI->tt->t('PREV') : 
						$add_class = 'class="prev"';
						break;
			case $this->CI->tt->t('NEXT') : 
						$add_class = 'class="next"';
						break;
			case $this->CI->tt->t('FIRST') : 
						$add_class = 'class="first"';
						break;
			case $this->CI->tt->t('LAST') : 
						$add_class = 'class="last"';
						break;

            // 모바일 페이징처리 /account/order
			case 'M_PREV' : 
						$add_class = 'class="btn_left"';
                        $text = '<img src="/mobile_assets/img/btn/btn_paging_left.png" alt="Prev" />';
						break;
			case 'M_NEXT' : 
						$add_class = 'class="btn_right"';
                        $text = '<img src="/mobile_assets/img/btn/btn_paging_right.png" alt="Next" />';
						break;		
		}


        if($this->div == '') {
            return '<a href="'. $this->anchor_class . ' ' . $this->base_url . $count . $this->additional_param. '" '.$add_class.'>'. $text .'</a>';
        }


            
        if( $this->additional_param == '' ) {
        	$this->additional_param = "{'t' : 't'}";
        }



		return "<a href=\"#\"
		         " . $this->anchor_class . " " . $add_class . "
					onclick=\"$.post('". $this->base_url . $count ."', ". $this->additional_param .", function(data){
					$('". $this->div . "').html(data);" . $this->js_rebind ."; }); return false;\">"
				. $text .'</a>';
	}


}
// END Pagination Class
?>
