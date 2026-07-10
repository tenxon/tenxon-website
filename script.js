const reveals=document.querySelectorAll(".reveal");

function revealOnScroll(){

const trigger=window.innerHeight*0.82;

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

const bottom=item.getBoundingClientRect().bottom;

if(top<trigger && bottom>100){

item.classList.add("active");

}else{

item.classList.remove("active");

}

});

}

window.addEventListener("scroll",revealOnScroll);

window.addEventListener("load",revealOnScroll);

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});