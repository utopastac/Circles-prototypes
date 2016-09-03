$(function(){ 
  var checkboxHolder = $(".checkbox-list");
  var checkboxes = $(".checkbox-list li");

  checkboxes.click(function(event){
    $(this).toggleClass("active")
  })

});
