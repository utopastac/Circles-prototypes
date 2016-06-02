$(function(){ 
  var questionHolder = $("#onboarding");
  var questions = $("section", questionHolder);
  var next = $(".next", questionHolder);
  var current = 0;
  next.click(nextQuestion);  
  if(questions.length > 0) setUpQuestions();

  function setUpQuestions(){
    //TweenMax.set(questionHolder, {minHeight: $(window).height() - navHeight + 70});
    TweenMax.set(questions, {autoAlpha: 0, x: 150, display: "none"});
    TweenMax.set(questions.eq(0), {autoAlpha:1, x: 0, display: "block"});
  }

  function showQuestion(target){
    TweenMax.to(questions.eq(current), 0.4, {autoAlpha:0, x: -150, display: "none", ease:Power2.easeOut});
    TweenMax.to(questions.eq(target), 0.4, {autoAlpha:1, x: 0, display: "block", ease:Power2.easeOut});
    current = target;
  }

  function nextQuestion(event){
    showQuestion(current + 1);
    return false;
  }

});
