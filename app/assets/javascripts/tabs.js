$(function(){ 
  var tabHolder = $(".tabs");
  var tabs = $(".tabs li");

  tabs.click(function(event){
    tabs.removeClass("active");
    $(this).addClass("active")
  })

});
