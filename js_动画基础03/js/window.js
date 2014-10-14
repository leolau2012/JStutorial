window.onload = function() {

    var oDiv = document.getElementById( 'window' );
    var disX = 0;
    var disY = 0;
    var iSpeedX = 0;
    var iSpeedY = 0;
    var prevX = 0;
    var prevY = 0;
    var timer = null;
    oDiv.onmousedown = function( ev ) {
        var ev = ev || window.event;
        disX = ev.clientX - oDiv.offsetLeft;
        disY = ev.clientY - oDiv.offsetTop;
        prevX = ev.clientX;
        prevY = ev.clientY;
        console.log(disX);
        document.onmousemove = function( ev ) {
            clearInterval( timer );
            var ev = ev || window.event;
            oDiv.style.left = ev.clientX - disX + 'px';
            oDiv.style.top = ev.clientY - disY+ 'px';
            iSpeedX = ev.clientX - prevX;
            iSpeedY = ev.clientY - prevY;
            prevX = ev.clientX;
            prevY = ev.clientY;

        }

        document.onmouseup = function( ev ) {
            var ev = ev || window.event;
            document.onmouseup = null;
            document.onmousemove = null;
            var ev = ev || window.event;
            startMove();
        }
        return false;

    }

    function startMove() {
        // console.log(iTarget);
        clearInterval( timer );
        timer = setInterval( function() {
            iSpeedY+=1;
            var L = oDiv.offsetLeft + iSpeedX;
            var T = oDiv.offsetTop + iSpeedY;
            if ( L > document.documentElement.clientWidth - oDiv.offsetWidth ) {
                L = document.documentElement.clientWidth - oDiv.offsetWidth;
                iSpeedX *= -1;
                iSpeedY*=0.75; 
                 iSpeedX*=0.75; 

            } else if ( L < 0 ) {
                L = 0;
                iSpeedX *= -1;
                 iSpeedY*=0.75; 
                 iSpeedX*=0.99; 
            }
            if ( T > document.documentElement.clientHeight - oDiv.offsetHeight ) {
                T = document.documentElement.clientHeight - oDiv.offsetHeight;
                iSpeedY *= -1;
                iSpeedY*=0.75;
                 iSpeedX*=0.35; 

            } else if ( T < 0 ) {
                T = 0;
                iSpeedY *= -1;
                 iSpeedY*=0.75 ;

            }
            oDiv.style.left = L + 'px';
            oDiv.style.top = T + 'px';
           
        }, 30 );

    }


}