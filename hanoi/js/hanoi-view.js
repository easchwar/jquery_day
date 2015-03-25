(function () {
  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }

  var View = window.Hanoi.View = function (game, $el) {
    this.game = game;
    this.el = $el;
    this.setupTowers();
    this.firstClick = null;
  };

  View.prototype.bindEvents = function () {
    var $towers = $('.tower');
    $towers.on("click", this.makeMove.bind(this));
  };

  View.prototype.makeMove = function (event) {
    var $currTarget = $(event.currentTarget);
    if (this.firstClick === null) {
      this.firstClick = parseInt($currTarget.data('index'));
      $currTarget.addClass('selected');
    } else {
      var fromTower = this.firstClick;
      var toTower = parseInt($currTarget.data('index'));
      this.firstClick = null;
      try {
        this.game.move(fromTower, toTower);
      } catch(e) {
        debugger;
        alert('you stink');
      }
      this.update();
      this.checkGameWon();
    }
  };

  View.prototype.checkGameWon = function() {
    if (this.game.isWon()) {
      $('body').append('<h1>You Won</h1>');
      $('.tower').unbind();
    }
  };

  View.prototype.update = function() {
    $('.tower').removeClass('selected');
    $('.disc').removeClass('disc-1 disc-2 disc-3');
    var $towers = $('.tower');
    for(var i = 0; i < 3; i++) {
      var currTower = this.game.towers[i];
      for (var j = 0; j < currTower.length; j++) {
        var $disc = $towers.eq(i).children().eq(2 - j);
        $disc.addClass("disc-" + currTower[j].toString());
      }
    }
  };

  View.prototype.setupTowers = function () {
    for(var i = 0; i < 3; i++) {
      var $tower = $("<div></div>");
      $tower.addClass('tower');
      $tower.data('index', i);
      for(var j = 0; j < 3; j++) {
        var $disc = $("<div></div>");
        $disc.addClass('disc');
        $tower.append($disc);
      }
      this.el.append($tower);
    }
    this.update();
  };

})();
