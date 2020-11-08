//Title and city Name
const titleName = document.querySelector('.house-name');
const cityName = document.querySelector('.st-na');

//main Image Container
const mainImgCont = document.querySelector('.indi-1');

//main Image
const mainImg = document.querySelector('.indi-house-img');

//share button
const shareBtn = document.querySelector('.indi-share-box');
const shareModal = document.querySelector('#share-Modal');

//room Images
const roomsImgsCont = Array.from(document.querySelector('.indi_room_pics_box'));
const roomImgs = Array.from(document.querySelectorAll('.indi_room_img'));

//modal container
const modalCont = document.querySelector('.modal-cont');
const modalBody = document.querySelector('.modal-body');
const modalImg = document.querySelector('.modal-pic');
const modalRightBtn = document.querySelector('.ibtn-right');
const modalLeftBtn = document.querySelector('.ibtn-left');
const imgAbs = document.querySelector('.imageAbsent');

//heart icon
const iconsvg = document.querySelector('.icon-heart2');
const modalMsg = document.querySelector('#messageModal');
const msgBody = document.querySelector('.modal-msg-body');

//login Modal and button
const loginModal = document.querySelector('#loginModal');
const loginbtn = document.querySelector('.logIn');

//sign up modal functionality
const signModal = document.querySelector('#signupModal');
const signupbtn = document.querySelector('.signUp');

//user functionality
const userModal = document.querySelector('#userModal');
const userIcon = document.querySelector('.user-icon');

//1 Image functionality**************************************************
//checking for no images

if(mainImg == null){
  mainImgCont.classList.add('noImage');
  mainImgCont.innerHTML = 'No Image to Preview';
}

mainImgCont.addEventListener('click', e => {
  if(mainImg !== null){
    let mainImgSrc = mainImg.src;
    modalCont.classList.add('active');
    modalImg.src = mainImgSrc;
  }else{
    modalCont.classList.add('active');
    modalImg.remove();
    modalBody.classList.add('noImageText');
    imgAbs.innerText = 'No Image to Preview.';
  }

  modalRightBtn.style.display = 'none';
  modalLeftBtn.style.display = 'none';
})

roomImgs.forEach(img => {
  img.addEventListener('click', () =>{
    let imgSrc = img.src;
    console.log(imgSrc);
    modalCont.classList.add('active');
    modalImg.src = imgSrc;

    modalRightBtn.style.display = 'inline-block';
    modalLeftBtn.style.display = 'inline-block';
  })
})

const changeImg = type =>{
  let currentImg = modalImg.src;


   for(let i = 0 ; i < roomImgs.length ; i++){
     if(roomImgs[i].src == currentImg){
       let nextIndex, nextImg;

        //if right button is clicked***
         if(type === 'next'){

         nextIndex = i + 1;
          if(nextIndex == roomImgs.length){
           nextIndex = 0;
         }
          nextImg = roomImgs[nextIndex].src;
        }

        //if left button is clicked***
        else if(type === 'previous'){
            nextIndex = i - 1;
            if(nextIndex == -1){
              nextIndex = roomImgs.length - 1;
            }
              nextImg = roomImgs[nextIndex].src;
          }
           modalImg.src = nextImg;
       }
    }
  }

modalRightBtn.addEventListener('click', () => {
      changeImg('next');
 })

 modalLeftBtn.addEventListener('click', () => {
    changeImg('previous');
 })


modalCont.addEventListener('click', e => {
  //console.log(e.target);
  if(!e.target.classList.contains('ibtn-right') &&
  !e.target.classList.contains('ibtn-left') &&
  !e.target.classList.contains('modal-pic')){
    modalCont.classList.remove('active');
  }else{
    return;
  }
})

//2 Collection functionality**************************************************
let count = 0;

iconsvg.addEventListener('click', () =>{

  iconsvg.classList.toggle('active');
  count++;

  if(count % 2 !== 0){
    // console.log('odd');
    createMsgModal('liked', 'This space is added to your Collection.');
  }else if(count % 2 === 0){
    // console.log('even');
    createMsgModal('unliked', 'This space is removed from your Collection.');
  }

  setTimeout(() => {
    modalMsg.classList.remove('active');
  }, 1500);

})
//for collection like and dislike
const createMsgModal = (classIs, msg) => {
  modalMsg.classList.remove('active');
  modalMsg.classList.add('active');

  let modalMsgbody = document.createElement('div');
  modalMsgbody.className = 'modal-msg-body';

  modalMsgbody.innerHTML = `
  <div class="message">
    <svg class="icon icon-heart2 icon-msg ${classIs}">
      <use xlink:href="#icon-heart2">
        <symbol id="icon-heart2" viewBox="0 0 32 32">
          <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
        </symbol>
      </use>
    </svg>

    <span class="msgText">
      ${msg}
    </span>
  </div>
  `;
  modalMsg.appendChild(modalMsgbody);
}

modalMsg.addEventListener('click', e => {
  if(!e.target.classList.contains('modal-msg-body')){
    modalMsg.classList.remove('active');
  }
})

//3. share functionality******************************
let titleValue = titleName.textContent;
let cityValue = cityName.textContent;
let pageURL = window.location.href;
const shareBtns = Array.from(document.querySelectorAll('.share-btn'));

document.querySelector('title').innerText = `${titleValue} >> ${cityValue}`;

shareBtn.addEventListener('click', () => {
  if(navigator.share){
    navigator.share({
      title: `${titleValue}`,
      text: `${titleValue} ${cityValue}`,
      url:`${pageURL}`
    }).then(() => {
      createShareModal("You've successfully shared this space","👍");
      setTimeout(() => {
        shareModal.classList.remove('active');
      }, 1500);
    }).catch(err => {
      createShareModal("An error occured while sending this space","🙅");
      setTimeout(() => {
        shareModal.classList.remove('active');
      }, 1500);
    });
  }else{
    console.log('Cannot open webshareAPI');
    shareModal.classList.add('active');
    shareBtns.forEach(btn => {
      btn.dataset.url = `${pageURL}`;
      btn.dataset.title = `${titleValue}`;
    })
    shareBtns[1].dataset.image = `${mainImg.src}` ;
    shareBtns[2].dataset.image = `${mainImg.src}` ;
    // console.log(mainImg.src);
    }
})


//for webshareAPI
const createShareModal = (msg, cartoon) => {
  let div = document.createElement('div');
  div.className = 'share-modalBody';
  div.innerHTML = `
      <span class="share-text">${msg}<span class="cartoon">${cartoon}</span></span>
  `;
  shareModal.appendChild(div);
}

//for not webshareAPI supported
shareModal.addEventListener('click', e => {

  if(!e.target.classList.contains('share-ModalUni')){
    shareModal.classList.remove('active');
  }
})



//login form functionality

loginbtn.addEventListener('click', () => {
  loginModal.classList.toggle('show');
})

loginModal.addEventListener('click', et =>{
  if(et.target.id === 'loginModal'){
    loginModal.classList.remove('show');
  }
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
