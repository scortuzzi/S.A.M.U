// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var nick = sessionStorage.NICK_USUARIO;

    var n_usuario = document.getElementById("nomeUsuario_span");

    if (email != null && nome != null) {
        n_usuario.innerHTML = nick;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

function aguardar() {
    console.log('próximo')
}
