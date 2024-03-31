const form = document.getElementById('form');
const email = document.getElementById('email');
const pass = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');

form.addEventListener('submit', doEvent => {
    doEvent.preventDefault();

    valiDataInput();
});


const setError = (element, message) => {
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector('.error');
    errorDisplay.textContent = message;
};

const succ = (element) => {
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector('.error');
};


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const valiDataInput = () =>{
    const emailVlaue = email.value.trim();
    const passValue = pass.value.trim();
    const pass2Value = pass2.value.trim();

    if(emailVlaue === ''){
        setError(email,"You must enter an email")
    }

    else if(!validateEmail(email)){
        setError(email,"Email is invalid")
    }

    else{
        succ(email)
    }

    if(passValue === ''){
        setError(pass,"You must enter a password")
    }

    else if(passValue.length < 8){
        setError(pass,"The password must be longer than 8 characters")
    }

    else{
        succ(pass)
    }

    if(pass2Value === ''){
        setError(pass2,"You must enter a password")
    }

    else if(pass2Value !== passValue){
        setError(pass2,"Passwords must match")
    }

    else{
        succ(pass2)
    }
   
}