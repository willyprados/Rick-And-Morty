let start = true;

const initialContent = (numPagina) => {
    fetch(numPagina)
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


            // Creando las tarjetas
            const cards = `                
            <!-- Character Card Number 1-->
                <article id="characterCard" class="characterCard">
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
        
            // Insertandolas en el HTML

            const contents = document.getElementById('content');
            contents.innerHTML += cards;


            // Indicando en que pagina te encuentras
            // const idPages = documen.getElementById("page")



            // Creando los botones para que limpien la pagina y carguen los nuevos datos

            document.getElementById("btnNext").onclick = () => {
                console.log("Has presionado Next");
                while (document.getElementById("content").firstChild) {
                    document.getElementById("content").removeChild(document.getElementById("content").firstChild);
                }
                initialContent(data.info.next);
            };

            document.getElementById("btnPrev").onclick = () => {
                console.log("Has presionado Prev");
                while (document.getElementById("content").firstChild) {
                    document.getElementById("content").removeChild(document.getElementById("content").firstChild);
                }
                initialContent(data.info.prev);
            };
        }
  
        return data;
    }
)};

// Validando para cargar el contenido
if (start) {
    initialContent("https://rickandmortyapi.com/api/character/?page=1");
    
    start = false;
} 