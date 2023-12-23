//Declaraciones
let varColor;
let cont = 1;
const container = document.querySelector('.body')

document.addEventListener('keydown', function(event){
    switch (event.key.toLowerCase()){
        case 'a':
            varColor = 'pink';
            changeColor(varColor, 'key');
            break;
        case 's':
            varColor = 'orange';
            changeColor(varColor, 'key');
            break;
        case 'd':
            varColor = 'skyblue';
            changeColor(varColor, 'key');
            break;
        case 'q':
            varColor = 'purple';
            addDiv(varColor);
            break;
        case 'w':
            varColor = 'grey';
            addDiv(varColor);
            break;
        case 'e':
            varColor = 'brown';
            addDiv(varColor);
            break;
    }
});

//Funciones
const changeColor = (color, element) => document.getElementById(element).style.backgroundColor = color;

const addDiv = (color) => {
    let newItem = document.createElement('div');
    newItem.id = 'div' + cont++;
    newItem.style.width = '200px';
    newItem.style.height = '200px';
    newItem.style.backgroundColor = color;
    container.appendChild(newItem);
}