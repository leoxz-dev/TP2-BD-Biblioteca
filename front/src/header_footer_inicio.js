const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu">
            <a class="navbar-item p-2 ml-1" href="#">
                <img src="https://i.imgur.com/kGfyxfC.png" alt="logout">
            </a>
        </div>
        <div class="navbar-menu" id="navMenu">
            <div class="navbar-end" id="navbar-links">
                <!-- Links que se modificarán dinámicamente -->
                <a class="navbar-item" href="Inicio.html">Inicio</a>
                <a class="navbar-item" href="inicio-sesion.html" id="login-link">Iniciar Sesión</a>
                <a class="navbar-item" href="perfil.html" id="perfil-link" >Perfil</a>
                <a class="navbar-item" href="#" id="cerrar-sesion-link">Cerrar Sesión</a>
            </div>
        </div>
    </nav>
`;

footer.innerHTML = `
    <div class="content has-text-centered" >
        <p>
        <strong>Biblioteca DB</strong>
        </p>
        <p>
        Trabajo práctico Introducción al desarrollo del software
        </p>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Verificar si el usuario está logueado
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuarioLogueado'));
    // Si el usuario está logueado, actualizar los enlaces
    if (usuarioLogueado) {
        const SocioId = usuarioLogueado.id;
        // Cambiar el enlace de perfil a incluir el SocioId
        const perfilLink = document.getElementById('perfil-link');
        perfilLink.href = `perfil.html?id=${SocioId}`;

        // Mostrar el enlace "Perfil" y ocultar "Iniciar sesión"
        document.getElementById('login-link').style.display = 'none';
        document.getElementById('perfil-link').style.display = 'flex';
        document.getElementById('cerrar-sesion-link').style.display = 'flex';
    } else{
        document.getElementById('login-link').style.display = 'flex';
        document.getElementById('perfil-link').style.display = 'none';
        document.getElementById('cerrar-sesion-link').style.display = 'none';
    }

    // Lógica del menú burger
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });

    document.getElementById('cerrar-sesion-link').addEventListener('click', function(event) {
        event.preventDefault();

        //ELIMINA LA INFO DE sessionStorage PARA QUE AL CARGAR LA PAGINA SE CAMBIE EL NAV BAR
        sessionStorage.removeItem('usuarioLogueado');
        // Actualizar los enlaces del navbar
        document.getElementById('perfil-link').style.display = 'none';
        document.getElementById('cerrar-sesion-link').style.display = 'none';
        document.getElementById('login-link').style.display = 'flex';
    });
});
