const screenOne = document.querySelector('.screen-one');
const screenTwo = document.querySelector('.screen-two');
const cookie = document.querySelector('#closed-cookie');
const phrase = document.querySelector('#phrase');
const button = document.querySelector('#toggle-button');
const encouragingPhrases = [
    'A vida trará coisas boas se tiveres paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Gente todo dia arruma os cabelos, por que não o coração?',
];

cookie.addEventListener('click', randomizePhrase);
button.addEventListener('click', toggleScreen);

function randomizePhrase() {
    phrase.innerHTML = encouragingPhrases[Math.round(Math.random() * 6)]
    toggleScreen()
}

function toggleScreen() {
    screenOne.classList.toggle('hide')
    screenTwo.classList.toggle('hide')
}