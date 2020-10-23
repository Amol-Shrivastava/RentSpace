const gridCont = document.querySelector('.grid-container');

//sidebar box
const sidebar = document.querySelector('.sidebar-sidebar');

//main-content
const main = document.querySelector('.main-content');

//search-form
const form = document.querySelector('.search-form');

//ul list for selected items
const selectedUl = document.getElementById('selected_filter_list');

//input box
let inputBox = document.querySelector('.input-box');

//remove-btn for individual selected list
const removeBtn = document.querySelector('.remove-btn');

//ul list for options -> city, room-config, rate
const cityUl = document.getElementById('option_list_item--city');
const roomUl = document.getElementById('option_list_item--room-config');
const rateUl = document.getElementById('option_list_item--rate');

// toggle btn
const toggleBtn = document.querySelector('.togglebtn');


togglebtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
  togglebtn.classList.toggle('highlighted');
})

//form submit
form.addEventListener('submit', e => {
  e.preventDefault();
})

// creating list element for when option is selected to add to selected container
let liElementSelected = (value, cont) => {
  let selected_filter_items = document.createElement('li');
  selected_filter_items.className = 'filter_items selected_filter_item';
  selected_filter_items.innerHTML = `
    <label class="filter__name selected-filter" id="selected_filter_items">
    <input type="checkbox" checked>
    <span class="option">${value}</span>
    </label>

    <div class="remove-btn">
      &times;
    </div>
    `;

  cont.appendChild(selected_filter_items);
}

// creating list element for when option is deselected from selected container
let liElementsUnselected = (value, cont) => {
  let unselectedListItem = document.createElement('li');
  unselectedListItem.className = 'filter_items';
  unselectedListItem.innerHTML = `
  <label class="filter__name" id= "${value}">
    <input type="checkbox" for= "${value}" class="input-box">
        <span class="option">${value}</span>
    </label>
    `;
  console.log(unselectedListItem);
  cont.appendChild(unselectedListItem);
}


//selection functionality****************************************
sidebar.addEventListener('click', e => {

  //1. for when name of option is clicked*******************************************
  if (e.target.classList.contains('option')) {
    let valuefilled = e.target.innerHTML;
    liElementSelected(valuefilled, selectedUl);

    // Removing selected list from its container
    let parentList = e.target.parentNode.parentNode;
    parentList.remove();
  }


  //2. for when name of input is clicked*******************************************
  if (e.target.classList.contains('input-box')) {
    let nextOption = e.target.nextElementSibling.innerText.toUpperCase();
    liElementSelected(nextOption, selectedUl);
    // Removing selected list from its container
    let parentList = e.target.parentNode.parentNode;
    parentList.remove();
  }

  //3. for when cross button is clicked******************************
  if (e.target.classList.contains('remove-btn')) {

    let selectedparentList, selectedFilterItem, selectedoptionName, selectedoptionValue;

    selectedparentList = e.target.parentNode;
    selectedFilterItem = e.target.previousElementSibling;
    selectedoptionName = selectedparentList.querySelector('.option');
    selectedoptionValue = selectedoptionName.innerText.toUpperCase();


    // for city list readdition ***************************
    if (selectedoptionValue === 'BHOPAL' ||
      selectedoptionValue === 'INDORE' ||
      selectedoptionValue === 'JABALPUR' ||
      selectedoptionValue === 'SAGAR') {
      selectedparentList.remove();

      liElementsUnselected(selectedoptionValue, cityUl);

    }

    // for room list readdition ***************************
    if (selectedoptionValue === '1 BHK' ||
      selectedoptionValue === '2 BHK' ||
      selectedoptionValue === '1 ROOM' ||
      selectedoptionValue === '2 ROOMS') {

      selectedparentList.remove();
      liElementsUnselected(selectedoptionValue, roomUl);
    }

    // for rate list readdition ***************************
    if (selectedoptionValue === '6000RS+' ||
      selectedoptionValue === '5000RS-6000RS' ||
      selectedoptionValue === '4000RS-5000RS' ||
      selectedoptionValue === '2000RS-4000RS' ||
      selectedoptionValue === '1000RS-2000RS') {
      selectedparentList.remove();

      liElementsUnselected(selectedoptionValue, rateUl);
    }
  }
})
