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

// const navigationSwitcher = document.querySelector('.navigation__switcher--js');
// const navigationList = document.querySelector('.navigation__list--js');
// console.log(navigationSwitcher);
// console.log(navigationList);
// navigationSwitcher.addEventListener('click', (e)=>{
//     navigationList.classList.toggle('navigation__list--visible');
// }); 


//menu kopia od Maciek Korsan
const navigationSwitcher = document.querySelector('.navigation__switcher--js')

navigationSwitcher.addEventListener('click', (e) => {
  const navigationList = document.querySelector('.navigation__list--js');
  navigationList.classList.toggle('navigation__list--visible');
  
});

// przechowywanie danych

const person = {
  name: 'Lukasz',
  age : '31'
}

localStorage.setItem('name', 'maciek');
console.log(person);
const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);
localStorage.setItem('person', jsonPerson);
const personStringify = localStorage.getItem('person');
const newPerson = JSON.parse(personStringify);
console.log(newPerson);