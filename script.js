const circle1 = document.querySelector("#circle-1");
const circle2 = document.querySelector("#circle-2");
const circle3 = document.querySelector("#circle-3");
const circle4 = document.querySelector("#circle-4");

const content = document.querySelector("#content")

content.addEventListener("mouseenter", move());

const w = content.getBoundingClientRect().width;
const h = content.getBoundingClientRect().height;

function move(){
    content.addEventListener("mousemove", function(dets){
        circle1.style.transform = `translate(${(dets.x - (w/2))/(w/100)}%,${((dets.y-(h/2))/(h/100))-4}%)`
        circle2.style.transform = `translate(${-(dets.x - (w/2))/(w/100)}%,${-((dets.y-(h/2))/(h/100)-4)}%)`
        circle3.style.transform = `translate(${-(dets.x - (w/2))/(w/100)}%,${((dets.y-(h/2))/(h/100))-4}%)`
        circle4.style.transform = `translate(${(dets.x - (w/2))/(w/100)}%,${-((dets.y-(h/2))/(h/100)-4)}%)`
    })
    content.addEventListener("mouseleave", function(){
        circle1.style.transform = `translate(0%,0%)`
        circle2.style.transform = `translate(0%,0%)`
        circle3.style.transform = `translate(0%,0%)`
        circle4.style.transform = `translate(0%,0%)`
    })
}