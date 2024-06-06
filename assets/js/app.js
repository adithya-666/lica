document.addEventListener("DOMContentLoaded", function () {
$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    
    var target = this.hash;
    var $target = $(target);
    
    $('html, body').animate({
      'scrollTop': $target.offset().top - 100
    }, 1000, 'swing');
  });
  

    // Check the width of the viewport
    function checkViewportWidth() {
      const mySwiper = document.querySelector('.mySwiper');

      if (window.innerWidth <= 812) {
          // Update slides-per-view to 1
          mySwiper.setAttribute('slides-per-view', '1');
      } else {
          // Update slides-per-view back to 2
          mySwiper.setAttribute('slides-per-view', '2');
      }
  }

  // On load, check the viewport width
  window.onload = checkViewportWidth;

  // Add resize event listener to window
  window.addEventListener('resize', checkViewportWidth);



    const videoLinkPre = document.getElementById("video-pre");
    const videoLinkAnalytic = document.getElementById("video-analytic");
    const videoLinkPost = document.getElementById("video-post");
    const videoPopupPre = document.getElementById("videoPre");
    const videoPopupAnalytic = document.getElementById("videoAnalytic");
    const videoPopupPost = document.getElementById("videoPost");
    const closePopup = document.getElementById("close-popup");
    const closePopupAnalytic = document.getElementById("close-analytic");
    const closePopupPost = document.getElementById("close-post");
    const systemContent = document.getElementById("system");
  
    videoLinkPre.addEventListener("click", function (e) {
      e.preventDefault();
      videoPopupPre.style.display = "block";
    
    });

    videoLinkAnalytic.addEventListener("click", function (e) {
      e.preventDefault();
      videoPopupAnalytic.style.display = "block";
 
    });

    videoLinkPost.addEventListener("click", function (e) {
      e.preventDefault();
      videoPopupPost.style.display = "block";
     
    });
  
    closePopup.addEventListener("click", function () {
      videoPopupPre.style.display = "none";

      systemContent.style.display = "block"; // Menampilkan kembali konten saat popup ditutup
    });
    closePopupAnalytic.addEventListener("click", function () {

      videoPopupAnalytic.style.display = "none";

      systemContent.style.display = "block"; // Menampilkan kembali konten saat popup ditutup
    });

    closePopupPost.addEventListener("click", function () {

      videoPopupPost.style.display = "none";

      systemContent.style.display = "block"; // Menampilkan kembali konten saat popup ditutup
    });
  });
  
  