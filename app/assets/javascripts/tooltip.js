$(function(){ 
  var tooltips = $(".tooltip");

  tooltips.on("tap", function(event){
    var elem = $(this);
    TweenMax.to(elem, 0.3, {autoAlpha: 0, display:'none'});
  })

});
