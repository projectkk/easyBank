console.log('Hello World!');

const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){
        console.log('closing fade-out')

        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){ // runs through every element that has the .has-fade helper class
            element.classList.remove('fade-in'); 
            element.classList.add('fade-out');
          });
    }
    else{
        console.log('opening fade in')
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){ 
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
          });
    }
});







