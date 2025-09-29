/*******************************************
 * runs the code after content loaded      *
 *******************************************/
$(document).ready(()=>{
  
    //adding 10px height to header
  $("#mypage-header").addClass("header-shrink");

  //shrinking and expanding the height when user hover on it
  $("#mypage-header").hover(function(){
    $(this).toggleClass("header-shrink header-expand");
  })

  $(".mypage-footer-content").hide()
  
  /****************************************
   * adding slide down animation to footer*
   ****************************************/
  var alertModal = new bootstrap.Modal(document.getElementById('alert-overlay'));

  // Slide down footer and show modal after animation
  $("#mypage-footer").on("mouseenter", () => {
      $(".mypage-footer-content").stop(true, true).slideDown(10000, () => {
          alertModal.show();
      });
  });

  // Slide up footer on mouse leave
  $("#mypage-footer").on("mouseleave", () => {
      $(".mypage-footer-content").stop(true).slideUp(1000);
  });

})