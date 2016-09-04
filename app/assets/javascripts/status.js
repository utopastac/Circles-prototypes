$(function(){   

  var statusDisplay = $("#status-display");
  var dragger = $("#dragger");
  var min = -100;
  var max = 100;

  Draggable.create(dragger, {
    type:"x",
    onDragStart: dragStart,
    onDrag: dragTest,
    onDragEnd: dragEnd,
    minX: min,
    maxX: max
  });        

  var draggable = Draggable.get(dragger);
  draggable.applyBounds({minX:min, maxX: max});
  dragTest()

  function dragStart(event){

  }

  function dragTest(event){
    var rt = (draggable.x) / 14;
    var st = 1 + Math.abs(rt/20);
    TweenMax.to(dragger, 0.5, {rotation: rt, scale: st});
    if(draggable.x < min/2){
      statusDisplay.html("&#128532;");
    } else if(draggable.x > max/2){
      statusDisplay.html("&#128516;");
    } else {
      statusDisplay.html("&#128528;");
    }
  }

  function dragEnd(event){
    
  }

});
