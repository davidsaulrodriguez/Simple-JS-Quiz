/*
 * App Name: Simple JS Quiz
 * Author: David Saul Rodriguez II
 * Copyright: Copyright 2020 David Rodriguez <david@bsdadm.com>
 * License: BSD-2-Clause
 */

// DOM Selectors
const continueButton = document.getElementById('start-quiz-btn');
const startButton = document.getElementById('start-btn');
const quitButton = document.getElementById('quit-btn');
const infoBox = document.querySelector('.info-box');
const quizBox = document.getElementById('quiz-box');
const Next = document.getElementById('Next');

// Event Listeners

startButton.addEventListener('click', function() {
    infoBox.style.display = "block";
});

quitButton.addEventListener('click', function() {
    infoBox.style.display = "none";
});

continueButton.addEventListener('click', function() {
    startButton.style.display = "none";
    infoBox.style.display = "none";
    quizBox.style.display = "block";
});

Next.addEventListener('click', function(e) {
    e.preventDefault();
});