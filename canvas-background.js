// Globals
var curTop = 0;
var s = 100;
var dot_size = 5;
var amount = 3;
var mult = 5;
var dots = {};
	
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var dataUri = canvas.toDataURL();

var init = function() {
    for(var i = 0;i <= amount;i++){
        dots[i] = {};
        dots[i].x = Math.round(Math.random()*s);
        dots[i].y = Math.round(Math.random()*s);
        dots[i].an = (Math.round(Math.random()*200)/100*3.1415);
        dots[i].d_x = Math.sin(dots[i].an);
        dots[i].d_y = Math.cos(dots[i].an);
    }
}

var renderCanvas = function() {
    dataUri = canvas.toDataURL();
    document.body.style.background = "url( " + dataUri + ") repeat";
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,s,s);
    ctx.fillStyle = 'red';
    checkSides();
    for(dot in dots){
        dots[dot].x = dots[dot].x + mult * dots[dot].d_x;
        dots[dot].y = dots[dot].y + mult * dots[dot].d_y;
        ctx.fillRect(dots[dot].x, dots[dot].y, dot_size, dot_size);
    }
}

var checkSides = function() {
	for(dot in dots){
		if(dots[dot].x < 0 && dots[dot].d_x < 0){
			dots[dot].x = s;
		}
		if(dots[dot].y < 0 && dots[dot].d_y < 0){
			dots[dot].y = s;
		}
		if(dots[dot].x > s && dots[dot].d_x > 0){
			dots[dot].x = 0;
		}
		if(dots[dot].y > s && dots[dot].d_y > 0){
			dots[dot].y = 0;
		}
	}
}

init();
setInterval(renderCanvas, 1000);

