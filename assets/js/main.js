// const SECTION_LIST = {
//     "films": "https://swapi.dev/api/films/",
//     "people": "https://swapi.dev/api/people/",
//     "planets": "https://swapi.dev/api/planets/",
//     "species": "https://swapi.dev/api/species/",
//     "starships": "https://swapi.dev/api/starships/",
//     "vehicles": "https://swapi.dev/api/vehicles/"
// }

let filmNode = null;
let residentsNode = null;
let speciesNode = null;
let startshipNode = null;
let vehiclesNode = null;
let pilotNode = null;

//main node
let searchNode = null;


let type = "planets"
let mainUrl = `https://swapi.dev/api/${type}/?search=`;

//generate grid on load
const laod = document.addEventListener("load", search())

//search line reader
let searchLine = document.getElementById("search")
let searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener("click",_=>{
    mainUrl = `https://swapi.dev/api/${type}/?search=`;
    mainUrl +=searchLine.value
    search()

    
})
//search engine
async function search() {
    let dir = mainUrl
    searchNode = await fetch(dir)
    .then(response => response.json())
        .then(data => searchNode = data );
    switch(type){
        case "planets":
            await searchBody()
            break;
        case "people":
            await people_search()
            break;
        case "starships":
            await startship_search()
            break;
        case "vehicles":
            await vehicles_search()
            break;
    }
        
        
    return searchNode
    
}

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

                                    ${linkToPilot(starship)}
                                            
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

                                    ${linkToPilot(vehicles)}
                                            
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


function people_search() {
    
    let ped = document.getElementById("main")
    ped.innerHTML=''
    
    for (let i = 0; i < searchNode.results.length; i++){
        if(searchNode.results.length === 1){
            let persone = searchNode.results[0]
            let result2 = 
                `
                <div class="info-wrapper">
                    <div class = "title-nav"><h3>${persone.name}<p>(${persone.name})</p></h3></div>
                    <div class = "info-blocks">
                        
                        <div class="left">
                            <h4>Specification</h4>
                            <div class="spec-sec">
                                <li>Gender: <span>${persone.gender}</span></li>
                                <li>Birth Year:  <span>${persone.birth_year}</span></li>
                                <li>Homeworld:  <span>${persone.homeworld}</span></li>
                                <li>Eye color:  <span>${persone.eye_color}</span></li>
                                <li>Hair color:  <span>${persone.hair_color}</span></li>
                                <li>Mass:  <span>${persone.mass}</span> G</li>
                                <li>Skin color:  <span>${persone.skin_color}</span></li>
                            </div>
                        </div> 
                        <div class="right">
                            <div class="res">
                                <h4>StartShips</h4>
                                <ul id="starships">
                 
                                    
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Vehicles</h4>
                                <ul id="vehicles">
                 
                                    
                                </ul>
                            </div>
                            <div class="res">
                                <h4>Species</h4>
                                <ul id="species">
                 
                                    
                                </ul>
                            </div>
                            <div class="fil">
                                <h4>Films</h4>
                                <ul id="filmTit"> 
                                
                                    ${linkToFilm(persone)}          
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
                        <li>Birth Year: ${searchNode.results[i].birth_year }km</li>
                        <li>Gender : ${searchNode.results[i].gender }</li>
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

//search result config
function searchBody() {
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
                 
                                    ${linkToResidents(planet)}
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

//Convert links to residents data
async function linkToResidents(planet) {
    fes = ''
    let links = planet.residents
    if(links.length === 0){
        document.getElementById("resNames").innerText = "none"
    }else{
        for(let i =0; i<links.length;i++){
           await residentsAsemble(links[i])
        }
        document.getElementById("resNames").innerHTML = fes
    } 
}
const  residentsAsemble = async (link)=>{
    await residentsPicker(link).then((a)=>{
        fes+= ""+ a.name + " - " + a.gender +" - "+a.birth_year+"; <br> " 
    })
    return fes   
}
async function residentsPicker(link) {
    
    residentsNode= await fetch(link)
        .then(response => response.json())
        .then(data => residentsNode = data );
    return residentsNode
}



async function linkToPilot(transport) {
    tra = ""
    let toFind = transport.pilots;
    console.log(toFind.length)
    if(toFind.length === 0){
        console.log('none')
    }else{
        for(let i =0; i<toFind.length;i++){
            
           await pilotAsemble(toFind[i])
        }
        document.getElementById("pilotsTit").innerHTML = tra
    } 
}

const pilotAsemble = async (link)=>{
    await pilotPicker(link).then((a)=>{
        tra+= ""+ a.name + " - " + a.gender +" - "+a.birth_year+"; <br> " 
    })
    return tra
}
async function pilotPicker(link) {
    
    pilotNode=  await fetch(link)
        .then(response => response.json())
        .then(data =>   pilotNode = data );
    return  pilotNode
}


//Convert links to film data
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





// Next/Prev page nav
const NextPage = ()=>{
    if(searchNode.next == null){
        console.log("last")
    }else{
        mainUrl = searchNode.next; search();
    }
}
const PrevPage = ()=>{
    if(searchNode.previous == null){
        console.log("last")
    }else{
        mainUrl = searchNode.previous; search()
    }
    
}
 

//Options selector

async function option(id) {
    
    document.getElementById("optionTitle").innerText= id
    type = id
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
                                    ${linkToResidents(planet)}
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
                    
                </div>
                <div class="fil">
                    <h4>Films</h4>
                    <ul id="filmTit"> 
                    
                        ${linkToFilm(starship)}          
                    </ul>
                </div>
                <h4>Pilots</h4>
                    <ul id="pilotsTit"> 

                        ${linkToPilot(starship)}
                                
                    </ul>
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
                                
                            </div>
                            <div class="fil">
                                <h4>Films</h4>
                                <ul id="filmTit"> 
                                
                                    ${linkToFilm(vehicles)}          
                                </ul>
                            </div>
                            <h4>Pilots</h4>
                                <ul id="pilotsTit"> 

                                    ${linkToPilot(vehicles)}
                                            
                                </ul>
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