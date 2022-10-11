//implement when carousel appears
const carosello = document.querySelector(".carosello");
const galleriaGrid = document.querySelector(".grid-galleria");


const track = document.querySelector('.carousel-track');
//group slide
const slides = Array.from(track.children);
console.log(slides);

const nextButton = document.querySelector('.carousel_button--right');
const prevButton =  document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');

//get size of slide
const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slide one next to anoter
const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth*index +'px';
};

slides.forEach(setSlidePosition);
let current = null;
let currentIndex = 0;

//click right button go to the right
nextButton.addEventListener('click', e => {
    //understand where i am
    const next = current.nextElementSibling;
    if(!next) return;
    const amountToMove = next.offsetLeft;
    console.log(amountToMove);
    //move to the NEXT slide
    track.style.transform = 'translateX(-' + amountToMove+'px)';
    current = next;
    currentIndex++;
});

//click right button go to the right
prevButton.addEventListener('click', e => {
    //understand where i am
    const prev = current.previousElementSibling;
    if(!prev) return;
    const amountToMove = prev.offsetLeft;
    console.log(amountToMove);
    //move to the NEXT slide
    track.style.transform = 'translateX(-' + amountToMove+'px)';
    current = prev;
    currentIndex--;
});

function openCarousel(index = 1){
    current = track.querySelector(`:nth-child(${index})`);
    if(!current) return;
    carosello.classList.remove("hidden");
    track.style.transform = `translateX(-${current.offsetLeft}px)`;
    track.classList.add("smooth");
}

function throttle(ms, fn) {
    let req = null;
    return function(){
        if(req) return;
        req = setTimeout(() => {
            fn();
            req = null;
        }, ms);
    }
}

window.addEventListener("resize", throttle(20, () => {
    track.style.transform = `translateX(-${current.offsetLeft}px)`;
}));


//bottonr exit
document.getElementById("exit").addEventListener('click', ()=>{
    carosello.classList.add('hidden');
    track.classList.remove('smooth');

})