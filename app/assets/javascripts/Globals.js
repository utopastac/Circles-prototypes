/*



SILLY GLOBAL FUNCTIONS HERE



*/


function toggleGrid(event){
    $("#grid").toggle();	
}

function trace(str){
    $("#trace").append(str + "<br/>");
    $("#trace").scrollTop($("#trace")[0].scrollHeight);	
}

function toggleTrace(){
    $("#trace").toggle();	
}

function compare(a,b) {
    var aVal = parseInt($(a).data("dist"));
    var bVal = parseInt($(b).data("dist"));
    if (aVal < bVal)
      return -1;
    if (aVal > bVal)
      return 1;
    return 0;
}