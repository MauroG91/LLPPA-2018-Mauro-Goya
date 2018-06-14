var Board = {
  rows: 5,
  columns: 5,
  getBoard: function() {
    return document.getElementsByClassName('board')[0];
  },
  getPlayButton: function() {
  return document.getElementById('play');
  },
  getCells : function() {
    var board = Board.getBoard();
    return board.getElementsByTagName('li');
  },
  getaAliveCells: function() {
   return document.getElementsByClassName('alive');
 },
 createCells: function() {
   var board = Board.getBoard();
   var html = '';
   for (var i = 0; i < (Board.rows * Board.columns); i++) {
    html += '<li></li>';
   }
   board.innerHTML = html;
 },
  updateCells: function(cells) {
   for (var i = 0; i < cells.length; i++) {
     Cell.changeColor(cells[i]);
    }
  }
}
