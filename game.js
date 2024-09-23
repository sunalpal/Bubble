var sc=0;
var z=0;
var clickedno=0;
function createbubble(){
    crbubble ="";
   
    for(var i=1;i<=56;i++){
        random=Number(Math.floor(Math.random()*10))
       crbubble +=`<div class="bu">${random}</div>`
    }
    document.querySelector(".bottombox").innerHTML=crbubble;
}


function hit(){ 
  addEventListener("click",() => {
  
    var b =Number(Math.floor(Math.random()*10));
    z=document.querySelector(".hit").innerHTML=b; 
  })
   
  }
function timer(){
   t=60;
  
setInterval(function(value){
if(t>0){
    t--;
    document.querySelector(".time").innerHTML=t;
}
else{
   clearInterval();
   document.querySelector(".bottombox").innerHTML="<h1><i>GAME OVER YAR!</i></h1>"
}
},1000)
   
}


 function increasescore(){
  sc += 10;
   document.querySelector(".score").textContent=Number(sc);
   console.log(typeof(sc));
  }

  createbubble();
  timer();
 
document.querySelector(".bottombox").addEventListener("click",(val)=>{
   hit();
   clickedno=Number(val.target.innerHTML);
   if(z ===  clickedno)
    {
      increasescore();
      createbubble();
    }

 })



