  function startMove(obj, attr, dir, target, endFn) {

      clearInterval(obj.timer);

      var speed = 0;

      dir = parseInt(getStyle(obj, attr)) < target ? dir : -dir;

      obj.timer = setInterval(function() {
          if (attr == 'opacity') {

              speed = Math.round(getStyle(obj, attr) * 100) + dir;

          } else {

              speed = parseInt(getStyle(obj, attr)) + dir;

          }


          if (speed >= target && dir > 0 || speed <= target && dir < 0) {

              speed = target;
          }
          
          if (attr == 'opacity') {

              obj.style.opacity = speed / 100;
              obj.style.filter = 'alpha(opacity:' + speed + ')';


          } else {

              obj.style[attr] = speed + 'px';

          }


          if (speed == target) {
              //alert(1);
              clearInterval(obj.timer);
              endFn && endFn();

          }
      }, 30);

  }

  function getStyle(obj, attr) {

      return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];

  }