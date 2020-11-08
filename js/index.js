const navbar = document.querySelector('.nav');
const hero = document.querySelector('.hero');
const sliders = Array.from(document.querySelectorAll('.slide-in'));
const faders = Array.from(document.querySelectorAll('.faded'));

const slides = Array.from(document.querySelectorAll('.slide'));
const reviews = Array.from(document.querySelectorAll('.review'));

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const comprevBtn = document.getElementById('comprev');
const comnextBtn = document.getElementById('comnext');

//login Modal and button
const loginModal = document.querySelector('#loginModal');
const loginbtn = document.querySelector('.logIn');

//sign up modal functionality
const signModal = document.querySelector('#signupModal');
const signupbtn = document.querySelector('.signUp');

//user functionality
const userModal = document.querySelector('#userModal');
const userIcon = document.querySelector('.user-icon');


// navbar animation
const navOptions = {
  // root: hero,
  rootMargin: '-100px 0px 0px 0px',
  threshold: 0
};

const navObserver = new IntersectionObserver( (entries, navObserver) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting){
          navbar.classList.add('nav-scrolled');
      }else{
        navbar.classList.remove('nav-scrolled');
      }

    });
}, navOptions);

navObserver.observe(hero);


//sample space animation
const imgContOptions = {
  threshold: 0.25,
  rootMargin: "200px 0px 0px 0px"
};

const sampleSpaceObserver = new IntersectionObserver( (entries, sampleSpaceObserver) => {
    entries.forEach(entry => {

      if(!entry.isIntersecting){
          return;
      }else{
          entry.target.classList.add('appear');
        sampleSpaceObserver.unobserve(entry.target);
      }
    })
}, imgContOptions);


sliders.forEach(sample => {
  sampleSpaceObserver.observe(sample);
})

//services animation
faders.forEach(fader => {
  sampleSpaceObserver.observe(fader);
})

//hero-section animation

let counter = 0, //current displayed slide
    counterReviews = 0, //current displayed review
    totalSlides = slides.length, //total slide length
    totalReviews = reviews.length, //totalReviews length
    slideWidth ; //total slideable width

//1. hide all the images
const reset = () => {
  slides.forEach(slide => {
    slide.style.display = 'none';
  })
}

//2. show the first Image
const setup = () => {
    reset();
    slides[0].style.display = 'block';
}

// 3. function to show the left images
const showLeft = () => {
  reset();
  slides[counter - 1].style.display = 'block';
  counter--;
}

//4. function to show right images
  const showRight = () => {
    reset();
    slides[counter + 1].style.display = 'block';
    counter++;
  }

setup();

prevBtn.addEventListener('click', () => {
  if(counter === 0){
      counter = totalSlides;
  }
  showLeft();
});

nextBtn.addEventListener('click', () => {
  if(counter === totalSlides - 1){
    counter = -1;
  }
  showRight();
})


//review section animation**************************
//1. hide all the images
const resetCom = () => {
  reviews.forEach(el => {
    el.style.display = 'none';
  })
}

//2. show the first Image
const setupCom = () => {
    resetCom();
    reviews[0].style.display = 'block';
}

// 3. function to show the left images
const showLeftCom = () => {
  resetCom();
  reviews[counterReviews - 1].style.display = 'block';
  counterReviews--;
}

//4. function to show right images
  const showRightCom = () => {
    resetCom();
    reviews[counterReviews + 1].style.display = 'block';
    counterReviews++;
  }

setupCom();

comprevBtn.addEventListener('click', () => {
  if(counterReviews === 0){
      counterReviews = totalReviews;
  }
  showLeftCom();
});

comnextBtn.addEventListener('click', () => {
  if(counterReviews === totalReviews - 1){
    counterReviews = -1;
  }
  showRightCom();
})


//login form functionality

loginbtn.addEventListener('click', () => {
  loginModal.classList.toggle('show');
})

loginModal.addEventListener('click', et =>{
  console.log(et.target);
  if(et.target.id === 'loginModal'){
    loginModal.classList.remove('show');
  }
  // console.log(et.target);
})

//signup functionality
signupbtn.addEventListener('click', () => {
  signModal.classList.toggle('show');
})

signModal.addEventListener('click', en => {
  console.log(en.target);

  if(en.target.id === 'signupModal'){
    signModal.classList.remove('show');
  }

})

userIcon.addEventListener('click', () => {
    userModal.classList.toggle('show');
})

userModal.addEventListener('click', ep => {
  // console.log(ep.target);
  if(ep.target.id === 'userModal'){
    userModal.classList.remove('show');
  }
})
