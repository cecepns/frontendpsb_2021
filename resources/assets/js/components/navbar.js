var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.remove('is-scrolled');
  } else {
    document.getElementById("navbar").classList.add('is-scrolled');
  }
  prevScrollpos = currentScrollPos;
}