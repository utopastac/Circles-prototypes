$(function(){ 
  var tabHolder = $(".tab-behaviour");
  var tabs = $(".tab-behaviour li");

  tabs.on("tap", function(event){
    tabs.removeClass("active");
    $(this).addClass("active");
  })

});
