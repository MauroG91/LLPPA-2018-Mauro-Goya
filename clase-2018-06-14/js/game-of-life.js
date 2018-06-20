var GameOfLife = {
  getBoardFromHTML: function(cells, cols) {
    var board = [];
    var row = [];
    for(var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var isAlive = cell.className === 'alive';
      row.push(isAlive);
      if(i % 5 === 4){
        board.push(row);
        row = [];
      }
    }
    return board;
  },
  getNewBoard: function(cells,cols){
    var newBoard = [];
    var newRow = [];
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var isNewAlive = cell.className === 'nextAlive';
      newRow.push(isNewAlive);
      if (i % 5 === 4){
        newBoard.push(newRow);
        newRow = [];
      }
    }
    return newBoard;
  }
};
