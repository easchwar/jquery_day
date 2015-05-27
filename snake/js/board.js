(function () {

  if (typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }

  var Board = window.SnakeGame.Board = function() {
    this.width = 90;
    this.height = 40;
    this.snake = new window.SnakeGame.Snake();
    this.apples = null;
  };


  Board.prototype.render = function () {
    var boardString = "";
    for(var i = 0; i < this.height; i++ ) {
      boardString += "\n";
      for(var j = 0; j < this.width; j++) {
        var found = false;
        for (var k = 0; k < this.snake.segments.length; k++) {
          if (this.snake.segments[k].equals(new window.SnakeGame.Coord([i,j]))) {
            boardString += "S ";
            found = true;
          }
        }
        if (!found) {
          boardString += "_ ";
        }
      }
    }
    return boardString;
  };

})();
