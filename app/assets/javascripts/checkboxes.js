$(function(){ 
  var checkboxHolder = $(".checkbox-list");
  var checkboxes = $(".checkbox-list li");

  checkboxes.on("tap", function(event){
    $(this).toggleClass("active")
  })

});
