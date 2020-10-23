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
const roomUl = document.getElementById('option_list_item--room');
const rateUl = document.getElementById('option_list_item--rate');

// toggle btn
const toggleBtn = document.querySelector('.togglebtn');


togglebtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
  togglebtn.classList.toggle('highlighted');
})

//form submit
form.addEventListener('submit',e => {
  e.preventDefault();
})


//selection functionality

sidebar.addEventListener('click', e =>{
  // console.log(e.target);
  if(e.target.classList.contains('option')){

    //creating a list item corresponding to the clicked item
    let selected_filter_items = document.createElement('li');
    selected_filter_items.className = 'filter_items selected_filter_item';
    selected_filter_items.innerHTML = `
    <label class="filter__name selected-filter" id="selected_filter_items">
      <input type="checkbox" checked>
      <span class="option">${e.target.innerHTML}</span>
      </label>

      <div class="remove-btn">
        &times;
      </div>
      `;

      // Adding newly created list item in the selected container
      selectedUl.appendChild(selected_filter_items);

      // Removing selected list from its container
      let parentList = e.target.parentNode.parentNode;
      parentList.remove();
    }

    //input box function
    if (e.target.classList.contains('input-box')){
      let nextOption = e.target.nextElementSibling.innerText.toUpperCase();
      // console.log(nextOption);

      let selected_filter_items = document.createElement('li');
      selected_filter_items.className = 'filter_items selected_filter_item';
      selected_filter_items.innerHTML = `
      <label class="filter__name selected-filter" id="selected_filter_items">
        <input type="checkbox" checked>
        <span class="option">${nextOption}</span>
        </label>

        <div class="remove-btn">
          &times;
        </div>
        `;
        // Adding newly created list item in the selected container
        selectedUl.appendChild(selected_filter_items);

        // Removing selected list from its container
        let parentList = e.target.parentNode.parentNode;
        parentList.remove();
    }

    //remove option functionality
    if(e.target.classList.contains('remove-btn')){
      // let unselectedListItemCity, unselectedListItemRoom, unselectedListItemRate;
      let selectedparentList, selectedFilterItem, selectedoptionName, selectedoptionValue;

        selectedparentList = e.target.parentNode;
        selectedFilterItem = e.target.previousElementSibling;
        selectedoptionName = selectedparentList.querySelector('.option');
        selectedoptionValue = selectedoptionName.innerText.toUpperCase();

      // console.log(selectedoptionValue);

      if(selectedoptionValue === 'BHOPAL' || selectedoptionValue === 'INDORE' || selectedoptionValue === 'JABALPUR' || selectedoptionValue === 'SAGAR'){
        selectedparentList.remove();

      let unselectedListItemCity = document.createElement('li');
        unselectedListItemCity.className = 'filter_items';
        unselectedListItemCity.innerHTML = `
        <label id="${selectedoptionValue}" class="filter__name">
          <input type="checkbox" for="${selectedoptionValue}">
          <span class="option">${selectedoptionValue}</span>
        </label>
        `;
        cityUl.appendChild(unselectedListItemCity);
      }

       if(selectedoptionValue === '1 BHK' || selectedoptionValue === '2 BHK' || selectedoptionValue === '1 ROOM' || selectedoptionValue === '2 ROOMS'){
        selectedparentList.remove();

        let unselectedListItemRoom = document.createElement('li');
        unselectedListItemRoom.className = 'filter_items';
        unselectedListItemRoom.innerHTML = `
        <label id="${selectedoptionValue}" class="filter__name">
          <input type="checkbox" for="${selectedoptionValue}">
          <span class="option">${selectedoptionValue}</span>
        </label>
        `;
        // console.log(unselectedListItemRoom);
        roomUl.appendChild(unselectedListItemRoom);
      }

       if(selectedoptionValue === '6000RS+' || selectedoptionValue === '5000RS-6000RS' || selectedoptionValue === '4000RS-5000RS' || selectedoptionValue === '2000RS-4000RS' || selectedoptionValue === '1000RS-2000RS'){
        selectedparentList.remove();

      let unselectedListItemRate = document.createElement('li');
      unselectedListItemRate.className = 'filter_items';
      unselectedListItemRate.innerHTML = `
      <label id="${selectedoptionValue}" class="filter__name">
        <input type="checkbox" for="${selectedoptionValue}">
        <span class="option">${selectedoptionValue}</span>
      </label>
      `;
      rateUl.appendChild(unselectedListItemRate);
    }
  }
})
