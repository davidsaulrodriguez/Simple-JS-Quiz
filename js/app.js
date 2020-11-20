/*
 * App Name: Simple JS Quiz
 * Author: David Saul Rodriguez II
 * Copyright: Copyright 2020 David Rodriguez <david@bsdadm.com>
 * License: BSD-2-Clause
 */

// The DOM Selectors for Views
const HIGH_SCORES_VIEW = document.getElementById('highScoresView');
const GAME_OVER = document.getElementById('gameOver');
const RULES = document.getElementById('rules');
const QUIZ = document.getElementById('quiz');

// The DOM Selectors for buttons and links
const HIGH_SCORES_BTN = document.getElementById('highScores');
const CONTINUE_ON = document.getElementById('continueOn');
const PLAY_AGAIN = document.getElementById('playAgain');
const CLEAN_UP = document.getElementById('clearScores');
const START_BTN = document.getElementById('startGame');
const EXIT = document.getElementById('exit');

// The DOM Selectors for the quiz itself
const THE_QUESTION = document.getElementById('theQuestion');
const ANSWER_CONTENT = Array.from(document.getElementsByClassName('answerContent'));

// Set some default variables
let currentQuestion = {}
let isAcceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Some constants for the game's functionality
const MAX_QUESTIONS = 10;

// Functions for the game

function startQuiz() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [... questions];
    getNewQuestion();
}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return gameOver();
    }
    questionCounter++;
    const QUESTION_INDEX = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[QUESTION_INDEX];
    THE_QUESTION.innerText = currentQuestion.question;

    ANSWER_CONTENT.forEach( answer => {
        const NUMBER = answer.dataset['number'];
        answer.innerText = currentQuestion['option' + NUMBER]
    });

    availableQuestions.splice(QUESTION_INDEX, 1);

    isAcceptingAnswers = true;
}

ANSWER_CONTENT.forEach( answer => {
    answer.addEventListener('click', (e) => {
        if (!isAcceptingAnswers) return;

        isAcceptingAnswers = false;
        const SELECTED_OPTION = e.target;
        const SELECTED_ANSWER = SELECTED_OPTION.dataset['number'];

        getNewQuestion();
    });
});

function gameOver() {
    QUIZ.style.display = 'none';
    GAME_OVER.style.display = 'block';
}

// Event Listeners

START_BTN.addEventListener('click', () => {
    START_BTN.style.display = 'none';
    RULES.style.display = 'block';
});

CONTINUE_ON.addEventListener('click', () => {
    RULES.style.display = 'none';
    QUIZ.style.display = 'block';
});

EXIT.addEventListener('click', () => {
    RULES.style.display = 'none';
    START_BTN.style.display = 'block';
});

HIGH_SCORES_BTN.addEventListener('click', () => {
    START_BTN.style.display = 'none';
    RULES.style.display = 'none';
    QUIZ.style.display = 'none';
    HIGH_SCORES_VIEW.style.display = 'block';
});

CLEAN_UP.addEventListener('click', () => {
    localStorage.clear();
});

PLAY_AGAIN.addEventListener('click', () => {
    window.location.reload();   
});

startQuiz();
