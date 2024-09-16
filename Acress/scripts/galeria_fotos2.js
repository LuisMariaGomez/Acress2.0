document.addEventListener('DOMContentLoaded', function(){
    let imagenes = [
        {img:'./imagenes/img_duplex/duplex-01.jpg'},
        {img:'./imagenes/img_duplex/duplex-02.jpg'},
        {img:'./imagenes/img_duplex/duplex-03.jpg'},
        {img:'./imagenes/img_duplex/duplex-04.jpg'},
        {img:'./imagenes/img_duplex/duplex-05.jpg'},
        /*{img:'./imagenes/img_duplex/duplex-01.jpg'},*/
        /*{img:'./imagenes/img_duplex/duplex-01.jpg'},*/
        /*{img:'./imagenes/img_duplex/duplex-01.jpg'},*/
        /*{img:'./imagenes/img_duplex/duplex-01.jpg'}*/
    ]
    let contador = 0
    const contenedor = document.querySelector('.slideshow2');
    const overlay = document.querySelector('.overlay2');
    const galeria_imagenes = document.querySelectorAll('.galeria2 img');
    const img_slideshows = document.querySelector('.slideshow2 img');


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

    var span = document.getElementsByClassName("btn_cerrar2")[0];
    span.onclick = function() {
        overlay.style.visibility = "hidden";
    }
})