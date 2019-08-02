
import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))




const welcome = (name, age) => {
    console.log( `Witaj ${name}, masz ${age} lat`);
}

const myName = 'Lukasz';
const myAge = 31;

welcome(myName, myAge);
welcome('Lukasz',31);



// footer
const button = document.querySelector('.footer__button--js');
console.log(button);



button.addEventListener('click', (e)=>{
const header = document.querySelector('.footer__title--js');
console.log(header);
header.innerHTML ='klik, klik';
header.classList.toggle('footer__title--red');
});

//menu

const navigationSwitcher = document.querySelector('.navigation__switcher--js');
console.log(navigationSwitcher);
navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    console.log(navigationList);
    navigationList.classList.toggle('navigation__list--visible');
});