const houseImgInput = document.getElementById('houseImg');
const houseImg = document.getElementById('mainhouseImg');
const previewText = document.querySelector('.preview-img');
const housePreviewCont = document.querySelector('.house-preview');
const delBtn = Array.from(document.querySelectorAll('.del-btn'));


const roomImgInput = document.getElementById('roomImg');
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
