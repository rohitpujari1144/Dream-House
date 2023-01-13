const nameInput=document.getElementById('nameInput')
const addressInput=document.getElementById('addressInput')
const professionInput=document.getElementById('professionInput')
const dateInput=document.getElementById('dateInput')
const timeInput=document.getElementById('timeInput')
const datePattern=/^\d{2}\-\d{2}\-\d{4}$/
const timePattern=/^\d{1,2}:\d{2}([ap]m)?$/

const nameError=document.getElementById('nameError')
const addressError=document.getElementById('addressError')
const professionError=document.getElementById('professionError')
const dateError=document.getElementById('dateError')
const timeError=document.getElementById('timeError')

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
            }
    }

function addressValidate()
    {
        if(addressInput.value=="")
            {
                addressError.innerText="*Please enter address"
            }
        else if(addressInput.value.length<10 || (!isNaN(addressInput.value)))
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
        if(professionInput.value=="")
            {
                professionError.innerText="*Please enter profession"
            }
        else if(!isNaN(professionInput.value))
            {
                professionError.innerText="*Numbers not allowed"
            }
        else if(professionInput.value.length<6)
            {
                professionError.innerText="*Please enter profession a valid profession"
            }
        else
            {
                professionError.innerText=""
            }
    }

function dateValidate()
    {
        if(dateInput.value=="")
            {
                dateError.innerText="*Please enter date"
            }
        else
            {
                dateError.innerText=""
            }
    }

function timeValidate()
    {
        if(timeInput.value=="")
            {
                timeError.innerText="*Please enter time"
            }
        else if(timeInput.value.match(timePattern))
            {
                timeError.innerText=""
            }
        else
            {
                timeError.innerText="*Please enter a valid time"
            }
    }



function validateInfo()
    {
        if(nameInput.value=="")
            {
                nameError.innerText="*Please enter name"
            }
        if(addressInput.value=="")
            {
                addressError.innerText="*Please enter address"
            }
        if(professionInput.value=="")
            {
                professionError.innerText="*Please enter profession"
            }
        if(dateInput.value=="")
            {
                dateError.innerText="*Please enter date"
            }
        if(timeInput.value=="")
            {
                timeError.innerText="*Please enter time"
            }
        if(nameError.innerText=="" && addressError.innerText=="" && professionError.innerText=="" && dateError.innerText=="" && timeError.innerText=="")
            {
                alert("Visit booked !")
                nameInput.value=""
                addressInput.value=""
                professionInput.value=""
                dateInput.value=""
                timeInput.value=""
            }
    }