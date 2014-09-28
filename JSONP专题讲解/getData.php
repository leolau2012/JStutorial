<?php 
$t = isset($_GET['t'])?$_GET['t']:'num';
$callback = isset($_GET['callback'])?$_GET['callback']:'fn1';
$arr1 = array('111','222','333','444','55555555');
$arr2 = array('aaa','bbbbbbb','cccccc','ddddddd','eeeeeeeeee');
if($t =='num'){

	$data = json_encode($arr1);
}else{

	$data = json_encode($arr2);

}
echo $callback.'('.$data.')';
