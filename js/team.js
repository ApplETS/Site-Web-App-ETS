document.querySelector('#floatingToggle').addEventListener('click', () => {
  document.querySelector('#nav-toggler').classList.toggle('active');
  $('#navToggleContent').slideToggle();
  $('#navbar').toggleClass('back-color-black');
});