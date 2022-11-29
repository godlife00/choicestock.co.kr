            <div class="alarmArea">                
                <div class="alarmList">
                    <ul>
                        <?php $cnt=0; foreach($header_data['noti_list'] as $noti_item) :
                            $noti_item['nt_url'] = str_replace('/stock/','/'.WT.'_stock/',$noti_item['nt_url']);
                            $noti_item['nt_url'] = str_replace('/search/','/'.WT.'_search/',$noti_item['nt_url']);
                        ?>
                        <li>
                            <?php if($this->session->userdata('is_paid')===FALSE && $noti_item['nt_pay'] == 'Y') :?>
                            <a href="javascript:<?=(strstr($_SERVER['HTTP_USER_AGENT'], 'HK_AOS')) ? 'HK.showToast(\'유료회원 서비스 입니다.\');':'alert(\'유료회원 서비스 입니다.\');'?>" data-modal="modal-3" class="btn_free md-trigger">
                            <?php else :?>
                            <?php
                            $url = explode('?', $noti_item['nt_url']);
                            $action = array_shift($url);
                            $param = array_pop($url);
                            $param = explode('&', $param);
                            ?>
                            <a href="javascript:fnFormSubmit('alarmForm<?=$cnt?>');">
                                <form name="alarmForm<?=$cnt?>" id="alarmForm<?=$cnt?>" method="post" action="<?=$action;?>">
                                    <?php foreach($param as $pa) :
                                        $hform = explode('=', $pa);
                                        $hnm = array_shift($hform);
                                        $hval = array_pop($hform);
                                        if($hnm == '' && $hval == '') continue;
                                    ?>
                                    <?php if($hnm == 'devk') :?>
                                    <input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
                                    <?php elseif($hnm == 'phno') :?>
                                    <input type="hidden" name="phno" value="<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY)?>">
                                    <?php else:?>
                                    <input type="hidden" name="<?=$hnm?>" value="<?=$hval?>">
                                    <?php endif;?>
                                    <?php endforeach;?>
                                </form>
                            <?php endif;?>
                                <span class="title"><?=$header_data['noti_table_map'][$noti_item['nt_table']]?></span>
                                <span class="day"><?=date('m/d', strtotime($noti_item['nt_display_date']))?></span>
                                <span class="sum">
                                <?php if($noti_item['nt_table']=='recommend_tb') :?>
                                    <?php if($this->session->userdata('is_paid')===TRUE) :?>
                                        <?=$noti_item['nt_title']?><?=($noti_item['nt_ticker_name'] !='' && $noti_item['nt_ticker'] !='') ? ' - '.$noti_item['nt_ticker_name'].'('.$noti_item['nt_ticker'].')':''?>
                                    <?php else :?>
                                        <?=$noti_item['nt_title']?><?=($noti_item['nt_ticker_name'] !='' && $noti_item['nt_ticker'] !='') ? ' '.iconv_substr($noti_item['nt_ticker_name'], 0, 1, 'utf-8').'<span class="remark">* * * *</span>':''?>
                                    <?php endif;?>
                                <?php else :?>
                                <?=$noti_item['nt_title']?>
                                <?php endif;?>
                                </span>
                            </a>
                        </li>
                        <?php $cnt++;endforeach; ?>
                    </ul>
                </div>
                <!-- //alarmList -->
            </div>