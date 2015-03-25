(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = window.TTT.View = function (game, $el) {
    this.game = game;
    this.el = $el;
  };

  View.prototype.bindEvents = function () {
    var $squares = $('.square');
    $squares.on("click", this.makeMove.bind(this));
  };

  View.prototype.makeMove = function (event) {
    var $square = $(event.currentTarget);
    var x = parseInt($square.attr('data-row'));
    var y = parseInt($square.attr('data-col'));

    try {
      var mark = this.game.currentPlayer;
      this.game.playMove([x,y]);
      // debugger;
      $square.attr('class', 'square ' + mark);
      $square.html(mark);
    } catch(err) {
      alert("invalid move fool");
    }
    this.checkGameWon();
  };

  View.prototype.checkGameWon = function() {
    if (this.game.board.isOver()) {
      var $squares = $('.square');
      $squares.unbind();
      var $ttt = $('.ttt');
      $ttt.addClass('game-over');
      var $winMessage = $('<h2></h2>');
      $winMessage.attr('class', 'win-message ');
      $winMessage.html(this.game.winner() + " Wins");
      // debugger;
      $('body').append($winMessage);
    }
  };

  View.prototype.setupBoard = function () {
    for (var j = 0; j < 3; j++) {
      var $row = $("<div></div>");
      $row.attr('class', 'row clearfix');
      for (var i = 0; i < 3; i++) {
        var $square = $("<div></div>");
        $square.attr('class', 'square');
        $square.attr('data-row', j.toString());
        $square.attr('data-col', i.toString());
        $row.append($square);
      }
      this.el.append($row);
    }
  };
})();
