'use strict';

// let imgPath = [];
// const images = document.querySelectorAll('.sliderImage');
const baseImages = [
    {'imgNo':1, 'url':'images/sliderImg1.png'},
    {'imgNo':2, 'url':'images/sliderImg2.png'},
    {'imgNo':3, 'url':'images/sliderImg3.png'},
    {'imgNo':4, 'url':'images/sliderImg4.png'},
    {'imgNo':5, 'url':'images/sliderImg5.png'}
];

// images.forEach(function(item, index) {
//     preloadImage(item);
// });

// function preloadImage(path) {
//     let imgTag = document.createElement('img');
//     imgTag.src = path;
// }

let images = baseImages;
let current = images[0].imgNo;

setSliderImages();
setSliderIndicators();

function setSliderImages(){
    const targetDiv = document.querySelector('.slideImg');
    images.forEach(function(item, index) {
        let imgTag = `
        <div class="slideItem">
            <img src="${item.url}" class="sliderImage" alt="スライド画像">
        </div>`;
        targetDiv.insertAdjacentHTML('beforeend', imgTag);
    });
}

function setSliderIndicators(){
    const targetDiv = document.querySelector('.sliderIndicators');
    let indicator = `<div class="indicator setShape"></div>`;
    for (let i=0; i<images.length; i++){
        targetDiv.insertAdjacentHTML('beforeend', indicator);
    }
    changeIndicator();
}

document.querySelector('.prev').onclick = function(){
    const lastItem = images[images.length-1];
    current--;
    if (current <= 0){
        current = images.length;
    }
    images.unshift(lastItem);
    images.pop();
    changeImage();
    changeIndicator();
};

document.querySelector('.next').onclick = function(){
    const firstItem = images[0];
    current++;
    if (current > images.length){
        current = 1;
    }
    images.push(firstItem);
    images.shift();
    changeImage();
    changeIndicator();
};

function changeImage() {
    const targetDiv = document.querySelector('.slideImg');
    targetDiv.replaceChildren();
    setSliderImages();
}

function changeIndicator() {
    const targetDiv = document.querySelectorAll('.indicator');
    let browsImg = 1;
    for (let element of targetDiv){
        if (browsImg === current){
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
        browsImg++;
    }
}
