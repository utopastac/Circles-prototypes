$(function(){ 
  var sheet = $("#bottom-sheet");
  var sheetContent = $("#bottom-sheet > *");
  var sheetLaunchers = $(".sheet-launcher");
  var sheetCloser = $(".sheet-closer");
  var screenInnerContent = $(".screen-inner-content");
  TweenMax.set(sheet, {autoAlpha: 0});
  TweenMax.set(sheetContent, {y: sheetContent.outerHeight()});

  sheetLaunchers.on("tap", function(event){
    var target = $(this).data("content");
    if(target){
      TweenMax.set(screenInnerContent, {autoAlpha: 0});
      TweenMax.set($(target), {autoAlpha: 1});
    }    
    TweenMax.to(sheet, 0.4, {autoAlpha: 1, ease:Power2.easeOut});
    TweenMax.to(sheetContent, 0.4, {y: 0, ease:Power2.easeOut});
  });

  sheetCloser.on("tap", function(event){
    TweenMax.to(sheet, 0.4, {autoAlpha: 0, ease:Power2.easeOut});
    TweenMax.to(sheetContent, 0.4, {y: sheetContent.outerHeight(), ease:Power2.easeOut});
  });

});
