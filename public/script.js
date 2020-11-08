var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    //document.getElementById("navbar").style.backgroundColor = "transparent";
  } else {
    //document.getElementById("navbar").style.backgroundColor = "white";
  }
  prevScrollpos = currentScrollPos;
};
