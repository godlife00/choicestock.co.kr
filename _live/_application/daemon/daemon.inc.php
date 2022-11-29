<?php
$_ENV = array(
	'QUEUE' => array(
				'MAIL' => array(
								'TABLES'	=> array('send_mail'),
								'SLEEP'		=> 30,
								'THREADS'	=> 1,
							),
			   ),
	'PATH_LOG'	=> dirname(__FILE__).'/log',
);

$modules = array_keys($_ENV['QUEUE']);
$modules_str = implode(' | ', $modules);


function progress() {
		for ($i = 0; $i < 10; $i++) {
				usleep(100000);
				echo "...";
		}
		return true;
}
function process_exists() {
		$c = '';
		if (func_num_args() > 0) {
				$p = func_get_args();
				$c = implode(' ', $p);
		}
		exec("/bin/ps -f | grep '{$c}' | grep -v 'grep'", $_p);
		return !(count($_p) == 0);
}
function process_background($c, $log='') {
		if (strlen($log)) {
				$f = "{$_ENV['PATH_LOG']}/{$log}";
				if (!is_writable($_ENV['PATH_LOG'])) {
						chmod($_ENV['PATH_LOG'], 0707);
				}
		} else {
				$f = '/dev/null';
		}
		return shell_exec("nohup {$c} >> {$f} & echo $!");
}
function process_start() {
		$c = '';
		$log = '';
		if (func_num_args() > 0) {
				$p = func_get_args();
				$c = implode(' ', $p);
				$log = implode('_', $p);
				$log = substr($log, strrpos("/{$log}", '/'));
		}
		echo "Wait! ";
		process_background($c, $log);
}
function process_stop() {
		$c = '';
		if (func_num_args() > 0) {
				$p = func_get_args();
				$c = implode(' ', $p);
		}
		echo "Wait! ";
		exec("/bin/ps -f | grep '{$c}' | grep -v 'grep' | awk '{ print $1 }' | xargs kill -9", $_p);
}
function process_count(&$pids) {
		if (count($pids)) {
				exec("/bin/ps -o pid -p " . implode(',', $pids), $_p);
				array_shift($_p);
				$pids = array_map('trim', $_p);
				unset($_p);
		}
		return count($pids);
}
?>
