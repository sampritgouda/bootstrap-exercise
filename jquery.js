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
    $("#mypage-footer").on("mouseenter", ()=> {
    $(".mypage-footer-content").stop(true, true).slideDown(2000, ()=> {
      $("#alert-overlay").removeClass("d-none").fadeIn(200); 
    })
  })

  //after clicking on ok hide alert card
  $("#card-ok, #card-cancel").on("click", () => {
  $("#alert-overlay").addClass("d-none").fadeIn(200);
  });

   /****************************************
   * adding slide up animation to footer   *
   *****************************************/
  $("#mypage-footer").on("mouseleave",()=>{
    $(".mypage-footer-content").stop(true).slideUp(1000);
  })

})