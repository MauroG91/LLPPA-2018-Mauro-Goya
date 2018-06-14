console.log("6");

var play = function() {
  var liAlives = Board.getCells();
  Board.updateCells(liAlives);
}

/* Se ejecuta luego de que se cargue todo el html */
var init = function() {
    Board.createCells();
    var cells = Board.getCells();
    for (var i = 0; i < cells.length; i++) {
      cells[i].onclick = Cell.toggle
    }
    // var btnPlay = Board.getPlayButton();
    // btnPlay.onclick = play;
  }


window.onload = init;
