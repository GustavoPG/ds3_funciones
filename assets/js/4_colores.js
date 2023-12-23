document.getElementById('div1').addEventListener('click', function(){
    setBlackColor('div1');
});

document.getElementById('div2').addEventListener('click', function(){
    setBlackColor('div2');
});

document.getElementById('div3').addEventListener('click', function(){
    setBlackColor('div3');
});

document.getElementById('div4').addEventListener('click', function(){
    setBlackColor('div4');
});

//Function para cambiar backgroundColor a black
const setBlackColor = (element) => document.getElementById(element).style.backgroundColor = 'black';