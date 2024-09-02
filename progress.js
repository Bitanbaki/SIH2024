// /=============== SHOW MENU ===============/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
})
}
// JavaScript example for dynamic progress tracking (optional)

const progressData = {
    workouts: 70,
    weightLoss: 30,
    caloriesBurned: 50,
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('progress[value="70"]').value = progressData.workouts;
    document.querySelector('progress[value="30"]').value = progressData.weightLoss;
    document.querySelector('progress[value="50"]').value = progressData.caloriesBurned;
});
