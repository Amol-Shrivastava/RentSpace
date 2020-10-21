const gridCont = document.querySelector('.grid-container');
const sidebar = document.querySelector('.sidebar-sidebar');
const main = document.querySelector('.main-content');

// toggle btn
const toggleBtn = document.querySelector('.togglebtn');

togglebtn.addEventListener('click', () => {
  console.log('toggle btn clicked');
  sidebar.classList.toggle('show');
  togglebtn.classList.toggle('highlighted');
})
