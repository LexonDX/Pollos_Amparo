let vista = new Vista();

window.onload = function() {
    vista.displayTemplate("paginaPrincipal", "containerPA")
    mostrarInicio();
}

function mostrarInicio() {
    vista.displayTemplate("paginaPrincipal", "containerPA")
}

function pagPrincipal() {
    vista.displayTemplate("paginaPrincipal", "containerPA")
}


function pagPrincipalLogin() {
    let data = vista.getForm("formLogin")
    if (data.ok) {
        vista.displayTemplate("paginaPrincipal", "containerPA")
    }
}

function signIn() {
    vista.displayTemplate("login", "containerPA")
}

function catalogo() {
    vista.displayTemplate("catalogo", "containerPA")
}

function carrito() {
    vista.displayTemplate("carrito", "containerPA")
}

function locales() {
    vista.displayTemplate("locales", "containerPA")
}

function registro() {
    vista.displayTemplate("registro", "containerPA")
}

function registroLogin() {
    let data = vista.getForm("formRegistro")
    if (data.ok) {
        vista.displayTemplate("login", "containerPA")
    }
}

function recContra() {
    vista.displayTemplate("recuperarContraseña", "containerPA")
}


function formRecContra() {
    let data = vista.getForm("formRecContra")
    if (data.ok) {
        vista.displayTemplate("recuperarContraseñaToken", "containerPA")
    }
}

function recContraToken() {
    let data = vista.getForm("recContraToken")
    if (data.ok) {
        vista.displayTemplate("nuevaContraseña", "containerPA")
    }
}

function nuevaContraseña() {
    let data = vista.getForm("formNuevaContra")
    if (data.ok) {
        vista.displayTemplate("login", "containerPA")
    }
}


function calificacion() {
    vista.displayTemplate("calificacion", "containerPA")
}

function favoritos() {
    vista.displayTemplate("favoritos", "containerPA")
}

function pedidos() {
    vista.displayTemplate("pedidos", "containerPA")
}

// Ocultar validacion predeterminada

document.addEventListener("invalid", function(event) {
    event.preventDefault();
}, true);

module.exports = {
    vista: vista,
    mostrarInicio,
    pagPrincipal,
    pagPrincipalLogin,
    signIn,
    catalogo,
    carrito,
    locales,
    registro,
    registroLogin,
    recContra,
    formRecContra,
    recContraToken,
    nuevaContraseña,
    calificacion,
    favoritos,
    pedidos
}