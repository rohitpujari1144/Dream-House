var nameInput=document.getElementById('nameInput')
var emailInput=document.getElementById('emailInput')
var usernameInput=document.getElementById('usernameInput')
var passwordInput=document.getElementById('passwordInput')
var cpasswordInput=document.getElementById('cpasswordInput')
var otpInput=document.getElementById('otpInput')
var pattern=/^[^]+@[^]+\.[A-zZ]{2,3}$/

var nameError=document.getElementById('nameError')
var emailError=document.getElementById('emailError')
var usernameError=document.getElementById('usernameError')
var passwordError=document.getElementById('passwordError')
var cpasswordError=document.getElementById('cpasswordError')
var otpError=document.getElementById('otpError')

function nameValidate()
    {
        if(nameInput.value=="")
            {
                nameError.innerText="*Please enter name"
            }
        else if((!isNaN(nameInput.value)) || (nameInput.value.length<3))
            {
                nameError.innerText="*Please enter a valid name"
            }
        else
            {
                nameError.innerText=""
                return true
            }
    }

function emailValidate()
    {
        if(emailInput.value=="")
            {
                emailError.innerText="*Please enter email id"
            }
        else if(emailInput.value.match(pattern))
            {
                emailError.innerText=""
            }
        else
            {
                emailError.innerText="*Please enter a valid email id"
            }
    }

function usernameValidate()
    {
        if(usernameInput.value=="")
            {
                usernameError.innerText="*Please enter username"
            }
        else if(!isNaN(usernameInput.value)) // if username containes any numerical value then this error will be displayed
            {
                usernameError.innerText="*Please enter only characters for username"
            }
        else if(usernameInput.value.length<3 || usernameInput.value.length>20)
            {
                usernameError.innerText="*Username length should be between 3 to 20"
            }
        else
            {
                usernameError.innerText=""
                return true
            }
    }

function passwordValidate()
    {
        if(passwordInput.value=="")
            {
                passwordError.innerText="*Please enter password"
            }
        else if(!isNaN(passwordInput.value))
            {
                passwordError.innerText="*Please enter only characters for password"
            }
        else if(passwordInput.value.length<3 || passwordInput.length>20)
            {
                passwordError.innerText="*Password length should be 3 to 20"
            }
        else
            {
                passwordError.innerText=""
                return true
            }
    }

function cPasswordValidate()
    {
        if(cpasswordInput.value=="")
            {
                cpasswordError.innerText="*Please enter password again"
            }
        else if(passwordInput.value!==cpasswordInput.value)
            {
                cpasswordError.innerText="*Please enter a correct password"
            }
        else
            {
                cpasswordError.innerText=""
                return true
            }
    }

function otpValidate()
    {
        if(otpInput.value=="")
            {
                otpError.innerText="*Please enter otp"
            }
        else if(isNaN(otpInput.value))
            {
                otpError.innerText="*Only numbers are allowed"
            }
        else if(otpInput.value.length<4)
            {
                otpError.innerText="*Please enter a valid otp"
            }
        else
            {
                otpError.innerText=""
                return true
            }
    }


function inputValidation()
    {
        if(nameInput.value=="")
            {
                nameError.innerText="*Please enter name"

                if(emailInput.value=="")
                    {
                        emailError.innerText="*Please enter email id"

                        if(usernameInput.value=="")
                            {
                                usernameError.innerText="*Please enter username"
                        
                                if(passwordInput.value=="")
                                    {
                                        passwordError.innerText="*Please enter password"
                            
                                        if(cpasswordInput.value=="")
                                            {
                                                cpasswordError.innerText="*Please enter password again"
                
                                                if(otpInput.value=="")
                                                    {
                                                        otpError.innerText="*Please enter otp"
                                                        return false
                                                    }
                                                return false
                                            }
                                        return false
                                    }
                                return false
                            }
                        return false
                    }
            return false  
            }

            else{
                 const userSignupData={
                        name:nameInput.value,
                        username:usernameInput.value,
                        email:emailInput.value,
                        password:passwordInput.value,
                    }
            
                    fetch('https://63c96d9f320a0c4c954880bf.mockapi.io/users',{ // 17040@jjmcoe.ac.in
                        method: 'POST', 
                        headers: {'Content-Type': 'application/json',},
                        body: JSON.stringify(userSignupData),
                    })
                        .then((response) => response.json())
                        .then((userSignupData) => {
                            console.log('Success : ', userSignupData);
                        })
                        .catch((error) => {
                            console.error('Error : ', error);
                        });
            
                    alert("Registration successful !!")
                    nameInput.value=''
                    emailInput.value=''
                    usernameInput.value=''
                    passwordInput.value=''
                    cpasswordInput.value=''
                
            }
    }

function generateOtp()
    {
        alert("OTP has been sent to your Email Id")
    }