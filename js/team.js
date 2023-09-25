let isTouchScreen = false;
let rows = document.querySelectorAll('[id^="row"]');

document.addEventListener('touchstart', () => {
  isTouchScreen = true;
});

/**
 * Fade in the first two rows
 */
$('#row1').toggle("slide",1500);
$('#row2').toggle("slide",{ direction: 'right' },1500);

function fadeInRow(row) {
  row.show('slide', { direction: 'right' }, 1500);
}

function fadeInRows() {
    rows.forEach((row, index) => {
      if (index === 0) {
        $(row).fadeIn(1500);
      } else if (isTouchScreen) {
        if (row.getBoundingClientRect().y < 0) {
          fadeInRow(row);
        }
      } else {
        $(row).fadeIn(1500);
      }
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
  if (!isTouchScreen) {
    fadeInRows();
  }
};

if (isTouchScreen) {
  rows.forEach((row, index) => {
    if (index > 0) {
      row.hide();
    }
  });
}