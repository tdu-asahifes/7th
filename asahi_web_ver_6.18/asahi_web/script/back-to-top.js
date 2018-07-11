$(function(){
  $('#back-to-top').hide();
  $(window).scroll(function(){
    $(this).scrollTop();
    if($(this).scrollTop() > 100){
      $('#back-to-top').fadeIn();
    }else{
      $('#back-to-top').fadeOut();
    }
  });
  $('#back-to-top').click(function(){
    $('html,body').animate({
      scrollTop:0
    },500);
        return false;
  });
});
