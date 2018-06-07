console.log("2");

var play = function(){
  var liAlives = Board.getCells();
  Board.updateCells(liAlives);
}

window.onload = function() {/* Se ejecuta luego de que se cargue todo el html */
  var btnPlay = Board.getPlayButton();
  btnPlay.onclick = play;
  
}
