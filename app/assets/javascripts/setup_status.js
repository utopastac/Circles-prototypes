$(function(){ 
  var options = $("#status-setup-circles li");
  var textHelpers = ["No", "Very little", "Not much", "Some", "Lots of"];
  var textElements = $(".status-text-element span");

  options.data('total',0)

  options.on("tap", function(event){
    var elem = $(this);
    var fill = $(".fill", elem);
    var index = options.index(elem);

    var currentTotal = elem.data('total');
    if(currentTotal < 4){
      var total = elem.data('total') + 1;
    } else {
      var total = 0;
    }
    
    elem.data('total', total);
    textElements.eq(index).html(textHelpers[total]);
    var targetPercentage = (25 * total) + "%";
    fill.css({"height": targetPercentage});
  });

});
