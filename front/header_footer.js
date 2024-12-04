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
                        <a class="navbar-item" href="buscar-socio.html">Buscar socio</a>
                        <a class="navbar-item" href="crear-prestamo.html">Crear Préstamo</a>
                        <a class="navbar-item" href="libros.html">Libros</a>

                    </div>
                </div>
            
            </nav>
`;

footer.innerHTML=`
        <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                        <strong>Biblioteca DB</strong>
                    </p>
                    <p>
                        Trabajo práctico Introduccion al desarrollo del software
                    </p>
                </div>
        </footer>

`