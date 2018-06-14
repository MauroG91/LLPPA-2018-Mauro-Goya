var Board = {
  rows: 5,
  columns: 5,
  getBoard: function() {
    return document.getElementsByClassName('board')[0];
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
 nextStep: function() {
   var boardHTML = Board.getCells();
   var currentBoard = GameOfLife.getBoardFromHTML(boardHTML, Board.columns);
   console.log(currentBoard);
 }
}
