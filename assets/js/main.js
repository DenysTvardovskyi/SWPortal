// const SECTION_LIST = {
//     "films": "https://swapi.dev/api/films/",
//     "people": "https://swapi.dev/api/people/",
//     "planets": "https://swapi.dev/api/planets/",
//     "species": "https://swapi.dev/api/species/",
//     "starships": "https://swapi.dev/api/starships/",
//     "vehicles": "https://swapi.dev/api/vehicles/"
// }

let full = null;
let namePi = null
let searchNode = null;
let mainUrl = "https://swapi.dev/api/planets/?search=";

//generate grid on load
const laod = document.addEventListener("load", search())

//search line reader
let searchLine = document.getElementById("search")
let searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener("click",_=>{
    mainUrl +=searchLine.value
    search()
    console.log(searchNode)
    
})
//search engine
async function search() {
    let dir = mainUrl
    searchNode = await fetch(dir)
    .then(response => response.json())
        .then(data => searchNode = data );
        console.log(searchNode)
        await searchBody()
        
    return searchNode
    
}
//search result config
function searchBody() {
    let ped = document.getElementById("main")
    ped.innerHTML=''
    
    for (let i = 0; i < searchNode.results.length; i++){
        if(searchNode.results.length === 1){
            let planet = searchNode.results[0]
            linkToName(planet)
            linkToFilm(planet)
            let result2 = 
                `
                <div class="solo">
                
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
const  DETAILS_NAME = async (link)=>{
    await namePicker(link).then((a)=>{
        fes+= ""+ a.name + " - " + a.gender +" - "+a.birth_year+"; <br> " 
    })
    return fes   
}
async function namePicker(link) {
    
    namePi= await fetch(link)
        .then(response => response.json())
        .then(data => namePi = data );
    return namePi
}




//Convert links to film data
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
const DETAILS = async (link)=>{
    await filmPicker(link).then((a)=>{
        res+= ""+ a.title + " - " + a.release_date +"; <br> " 
    })
    return res
}
async function filmPicker(link) {
    
    full=  await fetch(link)
        .then(response => response.json())
        .then(data => full = data );
    return full
}





// Next/Prev page nav
const NextPage = ()=>{ console.log(mainUrl)
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
    

// More info Pop up
function reply_id(clicked_id){
    document.getElementById("planetInfoBlock").style.display = 'flex'
    let planet = searchNode.results[clicked_id]
    linkToName(planet)
    linkToFilm(planet)
    
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
                                </ul>
                            </div>
                            <div class="fil">
                                <h4>Films</h4>
                                <ul id="filmTit"> 
                                                    
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