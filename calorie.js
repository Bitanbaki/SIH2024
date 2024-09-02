function calculateCalories() {
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const activity = document.getElementById('activity').value;

    // Basal Metabolic Rate (BMR) Calculation (Mifflin-St Jeor Equation)
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // for males
    // const bmr = 10 * weight + 6.25 * height - 5 * age - 161; // for females

    // Activity factor
    let activityFactor = 1.2;
    if (activity === 'light') activityFactor = 1.375;
    if (activity === 'moderate') activityFactor = 1.55;
    if (activity === 'active') activityFactor = 1.725;
    if (activity === 'extra') activityFactor = 1.9;

    const calories = bmr * activityFactor;
    document.getElementById('calorieResult').innerText = calories.toFixed(0);
}