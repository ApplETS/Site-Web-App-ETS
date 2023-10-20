let isTouchScreen = false;
let rows = document.querySelectorAll('[id^="row"]');

document.addEventListener('touchstart', () => {
  isTouchScreen = true;
});

fadeInRows();

function fadeInRow(row) {
  $(row).toggle("slide",{ direction: 'right' },1500);
}

function fadeInRows() {
    rows.forEach((row, index) => {
      $(row).toggle("slide", { direction: (index % 2 == 0) ? 'right' : 'left' },1500);
    });
  }

document.querySelector('#floatingToggle').addEventListener('click', () => {
  document.querySelector('#nav-toggler').classList.toggle('active');
  $('#navToggleContent').slideToggle();
  $('#navbar').toggleClass('back-color-black');
});

window.onscroll = () => {
  if (document.getElementById('main-content').getBoundingClientRect().y < 0) {
    $('#navbar').addClass('back-color');
  } else {
    $('#navbar').removeClass('back-color');
  }
};

if (isTouchScreen) {
  rows.forEach((row, index) => {
    if (index > 0) {
      row.hide();
    }
  });
}