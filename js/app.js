/*
 * App Name: Simple JS Quiz
 * Author: David Saul Rodriguez II
 * Copyright: Copyright 2020 David Rodriguez <david@bsdadm.com>
 * License: BSD-2-Clause
 */

// DOM Selectors
const highScoresView = document.getElementById('highScoresView');
const highScores = document.getElementById('highScores');
const continueOn = document.getElementById('continueOn');
const cleanUp = document.getElementById('clearScores');
const startBtn = document.getElementById('startGame');
const rules = document.getElementById('rules');
const exit = document.getElementById('exit');
const quiz = document.getElementById('quiz');

// Event Listeners

startBtn.addEventListener('click', function() {
    startBtn.style.display = 'none';
    rules.style.display = 'block';
});

continueOn.addEventListener('click', function() {
    rules.style.display = 'none';
    quiz.style.display = 'block';
});

exit.addEventListener('click', function() {
    rules.style.display = 'none';
    startBtn.style.display = 'block';
});

highScores.addEventListener('click', function() {
    startBtn.style.display = 'none';
    rules.style.display = 'none';
    quiz.style.display = 'none';
    highScoresView.style.display = 'block';
});

cleanUp.addEventListener('click', function() {
    localStorage.clear();
});
