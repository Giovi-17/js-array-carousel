/* Adesso rimuoviamo tutto il markup statico 
e inseriamo le immagini e i testi delle immagini dinamicamente 
servendoci dell'array fornito e un semplice ciclo for 
che concatena un template literal. 
Al termine di questa fase ci ritroveremo con lo stesso slider, 
ma costruito dinamicamente attraverso JavaScript.*/

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];

const classImg = document.querySelector('.big-img');
const classImgSmall = document.querySelector('.small-img');
const classText = document.querySelector('.text');

for(let i = 0; i < items.length; i++){

    //Popolo il contenitore di testo
    const thisTitle = title[i];
    const thisText = text[i];
    
    const newText = `
        
    <div>
    
        <h2 class="single-title">${thisTitle}</h2>
        <span class="single-text">${thisText}</span>

    </div>
    
    `;
    
    classText.innerHTML += newText;

}

//Per ogni elemento di items popolo il container
for( let i = 0; i < items.length; i++ ){

    // Popolo i contenitori di immagini
    const thisImage = items[i];

    const newImage = `
    
    <img class="single-image" src="${thisImage}" alt="Img ${i}">

    `;

    const newImageSmall = `
    
    <img class="single-small-image" src="${thisImage}" alt="Img ${i}">

    `;

    classImg.innerHTML += newImage;
    classImgSmall.innerHTML += newImageSmall;

}


// Assegno la classe active ad un elemento
let active = 0;

const allImages = document.getElementsByClassName('single-image');
const allImagesSmall = document.getElementsByClassName('single-small-image');
const allTextTitle = document.getElementsByClassName('single-title');
const allTextText = document.getElementsByClassName('single-text');


console.log(classText);

allImages[active].classList.add('active');
allImagesSmall[active].classList.add('active');
allTextTitle[active].classList.add('active');
allTextText[active].classList.add('active');

