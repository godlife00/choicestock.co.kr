<?php
// SimplePHPExcel::arrayToCSV($arr) 을 사용할거라면,
// style 의 'image' 항목으로 URL(http://~~)을 사용할거라면!!
// chmod 777 로 PHPExcel폴더 아래 temp 만들것.
define('TEMP_CSV_SAVE_PATH', realpath(dirname(__FILE__).'/PHPExcel/temp')); 


/************************************
Class : SimplePHPExcel
제작자 : 함승목
제작일 : 2013.3.17.
사용방법 : 

	include './lib/PHPExcel.php';

	SimplePHPExcel::init(
		$creator='Hamt service', 
		$title='Test data', 
		$subject='this is Test data', 
		$description='This Hamt SimplePHPExcel Test Data.'
	);

	$position_data_array = array(
			'A1' => array(
						array('제목'),
						array('안내문구'),
						array(
							0 => '세번째줄 첫열이에요',
							7 => '세번째줄 8번째 열이에요'
						)
					),
			'A5' => array(
						array('순서', '이름', '학번', '학과', '나이', '주소'),
						array(1, '함승목', '9941157', '정보전산', '34', '서울 어디어디..')
					),

			'I6' => array(
						array('',   2010,   2011,   2012, 'aaaa'),
						array('Q1',   12,   15,     21, 'asdf'),
						array('Q2',   56,   73,     86, 'asdfasdfa'),
						array('Q3',   52,   61,     69, 'aadffd'),
						array('Q4',   30,   32,     0, 'afafafaf'),
			)
	);
	$style = array(
				'merge'			=> 'A1:F1', // A1:S1, C1:E1 ...
				'fontColor'		=> 'A5:F5,A6,D6#ff0000; E6:F6#ffff00; A1#336699', // A1:S1,U1:Z1#ff0000; C2:E2#3399aa ...
				'fontSize'		=> 'A1#22; A2:H3,A5#15', // A1:S1,U1:Z1#16; C1:E1#9 ...
				'fontBold'		=> 'A1', // A1:S1, C1:E1 ...
				'bgColor'		=> 'A5:F5#99ddff; A6:F100#f1f1f1', // A1:S1,U1:Z1#ff0000; C2:E2#3399aa ...
				'border'		=> 'A5:F20#allborders', // A1:S1,U1:Z1#allborders; C1:E1#outline; C1:E1#inside ... (allborders, inside, outline 중 1)
				'format'		=> 'E6#rate00; C6:USD', // A1:S1,U1:Z1#USD; C1:E1#RATE00, .. (USD, RATE00), 
				'align'			=> 'A1,A3,A5:F10#center; A2#left;', // A1:S1,U1:Z1#center; C1:E1#left; C1:E1#right .. (center, left, right 중 1)
				'autoWidth'		=> '', // A:S, C:E ...
				'width'			=> 'B#100; D#200; F#250;', // A:S,U:Z#160; C:E#90 ...	# 뒤는 픽셀.
				'height'		=> '1,2:3#25', // 5:99, 101:200#20; 1#40 ...			# 뒤는 픽셀
				'frame'			=> 'B6', // D5 처럼 하나만. 틀고정 기준 셀.
				'use_filter'	=> 'B5:F10', // A3:C77, H3:K77 형태.  오토 필터 적용.
				'string'		=> 'A2:A9,B2:B9', // A1:S1, C1:E1 ... 꼭 text로 표현해야할 경우만 . 00000011을 그대로 나타내야 할 경우와 같이.
				'image'			=> 'C9#http://static.naver.net/www/u/2010/0611/nmms_215646753.gif#width:100', // 셀번호# [path|url] # [width|height]:사이즈(픽셀)


				'chart'			=> array(
										array(
												'title'         => 'Wantyou',
												'type'          => 'bar',               // 차트타입 [bar | line]
												'labels'        => 'J6, K6, L6',        // 범례를 그릴 영역
												'categories'    => 'I7:I10',             // X축에 해당하는 영역
												'values'        => 'J7:J10, K7:K10, L7:L10',   // label, x축을 제외한 data 영역 
												'top_position'  => 'I12',                // chart 그릴 top left 위치
												'bottom_position'   => 'N24',           // chart 그릴 bottom right 위치
											 ),
										array(
												'title'         => 'Wantyou2',
												'type'          => 'line',              // 차트타입
												'labels'        => 'J6, K6, L6',        // 범례를 그릴 영역
												'categories'    => 'I7:I10',             // X축에 해당하는 영역
												'values'        => 'J7:J10, K7:K10, L7:L10',   // label, x축을 제외한 data 영역 
												'top_position'  => 'I26',               // chart 그릴 top left 위치
												'bottom_position'   => 'N38',           // chart 그릴 bottom right 위치
											 )
									),
			);

	SimplePHPExcel::setSheet($position_data_array, $style, '테스트 시트1', 0);
	SimplePHPExcel::setSheet($position_data_array, $style, '테스트 시트2', 1);

	SimplePHPExcel::doDownload('hamt_test');
	exit;
************************************/

define('WIDTH_PX_RATE', 0.1246966732);
define('HEIGHT_PX_RATE', 0.75);

class SimplePHPExcel {
	private static $objPHPExcel;

	private static $creator = 'Hamt SimplePHPExcel';
	private static $title = 'Hamt SimplePHPExcel title';
	private static $subject = 'Hamt SimplePHPExcel Subject';
	private static $description = 'Hamt SimplePHPExcel Description';
	private static $junk_files = array();
	private static $chart_use = false;

    private function __construct() {}
								
	// 속성값 설정
	public static function init($creator='', $title='', $subject='', $description='') {
		$creator = trim($creator);
		$title = trim($title);
		$subject = trim($subject);
		$description = trim($description);

		if(strlen($creator) > 0) {
			self::setCreator($creator);
		}
		if(strlen($title) > 0) {
			self::setTitle($title);
		}
		if(strlen($subject) > 0) {
			self::setSubject($subject);
		}
		if(strlen($description) > 0) {
			self::setDescription($description);
		}

		self::$objPHPExcel = new PHPExcel();
		self::$objPHPExcel->getProperties()->setCreator(self::$creator)
														 ->setTitle(self::$title)
														 ->setSubject(self::$subject)
														 ->setDescription(self::$description);
	}

	public static function setSheet($position_data_array, $styleInfo, $sheetTitle, $sheetIndex=0) {
		/*
		@ Param 설명.

		****   $position_data_array 형태  ****

		$position_data_array = array(
		'A1' => array(
					array('제목'),
					array('안내문구'),
					array(
						0 => '세번째줄 첫열이에요',
						7 => '세번째줄 8번째 열이에요'
					)
				),
		'A5' => array(
					array('순서', '이름', '학번', '학과', '나이', '주소'),
					array(1, '함승목', '9941157', '정보전산', '34', '서울 어디어디..')
				)
		)

		형테로 좌상단 좌표를 key, 가로로 채워질 데이터 배열들을 배열로 던질것.





		****  $styleInfo 형태 ****

		$styleInfo = array( // 파라메터 형태. 없는건 빼도 됨.
			'merge'			=> '', // A1:S1, C1:E1 ...
			'fontColor'		=> '', // A1:S1,U1:Z1#ff0000; C2:E2#3399aa ...
			'fontSize'		=> '', // A1:S1,U1:Z1#16; C1:E1#9 ...
			'fontBold'		=> '', // A1:S1, C1:E1 ...
			'bgColor'		=> '', // A1:S1,U1:Z1#ff0000; C2:E2#3399aa ...
			'border'		=> '', // A1:S1,U1:Z1#allborders; C1:E1#outline; C1:E1#inside ... (allborders, inside, outline 중 1)
			'format'		=> '', // A1:S1,U1:Z1#USD; C1:E1#RATE00, .. (USD, RATE00, 
			'align'			=> '', // A1:S1,U1:Z1#center; C1:E1#left; C1:E1#right .. (center, left, right 중 1)
			'autoWidth'		=> '', // A:S, C:E ...
			'width'			=> '', // A:S,U:Z#160; C:E#90 ... (px단위)
			'height'		=> '', // 5:99, 101:200#20; 1#30 ... (px단위)
			'frame'			=> '', // D5 처럼 하나만. 틀고정 기준 셀.
			'use_filter'	=> '', // A3:C77, H3:K77 형태.  오토 필터 적용.
			'image'			=> 'C9#http://static.naver.net/www/u/2010/0611/nmms_215646753.gif#width:100', // 셀번호# [path|url] # [width|height]:사이즈(픽셀)
		);

		위 내용을 사용단에서 복사하여 필요한 설정들을 채울것

		*/
		if(self::$objPHPExcel->getSheetCount()-1 < $sheetIndex) {
			self::$objPHPExcel->createSheet($sheetIndex);
		}
		self::$objPHPExcel->setActiveSheetIndex($sheetIndex);
		self::$objPHPExcel->getActiveSheet()->setTitle($sheetTitle);

		


		


		// border 항목 # 뒤에 올 수 있는 것들.
		$border_types = array('allborders', 'inside', 'outline'); 


		// format 항목 # 뒤에 올 수 있는 것들. PHPExcel/Style/NumberFormat.php 의 const를 확인하여
		// 필요한 항목은 추가하여 사용하자.
		$format_type_map = array(	
							'USD'		=> PHPExcel_Style_NumberFormat::FORMAT_CURRENCY_USD_SIMPLE,
							'USD_RED'	=> PHPExcel_Style_NumberFormat::FORMAT_CURRENCY_USD_RED,
							'RATE00'	=> PHPExcel_Style_NumberFormat::FORMAT_PERCENTAGE_00,
							'NUMBER'	=> PHPExcel_Style_NumberFormat::FORMAT_NUMBER,
							'NUMBER0'	=> PHPExcel_Style_NumberFormat::FORMAT_NUMBER_0
		);

		//align 항목 # 뒤에 올 수 있는 것들.
		$align_types = array(
			'left',
			'center',
			'right'
		);
			

        // 차트 타입
		$chart_types = array(
			'bar'   => PHPExcel_Chart_DataSeries::TYPE_BARCHART,
			'line'  => PHPExcel_Chart_DataSeries::TYPE_LINECHART
		);

		// 차트 타입에 따른 그룹핑 
		$chart_grouping = array(
			'bar'   => PHPExcel_Chart_DataSeries::GROUPING_CLUSTERED,
			'line'  => PHPExcel_Chart_DataSeries::GROUPING_STANDARD
		);

		$sheetData = array();
		$string_cells = array();
		foreach($styleInfo as $k => $v) {
			if(is_array($v) == false && strlen(trim($v)) <= 0) {
				continue;
			}
			$k = strtolower($k);

            if(is_array($v) == false) {
                // chart 제외
                $v = str_replace(' ', '', $v);
                $v = str_replace("\r", '', $v);
                $v = str_replace("\n", '', $v);
                $v = str_replace("\t", '', $v);
                $orig_v = $v; // 이미지 url 등 원본이 필요할때를 위해.
                $v = strtoupper($v);
            } else {
                // chart
                $orig_v = $v; // 이미지 url 등 원본이 필요할때를 위해.
            }

			switch($k) {
				case 'merge' :
                    foreach(explode(',', $v) as $area) {
                        $area = trim($area);
					    self::$objPHPExcel->getActiveSheet()->mergeCells($area);
                    }
					break;
				// string일 경우 fromArray 마지막 인자에 넘겨줄 (string으로 표현할) 행열정보를 array로 담는다. 
				case 'string' :
                    foreach(explode(',', $v) as $area) {
						foreach(explode(',', $area) as $group) {
							if(strlen($group) <= 0) {
								continue;
							}
							if(strpos($group, ':') === false) {
								$string_cells[] = $group;
								continue;
							}

							$temp = explode(':', $group);
							if($temp[0] == $temp[1]) {
								$string_cells[] = $temp[0];
								continue;
							}
							list($start_c, $start_row) = PHPExcel_Cell::coordinateFromString($temp[0]);
							list($end_c, $end_row) = PHPExcel_Cell::coordinateFromString($temp[1]);
							for($i = $start_row ; $i <= $end_row; $i++) {
								$string_cells[] = $start_c.$i;
							}
						}
					}
					break;

				case 'fontcolor' :
					foreach(explode(';', $v) as $range) {
						if(strlen($range) <= 0) {
							continue;
						}
						list($areas, $color) = explode('#', $range, 2);
						$color = 'FF'.strtoupper($color);

						foreach(explode(',', $areas) as $area) {
							$area = trim($area);
							self::$objPHPExcel->getActiveSheet()->getStyle($area)->getFont()->getColor()->setARGB($color);
						}
					}
					break;
				case 'fontsize' :
					foreach(explode(';', $v) as $range) {
						if(strlen($range) <= 0) {
							continue;
						}
						list($areas, $size) = explode('#', $range, 2);
						foreach(explode(',', $areas) as $area) {
							$area = trim($area);
							self::$objPHPExcel->getActiveSheet()->getStyle($area)->getFont()->setSize($size);
						}
					}
					break;
				case 'fontbold' :
					foreach(explode(';', $v) as $range) {
						if(strlen($range) <= 0) {
							continue;
						}
						foreach(explode(',', $range) as $area) {
							$area = trim($area);
							self::$objPHPExcel->getActiveSheet()->getStyle($area)->getFont()->setBold(true);
						}
					}
					break;
				case 'bgcolor' :
					foreach(explode(';', $v) as $range) {
						if(strlen($range) <= 0) {
							continue;
						}
						list($areas, $color) = explode('#', $range, 2);
						$color = 'FF'.strtoupper($color);

						foreach(explode(',', $areas) as $area) {
							$area = trim($area);
							self::$objPHPExcel->getActiveSheet()->getStyle($area)->applyFromArray(
								array(
									'fill' => array(
												'type'  => PHPExcel_Style_Fill::FILL_SOLID,
												'color' => array('argb' => $color)
									)
								)
							);
						}
					}
					break;
				case 'border' :
					foreach(explode(';', $v) as $range) {
						if(strlen($range) <= 0) {
							continue;
						}
						list($areas, $type) = explode('#', $range, 2);
						$type = strtolower($type);

						if(in_array($type, $border_types) == false) {
							continue;
						}
						foreach(explode(',', $areas) as $area) {
							$area = trim($area);

							self::$objPHPExcel->getActiveSheet()->getStyle($area)->applyFromArray(
								array(
									'borders' => array(
										$type	=> array(
											'style' => PHPExcel_Style_Border::BORDER_THIN
										)
									)
								)
							);
						}
					}
					break;
				case 'format' :
					foreach(explode(';', $v) as $range) {
						if(strlen($range) <= 0) {
							continue;
						}
						list($areas, $type) = explode('#', $range, 2);

						if(in_array($type, array_keys($format_type_map)) == false) {
							continue;
						}
						foreach(explode(',', $areas) as $area) {
							$area = trim($area);
							self::$objPHPExcel->getActiveSheet()->getStyle($area)->getNumberFormat()->setFormatCode($format_type_map[$type]);
						}
					}
					break;
				case 'align' :
					foreach(explode(';', $v) as $range) {
						if(strlen($range) <= 0) {
							continue;
						}
						list($areas, $type) = explode('#', $range, 2);
						$type = strtolower($type);

						if(in_array($type, $align_types) == false) {
							continue;
						}
						foreach(explode(',', $areas) as $area) {
							$area = trim($area);
							self::$objPHPExcel->getActiveSheet()->getStyle($area)->getAlignment()->setHorizontal($type);
						}
					}
					
					break;
				
				case 'width' :
					foreach(explode(';', $v) as $range) {
						if(strlen($range) <= 0) {
							continue;
						}
						list($area, $size) = explode('#', $range, 2);
						$size *= WIDTH_PX_RATE;
						$cols = array();
						foreach(explode(',', $area) as $group) {
							if(strlen($group) <= 0) {
								continue;
							}
							if(strpos($group, ':') === false) {
								$cols[] = $group;
								continue;
							}

							$temp = explode(':', $group);
							if($temp[0] == $temp[1]) {
								$cols[] = $temp[0];
								continue;
							}
							foreach(range(PHPExcel_Cell::columnIndexFromString($temp[0]), PHPExcel_Cell::columnIndexFromString($temp[1])) as $i) {
								$cols[] = PHPExcel_Cell::stringFromColumnIndex($i-1);
							}
						}

						foreach($cols as $col) {
							self::$objPHPExcel->getActiveSheet()->getColumnDimension($col)->setAutoSize(false);
							self::$objPHPExcel->getActiveSheet()->getColumnDimension($col)->setWidth($size);
						}
					}
					break;
				case 'autowidth' :
					$cols = array();
					$area = $v;
					foreach(explode(',', $area) as $group) {
						if(strlen($group) <= 0) {
							continue;
						}
						if(strpos($group, ':') === false) {
							$cols[] = $group;
							continue;
						}

						$temp = explode(':', $group);
						if($temp[0] == $temp[1]) {
							$cols[] = $temp[0];
							continue;
						}
						foreach(range(PHPExcel_Cell::columnIndexFromString($temp[0]), PHPExcel_Cell::columnIndexFromString($temp[1])) as $i) {
							$cols[] = PHPExcel_Cell::stringFromColumnIndex($i-1);
						}
					}

					foreach($cols as $col) {
						self::$objPHPExcel->getActiveSheet()->getColumnDimension($col)->setAutoSize(true);
					}
					break;
				case 'height' :
					foreach(explode(';', $v) as $range) {
						if(strlen($range) <= 0) {
							continue;
						}
						list($area, $size) = explode('#', $range, 2);

						$size *= HEIGHT_PX_RATE;

						$rows = array();
						foreach(explode(',', $area) as $group) {
							if(strlen($group) <= 0) {
								continue;
							}
							if(strpos($group, ':') === false) {
								$rows[] = $group;
								continue;
							}

							$temp = explode(':', $group);
							if($temp[0] == $temp[1]) {
								$rows[] = $temp[0];
								continue;
							}
							foreach(range($temp[0], $temp[1]) as $i) {
								$rows[] = $i;
							}
						}

						foreach($rows as $row_idx) {
							self::$objPHPExcel->getActiveSheet()->getRowDimension($row_idx)->setRowHeight($size);
						}
					}
					break;

				case 'frame' :
					if(strlen($v) > 0) {
						self::$objPHPExcel->getActiveSheet()->freezePane($v);
					}
					break;
				case 'use_filter' :
					if(strlen($v) > 0) {
						foreach(explode(',', $v) as $area) {
							if(strlen($area) <= 0) {
								continue;
							}
							self::$objPHPExcel->getActiveSheet()->setAutoFilter($area);
						}
					}
					break;
				case 'image' :
					foreach(explode(';', $orig_v) as $k => $range) {
						if(strlen($range) <= 0) {
							continue;
						}
						list($area, $path, $size) = explode('#', $range, 3);
						list($size_type, $size) = explode(':', strtolower($size), 2);
						$area = strtoupper($area);


						$objDrawing = new PHPExcel_Worksheet_Drawing();

						$temp_filename = '';
						if(strpos(strtolower(trim($path)), 'http://') === 0) {
							$temp_filename = TEMP_CSV_SAVE_PATH.'/img_'.date('YmdHis').'_'.rand(1, 100000).'.jpg';
							$content = file_get_contents($path);
							file_put_contents($temp_filename, $content);
							$path = $temp_filename;
						}
						$objDrawing->setPath($path);
						if($size_type == 'width') {
							$objDrawing->setWidth($size);
							$h = $objDrawing->getHeight() * HEIGHT_PX_RATE;
							list($c, $row) = PHPExcel_Cell::coordinateFromString($area);
							self::$objPHPExcel->getActiveSheet()->getColumnDimension($c)->setAutoSize(false);
							self::$objPHPExcel->getActiveSheet()->getColumnDimension($c)->setWidth($size*WIDTH_PX_RATE);
							
							$now_h = self::$objPHPExcel->getActiveSheet()->getRowDimension($row)->getRowHeight();
							if($now_h < $h) {
								self::$objPHPExcel->getActiveSheet()->getRowDimension($row)->setRowHeight($h);
							}
						} else if($size_type == 'height') {
							$objDrawing->setHeight($size);
							$w = $objDrawing->getWidth() * WIDTH_PX_RATE;
							list($c, $row) = PHPExcel_Cell::coordinateFromString($area);
							self::$objPHPExcel->getActiveSheet()->getRowDimension($row)->setRowHeight($size * HEIGHT_PX_RATE);
							$now_w = self::$objPHPExcel->getActiveSheet()->getColumnDimension($c)->getWidth();
							//echo $now_w. ' < '.$w;
							if($now_w < $w) {
								self::$objPHPExcel->getActiveSheet()->getColumnDimension($c)->setAutoSize(false);
								self::$objPHPExcel->getActiveSheet()->getColumnDimension($c)->setWidth($w);
							}
						}
						$objDrawing->setCoordinates($area);
						$objDrawing->setWorksheet(self::$objPHPExcel->getActiveSheet());

						if(strlen($temp_filename) > 0) {
							self::$junk_files[] = $temp_filename;
						}
					}
					break;

				case 'chart' :
					self::$chart_use = true;
					$chart_datas = $orig_v;

					$conv_sheet_title = self::ConvertTitle($sheetTitle);
					if(is_array($chart_datas) == false || sizeof($chart_datas) <= 0) {
					}
					if(isset($chart_datas['values']) == true) {
						$chart_datas = array($chart_datas);
					}

					if(isset($chart_datas[0]['values']) == false) {
						break;
					}

					foreach($chart_datas as $num => $chart_data) {
						$categories = array();
						$labels = array();
						$values = array();
						$plot_orders = array(0);


						foreach($chart_data as $key => $val) {
							if(in_array($key, array('categories', 'labels', 'values'))) {
								$data_type = 'String';
								if($key == 'values') {
									$data_type = 'Number';
								}
								if($key == 'labels') {
									$plot_orders = array_keys(explode(',', $val));
								}

								$ranges = array();

								foreach(explode(',', $val) as $group) {
									if(strlen($group) <= 0) {
										continue;
									}
									$group = trim($group);

									$temp = explode(':', $group);

									$temp_range = array();
									foreach($temp as $k => $v) {
										$temp_range[] = PHPExcel_Cell::absoluteCoordinate($v);  // A1 -> $A$1 로 변경 
									}
									$ranges[] = implode(':', $temp_range);
								}

								foreach($ranges as $range) {
									${$key}[] = new PHPExcel_Chart_DataSeriesValues($data_type, $conv_sheet_title."!".$range, null);  //  
								}
							}
							if($key == 'type') {
								$plot_type = $chart_types[$val];
								$plot_grouping = $chart_grouping[$val];
							}                   
						}                       


						//  Build the dataseries
						$series = new PHPExcel_Chart_DataSeries(
										$plot_type,                                     // plotType - bar, line
										$plot_grouping,                                 // plotGrouping - plot_type에 따라 변경
										$plot_orders,                                   // plotOrder    - 정렬값 
										$labels,                                        // plotLabel
										$categories,                                    // plotCategory
										$values                                         // plotValues
								);          
						//  Set additional dataseries parameters
						$series->setPlotDirection(PHPExcel_Chart_DataSeries::DIRECTION_COL);

						//  Set the series in the plot area
						$plotarea = new PHPExcel_Chart_PlotArea(null, array($series));
						//  Set the chart legend
						$legend = new PHPExcel_Chart_Legend(PHPExcel_Chart_Legend::POSITION_RIGHT, null, false);

						$title = new PHPExcel_Chart_Title($chart_data['title']);


						//  Create the chart
						$chart = new PHPExcel_Chart(
										'chart1',       // name
										$title,         // title
										$legend,        // legend
										$plotarea,      // plotArea
										true,           // plotVisibleOnly
										0,              // displayBlanksAs
										null,           // xAxisLabel
										null            // yAxisLabel
								);

						//  Set the position where the chart should appear in the worksheet
						$chart->setTopLeftPosition($chart_data['top_position']);
						$chart->setBottomRightPosition($chart_data['bottom_position']);

						//  Add the chart to the worksheet
						self::$objPHPExcel->getActiveSheet()->addChart($chart);

					}   // end of foreach
			}
		}

        foreach($position_data_array as $pos => $dataArray) {
			$row_max = max(array_keys($dataArray));
			for($i = 0 ; $i <= $row_max ; $i++) {
				if(is_array($dataArray[$i]) == false || sizeof($dataArray[$i]) <= 0) {
					$dataArray[$i] = array();
				} else {
					$col_max = max(array_keys($dataArray[$i]));
					if(sizeof($dataArray[$i])-1 < $col_max) {
						for($j = 0 ; $j <= $col_max ; $j++) {
							if(isset($dataArray[$i][$j]) == false) {
								$dataArray[$i][$j] = '';
							}
						}
						ksort($dataArray[$i]);
					}
				}
				ksort($dataArray);
			}
			if(strlen($pos) < 2 ) {
				$pos = 'A1';
			}
			self::$objPHPExcel->getActiveSheet()->fromArray($dataArray, null, $pos, $strictNullComparison=false, $string_cells);
		}
	}

	public static function doDownload($filename_only, $version=2007) {
		self::$objPHPExcel->setActiveSheetIndex(0);

        // default version. 2007로 넘어왔을때.
        $ext = '.xlsx';
        $type = 'Excel2007';

        if($version == 2005) {
            $ext = '.xls';
            $type = 'Excel5';
        }

        if($version == 'CSV') {
            $ext = '.csv';
            $type = 'CSV';
        }


		$file_name = $filename_only.$ext;

		header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
		header("Content-Disposition: attachment;filename={$file_name}");
		header('Cache-Control: max-age=0');
		if($version == 'CSV') {
			header("Content-Type: text/csv; charset=utf-8");
		}

		$objWriter = PHPExcel_IOFactory::createWriter(self::$objPHPExcel, $type);
		if($version == 2007 && self::$chart_use === true) {
			$objWriter->setIncludeCharts(TRUE);
		}
		// CSV 파일일 때 한글 깨짐 방지를 위해서. 
		if($version == 'CSV') {
			$objWriter->setUseBOM(true);
		}
		$objWriter->save('php://output');
		foreach(self::$junk_files as $file) {
			@unlink($file);
		}
		self::$junk_files = array();
		self::$chart_use = false;
	}

    public static function doSave($filepath_name_only, $version=2007) {
        self::$objPHPExcel->setActiveSheetIndex(0);

        // default version. 2007로 넘어왔을때.
        $ext = '.xlsx';
        $type = 'Excel2007';

        if($version == 2005) {
            $ext = '.xls';
            $type = 'Excel5';
        }

        if($version == 'CSV') {
            $ext = '.csv';
            $type = 'CSV';
        }
        $file_path_name = $filepath_name_only.$ext;

        $objWriter = PHPExcel_IOFactory::createWriter(self::$objPHPExcel, $type);
        if($version == 2007 && self::$chart_use === true) {
            $objWriter->setIncludeCharts(TRUE);
        }
        $objWriter->save($file_path_name);
        foreach(self::$junk_files as $file) {
            @unlink($file);
        }
        self::$junk_files = array();
        self::$chart_use = false;

        return file_exists($file_path_name);
    }






	
	// @ 데이터 제작 과정 서포트 메서드들.

	// CSV를 setSheet 첫번째 인자 배열 형태로 반환.
	public static function csvToArray($csv_str) {

		$temp_filename = TEMP_CSV_SAVE_PATH.'/temp_'.date('YmdHis').'.csv';
		file_put_contents($temp_filename, $csv_str);

		$result = array('A1' => array());

		if (($handle = fopen($temp_filename, "r")) !== FALSE) {
			while (($data = fgetcsv($handle, 10240, ",")) !== FALSE) {
				$result['A1'][] = $data;
			}
			fclose($handle);
		}
		@unlink($temp_filename);
		return $result;
	}
	// 배열을 CSV로 변환.
	public static function arrayToCSV($list) {
		/*
		$list = array (
			array('aaa', 'bbb', 'ccc', 'dddd'),
		    array('123', '456', '789'),
			array('"aaa"', '"bbb"')
		);
		*/

		$temp_filename = TEMP_CSV_SAVE_PATH.'/temp_'.date('YmdHis').'.csv';
		$fp = fopen($temp_filename, 'w');

		foreach($list as $fields) {
			fputcsv($fp, $fields);
		}
		fclose($fp);
		$content = file_get_contents($temp_filename);
		@unlink($temp_filename);
		return $content;
	}


	// col index에 맞는 필드 리턴
	public static function getFieldCode($col_idx, $row_idx) {
		return PHPExcel_Cell::stringFromColumnIndex($col_idx).($row_idx+1);
	}

									

	// @ Private

	

	// excel 제작자 설정. init() 에 의해 초기화.
	private static function setCreator($pCreator) {
		self::$creator = $pCreator;
	}

	// excel 제목 설정. init() 에 의해 초기화.
	private static function setTitle($pTitle) {
		self::$title = $pTitle;
	}

	// excel 부제 설정. init() 에 의해 초기화.
	private static function setSubject($pSubject) {
		self::$subject = $pSubject;
	}

	// excel 설명 설정. init() 에 의해 초기화.
	private static function setDescription($pDescription) {
		self::$description = $pDescription;
	}

	private static function ConvertTitle($pSheetTitle) {
		$orgSheetTitle = $pSheetTitle;
		$pSheetTitle = str_replace(array(' ', '*', ':', '/', '\\', '?', '[', ']'), '_', $pSheetTitle);

		$special_chars = ' `~!@#$%^&()-_=+|{};".>,<'."'";
		$flag = false;
		for($i = 0 ; $i < strlen($special_chars) ; $i++) {
			if(strpos($special_chars, $special_chars[$i]) !== false) {
				$flag = true;
				break;
			}
		}
		if($flag == true) {

			if($pSheetTitle != $orgSheetTitle) {
				self::$objPHPExcel->getActiveSheet()->setTitle($pSheetTitle);
			}
			$pSheetTitle = "'".$pSheetTitle."'";
		}

		return $pSheetTitle;
	}
}




/**
 * PHPExcel
 *
 * Copyright (c) 2006 - 2012 PHPExcel
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * @category   PHPExcel
 * @package    PHPExcel
 * @copyright  Copyright (c) 2006 - 2012 PHPExcel (http://www.codeplex.com/PHPExcel)
 * @license    http://www.gnu.org/licenses/old-licenses/lgpl-2.1.txt	LGPL
 * @version    1.7.8, 2012-10-12
 */


/** PHPExcel root directory */
if (!defined('PHPEXCEL_ROOT')) {
	define('PHPEXCEL_ROOT', dirname(__FILE__) . '/');
	require(PHPEXCEL_ROOT . 'PHPExcel/Autoloader.php');
}


/**
 * PHPExcel
 *
 * @category   PHPExcel
 * @package    PHPExcel
 * @copyright  Copyright (c) 2006 - 2012 PHPExcel (http://www.codeplex.com/PHPExcel)
 */
class PHPExcel
{
	/**
	 * Document properties
	 *
	 * @var PHPExcel_DocumentProperties
	 */
	private $_properties;

	/**
	 * Document security
	 *
	 * @var PHPExcel_DocumentSecurity
	 */
	private $_security;

	/**
	 * Collection of Worksheet objects
	 *
	 * @var PHPExcel_Worksheet[]
	 */
	private $_workSheetCollection = array();

	/**
	 * Active sheet index
	 *
	 * @var int
	 */
	private $_activeSheetIndex = 0;

	/**
	 * Named ranges
	 *
	 * @var PHPExcel_NamedRange[]
	 */
	private $_namedRanges = array();

	/**
	 * CellXf supervisor
	 *
	 * @var PHPExcel_Style
	 */
	private $_cellXfSupervisor;

	/**
	 * CellXf collection
	 *
	 * @var PHPExcel_Style[]
	 */
	private $_cellXfCollection = array();

	/**
	 * CellStyleXf collection
	 *
	 * @var PHPExcel_Style[]
	 */
	private $_cellStyleXfCollection = array();

	/**
	 * Create a new PHPExcel with one Worksheet
	 */
	public function __construct()
	{
		// Initialise worksheet collection and add one worksheet
		$this->_workSheetCollection = array();
		$this->_workSheetCollection[] = new PHPExcel_Worksheet($this);
		$this->_activeSheetIndex = 0;

		// Create document properties
		$this->_properties = new PHPExcel_DocumentProperties();

		// Create document security
		$this->_security = new PHPExcel_DocumentSecurity();

		// Set named ranges
		$this->_namedRanges = array();

		// Create the cellXf supervisor
		$this->_cellXfSupervisor = new PHPExcel_Style(true);
		$this->_cellXfSupervisor->bindParent($this);

		// Create the default style
		$this->addCellXf(new PHPExcel_Style);
		$this->addCellStyleXf(new PHPExcel_Style);
	}


	/**
	 * Disconnect all worksheets from this PHPExcel workbook object,
	 *    typically so that the PHPExcel object can be unset
	 *
	 */
	public function disconnectWorksheets() {
		foreach($this->_workSheetCollection as $k => &$worksheet) {
			$worksheet->disconnectCells();
			$this->_workSheetCollection[$k] = null;
		}
		unset($worksheet);
		$this->_workSheetCollection = array();
	}

	/**
	 * Get properties
	 *
	 * @return PHPExcel_DocumentProperties
	 */
	public function getProperties()
	{
		return $this->_properties;
	}

	/**
	 * Set properties
	 *
	 * @param PHPExcel_DocumentProperties	$pValue
	 */
	public function setProperties(PHPExcel_DocumentProperties $pValue)
	{
		$this->_properties = $pValue;
	}

	/**
	 * Get security
	 *
	 * @return PHPExcel_DocumentSecurity
	 */
	public function getSecurity()
	{
		return $this->_security;
	}

	/**
	 * Set security
	 *
	 * @param PHPExcel_DocumentSecurity	$pValue
	 */
	public function setSecurity(PHPExcel_DocumentSecurity $pValue)
	{
		$this->_security = $pValue;
	}

	/**
	 * Get active sheet
	 *
	 * @return PHPExcel_Worksheet
	 */
	public function getActiveSheet()
	{
		return $this->_workSheetCollection[$this->_activeSheetIndex];
	}

    /**
     * Create sheet and add it to this workbook
     *
	 * @param int|null $iSheetIndex Index where sheet should go (0,1,..., or null for last)
     * @return PHPExcel_Worksheet
     * @throws Exception
     */
    public function createSheet($iSheetIndex = NULL)
    {
        $newSheet = new PHPExcel_Worksheet($this);
        $this->addSheet($newSheet, $iSheetIndex);
        return $newSheet;
    }

    /**
     * Chech if a sheet with a specified name already exists
     *
     * @param string $pSheetName  Name of the worksheet to check
     * @return boolean
     */
    public function sheetNameExists($pSheetName)
    {
		return ($this->getSheetByName($pSheetName) !== NULL);
    }

    /**
     * Add sheet
     *
     * @param PHPExcel_Worksheet $pSheet
	 * @param int|null $iSheetIndex Index where sheet should go (0,1,..., or null for last)
     * @return PHPExcel_Worksheet
     * @throws Exception
     */
    public function addSheet(PHPExcel_Worksheet $pSheet, $iSheetIndex = NULL)
    {
		if ($this->sheetNameExists($pSheet->getTitle())) {
			throw new Exception("Workbook already contains a worksheet named '{$pSheet->getTitle()}'. Rename this worksheet first.");
		}

        if($iSheetIndex === NULL) {
            if ($this->_activeSheetIndex < 0) {
            	$this->_activeSheetIndex = 0;
            }
            $this->_workSheetCollection[] = $pSheet;
        } else {
            // Insert the sheet at the requested index
            array_splice(
                $this->_workSheetCollection,
                $iSheetIndex,
                0,
                array($pSheet)
                );

			// Adjust active sheet index if necessary
			if ($this->_activeSheetIndex >= $iSheetIndex) {
				++$this->_activeSheetIndex;
			}
        }
		return $pSheet;
    }

	/**
	 * Remove sheet by index
	 *
	 * @param int $pIndex Active sheet index
	 * @throws Exception
	 */
	public function removeSheetByIndex($pIndex = 0)
	{
		if ($pIndex > count($this->_workSheetCollection) - 1) {
			throw new Exception("Sheet index is out of bounds.");
		} else {
			array_splice($this->_workSheetCollection, $pIndex, 1);
		}
		// Adjust active sheet index if necessary
		if (($this->_activeSheetIndex >= $pIndex) &&
			($pIndex > count($this->_workSheetCollection) - 1)) {
			--$this->_activeSheetIndex;
		}

	}

	/**
	 * Get sheet by index
	 *
	 * @param int $pIndex Sheet index
	 * @return PHPExcel_Worksheet
	 * @throws Exception
	 */
	public function getSheet($pIndex = 0)
	{
		if ($pIndex > count($this->_workSheetCollection) - 1) {
			throw new Exception("Sheet index is out of bounds.");
		} else {
			return $this->_workSheetCollection[$pIndex];
		}
	}

	/**
	 * Get all sheets
	 *
	 * @return PHPExcel_Worksheet[]
	 */
	public function getAllSheets()
	{
		return $this->_workSheetCollection;
	}

	/**
	 * Get sheet by name
	 *
	 * @param string $pName Sheet name
	 * @return PHPExcel_Worksheet
	 * @throws Exception
	 */
	public function getSheetByName($pName = '')
	{
		$worksheetCount = count($this->_workSheetCollection);
		for ($i = 0; $i < $worksheetCount; ++$i) {
			if ($this->_workSheetCollection[$i]->getTitle() == $pName) {
				return $this->_workSheetCollection[$i];
			}
		}

		return null;
	}

	/**
	 * Get index for sheet
	 *
	 * @param PHPExcel_Worksheet $pSheet
	 * @return Sheet index
	 * @throws Exception
	 */
	public function getIndex(PHPExcel_Worksheet $pSheet)
	{
		foreach ($this->_workSheetCollection as $key => $value) {
			if ($value->getHashCode() == $pSheet->getHashCode()) {
				return $key;
			}
		}
	}

    /**
	 * Set index for sheet by sheet name.
	 *
	 * @param string $sheetName Sheet name to modify index for
	 * @param int $newIndex New index for the sheet
	 * @return New sheet index
	 * @throws Exception
	 */
    public function setIndexByName($sheetName, $newIndex)
    {
        $oldIndex = $this->getIndex($this->getSheetByName($sheetName));
        $pSheet = array_splice(
            $this->_workSheetCollection,
            $oldIndex,
            1
            );
        array_splice(
            $this->_workSheetCollection,
            $newIndex,
            0,
            $pSheet
            );
        return $newIndex;
    }

	/**
	 * Get sheet count
	 *
	 * @return int
	 */
	public function getSheetCount()
	{
		return count($this->_workSheetCollection);
	}

	/**
	 * Get active sheet index
	 *
	 * @return int Active sheet index
	 */
	public function getActiveSheetIndex()
	{
		return $this->_activeSheetIndex;
	}

	/**
	 * Set active sheet index
	 *
	 * @param int $pIndex Active sheet index
	 * @throws Exception
	 * @return PHPExcel_Worksheet
	 */
	public function setActiveSheetIndex($pIndex = 0)
	{
		if ($pIndex > count($this->_workSheetCollection) - 1) {
			throw new Exception("Active sheet index is out of bounds.");
		} else {
			$this->_activeSheetIndex = $pIndex;
		}
		return $this->getActiveSheet();
	}

	/**
	 * Set active sheet index by name
	 *
	 * @param string $pValue Sheet title
	 * @return PHPExcel_Worksheet
	 * @throws Exception
	 */
	public function setActiveSheetIndexByName($pValue = '')
	{
		if (($worksheet = $this->getSheetByName($pValue)) instanceof PHPExcel_Worksheet) {
			$this->setActiveSheetIndex($this->getIndex($worksheet));
			return $worksheet;
		}

		throw new Exception('Workbook does not contain sheet:' . $pValue);
	}

	/**
	 * Get sheet names
	 *
	 * @return string[]
	 */
	public function getSheetNames()
	{
		$returnValue = array();
		$worksheetCount = $this->getSheetCount();
		for ($i = 0; $i < $worksheetCount; ++$i) {
			$returnValue[] = $this->getSheet($i)->getTitle();
		}

		return $returnValue;
	}

	/**
	 * Add external sheet
	 *
	 * @param PHPExcel_Worksheet $pSheet External sheet to add
	 * @param int|null $iSheetIndex Index where sheet should go (0,1,..., or null for last)
	 * @throws Exception
	 * @return PHPExcel_Worksheet
	 */
	public function addExternalSheet(PHPExcel_Worksheet $pSheet, $iSheetIndex = null) {
		if ($this->sheetNameExists($pSheet->getTitle())) {
			throw new Exception("Workbook already contains a worksheet named '{$pSheet->getTitle()}'. Rename the external sheet first.");
		}

		// count how many cellXfs there are in this workbook currently, we will need this below
		$countCellXfs = count($this->_cellXfCollection);

		// copy all the shared cellXfs from the external workbook and append them to the current
		foreach ($pSheet->getParent()->getCellXfCollection() as $cellXf) {
			$this->addCellXf(clone $cellXf);
		}

		// move sheet to this workbook
		$pSheet->rebindParent($this);

		// update the cellXfs
		foreach ($pSheet->getCellCollection(false) as $cellID) {
			$cell = $pSheet->getCell($cellID);
			$cell->setXfIndex( $cell->getXfIndex() + $countCellXfs );
		}

		return $this->addSheet($pSheet, $iSheetIndex);
	}

	/**
	 * Get named ranges
	 *
	 * @return PHPExcel_NamedRange[]
	 */
	public function getNamedRanges() {
		return $this->_namedRanges;
	}

	/**
	 * Add named range
	 *
	 * @param PHPExcel_NamedRange $namedRange
	 * @return PHPExcel
	 */
	public function addNamedRange(PHPExcel_NamedRange $namedRange) {
		if ($namedRange->getScope() == null) {
			// global scope
			$this->_namedRanges[$namedRange->getName()] = $namedRange;
		} else {
			// local scope
			$this->_namedRanges[$namedRange->getScope()->getTitle().'!'.$namedRange->getName()] = $namedRange;
		}
		return true;
	}

	/**
	 * Get named range
	 *
	 * @param string $namedRange
	 * @param PHPExcel_Worksheet|null $pSheet Scope. Use null for global scope
	 * @return PHPExcel_NamedRange|null
	 */
	public function getNamedRange($namedRange, PHPExcel_Worksheet $pSheet = null) {
		$returnValue = null;

		if ($namedRange != '' && ($namedRange !== NULL)) {
			// first look for global defined name
			if (isset($this->_namedRanges[$namedRange])) {
				$returnValue = $this->_namedRanges[$namedRange];
			}

			// then look for local defined name (has priority over global defined name if both names exist)
			if (($pSheet !== NULL) && isset($this->_namedRanges[$pSheet->getTitle() . '!' . $namedRange])) {
				$returnValue = $this->_namedRanges[$pSheet->getTitle() . '!' . $namedRange];
			}
		}

		return $returnValue;
	}

	/**
	 * Remove named range
	 *
	 * @param  string  $namedRange
	 * @param  PHPExcel_Worksheet|null  $pSheet  Scope: use null for global scope.
	 * @return PHPExcel
	 */
	public function removeNamedRange($namedRange, PHPExcel_Worksheet $pSheet = null) {
		if ($pSheet === NULL) {
			if (isset($this->_namedRanges[$namedRange])) {
				unset($this->_namedRanges[$namedRange]);
			}
		} else {
			if (isset($this->_namedRanges[$pSheet->getTitle() . '!' . $namedRange])) {
				unset($this->_namedRanges[$pSheet->getTitle() . '!' . $namedRange]);
			}
		}
		return $this;
	}

	/**
	 * Get worksheet iterator
	 *
	 * @return PHPExcel_WorksheetIterator
	 */
	public function getWorksheetIterator() {
		return new PHPExcel_WorksheetIterator($this);
	}

	/**
	 * Copy workbook (!= clone!)
	 *
	 * @return PHPExcel
	 */
	public function copy() {
		$copied = clone $this;

		$worksheetCount = count($this->_workSheetCollection);
		for ($i = 0; $i < $worksheetCount; ++$i) {
			$this->_workSheetCollection[$i] = $this->_workSheetCollection[$i]->copy();
			$this->_workSheetCollection[$i]->rebindParent($this);
		}

		return $copied;
	}

	/**
	 * Implement PHP __clone to create a deep clone, not just a shallow copy.
	 */
	public function __clone() {
		foreach($this as $key => $val) {
			if (is_object($val) || (is_array($val))) {
				$this->{$key} = unserialize(serialize($val));
			}
		}
	}

	/**
	 * Get the workbook collection of cellXfs
	 *
	 * @return PHPExcel_Style[]
	 */
	public function getCellXfCollection()
	{
		return $this->_cellXfCollection;
	}

	/**
	 * Get cellXf by index
	 *
	 * @param int $pIndex
	 * @return PHPExcel_Style
	 */
	public function getCellXfByIndex($pIndex = 0)
	{
		return $this->_cellXfCollection[$pIndex];
	}

	/**
	 * Get cellXf by hash code
	 *
	 * @param string $pValue
	 * @return PHPExcel_Style|false
	 */
	public function getCellXfByHashCode($pValue = '')
	{
		foreach ($this->_cellXfCollection as $cellXf) {
			if ($cellXf->getHashCode() == $pValue) {
				return $cellXf;
			}
		}
		return false;
	}

	/**
	 * Get default style
	 *
	 * @return PHPExcel_Style
	 * @throws Exception
	 */
	public function getDefaultStyle()
	{
		if (isset($this->_cellXfCollection[0])) {
			return $this->_cellXfCollection[0];
		}
		throw new Exception('No default style found for this workbook');
	}

	/**
	 * Add a cellXf to the workbook
	 *
	 * @param PHPExcel_Style $style
	 */
	public function addCellXf(PHPExcel_Style $style)
	{
		$this->_cellXfCollection[] = $style;
		$style->setIndex(count($this->_cellXfCollection) - 1);
	}

	/**
	 * Remove cellXf by index. It is ensured that all cells get their xf index updated.
	 *
	 * @param int $pIndex Index to cellXf
	 * @throws Exception
	 */
	public function removeCellXfByIndex($pIndex = 0)
	{
		if ($pIndex > count($this->_cellXfCollection) - 1) {
			throw new Exception("CellXf index is out of bounds.");
		} else {
			// first remove the cellXf
			array_splice($this->_cellXfCollection, $pIndex, 1);

			// then update cellXf indexes for cells
			foreach ($this->_workSheetCollection as $worksheet) {
				foreach ($worksheet->getCellCollection(false) as $cellID) {
					$cell = $worksheet->getCell($cellID);
					$xfIndex = $cell->getXfIndex();
					if ($xfIndex > $pIndex ) {
						// decrease xf index by 1
						$cell->setXfIndex($xfIndex - 1);
					} else if ($xfIndex == $pIndex) {
						// set to default xf index 0
						$cell->setXfIndex(0);
					}
				}
			}
		}
	}

	/**
	 * Get the cellXf supervisor
	 *
	 * @return PHPExcel_Style
	 */
	public function getCellXfSupervisor()
	{
		return $this->_cellXfSupervisor;
	}

	/**
	 * Get the workbook collection of cellStyleXfs
	 *
	 * @return PHPExcel_Style[]
	 */
	public function getCellStyleXfCollection()
	{
		return $this->_cellStyleXfCollection;
	}

	/**
	 * Get cellStyleXf by index
	 *
	 * @param int $pIndex
	 * @return PHPExcel_Style
	 */
	public function getCellStyleXfByIndex($pIndex = 0)
	{
		return $this->_cellStyleXfCollection[$pIndex];
	}

	/**
	 * Get cellStyleXf by hash code
	 *
	 * @param string $pValue
	 * @return PHPExcel_Style|false
	 */
	public function getCellStyleXfByHashCode($pValue = '')
	{
		foreach ($this->_cellXfStyleCollection as $cellStyleXf) {
			if ($cellStyleXf->getHashCode() == $pValue) {
				return $cellStyleXf;
			}
		}
		return false;
	}

	/**
	 * Add a cellStyleXf to the workbook
	 *
	 * @param PHPExcel_Style $pStyle
	 */
	public function addCellStyleXf(PHPExcel_Style $pStyle)
	{
		$this->_cellStyleXfCollection[] = $pStyle;
		$pStyle->setIndex(count($this->_cellStyleXfCollection) - 1);
	}

	/**
	 * Remove cellStyleXf by index
	 *
	 * @param int $pIndex
	 * @throws Exception
	 */
	public function removeCellStyleXfByIndex($pIndex = 0)
	{
		if ($pIndex > count($this->_cellStyleXfCollection) - 1) {
			throw new Exception("CellStyleXf index is out of bounds.");
		} else {
			array_splice($this->_cellStyleXfCollection, $pIndex, 1);
		}
	}

	/**
	 * Eliminate all unneeded cellXf and afterwards update the xfIndex for all cells
	 * and columns in the workbook
	 */
	public function garbageCollect()
	{
    	// how many references are there to each cellXf ?
		$countReferencesCellXf = array();
		foreach ($this->_cellXfCollection as $index => $cellXf) {
			$countReferencesCellXf[$index] = 0;
		}

		foreach ($this->getWorksheetIterator() as $sheet) {

			// from cells
			foreach ($sheet->getCellCollection(false) as $cellID) {
				$cell = $sheet->getCell($cellID);
				++$countReferencesCellXf[$cell->getXfIndex()];
			}

			// from row dimensions
			foreach ($sheet->getRowDimensions() as $rowDimension) {
				if ($rowDimension->getXfIndex() !== null) {
					++$countReferencesCellXf[$rowDimension->getXfIndex()];
				}
			}

			// from column dimensions
			foreach ($sheet->getColumnDimensions() as $columnDimension) {
				++$countReferencesCellXf[$columnDimension->getXfIndex()];
			}
		}

		// remove cellXfs without references and create mapping so we can update xfIndex
		// for all cells and columns
		$countNeededCellXfs = 0;
		foreach ($this->_cellXfCollection as $index => $cellXf) {
			if ($countReferencesCellXf[$index] > 0 || $index == 0) { // we must never remove the first cellXf
				++$countNeededCellXfs;
			} else {
				unset($this->_cellXfCollection[$index]);
			}
			$map[$index] = $countNeededCellXfs - 1;
		}
		$this->_cellXfCollection = array_values($this->_cellXfCollection);

		// update the index for all cellXfs
		foreach ($this->_cellXfCollection as $i => $cellXf) {
			$cellXf->setIndex($i);
		}

		// make sure there is always at least one cellXf (there should be)
		if (empty($this->_cellXfCollection)) {
			$this->_cellXfCollection[] = new PHPExcel_Style();
		}

		// update the xfIndex for all cells, row dimensions, column dimensions
		foreach ($this->getWorksheetIterator() as $sheet) {

			// for all cells
			foreach ($sheet->getCellCollection(false) as $cellID) {
				$cell = $sheet->getCell($cellID);
				$cell->setXfIndex( $map[$cell->getXfIndex()] );
			}

			// for all row dimensions
			foreach ($sheet->getRowDimensions() as $rowDimension) {
				if ($rowDimension->getXfIndex() !== null) {
					$rowDimension->setXfIndex( $map[$rowDimension->getXfIndex()] );
				}
			}

			// for all column dimensions
			foreach ($sheet->getColumnDimensions() as $columnDimension) {
				$columnDimension->setXfIndex( $map[$columnDimension->getXfIndex()] );
			}
		}

		// also do garbage collection for all the sheets
		foreach ($this->getWorksheetIterator() as $sheet) {
			$sheet->garbageCollect();
		}
	}

}
