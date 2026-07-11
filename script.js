/* ==========================
   TENXON V5
   script.js
========================== */

const revealElements = document.querySelectorAll(".reveal");
const cards = document.querySelectorAll(".card,.vision-card,.product-card");
const dividers = document.querySelectorAll(".section-divider");
const navbar = document.querySelector(".navbar");

/* ==========================
   REVEAL + AUTO POP
========================== */

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

if(
entry.target.classList.contains("card") ||
entry.target.classList.contains("vision-card") ||
entry.target.classList.contains("product-card")
){

entry.target.classList.add("active");

}

}

});

},{
threshold:0.18,
rootMargin:"0px 0px -28% 0px"
});

revealElements.forEach(el=>{

revealObserver.observe(el);

});

/* ==========================
   DIVIDER ANIMATION
========================== */

const dividerObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.25
});

dividers.forEach(divider=>{

dividerObserver.observe(divider);

});

/* ==========================
   NAVBAR SHRINK
========================== */

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.top="10px";

navbar.querySelector(".nav-wrapper").style.padding="12px 20px";

navbar.querySelector(".nav-wrapper").style.background="rgba(8,14,24,.82)";

}

else{

navbar.style.top="18px";

navbar.querySelector(".nav-wrapper").style.padding="15px 24px";

navbar.querySelector(".nav-wrapper").style.background="rgba(12,18,30,.62)";

}

});

/* ==========================
   CARD GLOW BEFORE CENTER
========================== */

function animateCards(){

cards.forEach(card=>{

const rect = card.getBoundingClientRect();

const trigger = window.innerHeight*0.60;

if(rect.top<trigger){

card.classList.add("active");

}

});

}

window.addEventListener("scroll",animateCards);

animateCards();

/* ==========================
   SMOOTH ACTIVE LINKS
========================== */

document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener("click",()=>{

document.querySelectorAll("nav a").forEach(a=>{

a.classList.remove("active-link");

});

link.classList.add("active-link");

});

});

/* ==========================
   BUTTON PRESS EFFECT
========================== */

document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("mousedown",()=>{

btn.style.transform="scale(.97)";

});

btn.addEventListener("mouseup",()=>{

btn.style.transform="";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="";

});

});

/* ==========================
   PARALLAX ORBS
========================== */

const orb1=document.querySelector(".orb-one");
const orb2=document.querySelector(".orb-two");

window.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth)-0.5;
const y=(e.clientY/window.innerHeight)-0.5;

if(orb1){

orb1.style.transform=`translate(${x*30}px,${y*30}px)`;

}

if(orb2){

orb2.style.transform=`translate(${-x*25}px,${-y*25}px)`;

}

});

/* ==========================
   SCROLL INDICATOR
========================== */

const wheel=document.querySelector(".wheel");

if(wheel){

setInterval(()=>{

wheel.animate([

{
transform:"translateY(0)",
opacity:1
},

{
transform:"translateY(10px)",
opacity:.3
},

{
transform:"translateY(0)",
opacity:1
}

],{

duration:1400

});

},1400);

}

/* ==========================
   END
========================== */