 // Função para verificar se o cookie de consentimento existe
 function getCookie(name) {
    let cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Função para definir o cookie
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Verifica se o usuário já deu consentimento
if (!getCookie("user-consent")) {
    document.getElementById("cookie-consent").style.display = "block";
}

// Ação ao clicar no botão "Aceitar"
document.getElementById("accept-cookie").onclick = function() {
    setCookie("user-consent", "true", 30); // Armazena o consentimento por 30 dias
    document.getElementById("cookie-consent").style.display = "none"; // Fecha o pop-up
}