$(function(){ 
  var radioHolder = $(".radio-list");
  var radioButtons = $(".radio-list li");

  radioButtons.on("tap", function(event){
    radioButtons.removeClass("active");
    $(this).addClass("active");
  })

});
