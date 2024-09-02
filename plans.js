//=============== SHOW MENU ===============/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu');
   });
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu');
   });
}

//=============== PERSONALISED PLANS FETCHING ===============/

document.addEventListener('DOMContentLoaded', () => {
   fetchPersonalisedPlans();
});

/**
 * Fetches personalised diet and exercise plans from the backend.
 */
function fetchPersonalisedPlans() {
   // Replace the URL with your actual backend API endpoint
   const apiUrl = 'https://your-backend-api.com/api/personalised-plans';

   fetch(apiUrl, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         // Include authentication headers if required
         // 'Authorization': 'Bearer YOUR_TOKEN'
      }
   })
   .then(response => {
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
   })
   .then(data => {
      displayPlans(data);
   })
   .catch(error => {
      console.error('Error fetching personalised plans:', error);
      displayErrorMessage();
   });
}

/**
 * Displays the fetched diet and exercise plans on the webpage.
 * @param {Object} data - The data object containing diet and exercise plans.
 */
function displayPlans(data) {
   const dietPlanContainer = document.getElementById('diet-plan');
   const exercisePlanContainer = document.getElementById('exercise-plan');

   // Clear existing content
   dietPlanContainer.innerHTML = '';
   exercisePlanContainer.innerHTML = '';

   // Check if data contains diets and exercises
   if (data.diets && Array.isArray(data.diets)) {
      data.diets.forEach(diet => {
         const dietItem = document.createElement('div');
         dietItem.classList.add('plan-item');
         dietItem.textContent = diet;
         dietPlanContainer.appendChild(dietItem);
      });
   } else {
      dietPlanContainer.textContent = 'No diet plans available.';
   }

   if (data.exercises && Array.isArray(data.exercises)) {
      data.exercises.forEach(exercise => {
         const exerciseItem = document.createElement('div');
         exerciseItem.classList.add('plan-item');
         exerciseItem.textContent = exercise;
         exercisePlanContainer.appendChild(exerciseItem);
      });
   } else {
      exercisePlanContainer.textContent = 'No exercise plans available.';
   }
}

/**
 * Displays an error message if fetching fails.
 */
function displayErrorMessage() {
   const dietPlanContainer = document.getElementById('diet-plan');
   const exercisePlanContainer = document.getElementById('exercise-plan');

   dietPlanContainer.textContent = 'Unable to load diet plans at this time.';
   exercisePlanContainer.textContent = 'Unable to load exercise plans at this time.';
}
