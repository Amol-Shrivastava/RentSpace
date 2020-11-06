//form
const form = document.getElementById('form');

//user details
const userCont = document.querySelector('.radio_control');

const username = document.getElementById('Username');
const email = document.getElementById('Email');
const phoneNumber = document.getElementById('Phone Number');

//room config radio btn
const roomType = document.querySelector('.room_control');

const housename = document.getElementById('House Name');
const houseNumber = document.getElementById('House Number');
const streetName = document.getElementById('Street Name');
const landmarks = document.getElementById('Landmark');
const selectBox = document.getElementById('selectBox');
const cityOptionCont = document.getElementById('city-option-cont');
const selectedOption = document.getElementById('selectedOption');
const menuIcon = document.getElementById('fas');
const menuIconCont = document.getElementById('select-icon');
let selectedCitySpan = selectedOption.querySelector('.cityclicked');

const pincode = document.getElementById('Pincode');

//amenities checkbox btn
const houseImgInput = document.getElementById('houseImg');
const roomImgInput = document.getElementById('roomImg');

const spaceDecCont = document.querySelector('.space-desc-cont');
const spaceDec = document.getElementById('Space Description');
const price = document.getElementById('Price');
const vacancy = document.getElementById('occupancy-state');

//login Modal and button
const loginModal = document.querySelector('#loginModal');
const loginbtn = document.querySelector('.logIn');

//sign up modal functionality
const signModal = document.querySelector('#signupModal');
const signupbtn = document.querySelector('.signUp');

//login form functionality

loginbtn.addEventListener('click', () => {
  loginModal.classList.add('show');
})

loginModal.addEventListener('click', et =>{
  if(et.target.id === 'loginModal'){
    loginModal.classList.remove('show');
  }
})

//signup functionality
signupbtn.addEventListener('click', () => {
  signModal.classList.add('show');
})

signModal.addEventListener('click', en => {
  console.log(en.target);

  if(en.target.id === 'signupModal'){
    signModal.classList.remove('show');
  }

})


//city selection
selectBox.addEventListener('click', e => {
  // console.log(e.target);
  if(e.target.classList.contains('select-icon') || e.target.classList.contains('fas')){
    cityOptionCont.classList.toggle('active');
    menuIcon.classList.toggle('active');
  }

  if(e.target.classList.contains('city-Name')){
    let selectedCity = e.target.innerText;
    selectedCitySpan.innerHTML = `${selectedCity}`;
    selectedCitySpan.classList.add('active');
    cityOptionCont.classList.remove('active');
    menuIcon.classList.remove('active');
    }
})

//form execution function
  form.addEventListener('submit', e => {
    e.preventDefault();
    validate();
  })

//validation function
const validate = () => {

  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneNumberVal = phoneNumber.value.trim();
  const houseNameVal = housename.value.trim();
  const houseNumberVal = houseNumber.value.trim();
  const streetNameVal = streetName.value.trim()
  const landmarksVal = landmarks.value.trim();
  const pincodeVal = pincode.value.trim();
  const spaceDecVal = spaceDec.value.trim();
  const priceVal = price.value.trim();

//checking whether user is owner or agent
let radioOptions = Array.from(userCont.querySelectorAll('input[type="radio"]'));
if (!radioOptions.some(isChecked)) {
userCont.classList.add('error');
setTimeout( () =>{
  userCont.classList.remove('error');
}, 1500);
}

//checking room type
let roomOptions = Array.from(roomType.querySelectorAll('input[type="radio"]'));
if (!roomOptions.some(isChecked)) {
roomType.classList.add('error');
setTimeout( () =>{
  roomType.classList.remove('error');
}, 2000);
}

//checking username for being empty
empty(usernameVal, username);

if (usernameVal.length <= 2) {
setErrorMessage(username, 'Username must have minimum 3 characters');
}else {
 setSuccessMessage(username);

}


//checking username for being empty

empty(emailVal, email);
if (!isEmailValid(emailVal)) {
setErrorMessage(email, 'Email is not valid.');
} else {
setSuccessMessage(email);
}


//checking username for being empty
empty(phoneNumberVal, phoneNumber);
if (phoneNumberVal.length !== 10) {
setErrorMessage(phoneNumber, 'Phone Number must be of 10 digits.');
} else {
setSuccessMessage(phoneNumber);
}


//checking house name for being empty
empty(houseNameVal, housename);

//checking house Number for being empty
empty(houseNumberVal, houseNumber);

//checking streetName for being empty
empty(streetNameVal, streetName);

//checking city for being empty
if(selectedCitySpan.innerHTML === "Please Select a City"){

  let parentElement = selectedCitySpan.parentElement.parentElement.parentElement;
  let errorMsgBox = parentElement.querySelector('.error-msg');

    parentElement.classList.add('error');
    errorMsgBox.innerHTML = "CITY CANNOT BE BLANK";
    selectedOption.style.border = '2px solid #e74c3c';

    setTimeout( () =>{
      // console.log(selectedCitySpan.parentElement);
      selectedOption.style.border = '1px solid #3c4647';
      parentElement.classList.remove('error');
    }, 2800);
}else{
  selectedOption.style.border = '2px solid #2ecc71';
}

//checking city for being empty
empty(landmarksVal, landmarks);

// checking pincode for being empty
empty(pincodeVal, pincode);

if (pincodeVal.length !== 6) {
setErrorMessage(pincode, 'Pincode is not valid');
} else {
setSuccessMessage(pincode);
}

//checking textarea for being empty
empty(spaceDecVal, spaceDec);

// checking price for being empty
empty(priceVal, price);

}

//checking whether radio button is checked
const isChecked = opt => {
return opt.checked;
}

//checking whether input is empty
const empty = (val, inp) => {
if(val === ""){
  let inputTag = inp.id;
  setErrorMessage(inp, `${inputTag} cannot be blank.`);
  return false;
}else{
   setSuccessMessage(inp);
   return true;
  }
}

// checking typed email syntax
const isEmailValid = emailValue => {

let atsymbol = emailValue.indexOf('@');
if (atsymbol < 1) return false;

let dot = emailValue.lastIndexOf('.');
if (dot < 0) return false;

//add '.' only after 2 position from '@'
if (dot <= atsymbol + 2) return false;

//checking whether user is ending at '.'
if (dot === emailValue.length - 1) return false;

return true;
}


// setErrorMessage definition

const setErrorMessage = (input, msg) => {
let inputParent = input.parentElement;
inputParent.classList.remove('success');
inputParent.classList.add('error');
let errorMsgBox = inputParent.querySelector('.error-msg');

errorMsgBox.innerHTML = `${msg}`;

setTimeout(()=>{
  inputParent.classList.remove('error');
  inputParent.classList.remove('success');
  errorMsgBox.innerHTML = "";
}, 2800);
}

// setSuccessMessage definition

const setSuccessMessage = input => {
let inputParent = input.parentElement;
inputParent.classList.add('success');
setTimeout(()=>{
  inputParent.classList.add('success');
}, 1000);
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

let reader = new FileReader();

reader.addEventListener('load', () => {

switch (i) {
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

roomBtn.style.display = 'none';
break;
}
})

reader.readAsDataURL(imgfiles);

})

delBtn.forEach(btn => {
btn.addEventListener('click', (e) => {
// btn.classList.add('show');
// console.log(e.target);
let previousImg = btn.previousElementSibling;
previousImg.src = "";
previousImg.style.display = 'none';
btn.nextElementSibling.style.display = 'flex';
btn.classList.remove('show');
})
})
