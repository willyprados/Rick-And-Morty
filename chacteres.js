window.onload = () => {
    initialContent(1);
};

const url = "https://rickandmortyapi.com/api/character";


const initialContent = (numPagina) => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${numPagina}`)
    .then(data => data.json())
    .then(data => {
        const results = data.results // Results es un arreglo de objetos
        for(let i = 0; i < results.length; i++){
            const image = data.results[i].image;
            const names = data.results[i].name;
            const status = data.results[i].status;
            const species = data.results[i].species;
            const gender = data.results[i].gender;
            const origin = data.results[i].origin.name;
            const id = data.results[i].id;
            const location = data.results[i].location.name;

            const cards = `                
            <!-- Character Card Number 1-->
                <article class="characterCard">
                    <div class="cardHeader">
                        <div class="cardImage">
                            <img src=${image} />
                        </div>
                        <div class="characterCardTitle">
                            <h2 class="characterCardName">${names}</h2>
                            <p class="characterCardDescription">ID:${id} | Location:${location}</p>
                        </div>
                    </div>
                    <div class="cardInfo">
                        <div class="characterCardTextWrapper">
                            <span>STATUS</span>
                            <p>${status}</p>
                        </div>
                        <div class="characterCardTextWrapper">
                            <span>SPECIES</span>
                            <p>${species}</p>
                        </div>
                        <div class="characterCardTextWrapper">
                            <span>GENDER</span>
                            <p>${gender}</p>
                        </div>
                        <div class="characterCardTextWrapper">
                            <span>ORIGIN</span>
                            <p>${origin}</p>
                        </div>
                    </div>
                </article>                
            `;
            
            const contents = document.getElementById('content');
            contents.innerHTML += cards;
        }

        let page = `
            <nav aria-label="pageNav" class="pages">
                <ul class="pagination">
                    <li class="page-item disabled">
                    <a class="page-link disabled" href="#" tabindex="-1" aria-disabled="true">Anterior</a>
                    </li>
            
                    <li class="page-item active" id="page1" onclick="cambiarContenido(1)"><a class="page-link" href="#">1</a></li>
                    <li class="page-item" id="page2" onclick="cambiarContenido(2)"><a class="page-link">2</a></li>
                    <li class="page-item" id="page3" onclick="cambiarContenido(3)"><a class="page-link">3</a></li>
                    <li class="page-item" id="page4" onclick="cambiarContenido(4)"><a class="page-link">4</a></li>
                    <li class="page-item" id="page5" onclick="cambiarContenido(5)"><a class="page-link">5</a></li>
                    <li class="page-item" id="page6" onclick="cambiarContenido(6)"><a class="page-link">6</a></li>
                    <li class="page-item" id="page7" onclick="cambiarContenido(7)"><a class="page-link">7</a></li>
                    <li class="page-item" id="page8" onclick="cambiarContenido(8)"><a class="page-link">8</a></li>
                    <li class="page-item" id="page9" onclick="cambiarContenido(9)"><a class="page-link">9</a></li>
                    <li class="page-item" id="page10" onclick="cambiarContenido(10)"><a class="page-link">10</a></li>
                    <li class="page-item" id="page11" onclick="cambiarContenido(11)"><a class="page-link">11</a></li>
                    <li class="page-item" id="page12" onclick="cambiarContenido(12)"><a class="page-link">12</a></li>
                    <li class="page-item" id="page13" onclick="cambiarContenido(13)"><a class="page-link">13</a></li>
                    <li class="page-item" id="page14" onclick="cambiarContenido(14)"><a class="page-link">14</a></li>
                    <li class="page-item" id="page15" onclick="cambiarContenido(15)"><a class="page-link">15</a></li>
                    <li class="page-item" id="page16" onclick="cambiarContenido(16)"><a class="page-link">16</a></li>
                    <li class="page-item" id="page17" onclick="cambiarContenido(17)"><a class="page-link">17</a></li>
                    <li class="page-item" id="page18" onclick="cambiarContenido(18)"><a class="page-link">18</a></li>
                    <li class="page-item" id="page19" onclick="cambiarContenido(19)"><a class="page-link">19</a></li>
                    <li class="page-item" id="page20" onclick="cambiarContenido(20)"><a class="page-link">20</a></li>
                    <li class="page-item" id="page21" onclick="cambiarContenido(21)"><a class="page-link">21</a></li>
                    <li class="page-item" id="page22" onclick="cambiarContenido(22)"><a class="page-link">22</a></li>
                    <li class="page-item" id="page23" onclick="cambiarContenido(23)"><a class="page-link">23</a></li>
                    <li class="page-item" id="page24" onclick="cambiarContenido(24)"><a class="page-link">24</a></li>
                    <li class="page-item" id="page25" onclick="cambiarContenido(25)"><a class="page-link">25</a></li>
                    
                    
                    <li class="page-item">
                    <a class="page-link" href="../characters/page2/page2.html">Siguiente</a>
                    </li>
                </ul>
            </nav>
        
            `;

        const pages = document.getElementById('pages');
        pages.innerHTML += page;

        //llamando a la función cambiarImagenesDinamicas y le envío el arreglo con las imagenes, títulos y status
        //cambiarImagenesDinamicas( placeHolderImg, placeHolderNombre, placeHolderStatus )
    
        return data;
    }
)};

const contentChange = ( numberPage ) => {

    let selectCard = document.querySelectorAll('.card img');
    //el selector de card me trae las cards antiguas
    console.log(selectCard);
    console.log('estás en la página: ' + numberPage);

    fetch(`https://rickandmortyapi.com/api/character/?page=${numeroPagina}`)
        .then(response => response.json())
        .then(data => {
            for(let i = 0; i < 20; i++){
                images[i] = data.results[i].image;
                names[i] = data.results[i].name;
                status[i] = data.results[i].status;
                species[i] = data.results[i].species;
                gender[i] = data.results[i].gender;
                origin[i] = data.results[i].origin;
                id[i] = data.results[i].id;
                location[i] = data.results[i].location.name;
                
                selectCard[i].src = images[i];
                console.log(selectCard[i]);

            }
    
            //llamando a la función cambiarImagenesDinamicas y le envío el arreglo con las imagenes, títulos y status
            //cambiarImagenesDinamicas( placeHolderImg, placeHolderNombre, placeHolderStatus )
    
            return data;
        } )
        .catch((err) => console.log(err));
}






// const ids = /character/[1,2,3];

// rickAndMorty[1]["name"];

// document.write(tarjeta)

// ${rickAndMorty[0].name}


