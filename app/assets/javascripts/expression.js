$(function(){ 
  var controls = $("#new-post-controls li");
  if(controls){
    init();
  }
  

  function init(){
    controls.on("tap", function(event){
      alert("COCK")
    });
  }

});
