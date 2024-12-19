
let apiURL
    
if (window.location.protocol === 'file:') {
    apiURL = 'http://localhost:3000'
} else {
    apiURL = 'https://tp2-bd-biblioteca.onrender.com'
}

function crearCartas(){
    fetch(`${apiURL}/libros`)
        .then(response => response.json())
        .then(libros => {
            let cards = document.getElementById('cards_libros')
            cards.innerHTML = ''

            libros.forEach(libro => {
                let card = document.createElement('div')
                card.className = 'card'
                card.style.width = '15rem'

                let enlace = document.createElement('a')
                enlace.href = `libro.html?id=${libro.id}`
                enlace.style.display = 'block'
                enlace.style.height = '100%'
                enlace.style.color = 'inherit'
                enlace.style.textDecoration = 'none'

                let cardImage = document.createElement('div')
                cardImage.className = 'card-image'
        
                let figure = document.createElement('figure')
                figure.className = 'image is-4by2'

                let img = document.createElement('img')
                let imagen =  `https://covers.openlibrary.org/b/isbn/${libro.codigo_isbn}-L.jpg`
                img.src = imagen
                img.alt = 'Placeholder image'    
                img.style.width = 'auto'                    
                let content = document.createElement('div')
                content.className = 'content'
                content.id = 'content_libro'

                let title = document.createElement('p')
                title.className = 'title is-4'
                title.textContent = libro.titulo

                let subtitle = document.createElement('p')
                subtitle.className = 'subtitle is-6'
                subtitle.textContent = libro.autor

                let time = document.createElement('time')
                time.datetime = libro.anio_publicacion
                time.textContent = `fecha de publicación: ${libro.anio_publicacion}`

                figure.appendChild(img)
                cardImage.appendChild(figure)
                enlace.appendChild(cardImage)
                enlace.appendChild(content)
                content.appendChild(title)
                content.appendChild(subtitle)
                content.appendChild(time)
                card.appendChild(enlace)
                cards.appendChild(card)
            })
        })
        
}
crearCartas()