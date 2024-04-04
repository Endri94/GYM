// выпадающее меню при клике на бургер
let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navBar.classList.toggle('active');
}

// lightgallery script
lightGallery(document.querySelector('.gallery'));

// loader
function loader() {
  document.querySelector('.loader-container').classList.add('active');
};

function fadeOut() {
  setTimeout(loader, 2000)
};



fadeOut()
