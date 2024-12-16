
function openServiceTab(service) {
    let url = '';

    switch (service) {
        case 'about-bmi':
            url = 'about-bmi.html';
            break;
        case 'food-intake':
            url = 'food-intake.html';
            break;
        case 'nutrition-advice':
            url = 'nutrition-advice.html';
            break;
        case 'meal-plans':
            url = 'meal-plans.html';
            break;
        case 'diet-challenges':
            url = 'diet-challenges.html';
            break;
        case 'exercise-recommendations':
            url = 'exercise-recommendations.html';
            break;
        case 'progress-tracking':
            url = 'progress-tracking.html';
            break;
        case 'nutrition':
            url = 'nutrition-advice.html';
            break;
        default:
            return;
    }

    window.open(url, '_blank');
}
document.getElementById('about-bmi').addEventListener('click', function() {
    openServiceTab('about-bmi');
})
document.getElementById('food-intake').addEventListener('click', function() {
    openServiceTab('food-intake');
});

document.getElementById('nutrition-advice').addEventListener('click', function() {
    openServiceTab('nutrition-advice');
});

document.getElementById('meal-plans').addEventListener('click', function() {
    openServiceTab('meal-plans');
});
document.getElementById('diet-challenges').addEventListener('click', function() {
    openServiceTab('diet-challenges');
})
document.getElementById('exercise-recommendations').addEventListener('click', function() {
    openServiceTab('exercise-recommendations');
})
document.getElementById('progress-tracking').addEventListener('click', function() {
    openServiceTab('progress-tracking');
})
document.getElementById("nutrition").addEventListener('click', function() {
    openServiceTab('nutrition');
})

