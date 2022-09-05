const titles = document.querySelectorAll('.ages button');
const food1 = document.querySelector('.white-block');
const food2 = document.querySelector('.white-block-2');
const filterBtn = document.querySelector('.filter-btn');

const pages = document.querySelectorAll('.pages button');


titles.forEach((title) => {
    title.addEventListener('click', () => {
      title.classList.toggle('active');
    });
  });
  
 pages.forEach((page) => {
    page.addEventListener('click', () => {
      page.classList.toggle('active');
    });
  });
  
filterBtn.addEventListener('click', () => {
    food1.classList.toggle('active')
    food2.classList.toggle('active')
  });