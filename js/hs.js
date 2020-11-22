/*
 * App Name: Simple JS Quiz
 * Author: David Saul Rodriguez II
 * Copyright: Copyright 2020 David Rodriguez <david@bsdadm.com>
 * License: BSD-2-Clause
 */

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