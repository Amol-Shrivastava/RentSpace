//form
const form = document.getElementById('form');

//user details
const userCont = document.querySelector('.radio_control');

const username = document.getElementById('username');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phonenumber');

//room config radio btn
const roomType = document.querySelector('.room_control');

const houseNumber = document.getElementById('House Number');
const streetName = document.getElementById('Street Name');
const landmarks = document.getElementById('Landmark');
const city = document.getElementById('City');
const pincode = document.getElementById('Pincode');

//amenities checkbox btn
const houseImgInput = document.getElementById('houseImg');
const roomImgInput = document.getElementById('roomImg');

const spaceDec = document.getElementById('Space Description');
const price = document.getElementById('Price');
const vacancy = document.getElementById('occupancy-state');


form.addEventListener('submit', e =>{
      e.preventDefault();
      validate();
})

//checking whether user is owner or agent
// radioOptions.forEach(opt => {
//   if(opt.checked === true)
// })

const isChecked = opt => {
  return opt.checked;
}

const validate =  () => {
  const usernameVal = username.value.trim();
  const emailVal  = email.value.trim();
  const phoneNumberVal = phoneNumber.value.trim();
  const houseNumberVal = houseNumber.value.trim();
  const streetNameVal = streetName.value.trim()
  const landmarksVal = landmarks.value.trim();
  // const cityVal = city.value.trim()
  const pincodeVal = pincode.value.trim();
  const spaceDecVal = spaceDec.value.trim();
  const priceVal = price.value.trim();

  const phoneValid = /^\d{10}$/;

  //checking whether user is owner or agent
  let radioOptions = Array.from(userCont.querySelectorAll('input[type="radio"]'));
  if(!radioOptions.some(isChecked)){
    userCont.classList.add('error');
  }

  //checking username value
  if(usernameVal === ""){
    setErrorMessage(username, 'Username cannot be blank');
  }else if(usernameVal.length <= 2){
    setErrorMessage(username, 'Username must have minimum 3 characters');
  }else{
    setSuccessMessage(username);
  }

  //checking email value
  if (emailVal === ""){
    setErrorMessage(email, 'Email cannot be blank');
  }else if (!isEmailValid(emailVal)){
    setErrorMessage(email, 'Email is not valid.');
  }else{
    setSuccessMessage(email);
  }

  //checking phoneNumber value
  if(phoneNumberVal === ""){
    setErrorMessage(phoneNumber, 'Phone Number cannot be blank');
  }else if(phoneNumberVal.length !== 10){
    setErrorMessage(phoneNumber, 'Phone Number is not valid');
  }else if(!phoneNumberVal.match(phoneValid)){
    setErrorMessage(phoneNumber, 'Phone Number is not valid');
  }else{
    setSuccessMessage(phoneNumber);
  }

  //checking room type
  let roomOptions = Array.from(roomType.querySelectorAll('input[type="radio"]'));
  if(!roomOptions.some(isChecked)){
    roomType.classList.add('error');
  }

  //checking house Number for being empty
  empty(houseNumberVal, houseNumber);

  //checking streetName for being empty
  empty(streetNameVal, streetName);

  // //checking city for being empty
  // empty(cityVal, city);

  //checking city for being empty
   empty(landmarksVal, landmarks);

  // checking pincode for being empty
    empty(pincodeVal, pincode);

  //checking textarea for being empty
  empty(spaceDecVal, spaceDec);

  // checking price for being empty
    empty(priceVal, price);
}

const empty = (val, inp) =>{
  if(val === ""){
    let inputTag = inp.id;
    setErrorMessage(inp, `${inputTag} cannot be blank.`)
  }
}

// checking typed email syntax
const isEmailValid = emailValue => {

  let atsymbol = emailValue.indexOf('@');
  if(atsymbol < 1) return false;

  let dot = emailValue.lastIndexOf('.');
  if(dot < 0) return false;

  //add '.' only after 2 position from '@'
  if(dot <= atsymbol + 2) return false;

  //checking whether user is ending at '.'
  if(dot === emailValue.length - 1) return false;

  return true;
}


// setErrorMessage definition

const setErrorMessage = (input, msg) => {
  let inputParent = input.parentElement;
  inputParent.classList.add('error');
  let errorMsgBox = inputParent.querySelector('.error-msg');
  // console.log(msg);
  // console.log(errorMsgBox.textContent);
  errorMsgBox.innerHTML = `${msg}`;
}

// setSuccessMessage definition

const setSuccessMessage = input => {
  let inputParent = input.parentElement;
  inputParent.classList.add('success');
  // inputParent.className = 'form_control success';
}
























//IMAGE PREVIEW FUNCTIONALITY*******************************

const houseImg = document.getElementById('mainhouseImg');
const previewText = document.querySelector('.preview-img');
const housePreviewCont = document.querySelector('.house-preview');
const delBtn = Array.from(document.querySelectorAll('.del-btn'));
const preview_img_text = Array.from(document.querySelectorAll('.preview-img--room'));

const room_one = document.getElementById('room-img-1');
const room_two = document.getElementById('room-img-2');
const room_three = document.getElementById('room-img-3');
const room_four = document.getElementById('room-img-4');
const room_five = document.getElementById('room-img-5');
const roomBtn = document.getElementById('roomBtn');

let i = 0;


houseImgInput.addEventListener('change', () => {
  let fileAdded = houseImgInput.files[0];
  let src = URL.createObjectURL(fileAdded);
  previewText.style.display = 'none';
  houseImg.style.display = 'block';
  delBtn[0].classList.add('show');
  houseImg.src = src;
})

roomImgInput.addEventListener('change', () => {
  i++;

  let imgfiles = roomImgInput.files[0];
  // console.log(imgfiles);

  let reader = new FileReader();

  reader.addEventListener('load', () => {

    switch (i){
      case 1:
      preview_img_text[0].style.display = 'none';
      room_one.src = reader.result;
      delBtn[1].classList.add('show');
      break;

      case 2:
      preview_img_text[1].style.display = 'none';
      room_two.src = reader.result;
      delBtn[2].classList.add('show');
      break;

      case 3:
      preview_img_text[2].style.display = 'none';
      room_three.src = reader.result;
      delBtn[3].classList.add('show');
      break;

      case 4:
      preview_img_text[3].style.display = 'none';
      room_four.src = reader.result;
      delBtn[4].classList.add('show');
      break;

      case 5:
      preview_img_text[4].style.display = 'none';
      room_five.src = reader.result;
      delBtn[5].classList.add('show');

      roomBtn.style.display='none';
      break;
    }
  })

reader.readAsDataURL(imgfiles);

})

delBtn.forEach(btn => {
  btn.addEventListener('click', (e) =>{
    // btn.classList.add('show');
    console.log(e.target);
    let previousImg = btn.previousElementSibling;
       previousImg.src = "";
       previousImg.style.display = 'none';
       btn.nextElementSibling.style.display = 'flex';
       btn.classList.remove('show');
  })
})
