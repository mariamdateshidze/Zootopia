const slideItems = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('#prev-slide-btn');
const nextBtn = document.querySelector('#next-slide-btn');

const dogsFood = document.querySelectorAll('#pedigri');
const prevBtn2 = document.querySelector('.prev-btn');
const nextBtn2 = document.querySelector('.next-btn');

const slideBtns = document.querySelectorAll('.slider-line');

const moreBtn = document.querySelector("#more-prod");
const moreProducts = document.querySelectorAll(".after-btn-click");

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

    slideBtns.forEach((item, i) => {
        if(activeIndex === i){
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      })
     
      dogsFood.forEach((item, i) => {
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

prevBtn2.addEventListener('click', () => {
    showPrevSlide();
 });

nextBtn.addEventListener('click', () => {
    showNextSlide();
 });

nextBtn2.addEventListener('click', () => {
    showNextSlide();
 });

slideBtns.forEach((rectangle ,rectanglesindex) => {
    rectangle.addEventListener('click', () => {
        handleRecClick(rectanglesindex);
        
    });
});

function handleRecClick(nextIndex){
    activeIndex = nextIndex;
    renderSliders();
};

// moreBtn.addEventListener('click', () => {
//   moreProducts.classList.toggle('active')
//   });

moreBtn.addEventListener('click', () => {
  moreProducts.forEach((item, i) => {
      item.classList.toggle('active');
    
  })
});