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

//this is a functio to submit a mail

function sendMail() {
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        message: document.getElementById("message").value,
    };

const serviceId = "service_gz2cxx5";
const templateId = "template_edbs38h";

emailjs
.send(serviceId, templateId, params)
.then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("you message has been sent successfuly"); 
        }
)
.catch((err) => console.log(err));
}
