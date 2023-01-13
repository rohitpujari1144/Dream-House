const data=
    {
        uname:"user",
        pwd:"user"
    }

var usernameInput=document.getElementById('usernameInput')
var passwordInput=document.getElementById('passwordInput')
var usernameError=document.getElementById('usernameError')
var passwordError=document.getElementById('passwordError')

var getLocalUsername=localStorage.getItem('username')
var getLocalPassword=localStorage.getItem('password')

function usernameValidate()
    {
        if(usernameInput.value=="")
            {
                usernameError.innerText="*Please enter username"
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
        else if(usernameInput.value===getLocalUsername)
            {
                usernameError.innerText=""

                if(passwordInput.value=="")
                    {
                        passwordError.innerText="*Please enter password"
                        return false
                    }

                else if(passwordInput.value!==getLocalPassword)
                    {
                        passwordError.innerText="*Incorrect password"
                        return false
                    }

                else if(passwordInput.value==getLocalPassword)
                    {
                        passwordError.innerText=""
                        alert("Login successful")
                        return true
                    }
                    return true
            }
        
        else if(usernameInput.value!==getLocalUsername)
            {
                usernameError.innerText="*Incorrect username"
                return false
            }
    }


