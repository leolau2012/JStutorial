  function doOpacity(obj, attr, dir, target, endFn) {

        
        clearInterval(obj.timer);
        
        dir = Math.round(getStyle(obj, attr)*100)< target ? dir : -dir;
        
        obj.timer = setInterval(function() {

            var speed = Math.round(getStyle(obj, attr)*100) + dir;

            obj.style.opacity = speed/100;
            obj.style.filter='alpha(opacity:'+speed+')';
            console.log( obj.style.opacity);


            if (speed == target) {
                //alert(1);
                clearInterval(obj.timer);
                endFn && endFn();
                  }
        }, 50);

    }

    function getStyle(obj, attr) {
        //alert(222222222222);
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];

    }