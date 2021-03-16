// main.js
class NaNError extends Error {
    constructor() {
      super("NaN Error");
      this.name = "NaNError";
    }
  }

document.getElementById('prompt-btn').onclick=function(){

    var divisor=prompt("Divide 100 by: Try a letter for error handling");
    var result;
    try{
        result = 100/divisor;
        if(isNaN(result)){
            throw new NaNError();
        }
        document.getElementById('prompt-btn').innerText=result;
    }
    catch(err){
        document.getElementById('prompt-btn').innerText=err.message;
    }
    finally{
        console.log("finally");
    }
}
document.getElementById('log-btn').onclick=function(){
    console.log("Log button");
}
document.getElementById('error-btn').onclick=function(){
    console.error("error button");
}
document.getElementById('table-btn').onclick=function(){
    console.table(["TABLE","TABLE","TABLE"]);
}
document.getElementById('dir-btn').onclick=function(){
    console.dir(document.getElementById('dir-btn'));
}
document.getElementById('dirxml-btn').onclick=function(){
    console.dirxml(document.getElementById('dirxml-btn'));
}
var time=true;
document.getElementById('time-btn').onclick=function(){
    if(time) {
        time=false;
        console.time("timer");
        document.getElementById('time-btn').innerText="End";
    }
    else{
        console.timeEnd("timer");
        time=true;
        document.getElementById('time-btn').innerText="Time";
    }
}
document.getElementById('trace-btn').onclick=function(){
    console.trace();
}
