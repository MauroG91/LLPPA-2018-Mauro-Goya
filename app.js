console.log ('hello');

var changeColor = function (li) {
  li.style.backgroundColor = '#F00';
}

window.onload = function () {
  var btnPlay = document.getElementById('play');
  btnPlay.onclick = function () {
    var liAlives = document.getElementsByClassName('alive');
    for (var i = 0; i < liAlives.length; i++) {
      changeColor(liAlives[i]);
    }
  }
}
