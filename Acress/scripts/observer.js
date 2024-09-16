/*
function callback(entries){
    console.log('llamando al callback')
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}

const observer =new IntersectionObserver(callback. options);
const element = document.querySelector('.barra_llenable1');

observer.observe(element);
*/
const images = document.querySelectorAll('.barra_llenable');

function triggerAnimation(entries){
    entries.forEach(entry =>{
        const image = entry.target.querySelector('img')
        image.classList.toggle('unset', entry.isIntersecting)
    })
}

const options = {
    root: null,
    rootMargin: "0px",
    thrershold: 0
}

const observer = new IntersectionObserver(triggerAnimation,options);

images.forEach(image =>{
    observer.observe(image);
})