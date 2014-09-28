function ajax(method, url, data,success) {



	//打开浏览器
	// 1.创建ajax对象 ie6 ActitiveXObject('Mircrosoft.XMLHTTP');
	var xhr = null;
	try {

		xhr = new XMLHttpRequest();


	} catch (e) {

		xhr = new ActitiveXObject('Mircrosoft.XMLHTTP');

	}
	//输入地址 放入大象
	if( method =='get'&&data){

		url+='?'+data;

	}
	xhr.open(method, url, true);
	if (method == 'get') {
		
		xhr.send();

	} else {

		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(data);

	};

	
	// 提交
	
	//等待返回 关门
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				
				success&&success(xhr.responseText);

			}

		}
	}
}