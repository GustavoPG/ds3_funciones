const ele1 = document.getElementById('ele1');
pintar(ele1);

function pintar(element, color = 'green'){
    element.style.backgroundColor = color;
}

ele1.addEventListener('click', function(){
    pintar(ele1, 'yellow');
});