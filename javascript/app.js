//    var slideIndex = 1;
//    showFigs(slideIndex);
//
//    function plusDivs(n) {
//      showFigs(slideIndex += n);
//    }
//
//    function showFigs(n) {
//      var i;
//      var images = document.getElementsByTagName("figure");
//      if (n > images.length) {slideIndex = 1}    
//      if (n < 1) {slideIndex = images.length}
//      for (i = 0; i < images.length; i++) {
//         images[i].style.display = "none";  
//      }
//      images[slideIndex-1].style.display = "block";  
//    }
//
//    var $button_left = $('<button class="button-left"       onclick="plusDivs(-1)">&#10094;</button>');
//    var $button_right = $('<button class="button-right" onclick="plusDivs(1)">&#10095;</button>');
//
//    $button_left.show();                
//    $button_right.show();
//
//    $("#imageGallery").append($button_left);
//    $("#imageGallery").append($button_right);
//
