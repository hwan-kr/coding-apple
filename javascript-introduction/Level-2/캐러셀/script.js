const slideContainer = document.querySelector('.slide-container');
const slide1Btn = document.querySelector('.slide-1');
const slide2Btn = document.querySelector('.slide-2');
const slide3Btn = document.querySelector('.slide-3');
const nextBtn = document.querySelector('.nextBtn');

let currentX = 0;
let imgCount = 3;

function imgSlide(width) {
    slideContainer.style.transform = `translateX(${width}vw)`;
    currentX = width;
    
}
function slideNext() {
    currentX = currentX <= -(imgCount-1)*100 ? 0 : currentX - 100;
    slideContainer.style.transform = `translateX(${currentX}vw)`; 
}

slide1Btn.addEventListener('click', imgSlide.bind(null, 0));
slide2Btn.addEventListener('click', imgSlide.bind(null, -100));
slide3Btn.addEventListener('click', imgSlide.bind(null, -200));
nextBtn.addEventListener('click', slideNext);

function sale(price, firstBuy) {
    let realPrice;
    if (firstBuy == true) {
        realPrice = price * 0.9 - 1.5;
    } else {
        realPrice = price * 0.9;
    }
    return realPrice.toFixed(2);
}
console.log(sale(70, false));
console.log(sale(10.3, true));