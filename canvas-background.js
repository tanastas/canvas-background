var curTop = 0,
    s = 150;
    dot_size = 1;
    amount = 100;
	dots = {};
	
var ctx = document.getCSSCanvasContext("2d", "animation", s, s);

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
	ctx.fillStyle = 'black';
	ctx.fillRect(0,0,s,s);
	ctx.fillStyle = 'lime';
	checkSides();
	for(dot in dots){
			dots[dot].x = dots[dot].x + dots[dot].d_x;
			dots[dot].y = dots[dot].y + dots[dot].d_y;
			ctx.fillRect(Math.round(dots[dot].x), Math.round(dots[dot].y), dot_size, dot_size);
	}
	
    setTimeout(renderCanvas, 25);
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
renderCanvas();

