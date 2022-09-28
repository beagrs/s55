const backToTopButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if(window.pageYOffset > 300){
        backToTopButton.style.display = "block";
    }

    else {
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener("click",backToTop);

function backToTop() {
    window.scrollTo(0,0);
}

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () =>{
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true")
})

setTimeout(() => {
    if(!localStorage.getItem("cookieBannerDisplayed"))
         cookieContainer.classList.add("active");

}, 2000)