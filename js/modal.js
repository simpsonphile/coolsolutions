var photos = document.getElementsByClassName('selectable');
var img = document.getElementById('modal-image');
var modal = document.getElementById('modal');


for (var i = 0; i < photos.length; i++) {
  photos[i].addEventListener('click', function(e){

    img.src = this.src;
    window.location.assign('#modal');
  });

  modal.addEventListener('click', function(e){
    window.location.assign('#exit-modal');
  });
}
