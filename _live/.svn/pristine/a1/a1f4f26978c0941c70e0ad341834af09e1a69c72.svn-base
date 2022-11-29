						<?php $cnt=0; foreach( (is_array($list) && sizeof($list) > 0) ? $list : array() as $val) : ?>
						<?php if($this->session->userdata('is_paid')===FALSE) :?>
						<?php	if($cnt>5) break;?>
						<?php endif;?>
                        <tr>
                            <td class="title">
                                <a href="/<?=X1?>_search/invest_charm/<?=$val['m_ticker']?>"><?=$val['m_korname']?><span class="ticker"><?=$val['m_ticker']?></span></a>
                            </td>
                            <td>
                                <span><?=$val['m_biz_total_score']?></span>
                            </td>
                            <td>
                                <span><?=$val['m_biz_dividend_score']?></span>
                            </td>
                            <td>
                                <span><?=$val['m_biz_moat_score']?></span>
                            </td>
                            <td>
                                <span><?=$val['m_biz_safety_score']?></span>
                            </td>
                            <td>
                                <span><?=$val['m_biz_growth_score']?></span>
                            </td>
                            <td>
                                <span><?=$val['m_biz_cashflow_score']?></span>
                            </td>
                        </tr>
                        <?php $cnt++; endforeach; ?>
