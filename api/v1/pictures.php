<?php
	$dir = '../../images/gallery';
	$files = scandir($dir);

	header('Content-Type: application/json');
	echo json_encode($files);
?>
