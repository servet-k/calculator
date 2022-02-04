let selected;
let result="";
function reset(){
    document.querySelector(".result-1").innerText="";
    document.querySelector(".result-2").innerText="";
    result="";
}
function del(){
   result=result.slice(0,result.length-1);
   document.querySelector(".result-1").innerText=result;
}

function divide(a,b){
    if (b==0){return "Error"}
    return a/b;
}
function getValue(str){
    return new Function('return ' + str)();
  }

document.querySelectorAll(".row").forEach(key=>{
    key.addEventListener("click",(e)=>{
        selected=e.target.innerText;
        
        
        if(selected =="="){document.querySelector(".result-2").innerText=getValue(result);}
        else{
        result+=selected;
        document.querySelector(".result-1").innerText=result;
        
        }
        
         
    })

})


window.addEventListener("keypress",(e)=>{
    if(e.key<=9 && e.key>=0) {
        result+=e.key;
        document.querySelector(".result-1").innerText=result;}
    
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
        result+=e.key;
        document.querySelector(".result-1").innerText=result;

    }
    if (e.key==="="){
        document.querySelector(".result-2").innerText=getValue(result)
    }

})