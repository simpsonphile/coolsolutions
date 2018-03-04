var menuElements = document.getElementById('main-menu').getElementsByTagName('li');
var checkbox = document.querySelector('#show');
for (var i = 0; i < menuElements.length; i++) {
  menuElements[i].addEventListener('click', function(){
    checkbox.checked = false;
  });
}
