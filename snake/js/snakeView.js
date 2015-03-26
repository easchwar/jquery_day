(function() {
  if (typeof SnakeGame === 'undefined') {
    window.SnakeGame = {};
  }

  var View = window.SnakeGame.View = function($el) {
    this.$el = $el;
    this.board = new window.SnakeGame.Board();
    this.bindListener();
    this.lastKey = this.board.snake.dir;
    setInterval(this.step.bind(this), 100);
  };

  View.prototype.bindListener = function() {
    $('body').keydown(this.keyHandler.bind(this));
  };


  View.prototype.keyHandler = function (event) {
    switch(event.keyCode) {
      case 37:
        this.lastKey = "W";
        break;
      case 38:
        this.lastKey = "S";
        break;
      case 39:
        this.lastKey = "E";
        break;
      case 40:
        this.lastKey = "N";
        break;
      default:
        this.lastKey = this.board.snake.dir;
        break;
    }
    console.log(this.board.snake.dir);
  };

  View.prototype.step = function () {
    this.board.snake.turn(this.lastKey);
    this.board.snake.move();
    $('pre').html(this.board.render());
  };

})();
