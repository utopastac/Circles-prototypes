$(function(){ 
  var contacts = $("#new-circle-people-list li");
  var progressIndicators = $("#new-circle-progress li");
  var next = $("#next-button");
  var message = $("#progress-message");
  var total = 0;

  contacts.click(function(event){
    if($(this).hasClass("active")){
      total --;
    } else {
      if(total == 4) return;
      total ++;
    }
    if(total > 1){
      next.addClass("active");
    } else {
      next.removeClass("active");
    }
    $(this).toggleClass("active");
    updateProgress();

    var str = "You must add at least 2 people";
    switch(total){
      case 0:
        str = "You must add at least 2 people";
        break;
      case 1:
        str = "You must add at least 1 more person";
        break;
      case 2:
        str = "You can add 2 more people";
        break;
      case 3:
        str = "You can add 1 more person";
        break;
      case 4:
        str = "Your circle is full!";
        TweenMax.to("#new-circle-people-list li:not('.active')", 0.4, {alpha: 0.3});
        break;
    }
    if(total < 4) TweenMax.to("#new-circle-people-list li", 0.4, {alpha: 1});
    message.html(str);
  });

  function updateProgress(){
    progressIndicators.removeClass("active");
    for(var i = 0; i<total; i++){
      progressIndicators.eq(i).addClass("active");
    }
  }

});
