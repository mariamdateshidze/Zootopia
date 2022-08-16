const slideItems = document.querySelectorAll('.slider-item');
const slideBtns = document.querySelectorAll('.slider-lines');
const prevBtn = document.querySelector('#prev-slide-btn');
const nextBtn = document.querySelector('#next-slide-btn');


let myInterval=null;
let activeIndex = 0;

initSlider();
function initSlider(){
    renderSliders();
    startAutoSliding();

}

function startAutoSliding(){
    myInterval = setInterval(showNextSlide, 5000);
  }

function renderSliders() {
    slideItems.forEach((item, i) => {
      if(activeIndex === i){
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    })
     
  }

function showNextSlide() {
activeIndex = activeIndex + 1;
if(activeIndex > slideItems.length - 1){
    activeIndex = 0;
}

renderSliders();

}

function showPrevSlide(){
    activeIndex = activeIndex - 1;
    if(activeIndex < 0){
      activeIndex = slideItems.length - 1;
    }
    renderSliders();
  }


prevBtn.addEventListener('click', () => {
   showPrevSlide();
});

nextBtn.addEventListener('click', () => {
    showNextSlide();
 });
