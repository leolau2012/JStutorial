window.onload = function() {
    var oDiv = document.getElementById( 'window' );

    oDiv.onmouseover = function() {


        startMove( this, {
            width: 200,
            height: 400,
            left: 100,
            top: 100

        }, 'Linear', 1000 ,function(){
            alert('可以使用');
        });

    }
    oDiv.onmouseout = function() {


        startMove( this, {
            width: 100,
            height: 100,
            left: 300,
            top: 300

        }, 'Linear', 1000 );

    }


    function startMove( obj, json, fx, times,fn) {
        var startTime = now();
        var iCur = {};
        for ( var attr in json ) {
            iCur[attr] = 0;
        }

        for ( var attr in json ) {


            if ( attr == 'opacity' ) {

                iCur[ attr ] = Math.round( css( obj, 'opacity' ) * 100 );

            } else {

                iCur[ attr ] = parseInt( css( obj, attr ) );

            }
        }

            clearInterval( obj.timer );
        obj.timer = setInterval( function() {
            var changeTime = now();
           // var t = Math.abs( changeTime - startTime );
             var t = times - Math.max(0,startTime -changeTime+times);
            for ( var attr in json ) {
                var value = Tween[ fx ]( t, iCur[attr], json[attr] - iCur[ attr ], times );
                if ( attr == 'opacity' ) {

                    obj.style.opacity = value / 100;
                    obj.style.filter = 'alpha(opacity:' + value + ')';

                } else {

                    obj.style[ attr ] = value + 'px';

                }

            }
            console.log( t );
            if ( t == times ) {
                clearInterval( obj.timer );
                fn&&fn();

            }


        }, 30 );
    }

    function css( obj, attr ) {
        return obj.currentStyle ? obj.currentStyle[ attr ] : getComputedStyle( obj, false )[ attr ];
    }

    function now() {
        return ( new Date() ).getTime();
    }

        var Tween = {
          Linear: function( t, b, c, d ) {
            return c * t / d + b;
        },
       
        Cubic: {
            easeIn: function( t, b, c, d ) {
                return c * ( t /= d ) * t * t + b;
            },
            easeOut: function( t, b, c, d ) {
                return c * ( ( t = t / d - 1 ) * t * t + 1 ) + b;
            },
            easeInOut: function( t, b, c, d ) {
                if ( ( t /= d / 2 ) < 1 ) return c / 2 * t * t * t + b;
                return c / 2 * ( ( t -= 2 ) * t * t + 2 ) + b;
            }
        },
        Quart: {
            easeIn: function( t, b, c, d ) {
                return c * ( t /= d ) * t * t * t + b;
            },
            easeOut: function( t, b, c, d ) {
                return -c * ( ( t = t / d - 1 ) * t * t * t - 1 ) + b;
            },
            easeInOut: function( t, b, c, d ) {
                if ( ( t /= d / 2 ) < 1 ) return c / 2 * t * t * t * t + b;
                return -c / 2 * ( ( t -= 2 ) * t * t * t - 2 ) + b;
            }
        },
        Quint: {
            easeIn: function( t, b, c, d ) {
                return c * ( t /= d ) * t * t * t * t + b;
            },
            easeOut: function( t, b, c, d ) {
                return c * ( ( t = t / d - 1 ) * t * t * t * t + 1 ) + b;
            },
            easeInOut: function( t, b, c, d ) {
                if ( ( t /= d / 2 ) < 1 ) return c / 2 * t * t * t * t * t + b;
                return c / 2 * ( ( t -= 2 ) * t * t * t * t + 2 ) + b;
            }
        },
        Sine: {
            easeIn: function( t, b, c, d ) {
                return -c * Math.cos( t / d * ( Math.PI / 2 ) ) + c + b;
            },
            easeOut: function( t, b, c, d ) {
                return c * Math.sin( t / d * ( Math.PI / 2 ) ) + b;
            },
            easeInOut: function( t, b, c, d ) {
                return -c / 2 * ( Math.cos( Math.PI * t / d ) - 1 ) + b;
            }
        },
        Expo: {
            easeIn: function( t, b, c, d ) {
                return ( t == 0 ) ? b : c * Math.pow( 2, 10 * ( t / d - 1 ) ) + b;
            },
            easeOut: function( t, b, c, d ) {
                return ( t == d ) ? b + c : c * ( -Math.pow( 2, -10 * t / d ) + 1 ) + b;
            },
            easeInOut: function( t, b, c, d ) {
                if ( t == 0 ) return b;
                if ( t == d ) return b + c;
                if ( ( t /= d / 2 ) < 1 ) return c / 2 * Math.pow( 2, 10 * ( t - 1 ) ) + b;
                return c / 2 * ( -Math.pow( 2, -10 * --t ) + 2 ) + b;
            }
        },
        Circ: {
            easeIn: function( t, b, c, d ) {
                return -c * ( Math.sqrt( 1 - ( t /= d ) * t ) - 1 ) + b;
            },
            easeOut: function( t, b, c, d ) {
                return c * Math.sqrt( 1 - ( t = t / d - 1 ) * t ) + b;
            },
            easeInOut: function( t, b, c, d ) {
                if ( ( t /= d / 2 ) < 1 ) return -c / 2 * ( Math.sqrt( 1 - t * t ) - 1 ) + b;
                return c / 2 * ( Math.sqrt( 1 - ( t -= 2 ) * t ) + 1 ) + b;
            }
        },
        Elastic: {
            easeIn: function( t, b, c, d, a, p ) {
                if ( t == 0 ) return b;
                if ( ( t /= d ) == 1 ) return b + c;
                if ( !p ) p = d * .3;
                if ( !a || a < Math.abs( c ) ) {
                    a = c;
                    var s = p / 4;
                } else var s = p / ( 2 * Math.PI ) * Math.asin( c / a );
                return -( a * Math.pow( 2, 10 * ( t -= 1 ) ) * Math.sin( ( t * d - s ) * ( 2 * Math.PI ) / p ) ) + b;
            },
            easeOut: function( t, b, c, d, a, p ) {
                if ( t == 0 ) return b;
                if ( ( t /= d ) == 1 ) return b + c;
                if ( !p ) p = d * .3;
                if ( !a || a < Math.abs( c ) ) {
                    a = c;
                    var s = p / 4;
                } else var s = p / ( 2 * Math.PI ) * Math.asin( c / a );
                return ( a * Math.pow( 2, -10 * t ) * Math.sin( ( t * d - s ) * ( 2 * Math.PI ) / p ) + c + b );
            },
            easeInOut: function( t, b, c, d, a, p ) {
                if ( t == 0 ) return b;
                if ( ( t /= d / 2 ) == 2 ) return b + c;
                if ( !p ) p = d * ( .3 * 1.5 );
                if ( !a || a < Math.abs( c ) ) {
                    a = c;
                    var s = p / 4;
                } else var s = p / ( 2 * Math.PI ) * Math.asin( c / a );
                if ( t < 1 ) return -.5 * ( a * Math.pow( 2, 10 * ( t -= 1 ) ) * Math.sin( ( t * d - s ) * ( 2 * Math.PI ) / p ) ) + b;
                return a * Math.pow( 2, -10 * ( t -= 1 ) ) * Math.sin( ( t * d - s ) * ( 2 * Math.PI ) / p ) * .5 + c + b;
            }
        }
       
    };

}