const data=
    {
        uname:"user",
        pwd:"user"
    }

var usernameInput=document.getElementById('usernameInput')
var passwordInput=document.getElementById('passwordInput')
var usernameError=document.getElementById('usernameError')
var passwordError=document.getElementById('passwordError')

function usernameValidate()
    {
        if(usernameInput.value=="")
            {
                usernameError.innerText="*Please enter username"
                return false
            }
        else
            {
                usernameError.innerText=""
            }
    }

function passwordValidate()
    {
        if(passwordInput.value=="")
            {
                passwordError.innerText="*Please enter password"
                return false
            }
        else
            {
                passwordError.innerText="" 
            }
    }


function inputValidation()
    {
        // validation for username
        if(usernameInput.value=="")
            {
                usernameError.innerText="*Please enter username"
                return false
            }
        else if(!isNaN(usernameInput.value))
            {
                usernameError.innerText="*Please enter a valid username"
                return false
            }
        else if(usernameInput.value==data.uname)
            {
                usernameError.innerText=""

                if(passwordInput.value=="")
                    {
                        passwordError.innerText="*Please enter password"
                        return false
                    }

                else if(!isNaN(passwordInput.value))
                    { 
                        passwordError.innerText="*Please enter a valid password"
                        return false
                    }

                else if(passwordInput.value!=data.pwd)
                    {
                        passwordError.innerText="*Incorrect password"
                        return false
                    }

                else if(passwordInput.value===data.pwd)
                    {
                        passwordError.innerText=""
                        alert("Login successful")
                        return true
                    }
                return true
            }
        
        else if(usernameInput.value!=data.uname)
            {
                usernameError.innerText="*Incorrect username"
                return false
            }
    }