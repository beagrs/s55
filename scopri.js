const track = document.querySelector('.carousel-track');
//group slide
const slides = Array.from(track.children);

const nextButton = document.querySelector('.carousel_button--right');
const prevButton =  document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);
//get size of slide
const slideWudth = slides[0].getBoundingClientRect().width;

//arrange slide one next to anoter
const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWudth*index +'px';
};

slides.forEach(setSlidePosition);
let current = track.firstElementChild;
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