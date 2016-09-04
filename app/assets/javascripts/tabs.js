$(function(){ 
  var tabHolder = $(".tabs");
  var tabs = $(".tabs li");

  tabs.on("tap", function(event){
    tabs.removeClass("active");
    $(this).addClass("active")
  })

});
