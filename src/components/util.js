export function componentUnmountDefault(){
  if($(window).width() > 767){
    if(!(window.pageYOffset==0)){
      $('html, body').animate({scrollTop : 0},250);

    }
  }
  else{
    $(window).scrollTop(0);
  }

}

export function componentDidMountDefault(component){
  component.style.opacity = 0.1;
  $('.navbar-collapse').collapse('hide');
  setTimeout(function() {
      window.requestAnimationFrame(function() {
          component.style.transition = "opacity 500ms";
          component.style.opacity = 1;
      });
  }, 250);
}
