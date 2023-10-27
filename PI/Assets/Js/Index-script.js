let ver = document.querySelector('#Versenha')


function entrar() {
    // Check if the DOM elements exist
    let usernameInput = document.getElementById('username');
    let senhaInput = document.getElementById('senha');
    let msgaviso = document.getElementById('aviso');

    // Retrieve the stored data from localStorage
    let listaCadas = JSON.parse(localStorage.getItem('listaCadas')) || [];

    let userValid = {
        user: null,
        senha: null
    };

    // Iterate through the stored data to find a match
    listaCadas.forEach((item) => {
        if (usernameInput.value == item.userCad && senhaInput.value == item.senhaCad) {
            userValid = {
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    });

    // Check if a valid user was found
    if (userValid.user !== null && userValid.senha !== null) {
        window.location.href = "../html/Página.html";
    } else {
        // User is not valid, display an error message
        msgaviso.setAttribute('style', 'display: block');
    }
}




ver.addEventListener('click', ()=> {
    let mostrar = document.querySelector('#senha')

    if(mostrar.getAttribute('type') == 'password'){
        mostrar.setAttribute('type', 'text')
    } else {
        mostrar.setAttribute('type', 'password')
    }
})