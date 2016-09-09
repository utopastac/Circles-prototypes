$(function(){ 
  var timeSelector = $("#time-selected");
  var dateSelector = $("#date-selected");
  var locationSelector = $("#location-selected");

  if(timeSelector) init();

  function init(){

    timeSelector.on("tap", function(){
      $("time-picker").addClass("active");
    });

    dateSelector.on("tap", function(){
      $("#day-picker").addClass("active");
    });

    locationSelector.on("tap", function(){
      $("#location-picker").addClass("active");
    });
  }
});
