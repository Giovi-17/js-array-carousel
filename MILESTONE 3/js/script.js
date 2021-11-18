/* Al click dell'utente sulle frecce verso l'alto o verso il basso, 
l'immagine attiva diventa visibile in formato grande a sinistra 
e nel suo angolo in basso a destra dovranno comparire relativi:
 - titolo e
 - testo.
Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire 
in evidenza rispetto alle altre. */

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

// Frecce funzionanti

//Freccia in basso
const nextArrow = document.querySelector('.bottom');

nextArrow.addEventListener('click', function(){
    // Rimuovo active all'immagine corrente
    allImages[active].classList.remove('active');
    allImagesSmall[active].classList.remove('active');
    allTextTitle[active].classList.remove('active');
    allTextText[active].classList.remove('active');

    // incremento active di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if( active < items.length - 1 ) {
        active++;
    } else {
        active = 0;
    }

    // assegno all'immagine col nuovo indice la classe active
    allImages[active].classList.add('active');
    allImagesSmall[active].classList.add('active');
    allTextTitle[active].classList.add('active');
    allTextText[active].classList.add('active');

});

const prevArrow = document.querySelector('.top');

//Freccia in alto
prevArrow.addEventListener('click', function(){
    // Rimuovo active all'immagine corrente
    allImages[active].classList.remove('active');
    allImagesSmall[active].classList.remove('active');
    allTextTitle[active].classList.remove('active');
    allTextText[active].classList.remove('active');

    // decremento active di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if( active > 0 ) {
        active--;
    } else {
        active = items.length - 1;
    }

    // assegno all'immagine col nuovo indice la classe active
    allImages[active].classList.add('active');
    allImagesSmall[active].classList.add('active');
    allTextTitle[active].classList.add('active');
    allTextText[active].classList.add('active');

});

