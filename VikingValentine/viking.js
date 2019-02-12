$(document).ready(function(){
    $('.title').click(function(){
      $('.container').addClass('viking');
    });
    
    
    $('.close').click(function(){
      $('.container').removeClass('viking');
    });
  });