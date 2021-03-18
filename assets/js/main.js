// const SECTION_LIST = {
//     "films": "https://swapi.dev/api/films/",
//     "people": "https://swapi.dev/api/people/",
//     "planets": "https://swapi.dev/api/planets/",
//     "species": "https://swapi.dev/api/species/",
//     "starships": "https://swapi.dev/api/starships/",
//     "vehicles": "https://swapi.dev/api/vehicles/"
// }

let node = null;
let full = null;
let namePi = null
let searchNode = null;
let fes = [];
let mainUrl = "http://swapi.dev/api/planets/?page=1";

let gridSelector = document.getElementById("gridAjust")
gridSelector.addEventListener("change", _=>{
    console.log(gridSelector.value)
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


async function planetsAp() {
    node = await fetch(mainUrl)
        .then(response => response.json())
        .then(result => node = result );
    const laod = document.addEventListener("load",
        test())
    
};
async function nameP(link) {
    
    full=  await fetch(link)
        .then(response => response.json())
        .then(data => full = data );
    return full
}
async function namePicker(link) {
    
    namePi= await fetch(link)
        .then(response => response.json())
        .then(data => namePi = data );
    return namePi
}

planetsAp()
function closeInfoBlock() {
    document.getElementById("planetInfoBlock").style.display = 'none'
}

function reply_id(clicked_id,node){
    document.getElementById("planetInfoBlock").style.display = 'flex'
    let planet = node.results[clicked_id]
    linkToName(planet)
    linkToFilm(planet)
    
    let result = 
                `
                <button onclick="closeInfoBlock()">Close</button>
                <div>
                
                    <h3>Title: ${planet.name}  </h3>
                    <ul>
                        <li>Rotation Period: ${planet.rotation_period} h</li>
                        <li>Orbital Period: ${planet.orbital_period} days</li>
                        <li>Diameter: ${planet.diameter} km</li>
                        <li>Climate: ${planet.climate}</li>
                        <li>Gravity: ${planet.gravity} G</li>
                        <li>Terrain: ${planet.terrain}</li>
                        <li>Surface Water: ${planet.surface_water} %</li>
                        <li>Population: ${planet.population}</li>
                        <li>Residents:                          
                            <ul id="resNames"> 
                            </ul>
                        </li>
                        <li>Films: 
                            <ul id="filmTit"> 
                                
                            </ul>
                        </li>
                    </ul>
                </div>`
    document.getElementById('planetInfoBlock').innerHTML = result;

}

 const  DETAILS_NAME = async (link)=>{
    await namePicker(link).then((a)=>{
        fes+= ""+ a.name + " - " + a.gender +" - "+a.birth_year+"; <br> " 
    })
    return fes  
    
    
}


async function linkToName(planet) {
    fes = ''
    let links = planet.residents
    if(links.length==0){
        return "none"
    }else{
        for(let i =0; i<links.length;i++){
           await DETAILS_NAME(links[i])
        }
        document.getElementById("resNames").innerHTML = fes
    }
    
    
}

const DETAILS = async (link)=>{
    await nameP(link).then((a)=>{
        res+= ""+ a.title + " - " + a.release_date +"; <br> " 
    })
    return res
}

async function linkToFilm(planet) {
    res = ''
    let linksF = planet.films
    if(linksF.length==0){
        return "none"
    }else{
        for(let i =0; i<linksF.length;i++){
           await DETAILS(linksF[i])
        }
        document.getElementById("filmTit").innerHTML = res
    }
    
    
}

let searchLine = document.getElementById("search")
let searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener("click",_=>{
    search(searchLine.value)
    console.log(searchNode)
    
})
async function search(key) {
    let dir = `https://swapi.dev/api/planets/?search=${key}`
    searchNode = await fetch(dir)
    .then(response => response.json())
        .then(data => searchNode = data );
        console.log(searchNode)
        searchBody()
    return searchNode
    
}

function searchBody() {
    let ped = document.getElementById("main")
    ped.innerHTML=''
    for (let i = 0; i < searchNode.results.length; i++){
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
                    <li id="${i}" onclick="reply_id(this.id,searchNode)">More Info</li>
                </div>
            </div>
        </div>
        ` 
        ped.innerHTML += result1
    }
}


function test() {
    let ped = document.getElementById("main")
    ped.innerHTML=''
    for (let i = 0; i < node.results.length; i++){
        let result1 =
        `
        <div class="item">
            <div class="info">
                <div class="basic-info">
                    <li>Name: ${node.results[i].name}</li>
                    <li>Diameter: ${node.results[i].diameter}km</li>
                    <li>Population: ${node.results[i].population}</li>
                </div>
                <div class="more-info">
                    <li id="${i}" onclick="reply_id(this.id,node)">More Info</li>
                </div>
            </div>
        </div>
        ` 
        ped.innerHTML += result1
    }
}

const NextPage = ()=>{ console.log(mainUrl)
    if(node.next == null){
        console.log("last")
    }else{
        mainUrl = node.next; planetsAp();
    }
}
const PrevPage = ()=>{
    if(node.previous == null){
        console.log("last")
    }else{
        mainUrl = node.previous; planetsAp()
    }
    
}
    





