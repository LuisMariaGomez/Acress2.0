document.addEventListener('DOMContentLoaded', function(){
    let imagenes = [
        {img:'./imagenes/img_galeria/01. DPTO 1 copia.jpg'},
        {img:'./imagenes/img_galeria/02. DPTO 2 copia.jpg'},
        {img:'./imagenes/img_galeria/03. DPTO 3 copia.jpg'},
        {img:'./imagenes/img_galeria/04. EXTERIOR 1 copia.jpg'},
        {img:'./imagenes/img_galeria/05. EXTERIOR 2 copia.jpg'},
        {img:'./imagenes/img_galeria/06. EXTERIOR 3 copia.jpg'},
        {img:'./imagenes/img_galeria/07. OFICINA 1 copia.jpg'},
        {img:'./imagenes/img_galeria/08. OFICINA 2 copia.jpg'},
        /*{img:'./imagenes/img_galeria/08. OFICINA 2 copia.jpg'}*/
    ]
    let contador = 0
    const contenedor = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const galeria_imagenes = document.querySelectorAll('.galeria img');
    const img_slideshows = document.querySelector('.slideshow img');


    contenedor.addEventListener('click', function(event) {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }

    })
    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +(event.target.dataset.imgMostrar)
            img_slideshows.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    var span = document.getElementsByClassName("btn_cerrar")[0];
    span.onclick = function() {
        overlay.style.visibility = "hidden";
    }
})