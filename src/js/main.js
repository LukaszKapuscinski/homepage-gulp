
import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))




const welcome = (name, age) => {
    console.log( `Witaj ${name}, masz ${age} lat`);
}

const myName = 'Lukasz';
const myAge = 31;

welcome(myName, myAge);
welcome('Lukasz',31);


const button = document.querySelector('.footer__button--js');
console.log(button);



button.addEventListener('click', (e)=>{
const header = document.querySelector('.footer__title--js');
header.innerHTML ='klik, klik';
header.classList.toggle('footer__title--red');
});