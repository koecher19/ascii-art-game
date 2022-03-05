/*
function loadGround() {
  var groundSingle = '##############################################################################';
  var groundDouble = '##############################################################################\n##############################################################################';
  var groundTriple = '##############################################################################\n##############################################################################\n##############################################################################';
  document.getElementById('ground').innerHTML = groundTriple;
}
*/

function changePlayerPos() {
  var playerPos = document.getElementsByClassName('player_box')[0];
  /*
    343px <-- max pos. top
    610px <-- max üos left
  */
  playerPos.style.top = '343px';
  playerPos.style.left = '610px';
}

console.log('test');

document.addEventListener('keydown', function (event) {
  if (event.keyCode == 37) {
    alert('Left was pressed');
    changePlayerPos();
  }else if (event.keyCode == 39) {
    alert('Right was pressed');
  }
});
