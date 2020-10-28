
var body = document.querySelector('body');

var colores = ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A', '#DC143C', '#FF0000'];

var owo = 'owo';
var uwu = 'uwu';

function crearModal(cara){

    var modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.zIndex = i;

    var positionTop = Math.floor(Math.random() * 600);
    var positionLeft = Math.floor(Math.random() * 1000);
    var colorFondo = Math.floor(Math.random() * colores.length);

    modal.style.top = positionTop + 'px';
    modal.style.left = positionLeft + 'px';
    modal.style.backgroundColor = colores[colorFondo];
    modal.style.border = '2px solid white';
    modal.innerHTML = cara;

    body.appendChild(modal);
}

window.addEventListener('load', ()=>{
    
    for(let i = 0; i < 1; i++){

        var owo = window.setInterval(crearModal(uwu), 5000);

        var intervalo = window.setInterval( crearModal(uwu), 500);
    }

    document.getElementById('stop').addEventListener('click', ()=>{
        clearInterval(intervalo);
        clearInterval(owo);
    })

})