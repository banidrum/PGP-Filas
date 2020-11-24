countErrors = 0;
function formValidation(event){
    event.preventDefault();

    let nome = document.getElementById('nome').value;

    let error = document.getElementById("msg-nome");
    if((nome === "") || typeof nome === 'undefined')
        showError(error, "O nome do usuário é obligatório!");
    else
        hideError(error);

   let matricula = document.getElementById('matricula').value;
    error = document.getElementById("msg-matricula");
    if((matricula === "") || typeof matricula === 'undefined')
        showError(error, "O número da matrícula é obligatório!");
    else
        hideError(error);

    let email = document.getElementById('email').value;
    error = document.getElementById("msg-email")
    if((email === "") || typeof email === 'undefined')
        showError(error, "O endereço de email é obrigatório!");
    else if (email.indexOf("@") === -1)
        showError(error, "Entre um endereço de email válido!");
    else
        hideError(error);

    let data = document.getElementById('data').value;
    error = document.getElementById("msg-data");
    if((data === "") || typeof data === 'undefined')
        showError(error, "A data de agendamento é obrigatório!");
    else
        hideError(error);

    if(countErrors > 0){
        countErrors = 0;
        return false;
    }
    return true;
}


function showError(idError, message){
    idError.style.display = "block";
    idError.innerHTML = message;
    countErrors++;
}

function hideError(idError){
    idError.style.display = "none";
}