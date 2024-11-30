const buttonSubscribe = document.getElementById("btn-subscribe")
const buttonDismiss = document.getElementById("btn-dismiss")
const initialCard = document.querySelector(".card")
const confirmationCard = document.querySelector(".confirmation-card")
const emailInput = document.getElementById("email")
const confirmationEmail = document.getElementById("confirmationEmail")

// Error Text
const errorText = document.createElement("p")
const label = document.getElementById("label")

// Error Text Style
errorText.innerText = "Valid email required"
errorText.style.fontSize = "0.75rem"
errorText.style.fontWeight = "700"
errorText.style.color = "hsl(4, 100%, 67%)"



function showInitialCard(){
    confirmationCard.style.display = "none";
    initialCard.style.display = "flex";
}

function showConfirmationCard(){
    confirmationCard.style.display = "flex";
    initialCard.style.display = "none";
    
    confirmationEmail.innerText = emailInput.value + ". "
}

function showError(){
    label.appendChild(errorText)
    emailInput.style.color = "hsl(4, 100%, 67%)"
    emailInput.style.backgroundColor = "hsl(4, 100%, 67%, 0.15)"
    emailInput.style.borderColor = "hsl(4, 100%, 67%)"
}

function removeError(){
    label.removeChild(errorText)
    emailInput.style.color = ""
    emailInput.style.backgroundColor = ""
    emailInput.style.borderColor = ""
}

buttonSubscribe.addEventListener("click", ()=>{
    if((emailInput.value.length == 0 || emailInput.value.length <= 7) || (!emailInput.value.includes("@") || !emailInput.value.includes("."))){
        showError()
    }else{
        if(label.contains(errorText)){
            removeError()
        }
        showConfirmationCard()
        emailInput.value = ""
    }
})

buttonDismiss.addEventListener("click", ()=>{
    showInitialCard()
})



