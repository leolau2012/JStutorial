<?php 

header('content-type:text/html;charset="utf-8"');
error_reporting(0);
//$_REQUEST post get均可
$username = $_POST['username'];
$age = $_POST['age'];

echo "你的名字：{$username},你的年龄是：{$age}";