(function (window) {

    window.addEventListener('load', main);

    var stage;

    // import
    function main(event) {
        stage = new createjs.Stage('demoCanvas');
        var circle = new createjs.Shape();
        circle.graphics.beginFill('#00ffff').drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;

        createjs.Tween
            .get(circle,{loop:true, useTick:true})
            .to({x:400}, 1000)
            .to({x:0}, 1000);

        createjs.Ticker.addEventListener('tick',tick);


        stage.addChild(circle);
    }

    function tick (event) {
        stage.update();
    }
})(window);