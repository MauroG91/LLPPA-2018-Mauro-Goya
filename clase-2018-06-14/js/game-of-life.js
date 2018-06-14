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
  }
};
