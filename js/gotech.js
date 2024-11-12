var modal = document.getElementById("myModal");
    
function validate() {
    var firstNameInput = document.getElementById("fn");
    var lastNameInput = document.getElementById("ln");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    var opInput = document.getElementById("select");
    
    let checkFirstName = firstNameInput.value=="" || firstNameInput.value==null;
    let checkLastName = lastNameInput.value=="" || lastNameInput.value==null;
    let checkEmail = emailInput.value=="" || emailInput.value==null;
    let checkMessage = messageInput.value=="" || messageInput.value==null;
    let checkSelection = opInput.value == "title";

    if(checkFirstName || checkLastName || checkEmail || checkMessage || checkSelection) {
        modal.style.display = 'block';
        if(checkFirstName) {
            firstNameInput.style.outline = '2px solid rgb(252, 135, 135)';
        }
        if(checkLastName) {
            lastNameInput.style.outline = '2px solid rgb(252, 135, 135)';
        }
        if(checkEmail) {
            emailInput.style.outline = '2px solid rgb(252, 135, 135)';
        }
        if(checkMessage) {
            messageInput.style.outline = '2px solid rgb(252, 135, 135)';
        }
        if(checkSelection) {
            opInput.style.outline = '2px solid rgb(252, 135, 135)';
        }
        window.onclick = function(event) {
            if(event.target == modal) {
                hideModal();
            }
        }
        return false;
    }
    return true;
}
    
function hideModal(){
    modal.style.display = 'none';
}