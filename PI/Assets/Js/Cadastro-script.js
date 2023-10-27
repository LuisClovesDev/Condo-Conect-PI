let user = document.querySelector('#username')
let validuser = false

let email = document.querySelector('#email')
let validemail = false

let ver = document.querySelector('#Versenha')
let senha = document.querySelector('#Senha')


let verconf = document.querySelector('#Verconfsenha')
let confsenha = document.querySelector('#ConfSenha')
let labelconfsenha = document.querySelector('#labelconfsenha')
let validconfsenha = false

let tel = document.querySelector('#Telefone')
let labeltel = document.querySelector('#labeltelefone')
let validtel = false

let msgaviso = document.querySelector('#aviso')


function Cadastrar () {
    if (validconfsenha && validemail && validtel && validuser) {
    let listaCadas = JSON.parse(localStorage.getItem('listaCadas') || '[]')

    listaCadas.push(
    { 
        userCad: user.value,
        emailCad: email.value,
        senhaCad: senha.value,
        telCad: tel.value
    }
    )

    localStorage.setItem('listaCadas', JSON.stringify(listaCadas))

    setTimeout(() => {
        window.location.href = "../html/Index.html";
    }, 2000);

    }else{
        msgaviso.setAttribute('style', 'display: block')
    };
};

function Checkemail (email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
};


confsenha.addEventListener('keyup', () => {
    if(senha.value != confsenha.value) {
        labelconfsenha.setAttribute('style', 'color: red')
        labelconfsenha.innerHTML = '*As Senhas Não Conferem!'
        validconfsenha = false
    } else {
        labelconfsenha.innerHTML = ''
        validconfsenha = true
    }
});

user.addEventListener('keyup', () => {
    if(user.value.length <=2) {
        user.setAttribute('style', 'color: red')
        validuser = false
    } else {
        user.setAttribute('style', 'color: green' )
        validuser = true
    }
});

email.addEventListener('keyup', () => {
    if(Checkemail(email.value) !== true) {
        email.setAttribute('style', 'color: red')
        validemail = false
    } else{
        email.setAttribute('style', 'color: green')
        validemail = true
    }
});

tel.addEventListener('keyup', () => {
    if(tel.value.length <= 10){
        tel.setAttribute('style', 'color: red')
        labeltel.setAttribute('style', 'color: red')
        labeltel.innerHTML = '*Faltam Números!'
        validtel = false
    } else {
        tel.setAttribute('style', 'color: green')
        labeltel.innerHTML = ''
        validtel = true
    }
});

ver.addEventListener('click', ()=> {
    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text')
    } else {
        senha.setAttribute('type', 'password')
    }
});

verconf.addEventListener('click', ()=> {
    if(confsenha.getAttribute('type') == 'password'){
        confsenha.setAttribute('type', 'text')
    } else {
        confsenha.setAttribute('type', 'password')
    }
});

