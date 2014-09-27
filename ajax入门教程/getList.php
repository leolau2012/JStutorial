<?php 

header('content-type:text/html;charset="utf-8"');
error_reporting(0);
//$_REQUEST post get均可
// $arr1 = array('wpdic','web','java');
$arr2 = array('username'=>'leo','age'=>32);
echo json_encode($arr2);