let filmNode = null;
let speciesNode = null;
let homeworldNode = null;
let startshipNode = null;
let vehiclesNode = null;
let planetNode = null;
let peopleNode = null;


//main node
let searchNode = null;

let seackKey =1;
let type = "planets"
let mainUrl = `https://swapi.dev/api/${type}/?search=`;

//----------------------------------------------------
//generate grid on load
//----------------------------------------------------
const laod = document.addEventListener("load", search())

//----------------------------------------------------
//search line reader
//----------------------------------------------------
let searchLine = document.getElementById("search")
let searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener("click",async _=>{
    mainUrl = `https://swapi.dev/api/${type}/?search=`;
    mainUrl +=searchLine.value
    switch(type){
        case "planets":
            
            await fun()
            await planet_search()
            break;
        case "people":
            
            await fun()
            await people_search()
            break;
        case "starships":
            
            await fun()
            await startship_search()
            break;
        case "vehicles":
            
            await fun()
            await vehicles_search()
            break;
        case "species":
            
            await fun()
            await species_search()
            break;
        case "films":
            
            await fun()
            await films_search()
            break;
    }

    
})
//----------------------------------------------------
//search engine
//----------------------------------------------------
async function fun() {
    let dir = mainUrl
    searchNode = await fetch(dir)
    .then(response => response.json())
        .then(data => searchNode = data );
        
    return searchNode
}


async function search() {
    
    switch(type){
        case "planets":
            mainUrl = `https://swapi.dev/api/${type}/?search=&page=`+seackKey;
            await fun()
            await planet_search()
            break;
        case "people":
            mainUrl = `https://swapi.dev/api/${type}/?search=&page=`+seackKey;
            await fun()
            await people_search()
            break;
        case "starships":
            mainUrl = `https://swapi.dev/api/${type}/?search=&page=`+seackKey;
            await fun()
            await startship_search()
            break;
        case "vehicles":
            mainUrl = `https://swapi.dev/api/${type}/?search=&page=`+seackKey;
            await fun()
            await vehicles_search()
            break;
        case "species":
            mainUrl = `https://swapi.dev/api/${type}/?search=&page=`+seackKey;
            await fun()
            await species_search()
            break;
        case "films":
            mainUrl = `https://swapi.dev/api/${type}/?search=&page=`+seackKey;
            await fun()
            await films_search()
            break;
    }
    
    
}
//species
function species_search() {
    let ped = document.getElementById("main")
    ped.innerHTML=''
    
    for (let i = 0; i < searchNode.results.length; i++){
        if(searchNode.results.length === 1){
            let species = searchNode.results[0]
            let result2 = 
                `
                <div class="info-wrapper">
                    <div class = "title-nav"><h3>${species.name}<p>(${species.name})</p></h3></div>
                    <div class = "info-blocks">
                        
                        <div class="left">
                            <h4>Specification</h4>
                            <div class="spec-sec">
                                <li>Classification: <span>${species.classification}</span></li>
                                <li>Designation:  <span>${species.designation}</span></li>
                                <li>Average height:  <span>${species.average_height}</span>cm</li>
                                <li>Average livespan:  <span>${species.average_lifespan}</span> credists</li>
                                <li>Eye colors:  <span>${species.eye_colors}</span>m</li>
                                <li>Hair colors:  <span>${species.hair_colors}</span></li>
                                <li>Language:  <span>${species.language}</span></li>
                            </div>
                        </div> 
                        <div class="right">
                            <div class="res">
                                <h4>People</h4>
                                <ul id="peopleTit"> 

                                    ${lintToPar(species, "people", "peopleTit")}
                                        
                                </ul>
                            </div>
                            <div class="fil">
                                <h4>Homeworld</h4>
                                <ul id="homeworldTit"> 
                                
                                    ${linkToHomeworld(species)} 
                                </ul>
                            </div>
                            <div class="fil">
                                <h4>Films</h4>
                                <ul id="filmTit"> 
                                
                                    ${linkToFilm(species)}          
                                </ul>
                            </div>
                            
                        </div> 
                    </div>
                </div>`
                ped.innerHTML += result2
        }else{
            let result1 =
            `
            <div class="item">
                <div class="info">
                    <div class="basic-info">
                        <li>Name: ${searchNode.results[i].name}</li>
                        <li>Clasification: ${searchNode.results[i].classification }km</li>
                        <li>Language : ${searchNode.results[i].language }</li>
                    </div>
                    <div class="more-info">
                        <li id="${i}" onclick="reply_species(this.id)">More Info</li>
                    </div>
                </div>
            </div>
            ` 
            ped.innerHTML += result1
        }
    }
}
//starships
function startship_search() {
    let ped = document.getElementById("main")
    ped.innerHTML=''
    
    for (let i = 0; i < searchNode.results.length; i++){
        if(searchNode.results.length === 1){
            let starship = searchNode.results[0]
            let result2 = 
                `
                <div class="info-wrapper">
                    <div class = "title-nav"><h3>${starship.name}<p>(${starship.name})</p></h3></div>
                    <div class = "info-blocks">
                        
                        <div class="left">
                            <h4>Specification</h4>
                            <div class="spec-sec">
                                <li>Model: <span>${starship.model}</span></li>
                                <li>Class:  <span>${starship.startship_class}</span></li>
                                <li>Manufacturer:  <span>${starship.manufacturer}</span></li>
                                <li>Price:  <span>${starship.cost_in_credits}</span> credists</li>
                                <li>Length:  <span>${starship.length}</span>m</li>
                                <li>Crew:  <span>${starship.crew}</span></li>
                                <li>Passengers:  <span>${starship.passengers}</span></li>
                                <li>Max atmosphering speed:  <span>${starship.max_atmosphering_speed}</span></li>
                                <li>Hyperdrive Rating:  <span>${starship.hyperdrive_rating}</span></li>
                                <li>MGLT:  <span>${starship.MGLT}</span></li>
                                <li>Cargo capacity:  <span>${starship.cargo_capacity}</span> kg</li>
                                <li>Consumables:  <span>${starship.consumables}</span></li>
                            </div>
                        </div> 
                        <div class="right">
                            <div class="res">
                                
                            </div>
                            <div class="fil">
                                <h4>Films</h4>
                                <ul id="filmTit"> 
                                
                                    ${linkToFilm(starship)}          
                                </ul>
                            </div>
                            <h4>Pilots</h4>
                                <ul id="pilotsTit"> 

                                    ${lintToPar(starship, "pilots", "pilotsTit")}
                                            
                                </ul>
                        </div> 
                    </div>
                </div>`
                ped.innerHTML += result2
        }else{
            let result1 =
            `
            <div class="item">
                <div class="info">
                    <div class="basic-info">
                        <li>Name: ${searchNode.results[i].name}</li>
                        <li>Model: ${searchNode.results[i].model }km</li>
                        <li>Starship class : ${searchNode.results[i].starship_class }</li>
                    </div>
                    <div class="more-info">
                        <li id="${i}" onclick="reply_starships(this.id)">More Info</li>
                    </div>
                </div>
            </div>
            ` 
            ped.innerHTML += result1
        }
    }
}
//vehicles
function vehicles_search() {
    let ped = document.getElementById("main")
    ped.innerHTML=''
    
    for (let i = 0; i < searchNode.results.length; i++){
        if(searchNode.results.length === 1){
            let vehicles = searchNode.results[0]
            let result2 = 
                `
                <div class="info-wrapper">
                    <div class = "title-nav"><h3>${vehicles.name}<p>(${vehicles.name})</p></h3></div>
                    <div class = "info-blocks">
                        
                        <div class="left">
                            <h4>Specification</h4>
                            <div class="spec-sec">
                                <li>Model: <span>${vehicles.model}</span></li>
                                <li>Class:  <span>${vehicles.vehicle_class}</span></li>
                                <li>Manufacturer:  <span>${vehicles.manufacturer}</span></li>
                                <li>Price:  <span>${vehicles.cost_in_credits}</span> credists</li>
                                <li>Length:  <span>${vehicles.length}</span>m</li>
                                <li>Crew:  <span>${vehicles.crew}</span></li>
                                <li>Passengers:  <span>${vehicles.passengers}</span></li>
                                <li>Max atmosphering speed:  <span>${vehicles.max_atmosphering_speed}</span></li>
                                <li>Cargo capacity:  <span>${vehicles.cargo_capacity}</span> kg</li>
                                <li>Consumables:  <span>${vehicles.consumables}</span></li>
                            </div>
                        </div> 
                        <div class="right">
                            <div class="res">
                                
                            </div>
                            <div class="fil">
                                <h4>Films</h4>
                                <ul id="filmTit"> 
                                
                                    ${linkToFilm(vehicles)}          
                                </ul>
                            </div>
                            <h4>Pilots</h4>
                                <ul id="pilotsTit"> 

                                    ${lintToPar(vehicles, "pilots", "pilotsTit")}
                                            
                                </ul>
                        </div> 
                    </div>
                </div>`
                ped.innerHTML += result2
        }else{
            let result1 =
            `
            <div class="item">
                <div class="info">
                    <div class="basic-info">
                        <li>Name: ${searchNode.results[i].name}</li>
                        <li>Model: ${searchNode.results[i].model }km</li>
                        <li>Vehicle class : ${searchNode.results[i].vehicle_class }</li>
                    </div>
                    <div class="more-info">
                        <li id="${i}" onclick="reply_vehicles(this.id)">More Info</li>
                    </div>
                </div>
            </div>
            ` 
            ped.innerHTML += result1
        }
    }
}
//people
function people_search() {
    
    let ped = document.getElementById("main")
    ped.innerHTML=''
    
    for (let i = 0; i < searchNode.results.length; i++){
        if(searchNode.results.length === 1){
            let people = searchNode.results[0]
            let result2 = 
                `
                <div class="info-wrapper">
                    <div class = "title-nav"><h3>${people.name}<p>(${people.name})</p></h3></div>
                    <div class = "info-blocks">
                        
                        <div class="left">
                            <h4>Specification</h4>
                            <div class="spec-sec">
                                <li>Gender: <span>${people.gender}</span></li>
                                <li>Birth Year:  <span>${people.birth_year}</span></li>
                                <li>Homeworld:  <span id="homeworldTit">${linkToHomeworld(people)}</span></li>
                                <li>Eye color:  <span>${people.eye_color}</span></li>
                                <li>Hair color:  <span>${people.hair_color}</span></li>
                                <li>Mass:  <span>${people.mass}</span> G</li>
                                <li>Skin color:  <span>${people.skin_color}</span></li>

                            </div>
                        </div> 
                        <div class="right">
                            <div class="res">
                                <h4>StartShips</h4>
                                <ul id="starshipTit">
                 
                                    ${linkToStarship(people)}
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Vehicles</h4>
                                <ul id="vehiclesTit">
                                    ${linkToVehicles(people)}
                                    
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Species</h4>
                                <ul id="speciesTit">
                                    ${lintToPar(people, "species", "speciesTit")}
                                    
                                </ul>
                            </div>
                            <div class="fil">
                                <h4>Films</h4>
                                <ul id="filmTit"> 
                                
                                    ${linkToFilm(people)}          
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>`
                ped.innerHTML += result2
        }else{
            let result1 =
            `
            <div class="item">
                <div class="info">
                    <div class="basic-info">
                        <li>Name: ${searchNode.results[i].name}</li>
                        <li>Birth Year: ${searchNode.results[i].birth_year }</li>
                        <li>Homeworld: ${searchNode.results[i].gender }</li>
                    </div>
                    <div class="more-info">
                        <li id="${i}" onclick="reply_people(this.id)">More Info</li>
                    </div>
                </div>
            </div>
            ` 
            ped.innerHTML += result1
        }
    }
}
//planet
function planet_search() {
    let ped = document.getElementById("main")
    ped.innerHTML=''
    
    for (let i = 0; i < searchNode.results.length; i++){
        if(searchNode.results.length === 1){
            let planet = searchNode.results[0]
            let result2 = 
                `
                <div class="info-wrapper">
                    <div class = "title-nav"><h3>${planet.name}<p>(${planet.name})</p></h3></div>
                    <div class = "info-blocks">
                        
                        <div class="left">
                            <h4>Specification</h4>
                            <div class="spec-sec">
                                <li>Rotation Period: <span>${planet.rotation_period}</span> h</li>
                                <li>Orbital Period:  <span>${planet.orbital_period}</span> days</li>
                                <li>Diameter:  <span>${planet.diameter}</span> km</li>
                                <li>Climate:  <span>${planet.climate}</span></li>
                                <li>Gravity:  <span>${planet.gravity}</span> G</li>
                                <li>Terrain:  <span>${planet.terrain}</span></li>
                                <li>Surface Water:  <span>${planet.surface_water}</span> %</li>
                                <li>Population:  <span>${planet.population}</span></li>
                            </div>
                        </div> 
                        <div class="right">
                            <div class="res">
                                <h4>Residents</h4>
                                <ul id="resNames">
                 
                                    ${lintToPar(planet, "residents", "resNames")}
                                </ul>
                            </div>
                            <div class="fil">
                                <h4>Films</h4>
                                <ul id="filmTit"> 
                                
                                    ${linkToFilm(planet)}          
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>`
                ped.innerHTML += result2
        }else{
            let result1 =
            `
            <div class="item">
                <div class="info">
                    <div class="basic-info">
                        <li>Name: ${searchNode.results[i].name}</li>
                        <li>Diameter: ${searchNode.results[i].diameter}km</li>
                        <li>Population: ${searchNode.results[i].population}</li>
                    </div>
                    <div class="more-info">
                        <li id="${i}" onclick="reply_id(this.id)">More Info</li>
                    </div>
                </div>
            </div>
            ` 
            ped.innerHTML += result1
        }
    }
}
//films
function films_search() {
    let ped = document.getElementById("main")
    ped.innerHTML=''
    
    for (let i = 0; i < searchNode.results.length; i++){
        if(searchNode.results.length === 1){
            let planet = searchNode.results[0]
            linkToStarship(planet)
            linkToVehicles(planet)
            lintToPar(planet, "species", "speciesTit")
            lintToPar(planet, "characters", "charactersTit")
            linkToPlanet(planet)
            
            let result2 = 
                `
                <div class="info-wrapper">
                    <div class = "title-nav"><h3>${planet.title}<p>(${planet.title})</p></h3></div>
                    <div class = "info-blocks">
                        
                        <div class="left">
                            <h4>Specification</h4>
                            <div class="spec-sec">
                                <li>Opening crawl: <br><span>${planet.opening_crawl  }</span></li>
                                <li>Director:  <span>${planet.director }</span> days</li>
                                <li>Producer:  <span>${planet.producer }</span> km</li>
                                <li>Release date :  <span>${planet.release_date }</span></li>
                            </div>
                        </div> 
                        <div class="right">
                            <div class="res">
                                <h4>StartShips</h4>
                                <ul id="starshipTit">
            
                                    
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Vehicles</h4>
                                <ul id="vehiclesTit">
                               
                                    
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Species</h4>
                                <ul id="speciesTit">
                                 
                                    
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Characters</h4>
                                <ul id="charactersTit">
            
                            
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Planets</h4>
                                <ul id="planetsTit">
                             
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`
                ped.innerHTML += result2
        }else{
            let result1 =
            `
            <div class="item">
                <div class="info">
                    <div class="basic-info">
                        <li>Title: ${searchNode.results[i].title}</li>
                        <li>Episod: ${searchNode.results[i].episode_id}</li>
                        <li>Director: ${searchNode.results[i].director}</li>
                    </div>
                    <div class="more-info">
                        <li id="${i}" onclick="reply_films(this.id)">More Info</li>
                    </div>
                </div>
            </div>
            ` 
            ped.innerHTML += result1
        }
    }
}


//----------------------------------------------------
//Convert links to residents data
//----------------------------------------------------
//(people, residents, characters, pilots)
async function lintToPar(nodeVal, key, id) {
    nod =""
    let nodeLink = nodeVal[key]
    if(nodeLink.length === 0){
        return  "none"
    }else{
        for(let i =0; i<nodeLink.length;i++){
           await resultAsemble(nodeLink[i], "name", "gender", "birth_year")
        }
        document.getElementById(id).innerHTML = nod
    } 
}
const  resultAsemble = async (link, key1, key2, key3)=>{
    await resultPicker(link).then((a)=>{
        nod+= ""+ a[key1] + " - " + a[key1] +" - "+a[key1]+"; <br> " 
    })
    return nod   
}
async function resultPicker(link) {
    
    peopleNode= await fetch(link)
        .then(response => response.json())
        .then(data => peopleNode = data );
    return peopleNode
}

//films
async function linkToFilm(planet) {
    res = ''
    let linksF = planet.films
    if(linksF.length===0){
        return "none"
    }else{
        for(let i =0; i<linksF.length;i++){
           await filmAsemble(linksF[i])
        }
        document.getElementById("filmTit").innerHTML = res
    }  
}
const filmAsemble = async (link)=>{
    await filmPicker(link).then((a)=>{
        res+= ""+ a.title + " - " + a.release_date +"; <br> " 
    })
    return res
}
async function filmPicker(link) {
    
    filmNode=  await fetch(link)
        .then(response => response.json())
        .then(data =>   filmNode = data );
    return  filmNode
}
//homeworld
async function linkToHomeworld(planet) {
    hom = ''
    let homeworldLinks = planet.homeworld
    await homeworldAsemble(homeworldLinks)
    document.getElementById("homeworldTit").innerHTML = hom
     
}
const homeworldAsemble = async (link)=>{
    await homeworldPicker(link).then((a)=>{
        hom+= ""+ a.name +" <br> " 
    })
    return hom
}
async function homeworldPicker(link) {
    
    homeworldNode=  await fetch(link)
        .then(response => response.json())
        .then(data =>   homeworldNode = data );
    return  homeworldNode
}
//starships
async function linkToStarship(planet) {
    sta = ''
    let starshipLinks = planet.starships
    if(starshipLinks.length===0){
        return "none"
    }else{
        for(let i =0; i<starshipLinks.length;i++){
           await starshipAsemble(starshipLinks[i])
        }
        document.getElementById("starshipTit").innerHTML = sta
    }  
}
const starshipAsemble = async (link)=>{
    await starshipPicker(link).then((a)=>{
        sta+= ""+ a.name + " - " + a.model +"; <br> " 
    })
    return sta
}
async function starshipPicker(link) {
    startshipNode=  await fetch(link)
        .then(response => response.json())
        .then(data =>   startshipNode = data );
    return  startshipNode
}

//vehicles
async function linkToVehicles(planet) {
    veh = ''
    let vehiclesLinks = planet.vehicles
    if(vehiclesLinks.length===0){
        return "none"
    }else{
        for(let i =0; i<vehiclesLinks.length;i++){
           await vehiclesAsemble(vehiclesLinks[i])
        }
        document.getElementById("vehiclesTit").innerHTML = veh
    }  
}
const vehiclesAsemble = async (link)=>{
    await vehiclesPicker(link).then((a)=>{
        veh+= ""+ a.name + " - " + a.model +"; <br> " 
    })
    return veh
}
async function vehiclesPicker(link) {
    vehiclesNode=  await fetch(link)
        .then(response => response.json())
        .then(data =>   vehiclesNode = data );
    return  vehiclesNode
}

//species
async function linkToSpecies(planet) {
    spe = ''
    let speciesLinks = planet.species
    if(speciesLinks.length===0){
        return "none"
    }else{
        for(let i =0; i<speciesLinks.length;i++){
           await speciesAsemble(speciesLinks[i])
        }
        document.getElementById("speciesTit").innerHTML = spe
    }  
}
const speciesAsemble = async (link)=>{
    await speciesPicker(link).then((a)=>{
        spe+= ""+ a.name + " - " + a.language +"; <br> " 
    })
    return spe
}
async function speciesPicker(link) {
    speciesNode=  await fetch(link)
        .then(response => response.json())
        .then(data =>   speciesNode = data );
    return  speciesNode
}

//planet
async function linkToPlanet(planet) {
    pla = ''
    let palnetLinks = planet.characters
    if(palnetLinks.length===0){
        return "none"
    }else{
        for(let i =0; i<palnetLinks.length;i++){
           await palnetsAsemble(palnetLinks[i])
        }
        document.getElementById("planetsTit").innerHTML = pla
    }  
}
const palnetsAsemble = async (link)=>{
    await palnetsPicker(link).then((a)=>{
        pla+= ""+ a.name +"; <br> " 
    })
    return pla
}
async function palnetsPicker(link) {
    
    planetNode=  await fetch(link)
        .then(response => response.json())
        .then(data =>   planetNode = data );
    return  planetNode
}

// Next/Prev page nav
const NextPage = ()=>{
    if(searchNode.next == null){
        console.log("last")
    }else{
        seackKey++; search();
    }
}
const PrevPage = ()=>{
    if(searchNode.previous == null){
        console.log("first")
    }else{
        seackKey--; search()
    }
    
}
 

//Options selector

async function option(id) {
    
    document.getElementById("optionTitle").innerText= id
    type = id
    seackKey=1;
    await search()
}

// More info Pop up
//planet
function reply_id(clicked_id){
    document.getElementById("planetInfoBlock").style.display = 'flex'
    let planet = searchNode.results[clicked_id]
    
    
    
    let result = 
                `
                <div class="info-wrapper">
                    <div class = "title-nav"><h3>${planet.name}<p>(${planet.name})</p></h3> <button onclick="closeInfoBlock()">Close</button></div>
                    <div class = "info-blocks">
                        
                        <div class="left">
                            <h4>Specification</h4>
                            <div class="spec-sec">
                                <li>Rotation Period: <span>${planet.rotation_period}</span> h</li>
                                <li>Orbital Period:  <span>${planet.orbital_period}</span> days</li>
                                <li>Diameter:  <span>${planet.diameter}</span> km</li>
                                <li>Climate:  <span>${planet.climate}</span></li>
                                <li>Gravity:  <span>${planet.gravity}</span> G</li>
                                <li>Terrain:  <span>${planet.terrain}</span></li>
                                <li>Surface Water:  <span>${planet.surface_water}</span> %</li>
                                <li>Population:  <span>${planet.population}</span></li>
                            </div>
                        </div> 
                        <div class="right">
                            <div class="res">
                                <h4>Residents</h4>
                                <ul id="resNames"> 
                                    ${lintToPar(planet, "residents", "resNames")}
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Films</h4>
                                <ul id="filmTit"> 
                                    ${linkToFilm(planet)}          
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>`
    document.getElementById('planetInfoBlock').innerHTML = result;

}
//starship
function reply_starships(clicked_id){
    document.getElementById("planetInfoBlock").style.display = 'flex'
    let starship = searchNode.results[clicked_id]
    
    
    
    let result = 
    `
    <div class="info-wrapper">
        <div class = "title-nav"><h3>${starship.name}<p>(${starship.name})</p></h3><button onclick="closeInfoBlock()">Close</button></div>
        <div class = "info-blocks">
            
            <div class="left">
                <h4>Specification</h4>
                <div class="spec-sec">
                    <li>Model: <span>${starship.model}</span></li>
                    <li>Class:  <span>${starship.startship_class}</span></li>
                    <li>Manufacturer:  <span>${starship.manufacturer}</span></li>
                    <li>Price:  <span>${starship.cost_in_credits}</span> credists</li>
                    <li>Length:  <span>${starship.length}</span>m</li>
                    <li>Crew:  <span>${starship.crew}</span></li>
                    <li>Passengers:  <span>${starship.passengers}</span></li>
                    <li>Max atmosphering speed:  <span>${starship.msx_atmosphering_speed}</span></li>
                    <li>Hyperdrive Rating:  <span>${starship.hyperdrive_rating}</span></li>
                    <li>MGLT:  <span>${starship.MGLT}</span></li>
                    <li>Cargo capacity:  <span>${starship.cargo_capacity}</span> kg</li>
                    <li>Consumables:  <span>${starship.consumables}</span></li>
                </div>
            </div> 
            <div class="right">
                <div class="res">
                    <h4>Pilots</h4>
                    <ul id="pilotsTit"> 

                        ${lintToPar(starship, "pilots", "pilotsTit")}
                                
                    </ul>
                </div>
                <div class="res">
                    <h4>Films</h4>
                    <ul id="filmTit"> 
                    
                        ${linkToFilm(starship)}          
                    </ul>
                </div>
                
            </div> 
        </div>
    </div>`
    document.getElementById('planetInfoBlock').innerHTML = result;

}
//vehicles
function reply_vehicles(clicked_id){
    document.getElementById("planetInfoBlock").style.display = 'flex'
    let vehicles = searchNode.results[clicked_id]
    
    
    
    let result = 
    `
                <div class="info-wrapper">
                    <div class = "title-nav"><h3>${vehicles.name}<p>(${vehicles.name})</p></h3><button onclick="closeInfoBlock()">Close</button></div>
                    <div class = "info-blocks">
                        
                        <div class="left">
                            <h4>Specification</h4>
                            <div class="spec-sec">
                                <li>Model: <span>${vehicles.model}</span></li>
                                <li>Class:  <span>${vehicles.vehicle_class}</span></li>
                                <li>Manufacturer:  <span>${vehicles.manufacturer}</span></li>
                                <li>Price:  <span>${vehicles.cost_in_credits}</span> credists</li>
                                <li>Length:  <span>${vehicles.length}</span>m</li>
                                <li>Crew:  <span>${vehicles.crew}</span></li>
                                <li>Passengers:  <span>${vehicles.passengers}</span></li>
                                <li>Max atmosphering speed:  <span>${vehicles.max_atmosphering_speed}</span></li>
                                <li>Cargo capacity:  <span>${vehicles.cargo_capacity}</span> kg</li>
                                <li>Consumables:  <span>${vehicles.consumables}</span></li>
                            </div>
                        </div> 
                        <div class="right">
                            <div class="res">
                            <h4>Pilots</h4>
                            <ul id="pilotsTit"> 

                                ${lintToPar(vehicles, "pilots", "pilotsTit")}
                                        
                            </ul>
                            </div>
                            <div class="res">
                                <h4>Films</h4>
                                <ul id="filmTit"> 
                                
                                    ${linkToFilm(vehicles)}          
                                </ul>
                            </div>
                            
                        </div> 
                    </div>
                </div>`
    document.getElementById('planetInfoBlock').innerHTML = result;

}
//species
function reply_species(clicked_id){
    document.getElementById("planetInfoBlock").style.display = 'flex'
    let species = searchNode.results[clicked_id]
    
    
    
    let result = 
    `
                <div class="info-wrapper">
                    <div class = "title-nav"><h3>${species.name}<p>(${species.name})</p></h3><button onclick="closeInfoBlock()">Close</button></div>
                    <div class = "info-blocks">
                        
                        <div class="left">
                            <h4>Specification</h4>
                            <div class="spec-sec">
                                <li>Classification: <span>${species.classification}</span></li>
                                <li>Designation:  <span>${species.designation}</span></li>
                                <li>Average height:  <span>${species.average_height}</span>cm</li>
                                <li>Average livespan:  <span>${species.average_lifespan}</span> credists</li>
                                <li>Eye colors:  <span>${species.eye_colors}</span>m</li>
                                <li>Hair colors:  <span>${species.hair_colors}</span></li>
                                <li>Language:  <span>${species.language}</span></li>
                            </div>
                        </div> 
                        <div class="right">
                            <div class="res">
                                <h4>People</h4>
                                <ul id="peopleTit"> 

                                    ${lintToPar(species, "people", "peopleTit")}
                                        
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Homeworld</h4>
                                <ul id="homeworldTit"> 
                                
                                    ${linkToHomeworld(species)} 
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Films</h4>
                                <ul id="filmTit"> 
                                
                                    ${linkToFilm(species)}          
                                </ul>
                            </div>
                            
                        </div> 
                    </div>
                </div>`
    document.getElementById('planetInfoBlock').innerHTML = result;

}
//people
function reply_people(clicked_id){
    document.getElementById("planetInfoBlock").style.display = 'flex'
    let people = searchNode.results[clicked_id]
    
    
    
    let result = 
    `
                <div class="info-wrapper">
                    <div class = "title-nav"><h3>${people.name}<p>(${people.name})</p></h3><button onclick="closeInfoBlock()">Close</button></div>
                    <div class = "info-blocks">
                        
                        <div class="left">
                            <h4>Specification</h4>
                            <div class="spec-sec">
                                <li>Gender: <span>${people.gender}</span></li>
                                <li>Birth Year:  <span>${people.birth_year}</span></li>
                                <li>Homeworld:  <span id="homeworldTit">${linkToHomeworld(people)}</span></li>
                                <li>Eye color:  <span>${people.eye_color}</span></li>
                                <li>Hair color:  <span>${people.hair_color}</span></li>
                                <li>Mass:  <span>${people.mass}</span> G</li>
                                <li>Skin color:  <span>${people.skin_color}</span></li>

                            </div>
                        </div> 
                        <div class="right">
                            <div class="res">
                                <h4>StartShips</h4>
                                <ul id="starshipTit">
                 
                                    ${linkToStarship(people)}
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Vehicles</h4>
                                <ul id="vehiclesTit">
                                    ${linkToVehicles(people)}
                                    
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Species</h4>
                                <ul id="speciesTit">
                                    ${lintToPar(people, "species", "speciesTit")}
                                    
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Films</h4>
                                <ul id="filmTit"> 
                                
                                    ${linkToFilm(people)}          
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>`
    document.getElementById('planetInfoBlock').innerHTML = result;

}
//films
function reply_films(clicked_id){
    document.getElementById("planetInfoBlock").style.display = 'flex'
    let filmS = searchNode.results[clicked_id]
    
    
    
    let result = 
    `
                <div class="info-wrapper">
                    <div class = "title-nav"><h3>${filmS.title}<p>(${filmS.title})</p></h3><button onclick="closeInfoBlock()">Close</button></div>
                    <div class = "info-blocks">
                        
                        
                        <div class="right">
                            <div class="res">
                                <h4>Specification</h4>
                                <div class="spec-sec">
                                    <li>Opening crawl: <br><span>${filmS.opening_crawl  }</span></li>
                                    <li>Director:  <span>${filmS.director }</span> days</li>
                                    <li>Producer:  <span>${filmS.producer }</span> km</li>
                                    <li>Release date :  <span>${filmS.release_date }</span></li>
                                </div>
                            </div> 
                            <div class="res">
                                <h4>StartShips</h4>
                                <ul id="starshipTit">
            
                                    ${linkToStarship(filmS)}
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Vehicles</h4>
                                <ul id="vehiclesTit">
                                    ${linkToVehicles(filmS)}
                                    
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Species</h4>
                                <ul id="speciesTit">
                                    ${lintToPar(filmS, "species", "speciesTit")}
                                    
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Characters</h4>
                                <ul id="charactersTit">
            
                                    ${lintToPar(filmS, "characters", "charactersTit")}
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Planets</h4>
                                <ul id="planetsTit">
                                    ${linkToPlanet(filmS)}
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`
    document.getElementById('planetInfoBlock').innerHTML = result;

}



function closeInfoBlock() {
    document.getElementById("planetInfoBlock").style.display = 'none'
}


//grid configurator

let gridSelector = document.getElementById("gridAjust")
gridSelector.addEventListener("change", _=>{
    
    switch(gridSelector.value){
        case '1':
            document.documentElement.style.setProperty('--grid-change', "50%")
            break;
        case '2':
            document.documentElement.style.setProperty("--grid-change", "33%")
            break;
        case '3': 
            document.documentElement.style.setProperty("--grid-change", "25%")
            break;
    }
})