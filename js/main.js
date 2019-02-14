////////////////////////////
//modal

const photos = document.querySelectorAll('img.selectable');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');

const photosLength = photos.length;
for (let i = 0; i < photosLength; i++) {
  photos[i].addEventListener('click', function(e){
    modalImg.src = this.src;
    modal.classList.add('active');
  });

  modal.addEventListener('click', function(e){
    if(e.path[0].id !== 'modal-image')
    modal.classList.remove('active');
  });
}

/////////////////////////////
//menu-close

const menuElements = document.getElementById('main-menu').getElementsByTagName('li');
const checkbox = document.querySelector('#show');
for (let i = 0; i < menuElements.length; i++) {
  menuElements[i].addEventListener('click', function(){
    checkbox.checked = false;
  });
}
