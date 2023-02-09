function showImg(n) {
  $(`#i-${n}`).toggleClass("i-hidden")
}

$("body").keydown(function() {
  switch(event.which) {
    case 81: showImg(1); break;
    case 87: showImg(2); break;
    case 69: showImg(3); break;
    case 82: showImg(4); break;
    case 84: showImg(5); break;
    case 85: showImg(6); break;
    case 73: showImg(7); break;
    case 79: showImg(8); break;
    case 80: showImg(9); break;
    case 65: showImg(10); break;
    case 83: showImg(11); break;
    case 68: showImg(12); break;
    case 70: showImg(13); break;
    case 71: showImg(14); break;
    case 72: showImg(15); break;
    case 74: showImg(16); break;
    case 75: showImg(17); break;

    case 77: showImg(18); break;
    case 78: showImg(19); break;
    case 66: showImg(20); break;
    
    case 88: $("#m-a").fadeOut(2000); break;
  }
})