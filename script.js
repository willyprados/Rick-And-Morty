window.onload = () => {
    dataRandom(0,494);
}

//Contador aleatorio de personaje
const dataRandom = (min, max) => {
    let random1;
    let random2;
    let random3;

    random1 = Math.floor(Math.random() * Math.floor(max, min)) + min;
    random2 = Math.floor(Math.random() * Math.floor(max, min)) + min;
    random3 = Math.floor(Math.random() * Math.floor(max, min)) + min;

    cardRandom(random1, random2, random3);
}


// llamado de la API
const cardRandom = (random1, random2, random3) => {
    fetch(`https://rickandmortyapi.com/api/character/${random1}, ${random2}, ${random3}`)
    .then(data => data.json())
    .then(data => {
        let character1 = data[0]; //capturando el json del primer personaje aleatorio
        let character2 = data[1]; //capturando el json del segundo personaje aleatorio
        let character3 = data[2]; //capturando el json del tercer personaje aleatorio

        //después de que se almacena la info de cada uno de los tres personajes se procede a entregarla.
        let image1 = data[0].image;
        let image2 = data[1].image;
        let image3 = data[2].image;

        let name1 = data[0].name;
        let name2 = data[1].name;
        let name3 = data[2].name;

        let status1 = data[0].status;
        let status2 = data[1].status;
        let status3 = data[2].status;

        let species1 = data[0].species;
        let species2 = data[1].species;
        let species3 = data[2].species;

        let gender1 = data[0].gender;
        let gender2 = data[1].gender;
        let gender3 = data[2].gender;

        let origin1 = data[0].origin.name;
        let origin2 = data[1].origin.name;
        let origin3 = data[2].origin.name;

        let location1 = data[0].location.name;
        let location2 = data[1].location.name;
        let location3 = data[2].location.name;

        // let id1 = data[0].id;
        // let id2 = data[1].id;
        // let id3 = data[2].id;
        

        //entregando las imagenes al método que las cambiará en el HTML
        changeImage1(image1);
        changeImage2(image2);
        changeImage3(image3);

        changeName1(name1);
        changeName2(name2);
        changeName3(name3);

        changeStatus1(status1);
        changeStatus2(status2);
        changeStatus3(status3);

        changeSpecies1(species1);
        changeSpecies2(species2);
        changeSpecies3(species3);

        changeGender1(gender1);
        changeGender2(gender2);
        changeGender3(gender3);

        changeOrigin1(origin1);
        changeOrigin2(origin2);
        changeOrigin3(origin3);

        changeLocation1(location1);
        changeLocation2(location2);
        changeLocation3(location3);

        // changeId1(id1);
        // changeId2(id2);
        // changeId3(id3);
       
        return data;
        
    });
    
}

//cambiando las imágenes
const changeImage1 = (image1) => {
    document.getElementById("img1").src = image1;
}

const changeImage2 = (image2) => {
    document.getElementById("img2").src = image2;
}

const changeImage3 = (image3) => {
    document.getElementById("img3").src = image3; 
}

//cambiando los nombres
const changeName1 = (name1) => {
    document.getElementById("name1").innerText = name1;
}

const changeName2 = (name2) => {
    document.getElementById("name2").innerText = name2;
}

const changeName3 = (name3) => {
    document.getElementById("name3").innerText = name3;
}

//cambiando los status
const changeStatus1 = (status1) => {
    document.getElementById("status1").innerText = status1;
}

const changeStatus2 = (status2) => {
    document.getElementById("status2").innerText = status2;
}

const changeStatus3 = (status3) => {
    document.getElementById("status3").innerText = status3;
}

const changeSpecies1 = (species1) => {
    document.getElementById("spe1").innerText = species1;
}

const changeSpecies2 = (species2) => {
    document.getElementById("spe2").innerText = species2;
}

const changeSpecies3 = (species3) => {
    document.getElementById("spe3").innerText = species3;
}

const changeGender1 = (gender1) => {
    document.getElementById("gen1").innerText = gender1;
}

const changeGender2 = (gender2) => {
    document.getElementById("gen2").innerText = gender2;
}

const changeGender3 = (gender3) => {
    document.getElementById("gen3").innerText = gender3;
}

const changeOrigin1 = (origin1) => {
    document.getElementById("ori1").innerText = origin1;
}

const changeOrigin2 = (origin2) => {
    document.getElementById("ori2").innerText = origin2;
}

const changeOrigin3 = (origin3) => {
    document.getElementById("ori3").innerText = origin3;
}

const changeLocation1 = (location1) => {
    document.getElementById("des1").innerText = location1;
}

const changeLocation2 = (location2) => {
    document.getElementById("des2").innerText = location2;
}

const changeLocation3 = (location3) => {
    document.getElementById("des3").innerText = location3;
}