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
  getAliveCells: function() {
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
    var nextBoard = GameOfLife.getNewBoard(boardHTML, Board.columns);
    console.log(currentBoard);
    console.log(nextBoard);


    for (var i = 0; i < currentBoard.length; i++) {
      for (var j = 0; j < currentBoard.length; j++) {
        var contador = 0
        contador += currentBoard[i][j - 1] ? true : false
        contador += currentBoard[i][j + 1] ? true : false
        contador += (currentBoard[i - 1] && currentBoard[i - 1][j - 1]) ? true : false
        contador += (currentBoard[i - 1] && currentBoard[i - 1][j]) ? true : false
        contador += (currentBoard[i - 1] && currentBoard[i - 1][j + 1]) ? true : false
        contador += (currentBoard[i + 1] && currentBoard[i + 1][j - 1]) ? true : false
        contador += (currentBoard[i + 1] && currentBoard[i + 1][j]) ? true : false
        contador += (currentBoard[i + 1] && currentBoard[i + 1][j + 1]) ? true : false
        console.log(i,j,contador);
        if (currentBoard[i][j] === false) {
          if (contador > 2) {
            var nextState = true
            console.log(i,j,nextState);
            nextBoard[i][j] = nextState;
          }
        }
        if (currentBoard[i][j] === true){
          if (contador === 2 || contador === 3){
            var nextState = true
            console.log(i,j,nextState);
            nextBoard[i][j] = nextState;
          }
        }
      }
    }

    console.log(boardHTML);
    for (var y = 0; y < boardHTML.length; y++) {
      boardHTML[y].className = ''
    }
    console.log(boardHTML);
    var c = 0
    for (var i = 0; i < nextBoard.length; i++) {
      for (var j = 0; j < nextBoard.length; j++) {
        if (nextBoard[i][j] === true){
          boardHTML[c].className = 'alive';
          c++;
        }else{
          boardHTML[c].className = '';
          c++;
        }
      }
    }

    console.log(boardHTML);
    console.log(nextBoard);
    console.log(currentBoard);
  }
}
