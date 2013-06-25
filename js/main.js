(function (window) {

    window.addEventListener('load', main);

    var stage;

    // import
	/*
    function main(event) {
        stage = new createjs.Stage('demoCanvas');
        var circle = new createjs.Shape();
        circle.graphics.beginFill('#00ffff').drawCircle(0, 0, 10);
        circle.x = 100;
        circle.y = 100;

        createjs.Tween
            .get(circle,{loop:true, useTick:true})
            .to({x:400}, 3000)
            .to({x:100}, 3000);

        createjs.Ticker.addEventListener('tick',tick);


        stage.addChild(circle);
    }
	*/

	var angle = 0;
	var circle = new createjs.Shape();
	var radius = 30;
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

    function tick (event) {
        stage.update();
		angle += 30;
		if (angle >= 360) {
			angle = 0;
		}

		var x = Math.cos(angle * Math.PI/180) * radius + window.innerWidth / 2;
		var y = Math.sin(angle * Math.PI/180) * radius + window.innerHeight / 2;

		circle.x = x;
		circle.y = y;
		
    }
})(window);
