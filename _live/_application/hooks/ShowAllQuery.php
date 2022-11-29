<?php 

class ShowAllQuery {
	public function displayQuery() {
		global $show_all_query;

		if(sizeof($show_all_query) <= 0) {
			return;
		}

		$html = implode("\n", $show_all_query);
		echo <<<HTML
		<div id='show_all_query' style='display:none;'>
			{$html}
		</div>
		<script>
		var body = document.getElementsByTagName('body')[0];
		var html = document.getElementById('show_all_query').innerHTML;

		body.innerHTML = html + body.innerHTML;
		</script>
HTML;
	}
}