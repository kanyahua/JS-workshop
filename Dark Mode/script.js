const switchToggle = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');


function switchMode(e){
  if(e.target.checked){
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
    imageSwitchMode('dark');
  }else{
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
    imageSwitchMode('light');
  }
}

function darkMode(){
    toggleIcon.children[0].textContent="Dark Mode";
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
}

function lightMode(){
    toggleIcon.children[0].textContent="Light Mode";
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
}

function imageSwitchMode(mode) {
    image1.src = `img/undraw_projects_${mode}.svg`;
    image2.src = `img/undraw_webapp_${mode}.svg`;
    image3.src = `img/undraw_2D_game_${mode}.svg`;

}

switchToggle.addEventListener('change', switchMode);