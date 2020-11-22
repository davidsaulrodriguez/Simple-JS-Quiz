const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const highScoresList = document.getElementById('highScoresList');
const CLEAN_UP = document.getElementById('clearScores');

highScoresList.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join('');

CLEAN_UP.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
});