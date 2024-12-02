const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                </div>

                <div class="navbar-menu">
                    <a class="navbar-item has-dropdown" href="#">
                        <img src="https://i.imgur.com/kGfyxfC.png" alt="logout">
                    </a>
                </div>
                <div class="navbar-menu" id="navMenu">
                    <div class="navbar-end">
                        <a class="navbar-item" href="ingresar_usuario.html">Ingresar usuario</a>
                        <a class="navbar-item" href="usuario.html">Usuarios</a>
                        <a class="navbar-item" href="libros.html">Libros</a>

                    </div>
                </div>
            
            </nav>
`;

footer.innerHTML=`
        <div class="content has-text-centered">
            <p>
                <strong>Biblioteca DB</strong>
            </p>
            <p>
                Trabajo práctico Introduccion al desarrollo del software
            </p>
        </div>

`