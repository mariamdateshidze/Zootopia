const kgBtns = document.querySelectorAll("#kg-btn");
const dropDown = document.querySelectorAll('.drop-down-p')
const more = document.querySelectorAll('.more')


dropDown.addEventListener('click', () => {
    console.log("dsdbsnmdm")
    more.classList.toggle('active');
});

  
kgBtns.forEach((kg) => {
    kg.addEventListener('click', () => {
      console.log("djsdsjd")
       kg.classList.toggle('active');
    });
  });

  
