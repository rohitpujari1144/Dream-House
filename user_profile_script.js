const uName=document.getElementById('name')
const emailID=document.getElementById('emailID')
const address=document.getElementById('address')
const profession=document.getElementById('profession')
const mobileNo=document.getElementById('mobileNo')
const message=document.getElementById('message')
const emailPattern=/^[^]+@[^]+\.[A-zZ]{2,3}$/

const uNameError=document.getElementById('uNameError')
const emailIDError=document.getElementById('emailIDError')
const addressError=document.getElementById('addressError')
const professionError=document.getElementById('professionError')
const mobileNoError=document.getElementById('mobileNoError')
const submitButton=document.getElementById('submitButton')

uName.value=localStorage.getItem('name')
emailID.value=localStorage.getItem('email')
address.value=localStorage.getItem('address')
profession.value=localStorage.getItem('profession')
mobileNo.value=localStorage.getItem('mobile')


function uNameValidate()
    {
        if(uName.value=="")
            {
                uNameError.innerText="*Please enter name"
            }
        else if((!isNaN(uName.value)) || (uName.value.length<3))
            {
                uNameError.innerText="*Please enter a valid name"
            }
        else
            {
                uNameError.innerText=""
            }
    }

function emailIDValidate()
    {
        if(emailID.value=="")
            {
                emailIDError.innerText="*Please enter email ID"
            }
        else if(emailID.value.match(emailPattern))
            {
                emailIDError.innerText=""
            }
        else
            {
                emailIDError.innerText="*Please enter a valid email id"
            }
    }

function addressValidate()
    {
        if(address.value=="")
            {
                addressError.innerText="*Please enter address"
            }
        else if(address.value.length<10 || (!isNaN(address.value)))
            {
                addressError.innerText="*Please enter a valid address"
            }
        else
            {
                addressError.innerText=""
            }
    }

function professionValidate()
    {
        if(profession.value=="")
            {
                professionError.innerText="*Please enter profession"
            }
        else if(!isNaN(profession.value))
            {
                professionError.innerText="*Numbers not allowed"
            }
        else if(profession.value.length<6)
            {
                professionError.innerText="*Please enter a valid profession"
            }
        
        else
            {
                professionError.innerText=""
            }
    }

function mobileNoValidate()
    {
        if(mobileNo.value=="")
            {
                mobileNoError.innerText="*Please enter mobile number"
            }
        else if(isNaN(mobileNo.value))
            {
                mobileNoError.innerText="*Please enter only numbers"
            }
        else if(mobileNo.value.length<10)
            {
                mobileNoError.innerText="*Please enter a valid mobile number"
            }
        else if(mobileNo.value.length>10)
            {
                mobileNoError.innerText="*Please enter a valid mobile number"
            }
        else
            {
                mobileNoError.innerText=""
            }
    }

function sumbitInfo()
    {
        if(uName.value=="")
            {
                uNameError.innerText="*Please enter name"
            }
        else
            {
                uNameError.innerText=""
            }
        if(emailID.value=="")
            {
                emailIDError.innerText="*Please enter email ID"
            }
        else
            {
                emailIDError.innerText=""
            }
        if(address.value=="")
            {
                addressError.innerText="*Please enter address"
            }
        else
            {
                addressError.innerText=""
            }
        if(profession.value=="")
            {
                professionError.innerText="*Please enter profession"
            }
        else
            {
                professionError.innerText=""
            }
        if(mobileNo.value=="")
            {
                mobileNoError.innerText="*Please enter mobile number"
            }
        else
            {
                mobileNoError.innerText=""
            }
        if(uNameError.innerText=="" && addressError.innerText=="" && professionError.innerText=="" && mobileNoError.innerText=="")
            {
                localStorage.setItem('name', uName.value)
                localStorage.setItem('address', address.value)
                localStorage.setItem('profession', profession.value)
                localStorage.setItem('mobile', mobileNo.value)
                alert("Information successfully submitted !")
                uName.setAttribute("readonly", "true")
                address.setAttribute("readonly", "true")
                profession.setAttribute("readonly", "true")
                mobileNo.setAttribute("readonly", "true")
                submitButton.setAttribute("disabled", "true")
            }
    }

function editInfo()
    {
        // console.log("Info edited")
        submitButton.removeAttribute("disabled")
        uName.removeAttribute("readonly")
        address.removeAttribute("readonly")
        profession.removeAttribute("readonly")
        mobileNo.removeAttribute("readonly")
    }