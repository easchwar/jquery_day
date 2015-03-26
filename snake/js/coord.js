(function () {

  if (typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }

  var Coord = window.SnakeGame.Coord = function(pos) {
    this.x = pos[0];
    this.y = pos[1];
  };

  Coord.prototype.plus = function (otherCoord) {
    return new Coord([this.x + otherCoord.x, this.y + otherCoord.y]);
  };

  Coord.prototype.equals = function (otherCoord) {
    return this.x === otherCoord.x && this.y === otherCoord.y;
  };

  Coord.prototype.isOpposite = function (otherCoord) {
    return this.x === -otherCoord.x && this.y === -otherCoord.y;
  };

})();
