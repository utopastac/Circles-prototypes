$(function(){ 
  var controls = $("#new-post-controls li");
  var content = $(".post-content");
  var userContent = $(".user-content");
  var imageContent = $("#new-post-image-content");
  var gifContent = $("#new-post-gif-content");
  var microphoneContent = $("#new-post-microphone-content");
  var imageUserContent = $("#new-post-image-user-content");
  var gifUserContent = $("#new-post-gif-user-content");
  var microphoneUserContent = $("#new-post-microphone-user-content");
  makeInvisible(content, 0);
  makeInvisible(userContent, 0);
  if(controls){
    init();
  }
  

  function init(){
    controls.on("tap", function(event){
      document.activeElement.blur();
      var target = $(this).data("content");
      var contentElement = $(target);
      makeInvisible(content, 0);
      animateIn(contentElement);
    });

    imageContent.on("tap", function(event){
      animateIn(imageUserContent);
    });

    gifContent.on("tap", function(event){
      animateIn(gifUserContent);
    });

    microphoneContent.on("tap", function(event){
      animateIn(microphoneUserContent);
    });

    userContent.on("tap", function(event){
      makeInvisible($(this), 0.4);
    });
  }

  function animateIn(elem){
    TweenMax.to(elem, 0.27, {autoAlpha: 1, scale: 1, display: "block", transformOrigin: "left top", ease: Power3.easeOut});
  }

  function makeInvisible(elem, speed){
    TweenMax.to(elem, speed, {autoAlpha: 0, scale: 0, transformOrigin: "left top", display: "none"}); 
  }

});
