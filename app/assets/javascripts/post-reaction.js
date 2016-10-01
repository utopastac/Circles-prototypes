$(function(){ 
  var reactionButton = $(".reaction-button");
  var reactionHolder = $(".reactions-holder");
  var reactions = $(".reactions-holder img");
  var tl = new TimelineLite;
  var on = false;

  TweenMax.set(reactionHolder, {autoAlpha: 0, scale: 0.1, display: "none"});
  TweenMax.set(reactions, {autoAlpha: 0, scale: 0.1});

  reactionButton.on("tap", function(event){
    if(!on){
      showReactions();
    } else {
      hideReactions();
    }
    on = !on;
  });

  function showReactions(){
    TweenMax.to(reactionHolder, 0.3, {autoAlpha: 1, scale: 1, transformOrigin:"0% 50% -50", display: "flex", ease:Back.easeOut});
    tl.staggerTo(reactions, 0.3, {autoAlpha: 1, scale: 1, ease:Back.easeOut}, 0.05, "+=0");
  }

  function hideReactions(){
    TweenMax.to(reactionHolder, 0.25, {autoAlpha: 0, scale: 0.1, transformOrigin:"0% 50% -50", display: "none"});
    tl.staggerTo(reactions, 0.3, {autoAlpha: 0, scale: 0.1, ease:Back.easeOut}, 0.1, "+=0");
  }

});
