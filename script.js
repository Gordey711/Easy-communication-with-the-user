'use strict';

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt('Вам есть 18?', '18');
// // console.log(typeof(answer));  Вся информация полученная от пользователя будет ввиде строк, независимо, как мы её получили.
// console.log(answer + 5);

// const answer = +prompt('Вам есть 18?', '18');
// console.log(answer + 5);


const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Ваша фамилия?', '');
answers[2] = prompt('Ваше отчество?', '');
answers[4] = prompt('Ваш возраст?', '');
answers[5] = prompt('Откуда вы?', '');

console.log(typeof(answers));
// console.log(typeof(null));