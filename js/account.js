//user functionality
const userModal = document.querySelector('#userModal');
const userIcon = document.querySelector('.user-icon');

//toggle sidebar button
const toggleBtn = document.querySelector('.acc-container--toggle-btn');
const sidebarBox = document.querySelector('.acc-container--sidebar-box');

//arrow button
const itemList = document.querySelector('.acc-list');

//all the items
const item_1 = document.querySelector('#link-1');
const item_2 = document.querySelector('#link-2');
const item_3 = document.querySelector('#link-3');

//content section
let contentSect = document.querySelector('.acc-container--content');

//collection container
const collectCont = document.querySelector('.collection-cont');

//posts container
const postCont = document.querySelector('.posts');

//form,collection,posts section
const profileForm = document.querySelector('.formblock');
const collection = document.querySelector('.collection');
const posts = document.querySelector('.posts');

//pic preview
const picBtn = document.querySelector('.picInt');
const picPreview = document.querySelector('.userPic');

userIcon.addEventListener('click', () => {
    userModal.classList.toggle('show');
})

//userModal
userModal.addEventListener('click', ep => {
  if(ep.target.id === 'userModal'){
    userModal.classList.remove('show');
  }
})

//toggle sidebar
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('toggle');
    sidebarBox.classList.toggle('show');
})

//list items
itemList.addEventListener('click', e => {
  let btn1 = document.querySelector('.btn-1');
  let btn2 = document.querySelector('.btn-2');
  let btn3 = document.querySelector('.btn-3');

  //console.log(e.target.classList);
  if(e.target.classList.contains('item-1')){
    btn1.classList.add('show');

    btn2.classList.remove('show');
    btn3.classList.remove('show');

  }else if(e.target.classList.contains('item-2')){
    btn2.classList.add('show');

    btn1.classList.remove('show');
    btn3.classList.remove('show');
  }else if(e.target.classList.contains('item-3')){
    btn3.classList.add('show');
    btn2.classList.remove('show');
    btn1.classList.remove('show');
  }
})

//collection option container
collectCont.addEventListener('click', et => {

  if(et.target.classList.contains('options')){
    let optionsCont = et.target.nextElementSibling;
    optionsCont.classList.toggle('show');
  }

  if(et.target.classList.contains('rem')){

    // let remBtn = et.target;
    let parentBox = et.target.parentNode.parentNode.parentNode;
    // console.log(parentBox);
    parentBox.remove();
  }
})

//post container FUNCTIONALITY
postCont.addEventListener('click', ep => {
  if(ep.target.classList.contains('post--options')){
    let optionsCont = ep.target.nextElementSibling;
    optionsCont.classList.toggle('show');
  }

  if(ep.target.classList.contains('del')){
    let parentBox = ep.target.parentNode.parentNode.parentNode;
    // console.log(parentBox);
    parentBox.remove();
  }
})

//Toggling Content on click
const showContent = (first, second, third) => {
  first.classList.add('show');
  second.classList.remove('show');
  third.classList.remove('show');
}

item_1.addEventListener('click', () => {
  profileForm.classList.add('show');
  showContent(profileForm, collection, posts);
});
item_2.addEventListener('click', () => {
  collection.classList.add('show');
  showContent(collection, profileForm, posts);
});
item_3.addEventListener('click', () => {
  posts.classList.add('show');
  showContent(posts, profileForm, collection);
});

//pic preview functionality
picBtn.addEventListener('change', () => {
  // console.log('yes');
  let imgfile = picBtn.files[0];
  // console.log(imgfile);
  let src = URL.createObjectURL(imgfile);
  // picPreview.style.display = "block";
  picPreview.src = src;
})
