//Movement Variables
var DIRECTION = {
    IDLE: 0,
    UP: 1,
    DOWN: 2, 
    LEFT: 3, 
    RIGHT: 4
};

var rounds = [5, 5, 3, 3, 2];
var colors = ['#1abc9c', '#2ecc71', '#3498db', '#8c52ff', '#9b59b6'];

//creation of the ball object

var Ball = {
    new: function (incrementSpeed) {
        return {
            width: 18,
            height: 18, 
            x: (this.canvas.width /2) -9,
            y: (this.canvas.height / 2) -9,
            moveX: DIRECTION.IDLE,
            moveY: DIRECTION.IDLE,
            speed: incrementedSpeed || 7
        };
    }
};

// an 'ai' object (two lines moving up and down)
var Ai = {
    new: function (side) {
        return {
            width: 18, 
            height: 180, 
            x: side === 'left' ? 150 : this.canvas.width - 150,
            y: (this.canvas.height /2) - 35,
            score: 0,
            move: DIRECTION.IDLE, 
            speed: 8
        };
    }
};

var Game = {
    initialize: function () {
    this.canvas = document.querySelector('canvas');
    this.context = this.canvas.getContext('2d');

    this.canvas.width = 1400;
    this.canvas.height = 1000;

    this.canvas.style.width = (this.canvas.width / 2) + 'px';
    this.canvas.style.height = (this.canvas.height / 2) + 'px';

    this.player = Ai.new.call(this, 'left');
    this.ai = Ai.new.call(this, 'right');
    this.ball = Ball.new.call(this);

    this.ai.speed = 5; 
    this.running = this.over = false;
    this.turn = this.ai; 
    this.timer = this.round = 0;
    this.color = '#8c52ff';
    
    }

}