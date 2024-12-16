const header = document.querySelector("header");
const footer = document.querySelector(".footer");

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
                    <a class="navbar-item p-2 ml-1" href="libros.html">
                        <img src="https://i.imgur.com/kGfyxfC.png" alt="logout">
                    </a>
                </div>
                <div class="navbar-menu" id="navMenu">
                    <div class="navbar-end">
                        <a class="navbar-item" href="inicio.html">Inicio</a>
                        <a class="navbar-item" href="inicio-sesion.html">Iniciar Sesión</a>

                    </div>
                </div>
            
            </nav>
`;

footer.innerHTML=`
        <div class="content has-text-centered" >
            <p>
            <strong>Biblioteca DB</strong>
            </p>
            <p>
            Trabajo práctico Introduccion al desarrollo del software
            </p>
        </div>
`
//Logica para el burger menu

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

    });
    });

    });