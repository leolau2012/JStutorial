function startMove(obj,json) {

        clearInterval(obj.timer);
        var iCur = 0;

        obj.timer = setInterval(function() {
            var flag = true;
            for(var attr in json){
                var iTarget = json[attr];
                if(attr=='opacity'){
                  
                   iCur[arr] = Math.round(css(obj,'opacity')*100);

                }else{

                    iCur = parseInt(css(obj,attr));

                }
                iSpeed = (iTarget-iCur)/8;
                iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
                if(iCur !=iTarget){
                    flag = false;
                      if(attr=='opacity'){
                                    obj.style.opacity = (iCur+iSpeed) / 100;
                                    obj.style.filter = 'alpha(opacity:' + (iCur+iSpeed)  + ')';
                      }else{
                          obj.style[attr]=iCur+iSpeed+'px';
                      }
                }
               }
               //所有属性是不是都到了目标点
               if(flag){
                 clearInterval(obj.timer);
               }
                
        }, 30);
      }
        function css(obj, attr) {
         return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
      }