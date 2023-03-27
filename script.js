const form = document.querySelector('.form');
const email = document.getElementById("email");
const label = document.querySelector('label');
const error = document.querySelector('.error');
const formP = document.querySelector('.form p');


form.addEventListener("submit", event => {
  event.preventDefault();
  const emailValid = email.value; 

  if(!validateEmail(emailValid)) {
    
     label.classList.add("active");
     error.classList.add("active");
    
  }
  else {
    error.classList.add("active");
    error.innerText = "Email sent!"
    label.classList.remove("active");
  }
})

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase());
}