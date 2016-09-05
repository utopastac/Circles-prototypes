$(function(){ 
  var sheet = $("#bottom-sheet");
  var sheetContent = $("#bottom-sheet ul");
  var sheetLaunchers = $(".sheet-launcher");
  TweenMax.set(sheet, {autoAlpha: 0});
  TweenMax.set(sheetContent, {y: sheetContent.outerHeight()});

  sheetLaunchers.on("tap", function(event){      
    TweenMax.to(sheet, 0.4, {autoAlpha: 1, ease:Power2.easeOut});
    TweenMax.to(sheetContent, 0.4, {y: 0, ease:Power2.easeOut});
  });

  sheet.on("tap", function(event){
    TweenMax.to(sheet, 0.4, {autoAlpha: 0, ease:Power2.easeOut});
    TweenMax.to(sheetContent, 0.4, {y: sheetContent.outerHeight(), ease:Power2.easeOut});
  });

});
