  function startMove(obj, attr, dir, target) {

    clearInterval(obj.timer);
    var iSpeed = 0;
    obj.timer = setInterval(function() {

       iSpeed = parseInt(getStyle(obj, attr)) + dir;

      if (iSpeed >= target) {

        clearInterval(obj.timer)
        
      } else {

       
        obj.style[attr] = iSpeed + 'px';

      }

    }, 30);



  }

  function getStyle(obj, attr) {

    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];

  }