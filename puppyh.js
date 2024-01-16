//controls the opening and closing of the header file
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

//accest site permitiion
let policydiv = document.getElementById('accept-policy1');
let iaccept = document.getElementById('iacceptdiv');

if(iaccept) {
    iaccept.addEventListener('click', () => {
        policydiv.classList.add('active');  
    })
}

//error massage if u dont accepst our policies
let errormassage = document.getElementById('cantaccess');
let idontaccept = document.getElementById('idont-accept');

if(idontaccept) {
    idontaccept.addEventListener('click', () => {
        errormassage.innerText = 'sorry your cant access this site!'
    })
}

//thsi line of code runs for the hours 

const buttonclicked = document.getElementById('hoursbutton')
const hoursdiv = document.getElementById('close-hours')

if(buttonclicked) {
    buttonclicked.addEventListener('click', () => {
        hoursdiv.classList.add('active'); 
    })
}