/* Sidebar */

const sidebar = document.querySelector('#sidebar');
const sidebarToggler = document.querySelector('.sidebar_toggler');


// muestra el sidebar
sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});


// Cerrar el Sidebar tocando fuera del mismo
window.addEventListener('click', (e) => {
    if (e.target.id !== 'sidebar' && e.target.className !== 'sidebar_toggler') {
        sidebar.classList.remove('show');
    }
});


/* mostrar - ocultar galerias */

function mostrar_galeria_charpenterie(){
    document.getElementById('galeria_iamgenes').style.display = 'block';
    document.getElementById('ocultar_galeria_charpenterie').style.display = 'block';
    document.getElementById('mostrar_galeria_charpenterie').style.display = 'none';
}
function ocultar_galeria_charpenterie(){
    document.getElementById('galeria_iamgenes').style.display = 'none';
    document.getElementById('ocultar_galeria_charpenterie').style.display = 'none';
    document.getElementById('mostrar_galeria_charpenterie').style.display = 'block';
}

function mostrar_galeria_duplex(){
    document.getElementById('galeria_iamgenes2').style.display = 'block';
    document.getElementById('ocultar_galeria_2').style.display = 'block';
    document.getElementById('mostrar_galeria_2').style.display = 'none';
}
function ocultar_galeria_duplex(){
    document.getElementById('galeria_iamgenes2').style.display = 'none';
    document.getElementById('ocultar_galeria_2').style.display = 'none';
    document.getElementById('mostrar_galeria_2').style.display = 'block';
}

function mostrar_galeria_casa(){
    document.getElementById('galeria_iamgenes3').style.display = 'block';
    document.getElementById('ocultar_galeria_3').style.display = 'block';
    document.getElementById('mostrar_galeria_3').style.display = 'none';
}
function ocultar_galeria_casa(){
    document.getElementById('galeria_iamgenes3').style.display = 'none';
    document.getElementById('ocultar_galeria_3').style.display = 'none';
    document.getElementById('mostrar_galeria_3').style.display = 'block';
}

/* mostrar - ocultar galerias */


/* Boton Wpp */

const btn_wsp = document.getElementById("btn_wsp")
btn_wsp.addEventListener('click', () => {
  window.scrollTo(0, 0)
})

window.onscroll = () => {
add_btn_wsp()
}

const add_btn_wsp = () => {
if (window.scrollY < 300) {
  btn_wsp.classList.remove("btn_wsp-on")
} else {
  btn_wsp.classList.add("btn_wsp-on")
}
}

