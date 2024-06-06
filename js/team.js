document.querySelector('#floatingToggle').addEventListener('click', () => {
  document.querySelector('#nav-toggler').classList.toggle('active');
  $('#navToggleContent').slideToggle();
  $('#navbar').toggleClass('back-color-black');
});

window.addEventListener("resize", () => {
  document.getElementById('active-members').classList.add('resize-animation-stopper');
});