(function () {

  if (typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }

  var Coord = window.SnakeGame.Coord;

  var Snake = window.SnakeGame.Snake = function () {
    this.dir = "N";
    this.pos = new Coord([2,2]);
    this.segments = [this.pos, new Coord([2,1]),new Coord([2,0]),new Coord([1,0]),new Coord([0,0]) ];
  };

  Snake.DIRS = {
    N: new Coord([1,  0]),
    E: new Coord([0,  1]),
    S: new Coord([-1, 0]),
    W: new Coord([0, -1])
  };

  Snake.prototype.move = function () {
    this.pos = this.pos.plus(Snake.DIRS[this.dir]);
    this.segments.unshift(this.pos);
    this.segments.pop();
  };

  Snake.prototype.turn = function(newDir) {
    var dirVal = Snake.DIRS[this.dir];
    var newDirVal = Snake.DIRS[newDir];
    if (!dirVal.isOpposite(newDirVal)) {
      this.dir = newDir;
    }
  };

})();
