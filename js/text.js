var dialog = document.querySelector('dialog');
document.querySelector('#show').onclick = function() {
dialog.show();
};
document.querySelector('#close').onclick = function() {
dialog.close();
};


$(document).ready(function() {
    $('.menu-trigger').click(function() {
      $('nav ul').slideToggle(500);
    });//end slide toggle
    
    $(window).resize(function() {		
          if (  $(window).width() > 500 ) {			
              $('nav ul').removeAttr('style');
           }
      });//end resize
  });//end ready