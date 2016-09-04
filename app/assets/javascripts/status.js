$(function(){   

  var statusDisplay = $("#status-display");
  var dragger = $("#dragger");
  var min = -100;
  var max = 100;
  var wrapper = $(".outer-wrapper");

  Draggable.create(dragger, {
    type:"x",
    onDragStart: dragStart,
    onDrag: dragTest,
    onDragEnd: dragEnd,
    minX: min,
    maxX: max
  });        

  var draggable = Draggable.get(dragger);
  if(draggable){
    draggable.applyBounds({minX:min, maxX: max});
    dragTest()
  }

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
    var percentage = ((draggable.x + 100) / 2);
    var h = Math.floor((200 - percentage) * 170 / 100);
    var s = Math.abs(percentage - 50)/50;
    var v = 1;
    
    wrapper.css({backgroundColor: hsv2rgb(h, s, 1)});
  }

  function dragEnd(event){
    
  }

  function hsv2rgb(h, s, v) {
  // adapted from http://schinckel.net/2012/01/10/hsv-to-rgb-in-javascript/
    var rgb, i, data = [];
    if (s === 0) {
      rgb = [v,v,v];
    } else {
      h = h / 60;
      i = Math.floor(h);
      data = [v*(1-s), v*(1-s*(h-i)), v*(1-s*(1-(h-i)))];
      switch(i) {
        case 0:
          rgb = [v, data[2], data[0]];
          break;
        case 1:
          rgb = [data[1], v, data[0]];
          break;
        case 2:
          rgb = [data[0], v, data[2]];
          break;
        case 3:
          rgb = [data[0], data[1], v];
          break;
        case 4:
          rgb = [data[2], data[0], v];
          break;
        default:
          rgb = [v, data[0], data[1]];
          break;
      }
    }
    return '#' + rgb.map(function(x){
      return ("0" + Math.round(x*255).toString(16)).slice(-2);
    }).join('');
  };

});
