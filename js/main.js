const swiper = new Swiper('.card-slider', {
     pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 10
      },
    1200: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  });
// =========================================
let grid=document.querySelector("#grid");
let setting=document.querySelector(".setting")
let menuSetting=document.querySelector(".menu");
grid.addEventListener("click",(e)=>{
    menuSetting.classList.toggle("active");
})
// ==========================Menu=======================
let darkModeToggle=document.querySelector("#darkModeToggle")
let hideLeftSide=document.querySelector("#hideLeftSide")
let hideRightSide=document.querySelector("#hideRightSide")
let leftSide=document.querySelector("main .lSide")
let rightSide=document.querySelector("main .rSide")

hideLeftSide.addEventListener("change",(e)=>{
    if(hideLeftSide.checked){
        leftSide.style.display="none"
    }
    else{
        leftSide.style.display="block"
    }
})
hideRightSide.addEventListener("change",(e)=>{
    if(hideRightSide.checked){
        rightSide.style.display="none"
    }
    else{
        rightSide.style.display="block"
    }
})
// ============Mode======================
darkModeToggle.addEventListener("change",(e)=>{
        document.querySelector("html").classList.toggle("active")
})