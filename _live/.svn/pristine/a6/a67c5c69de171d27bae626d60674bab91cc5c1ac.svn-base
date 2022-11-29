#!/usr/local/bin/php -q
<?php

list( , $module) = $_SERVER['argv'];

include './daemon.inc.php';

if ($_SERVER['argc'] < 2 || !in_array($module, $modules)) {
		die("usage: ./daemon_process.php [{$modules_str}]\n");
}


$pids = array();
while (1) {
		if (process_count($pids) >= $_ENV['QUEUE'][strtoupper($module)]['THREADS']) {
				sleep($_ENV['QUEUE'][strtoupper($module)]['SLEEP']);
				continue;
		}

		$pids[] = process_background(dirname(__FILE__)."/{$module}_util", "{$module}_util");
}
