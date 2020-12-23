var button=document.getElementById("btn");
var captcha=document.getElementById("captcha");
var txt=document.getElementById("txt");
var submit=document.getElementById("submit");
var result='';
function stringGen(len) {
  var s = "";
  
  var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  
  for (var i = 0; i < len; i++)
    s += charset.charAt(Math.floor(Math.random() * charset.length));
  
  return s;
}
button.addEventListener('click',generate);
function generate(e){
  e.preventDefault();
  var a=Math.floor(Math.random() * 11);  
var b=Math.floor(Math.random() * 11);  
var c=stringGen(3);
var d=Math.floor(Math.random() * 11); 
  result=a+b+c+d;
  captcha.innerHTML=result;
  
  
}

submit.addEventListener('click',done);
function done(e){
  e.preventDefault();
  if(captcha.innerHTML===txt.value && txt.value!=0){
    alert(" Successfully done");
  }
  else
    alert("Please try again");
  txt.value='';
}