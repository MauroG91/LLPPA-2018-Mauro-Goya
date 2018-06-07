console.log("Hello");

var changeColor = function(li) {
  li.style.backgroundColor='red';
}
window.onload = function() {/* Se ejecuta luego de que se cargue todo el html */
  var btnPlay = document.getElementById('play');
  btnPlay.onclick = function() {
    var liAlives = document.getElementsByClassName('alive');
    for (var i = 0; i < liAlives.length; i++) {
      changeColor(liAlives[i]);
    }
  }
}
