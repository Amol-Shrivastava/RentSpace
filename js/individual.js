const slidesAll = Array.from(document.querySelectorAll('.indi-slide'));
const nextBtn = document.querySelector('.sbtn-right');
const prevBtn = document.querySelector('.sbtn-left');

slidesAll.forEach((slide, index) => {
  slide.style.left = `${100 * index}%`;
  // console.log(slide);
});

let counter = 0;

nextBtn.addEventListener('click', ()=>{
  counter++;
  carousel();
})

prevBtn.addEventListener('click', ()=>{
  counter--;
  carousel();
})

const carousel = () => {
  if(counter == slidesAll.length){
    counter = 0;
  }else if(counter == 0){
    counter = slidesAll.length - 1;
  }
  
slidesAll.forEach(slide => {
  slide.style.transform = `translateX(-${counter * 100}%)`;
})
}
