$(document).ready(function(){
  // $('.nav a').on('click', function(){
  //     // $('.navbar-toggle').click();
  //     $('.navbar-collapse').collapse('hide');
  // });
  var nav = $('.navbar');
  var nav_brand = $('.navbar-brand');
  var scrolled = 'nav-bar-scrolled';
  $(window).scroll(function(){
    if($(this).scrollTop() > 450){
      nav.addClass(scrolled);
      nav_brand.css("display", "block");
    }
    else{
      nav.removeClass(scrolled);
      nav_brand.css("display", "none");
    }
  });
});

// 
// navbar-collapse bs-navbar-collapse collapse in
// navbar-collapse bs-navbar-collapse collapse
