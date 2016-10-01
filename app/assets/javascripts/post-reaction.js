$(function(){ 
  var reactionButton = $(".reaction-button");
  var on = false;

  var reactionHolder = $(".reactions-holder");
  var reactions = $(".reactions-holder img");
  TweenMax.set(reactionHolder, {autoAlpha: 0, scale: 0.1, display: "none"});
  TweenMax.set(reactions, {autoAlpha: 0, scale: 0.1});

  reactionButton.on("tap", function(event){
    var elem = $(event.currentTarget).closest(".reactions");
    if(!on){
      showReactions(elem);
    } else {
      hideReactions(elem);
    }
    on = !on;
  });

  function showReactions(elem){
    var reactionHolder = $(".reactions-holder", elem);
    var reactions = $(".reactions-holder img", elem);
    var tl = new TimelineLite;
    TweenMax.to(reactionHolder, 0.3, {autoAlpha: 1, scale: 1, transformOrigin:"0% 50% -50", display: "flex", ease:Back.easeOut});
    tl.staggerTo(reactions, 0.3, {autoAlpha: 1, scale: 1, ease:Back.easeOut}, 0.05, "+=0");
  }

  function hideReactions(elem){
    var reactionHolder = $(".reactions-holder", elem);
    var reactions = $(".reactions-holder img", elem);
    var tl = new TimelineLite;
    TweenMax.to(reactionHolder, 0.25, {autoAlpha: 0, scale: 0.1, transformOrigin:"0% 50% -50", display: "none"});
    tl.staggerTo(reactions, 0.3, {autoAlpha: 0, scale: 0.1, ease:Back.easeOut}, 0.1, "+=0");
  }

});
