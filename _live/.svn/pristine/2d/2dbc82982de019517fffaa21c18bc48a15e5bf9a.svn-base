<?php
/**
 * TemplateHam
 * Author : 함승목
 * Date   : 2010-08-09
 */

class TemplateHam{

	private $PHP_SELF;
	private $DOCUMENT_ROOT;

	private $TEMPLATE_CONTENT;
	private $TEMPLATE_CONTENT_DATA;
	private $TEMPLATE_IS_PARSE;
	private $TEMPLATE_PARENT;
	private $TEMPLATE_RESULT;
	private $TEMPLATE_VAR;

	private $VIEW_DIR;

	final public function __construct($view_dir = './') {
        $this->VIEW_DIR = $view_dir;
    }


	public function tp_read($pFile)
	{
		$filename =  $pFile;
		if(strpos($pFile, '/') === false)
		{
			$filename = $this->VIEW_DIR.$filename;
		}

		if(is_file($filename) == false) {
			echo $filename.' 뷰 파일이 존재하지 않습니다.';
			return;
		}

		$this->TEMPLATE_VAR = null;
		$this->TEMPLATE_CONTENT = null;
		$this->TEMPLATE_IS_PARSE = null;
		$this->TEMPLATE_CONTENT_DATA = null;
		$this->TEMPLATE_RESULT = null;
		$this->TEMPLATE_PARENT = null;
		
		$template = @file_get_contents($filename);

		$this->TEMPLATE_CONTENT["main"] = $template;
	}
	public function tp_read_var($pFileContent)
	{
		$this->TEMPLATE_VAR = null;
		$this->TEMPLATE_CONTENT = null;
		$this->TEMPLATE_IS_PARSE = null;
		$this->TEMPLATE_CONTENT_DATA = null;
		$this->TEMPLATE_RESULT = null;
		$this->TEMPLATE_PARENT = null;
		
		$this->TEMPLATE_CONTENT["main"] = $pFileContent;
	}

	public function tp_replace($pName, $pContent)
	{
		$this->TEMPLATE_CONTENT = str_replace('{'.$pName.'}', $pContent, $this->TEMPLATE_CONTENT);
	}

	public function tp_set($pName, $pVarName = "", $pValue = "#@NO@#")
	{
		if (is_array($pVarName))
			foreach($pVarName as $pKey => $pValue)
				$this->TEMPLATE_VAR[$pName][$pKey] = $pValue;
		else if (is_array($pName))
		{
			foreach($pName as $pKey => $pValue)
				$this->TEMPLATE_VAR["main"][$pKey] = $pValue;
		}
		else if ($pValue == "#@NO@#")
			$this->TEMPLATE_VAR["main"][$pName] = $pVarName;
		else
			$this->TEMPLATE_VAR[$pName][$pVarName] = $pValue;
	}
	public function tp_dynamic($pName, $pParent = "main")
	{
		$this->TEMPLATE_DATA[$pName] = &$this->TEMPLATE_DATA[$pParent][$pName];
		$this->TEMPLATE_PARENT[$pName] = $pParent;

		if (!@$this->TEMPLATE_CONTENT[$pName])
		{
			$temp = explode('<!-- LOOP START '.$pName.' -->', $this->TEMPLATE_CONTENT[$pParent]);
			$head = $temp[0];
			$temp = explode('<!-- LOOP END '.$pName.' -->', $temp[1]);
			$content = $temp[0];
			$tail = $temp[1];

			$this->TEMPLATE_CONTENT[$pParent] = $head . '{'.$pName.'}' . $tail;

			$this->TEMPLATE_CONTENT[$pName] = $content;
		}
	}

	public function tp_dynamic_replace($pName, $pContent, $pParent = "main")
	{

		if (!$this->TEMPLATE_CONTENT[$pName])
		{
			$temp = explode('<!-- LOOP START '.$pName.' -->', $this->TEMPLATE_CONTENT[$pParent]);
			$head = $temp[0];
			$temp = explode('<!-- LOOP END '.$pName.' -->', $temp[1]);
			$content = $temp[0];
			$tail = $temp[1];

			if($tail)
				$this->TEMPLATE_CONTENT[$pParent] = $head . $pContent . $tail;
		}
	}

	public function tp_dynamic_replace_file($pName, $filename, $pParent = "main")
	{

		if (!$this->TEMPLATE_CONTENT[$pName])
		{
			$temp = explode('<!-- LOOP START '.$pName.' -->', $this->TEMPLATE_CONTENT[$pParent]);
			$head = $temp[0];
			$temp = explode('<!-- LOOP END '.$pName.' -->', $temp[1]);
			$content = $temp[0];
			$tail = $temp[1];

			if($tail)
				$this->TEMPLATE_CONTENT[$pParent] = $head . file_get_contents($filename) . $tail;
		}
	}

	public function tp_parse($pName = "")
	{
		if ($pName == "")
		{
			$temp = explode('{', $this->TEMPLATE_CONTENT["main"]);

			$data[] = $temp[0];
			$count = count($temp);
			for($i = 1; $i < $count; $i++)
			{
				$temp2 = explode('}', $temp[$i], 2);

				if (preg_match('/^[.a-z0-9_-]+$/i', $temp2[0]))
				{
					$data[] = $temp2[0];
					$data[] = $temp2[1];
				}
				else
				{
					$data[] = '';
					$data[] = '{'.$temp[$i];
				}
			}

			$this->TEMPLATE_CONTENT["main"] = '';
			$count = count($data);
			for($i = 0; $i < $count; $i+=2)
			{
				$this->TEMPLATE_CONTENT["main"] .= $data[$i];
                if( ! isset($data[$i+1])) continue;

				if (isset($this->TEMPLATE_VAR["main"][$data[$i+1]]) && is_array($this->TEMPLATE_VAR["main"][$data[$i+1]]))
					$this->TEMPLATE_CONTENT["main"] .=  implode("", $this->TEMPLATE_VAR["main"][$data[$i+1]]);
				else
					$this->TEMPLATE_CONTENT["main"] .= (isset($this->TEMPLATE_VAR["main"][$data[$i+1]])) ? $this->TEMPLATE_VAR["main"][$data[$i+1]] : '';
			}
		}
		else
		{

			if ( ! isset($this->TEMPLATE_IS_PARSE[$pName]))
			{
				$content = $this->TEMPLATE_CONTENT[$pName];

				$temp = explode('{', $content);

				$this->TEMPLATE_CONTENT_DATA[$pName][] = $temp[0];
				$count = count($temp);
				for($i = 1; $i < $count; $i++)
				{
					$temp2 = explode('}', $temp[$i], 2);

					if (preg_match('/^[-_a-zA-Z0-9]+$/i', $temp2[0]))
					{
						$this->TEMPLATE_CONTENT_DATA[$pName][] = $temp2[0];
						$this->TEMPLATE_CONTENT_DATA[$pName][] = $temp2[1];
					}
					else
					{
						$this->TEMPLATE_CONTENT_DATA[$pName][] = $temp2[0];
						$this->TEMPLATE_CONTENT_DATA[$pName][] = '{'.$temp[$i];				
					}
				}


				$this->TEMPLATE_IS_PARSE[$pName] = true;

			}

			$count = count($this->TEMPLATE_CONTENT_DATA[$pName]);

            $result = '';
			for($i = 0; $i < $count; $i+=2)
			{
				$result .= $this->TEMPLATE_CONTENT_DATA[$pName][$i];

				if (
                    isset($this->TEMPLATE_VAR[$pName]) 
                    && isset($this->TEMPLATE_CONTENT_DATA[$pName]) 
                    && isset($this->TEMPLATE_CONTENT_DATA[$pName][$i+1]) 
                    && isset($this->TEMPLATE_VAR[$pName][$this->TEMPLATE_CONTENT_DATA[$pName][$i+1]])
                )
				{
                    if(
                        is_array($this->TEMPLATE_VAR[$pName][@$this->TEMPLATE_CONTENT_DATA[$pName][$i+1]])
                    ) {
                        $result .= implode("", $this->TEMPLATE_VAR[$pName][$this->TEMPLATE_CONTENT_DATA[$pName][$i+1]]);
                        $this->TEMPLATE_VAR[$pName][$this->TEMPLATE_CONTENT_DATA[$pName][$i+1]] = null;
                    } else {
					    $result .= $this->TEMPLATE_VAR[$pName][$this->TEMPLATE_CONTENT_DATA[$pName][$i+1]];
                    }
				}
			}

			$this->TEMPLATE_VAR[$this->TEMPLATE_PARENT[$pName]][$pName][] = $result;

		}
	}

	public function tp_get($pName = "")
	{
		return $this->TEMPLATE_CONTENT[$pName];
	}

	public function tp_fetch()
	{
		$this->tp_parse();
		return $this->TEMPLATE_CONTENT["main"];
	}
	public function tp_print()
	{
		echo $this->tp_fetch();
	}

	public function tp_file($pFile = '')
	{
		$this->tp_read($pFile);
		$this->tp_print();
	}

	public function tp_file_parse($pFile, $param=array())
	{
		extract($param);
		ob_start();
		include $pFile;
		$result = ob_get_contents();
		ob_end_clean();

		return $result;
	}

	public function tp_check_dynamic($template, $value)
	{
		$this->tp_dynamic($template);
		if ($value)
			$this->tp_parse($template);
	}

	public function tp_explode($pName)
	{
		$temp = explode('<!-- LOOP START '.$pName.' -->', $this->TEMPLATE_CONTENT["main"]);
		$head = $temp[0];
		$temp = explode('<!-- LOOP END '.$pName.' -->', $temp[1]);
		$content = $temp[0];
		$tail = $temp[1];


		$this->TEMPLATE_CONTENT["main"] = '<!-- LOOP START '.$pName." -->\n" . $content . '<!-- LOOP END '.$pName.' -->';
	}

	public function tp_add_content($content)
	{
		$this->TEMPLATE_CONTENT["main"] .= $content;
	}
	public function tp_add_content_head($content)
	{
		$this->TEMPLATE_CONTENT["main"] = $content.$this->TEMPLATE_CONTENT["main"];
	}

	public function tp_stripscript()
	{
		$this->TEMPLATE_CONTENT["main"] = stripscript($this->TEMPLATE_CONTENT["main"]);
	}
	public function tp_restore($pKey)
	{
		$this->tp_set($pKey, '{'.$pKey.'}');
	}

	public function tp_parse_inline($template, $pValue)
	{
		if (is_array($pValue))
			foreach($pValue as $key => $value)
				$template = str_replace('{'.$key.'}', $value, $template);

		return $template;
	}

	public function tp_parse_content($pName, $content)
	{
		$this->TEMPLATE_VAR[$this->TEMPLATE_PARENT[$pName]][$pName][] = $content;
	}
}


?>
