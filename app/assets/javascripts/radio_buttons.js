$(function(){ 
  var radioHolder = $(".radio-list");
  var radioButtons = $(".radio-list li");

  radioButtons.click(function(event){
    radioButtons.removeClass("active");
    $(this).addClass("active");
  })

});
