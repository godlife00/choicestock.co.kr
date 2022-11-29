<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Datatable {
    /*
        Orignal Source >
            https://github.com/DataTables/DataTables/blob/master/examples/server_side/scripts/ssp.class.php
        Columns example >
           $columns = array(
               array('db'=>'u_id', 'dt'=>'u_id'),
               array('db'=>'u_firstname', 'dt'=>'u_firstname'),
               array('db'=>'u_lastname', 'dt'=>'u_lastname'),
               array('db'=>'u_loginid', 'dt'=>'u_loginid'),
               array('db'=>'u_group', 'dt'=>'u_group'),
               array('db'=>'ua_telephone', 'dt'=>'ua_telephone'),
               array('db'=>'ua_postcode', 'dt'=>'ua_postcode'),
               array('db'=>'u_nation', 'dt'=>'u_nation'),               
               array('db'=>'u_get_email', 'dt'=>'u_get_email')          
           );

        */


    function set_limit($req){
        $extra = array();
        if(isset($req['start']) && $req['length'] != -1){
            $extra['limit'] = $req['length'];
            $extra['offset'] = $req['start'];
        }
        return $extra;
    }
    
    function set_order($req, $columns){
        $extra['order_by'] =  array();
        if(isset($req['order']) && count($req['order'])){
            $dtColumns = $this->pluck($columns, 'dt');

            for($i=0; $i<count($req['order']); $i++){
                $columnIdx = intval($req['order'][$i]['column']);
                $reqColumn = $req['columns'][$columnIdx];
                
                $columnIdx = array_search($reqColumn['data'], $dtColumns);
                $column = $columns[$columnIdx];

                if($reqColumn['orderable'] == 'true'){
                    $dir = $req['order'][$i]['dir'] === 'asc'?'ASC':'DESC';
                    $extra['order_by'][] = $column['db'].' '.$dir;
                }
            }
        }
        return $extra;
    }

    function set_filter($req, $columns){
        $params = array();
        $dtColumns = $this->pluck($columns, 'dt');

        if(isset($req['search']) && $req['search']['value'] != ''){
            $str = $req['search']['value'];
            for($i=0; $i<count($req['columns']); $i++){
                $reqColumn = $req['columns'][$i];
                $columnIdx = array_search($reqColumn['data'], $dtColumns);
                $column = $columns[$columnIdx];

                if($reqColumn['searchable'] == 'true'){
                    $params['or_raw'][] = ($column['db'].' LIKE "%'.$str.'%"');
                }
            }
        }

        for($i=0; $i<count($req['columns']); $i++){
            $reqColumn = $req['columns'][$i];
            $columnIdx = array_search($reqColumn['data'], $dtColumns);
            $column = $columns[$columnIdx];

            $str = $reqColumn['search']['value'];
            
            if($reqColumn['searchable'] == 'true' && $str != ''){
                $params['like'][$column['db']] = $str;
            }
        }

        return $params;
    }

    function pluck($arr, $prop){
        $out = array();
        for($i=0; $i<count($arr); $i++){
            $out[] = $arr[$i][$prop];
        }
        return $out;
    }
}
?>
