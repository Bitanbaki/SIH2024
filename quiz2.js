document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let answers = {};
    const formData = new FormData(e.target);
    formData.forEach((value, key) => {
        answers[key] = value;
    });
    console.log('User Answers:', answers);

    // For now, just display an alert; you can customize this to your needs
    alert('Thank you for completing the quiz!');
});
