window.onload=function(){

    var oUl = document.getElementById('list');
    var disX = 0;
    var aLi = document.getElementsByTagName('li');
    var iNow = 0;
    var iSpeed = 0;
    var timer = null;
    oUl.onmousedown = function(ev){
            var ev = ev || window.event;        
            var pointerDown = ev.clientX;
            var origal = oUl.offsetLeft;
             document.onmousemove = function(ev){
                 clearInterval(timer);
                var ev = ev || window.event;

                // var pointerMove = ev.clientX;
                // disX =  ev.clientX - pointerDown;
                // console.log(disX);
                oUl.style.left =origal+(ev.clientX-pointerDown)+'px';

             }

            document.onmouseup = function(event){
                document.onmouseup = null;
                document.onmousemove = null;
                var ev = ev || window.event;         
               // var pointerUp = ev.clientX;
               // console.log(pointerDown+':'+pointerUp);
               if(ev.clientX-pointerDown<0){

                     if(iNow!=aLi.length-1){

                        iNow++;
                    }
                   
                      console.log(iNow);
                    startMove(-iNow*aLi[0].offsetWidth);

               }else{
                    if(iNow!=0){

                        iNow--;
                        
                    }
                      console.log(iNow);
                    startMove(-iNow*aLi[0].offsetWidth);

               }
              
            }
             return false;

    }

    function startMove(iTarget){
        console.log(iTarget);
        clearInterval(timer);
        timer = setInterval(function(){
             // console.log('1111111111');
            iSpeed +=(iTarget - oUl.offsetLeft)/6;
             iSpeed*=0.75;
              if(Math.abs(iSpeed)<=1&&Math.abs(iTarget-oUl.offsetLeft)<=1){
                        clearInterval(timer);
                        oUl.style.left = iTarget+'px';

                        iSpeed =0;
                    }else{
                         oUl.style.left = iSpeed+oUl.offsetLeft+'px';
                    }
        },30);
       
    }


}