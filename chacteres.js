const url = "https://rickandmortyapi.com/api/character";
const url1 = "https://rickandmortyapi.com/api/episode";
let rickAndMorty = [];
let rick = [];
let rickEpisode = [];

fetch(url)
.then(data => data.json())
.then(data => {
    rickEpisode = data;
    console.log(rickEpisode);
});

fetch(url)
.then(data => data.json())
.then(data => {
    rick = data.info;
    console.log(rick);
});

fetch(url)
.then(data => data.json())
.then(data => {
    rickAndMorty = data.results;
    console.log(rickAndMorty);
});




const ids = /character/[1,2,3];





//Formula para sacar el personaje de forma aleatoria
function getRandomInt(character) {
return Math.floor(Math.random() * Math.floor(character));
}

console.log(getRandomInt(494));
// expected output: 0, 1 or 2

console.log(getRandomInt(20));
// expected output: 0

console.log(Math.random());
// expected output: a number between 0 and 1

const aja = () => {
    return rickAndMorty[4]["name"];
} 

console.log(aja);

rickAndMorty[1]["name"];









const tarjeta = `
    <section class="character">
    <!-- Character Card Number 1-->
        <article class="characterCard">
            <div class="cardHeader">
                <div class="cardImage">
                    <img src="https://rickandmortyapi.com/api/character/avatar/56.jpeg" />
                </div>
                <div class="characterCardTitle">
                    <h2 class="characterCardName">Esto es una prueba</h2>
                    <p class="characterCardDescription">Esto es un mensaje que se estrae de la API en el que se describe el personaje xD</p>
                </div>
            </div>
            <div class="cardInfo">
                <div class="characterCardTextWrapper">
                    <span>STATUS</span>
                    <p>Dead</p>
                </div>
                <div class="characterCardTextWrapper">
                    <span>SPECIES</span>
                    <p>Human</p>
                </div>
                <div class="characterCardTextWrapper">
                    <span>GENDER</span>
                    <p>Male</p>
                </div>
                <div class="characterCardTextWrapper">
                    <span>ORIGIN</span>
                    <p>Unknow</p>
                </div>
            </div>
        </article>
    </section>
`


document.write(tarjeta)
/*
for(var i = 0; i <= 2; i++){
    let character = 
}
*/

// ${rickAndMorty[0].name}


// Codigo que genera la tarjeta en javascript lineas 155 a 231
const createCardImg = (name, src) => {
    const img = document.createElement('img');
    img.classList.add('cardImage');
    img.alt = `${image} photo`;
    img.src = src;

    return img
}

const createCardTitle = (name, id) => {
    const div = document.createElement('div'),
    h2 = document.createElement('h2'),
    p = document.createElement('p');

    div.classList.add('homeCard-title');
    h2.innerText = name;
    p.innerText = `ID: ${id}`;
    div.appendChild(h2).appendChild(p);

    return div
}

const createCardImgWrapper = (data) => {
    const cardImg = createCardImg(data && data.name || 'No Name', data && data.image || placeholder),
    cardTitle = createCardTitle(data && data.name || 'No Name', data && data.id || ''),
    div = document.createElement('div');

    div.classList.add('homeCard-imgWrapper');
    div.appendChild(cardImg)
    div.appendChild(cardTitle)

    return div
}

const createCardInfoWrapper = (data) => {
    const information = [
    { info: 'STATUS', data: data && data.status || 'No status' },
    { info: 'SPECIES', data: data && data.species || 'No species'},
    { info: 'GENDER', data: data && data.gender || 'No gender'},
    { info: 'ORIGIN', data: data && data.origin && data.origin.name || 'No origin'},
    { info: 'LAST LOCATION', data: data && data.location && data.location.name || 'No location'},
],
    cardInfoWraper = document.createElement('div'),
    infoDivs = information.map(e => {
    const div = document.createElement('div'),
    span = document.createElement('span'),
    p = document.createElement('p');
    
    div.classList.add('homeCard-text');
    span.innerText = e.info;
    p.innerText = e.data;

    div.appendChild(span)
    div.appendChild(p)

    return div
});

cardInfoWraper.classList.add('homeCard-info');
infoDivs.forEach(div => cardInfoWraper.appendChild(div))

return cardInfoWraper
}

const createHomeCard = (data) => {
    const card = document.createElement('article'),
    imgWrapper = createCardImgWrapper(data),
    infoWrapper = createCardInfoWrapper(data);

    card.classList.add('homeCard');

    card.appendChild(imgWrapper)
    card.appendChild(infoWrapper)

    return card
}

// Esto es lo que se ejecuta al final
const showcase = document.getElementById('showcase')

// Con estas 3 lineas se crean las tarjetas de Rick, Morty y Summer
showcase.appendChild(createHomeCard(dummyData[0]))
showcase.appendChild(createHomeCard(dummyData[1]))
showcase.appendChild(createHomeCard(dummyData[2]))
// Esta linea es por si no encuentra datos
showcase.appendChild(createHomeCard())