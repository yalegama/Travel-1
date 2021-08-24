window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navba").style.backgroundColor = "#333";
    document.getElementById("navbar").style.display = "none";
  }else {
    document.getElementById("navba").style.backgroundColor = "#3330";
    document.getElementById("navbar").style.display = "block";
  }
}