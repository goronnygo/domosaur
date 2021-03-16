const p = document.querySelector('.mess-with-me');
p.style.fontSize = "40px";
function orange1(){
    const clicky = document.querySelector('.mess-with-me');
    clicky.style.color = 'orange';
}

p.addEventListener
('click', orange1);

const p1 = document.querySelector('p.mess-with-me')
p1.style.backgroundColor = "green";

const hideImg = document.querySelector('#hide-me');
hideImg.style.display = "none";

const img1 = document.querySelector('#triceratops');
img1.style.width = "324px";

function firstPic(){
    const pic = document.querySelector('#triceratops');
    pic.style.border = "2px solid red";
}

img1.addEventListener ('click', firstPic);


const featherPic = document.querySelector('#feathers');

function picparentcy(){
    const pic2 = document.querySelector('#feathers');
    pic2.style.opacity = "50%";
}

featherPic.addEventListener ('click', picparentcy);


const button = document.querySelector('#toggle');
function picColor(){
    const pic2 = document.querySelector('#row')
    pic2.style.backgroundColor = "yellow";
}

button.addEventListener('click', picColor);


const biggify = document.querySelector('#biggify');

function big(){
    biggify.style.width = '200px';
}
function small(){
    biggify.style.width = '';
}

biggify.addEventListener('mouseover', big);
biggify.addEventListener('mouseout', small);