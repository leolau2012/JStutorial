<?php 

header('content-type:text/html;charset="utf-8"');
error_reporting(0);
//$_REQUEST post get均可
// $arr1 = array('wpdic','web','java');

$news = array(

	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27'),
	array('title'=>'猪八戒今天娶媳妇','date'=>'2014-00-27')

);

echo json_encode($news);