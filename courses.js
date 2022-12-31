var courses = [{
    image: './images/javascriptDef.png',
    title: 'what is javascript?',
    category: 'JS',
    price: 9.9,
    
},
{
    image: './images/htmlBasics.PNG',
    title: 'basics of HTML',
    category: 'HTML',
    price: 5.9
},
{
    image: './images/htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 9.9
},
{
    image: './images/cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: 69.9
},
{
    image: './images/javascriptVariables.png',
    title: 'variables and data type of javascript',
    category: 'JS',
    price: 19.9
},
{
    image: './images/javascriptOperators.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 29.9
},
{
    image: './images/htmlAttrVal.jpg',
    title: 'HTML attributes and values',
    category: 'HTML',
    price: 19.9
},
{
    image: './images/cssProperties.png',
    title: 'CSS properties',
    category: 'CSS',
    price: 29.9
},
{
    image: './images/javascriptObjects.png',
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: 39.9
},
{
    image: './images/cssMesures.png',
    title: 'mesures and unites of CSS',
    category: 'CSS',
    price: 19.9
},
{
    image: './images/cssAnimation.png',
    title: 'CSS animations',
    category: 'CSS',
    price: 19.9
},
{
    image: './images/javascriptFunctions.png',
    title: 'The basics of javascript',
    category: 'JS',
    price: 29.9
},
{
    image: './images/javascriptEvents.png',
    title: 'javascript events',
    category: 'JS',
    price: 59.9
},
{
    image: './images/cssColors.png',
    title: 'css colors',
    category: 'css',
    price: 29.9
},
{
    image: './images/phpBasics.png',
    title: 'getting started with php',
    category: 'php',
    price: 15.9
},
{
    image: './images/javascriptFunctions2.png',
    title: 'functions and loops with javascript',
    category: 'JS',
    price: 19.9
},
{
    image: './images/phpDataBase.png',
    title: 'connecting to database using PHP',
    category: 'PHP',
    price: 29.9
},
{
    image: './images/phpCRUD.png',
    title: 'manipulating crud using php',
    category: 'php',
    price: 45.9
},
{
    image: './images/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 23.9
}


]
let view = document.querySelector('.product');
let pl = document.querySelector('.plus');

for (let i=0;i<courses.length;i++){
view.innerHTML += " <div id=\"filter\"> <img src="+ courses[i].image + " alt=\""+courses[i].title+"\" class=\"photo\" onclick=\" Achat("+i+")\" /> <div class=\"stars\"><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half\"></i><span> ( 230 )</span></div> <h2  > " +courses[i].title+"</h2> <h3 class=\"price\" >"+courses[i].price +"  <img src=\"dirham (1).png \" class=\"dh\"/> </h3> </div> ";
        
} 


   function Achat(i){
        pl.innerHTML += " <div id=\"fil\"> <i   class=\"fa fa-close\"id=\"close\" onclick=\"closa("+i+")\" > </i> <br> <img src="+ courses[i].image + " alt=\""+courses[i].title+"\" class=\"photo\"  /> <div class=\"stars\"><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half\"></i><span> ( 230 )</span></div><h2  > " +courses[i].title+"</h2> <h3 class=\"price\"  >"+courses[i].price +"  <img src=\"dirham (1).png \" class=\"dh\"/> </h3> <p>Ici nous devons normalement ecrire une description du cour</p> <div class=\"butt\"><button class=\"buy\">Buy now</button><button class=\"cart\">Add to cart</button></div> </div> ";
        
        pl.style.display='block'
        }

     function closa(i){
        location.reload();
    }

let prix=document.querySelectorAll("#price"),
filtre=document.querySelectorAll("#filter"),
cat=document.querySelectorAll(".button-value")
;

var l=document.getElementById('Categorie');

var tab=[courses.map((v)=>{
    return v.category.toUpperCase()
})]
var categories=['All',...new Set(...tab)];
categories.forEach((c) => {
l.innerHTML+="<ul class=\"button-value\" onclick=\"filtrerc(\'"+c+"\')\"> "+c+" </ul> <br>"
    
});

let rang=document.getElementById("ran");
rang.addEventListener("change",RangFiltrer);

const rtab=[courses.map((item)=>{
    return item.price;
    } )]
    var pr=[...new Set(...rtab)];
    var min=Math.min(...pr);
    var max=Math.max(...pr);
    rang.setAttribute("min",min-1)
    rang.setAttribute("max",max+1)
    
    
        
function filtrerc (v){
            for (let i of filtre) {
i.style.display="none"
            }
    if(v=="All"){
        for (let i of filtre) {
          i.style.display="block"}}  
    else{   
         var t =[];
        for (let j=0;j<courses.length;j++){
             if( courses[j].category.toUpperCase()==v) t.push(j) }
                
       for (let i=0;i<t.length;i++) {
                 console.log(t[i]);
                filtre[t[i]].style.display="block";  
                               }}}



       

let test=document.getElementById('test');


function RangFiltrer(){
    test.innerText=rang.value;
        for (let i of filtre) {
                        i.style.display="none"}   
        var t =[];
          for (let j=0;j<courses.length;j++){
            if( parseFloat(courses[j].price)<rang.value) t.push(j)
            console.log(typeof(rang.value));
            console.log(typeof(courses[j].price));}
          for (let i=0;i<t.length;i++) {
            console.log(t[i]);
            filtre[t[i]].style.display="block";
            }}


        let chercher=document.getElementById('search');
        chercher.addEventListener("input",filtrers)


   
function filtrers(){
    for (let i of filtre) {
            i.style.display="none"
            }
    var leila=[];
    for (let i=0;i<courses.length;i++) {         
    if(courses[i].title.toUpperCase().search(chercher.value.toUpperCase())!="-1")
    leila.push(i);  }
    for (let i=0;i<leila.length;i++) {
    console.log(leila[i]);
    filtre[leila[i]].style.display="block";
            }}


