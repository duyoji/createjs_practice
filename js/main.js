(function (window) {

	window.addEventListener('load', main);

	var stage;
	var angle  = 60;
	var circle = new createjs.Shape();
	var radius = 30;
	var speed  = 60;
	createjs.Ticker.setFPS(60);

	function main(event) {
			stage = new createjs.Stage('demoCanvas');
			stage.canvas.width  = window.innerWidth;
			stage.canvas.height = window.innerHeight;

			circle.graphics.beginFill('#00ffff').drawCircle(0, 0, 10);
			circle.x = stage.canvas.width / 2;
			circle.y = stage.canvas.height / 2;

			createjs.Ticker.addEventListener('tick',tick);


			stage.addChild(circle);
	}


	var xState     = 1;
	var yState     = 1;
	var speedState = 1;

	function tick (event) {
			stage.update();
			


			speed += speedState;

			if (speed < -100 || 100 < speed) {
				speedState *= -1;
			}


			var radian = angle * Math.PI / 180;

			var vx = Math.cos(radian) * speed * xState;
			var vy = Math.sin(radian) * speed * yState;

			console.log('vx, vy : ' + vx + ', ' + vy);
			
			circle.x += vx;
			circle.y += vy;

			if (circle.x  > stage.canvas.width || circle.x < 0) {
				xState *= -1;
			}
			if (circle.y  > stage.canvas.height || circle.y < 0) {
				yState *= -1;
			}

	/*
	angle += 30;
	if (angle >= 360) {
		angle = 0;
	}

	var x = Math.cos(angle * Math.PI/180) * radius + window.innerWidth / 2;
	var y = Math.sin(angle * Math.PI/180) * radius + window.innerHeight / 2;

	circle.x = x;
	circle.y = y;
	*/	
	}
})(window);
