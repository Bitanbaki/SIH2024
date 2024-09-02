document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('quiz-result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        let result = '';

        formData.forEach((value, key) => {
            result += `<strong>${key.replace(/-/g, ' ')}:</strong> ${value}<br>`;
        });

        resultContainer.innerHTML = `
            <h2>Your Quiz Results</h2>
            <p>${result}</p>
        `;
    });
});
