var user=document.querySelector('#user'),
mail=document.querySelector('#mail'),
pass=document.querySelector('#pass'),
passc=document.querySelector('#passc'),
btn=document.querySelector('#btn'),
inp=document.querySelectorAll('input'),
p=document.querySelectorAll('p'),
signe=document.getElementById('sign')
;
 
let userValide=new RegExp("^(?=.{3,25}$)"),
 mailValide=new RegExp("^.+(?=.*[@]).+(?=.*[\.]).+"),
 passValide=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");


user.addEventListener('input', uvalidation);
mail.addEventListener('input', mvalidation);
pass.addEventListener('input', pvalidation);
passc.addEventListener('input', cpvalidation);
btn.addEventListener('click', signvalidation);


var fuser,fmail,fpass,fcpass;
fuser=fmail=fpass=fcpass=false;


function uvalidation(){ 
    if (userValide.test(user.value)) {
    user.style.outlineColor="green";
    p[0].style.display='none';
    inp[0].style.marginBottom='25px'; 
    fuser=true;}
else {user.style.outlineColor="red" ;
p[0].style.display='block';
inp[0].style.marginBottom='0px' ;
fuser=false;}}


function mvalidation(){
if (mailValide.test(mail.value)) {mail.style.outlineColor="green";p[1].style.display='none';inp[1].style.marginBottom='25px'; fmail=true;}
else {mail.style.outlineColor="red"; p[1].style.display='block';inp[1].style.marginBottom='0px'; fmail=false;}}


function pvalidation(){
if (passValide.test(pass.value)) {pass.style.outlineColor="green";p[2].style.display='none';inp[2].style.marginBottom='25px'; fpass=true;}
else {pass.style.outlineColor="red"; p[2].style.display='block';inp[2].style.marginBottom='0px';fpass=false;}}

function cpvalidation(){
if (passc.value==pass.value) {passc.style.outlineColor="green"; 
p[3].style.display='none';
inp[3].style.marginBottom='25px'; 
fcpass=true;}
else { passc.style.outlineColor="red";
p[3].style.display='block';
inp[3].style.marginBottom='0px'; fcpass=false;}
}

function signvalidation(){

    if (fpass&&fmail&&fuser&&passc ) signe.setAttribute("href", "index1.html");
    else alert("Rentrer tous les informations correctement");
}

  

