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

function planetsAp() {
    node = fetch(mainUrl)
        .then(response => response.json())
        .then(result => node = result );
    
};
function nameP(link) {
    
    full= fetch(link)
        .then(response => response.json())
        .then(data => full = data );
    return full
}
function namePicker(link) {
    
    namePi= fetch(link)
        .then(response => response.json())
        .then(data => namePi = data );
    return namePi
}

planetsAp()
function closeInfoBlock() {
    document.getElementById("planetInfoBlock").style.display = 'none'
}

function reply_id(clicked_id){
    document.getElementById("planetInfoBlock").style.display = 'flex'
    let planet = node.results[clicked_id]

    
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
                            <ul> 
                            ${planet.residents.length ===0? "none":  linkToName(planet)}
                            </ul>
                        </li>
                        <li>Films: 
                            <ul> 
                                ${planet.films.length ===0? "none": linkToFilm(planet) }
                            </ul>
                        </li>
                    </ul>
                </div>`
    document.getElementById('planetInfoBlock').innerHTML = result;

}

const DETAILS_NAME = (link)=>{
    namePicker(link).then((a)=>{
        fes=""
        fes= ""+ a.name + " - " + a.gender +" - "+a.birth_year+"; <br> " 

    })
    return fes
}

function linkToName(planet) {
    let links = planet.residents
    let m = ''
    if(links.length==0){
        return "none"
    }else{
        for(let i =0; i<links.length;i++){
                m +=DETAILS_NAME(links[i])     

        }
        return m
    }
    
}

const DETAILS = (link)=>{
    nameP(link).then((a)=>{
        res =""
        res+= ""+ a.title + " - " + a.release_date +"; <br> " 
        
    })
    return res
}

function linkToFilm(planet) {
    let linksF = planet.films
    let g = []
    while(linksF.length >0){
        setInterval(g.push(DETAILS(linksF[0])),3000)
        linksF.shift()
    }
    return g

}



function test() {
    let ped = document.getElementById("main")
    ped.innerHTML=''
    
    
    
    console.log(node);
    // for(let i= 0; i < node.results.length; i++) {
    //     if(node.results[i].name === "Callisto") {
    //         console.log(node.results[i]);
    //     }
    // }
    let countries = document.getElementById('main');
    for (let i = 0; i < node.results.length; i++){
        let parantDiv = document.createElement("div")
        parantDiv.classList.add("item")
        let info  = document.createElement("div")
        info.classList.add("info")
        let basicinfo = document.createElement("div")
        basicinfo.classList.add("basic-info")
        let basicInfoName = document.createElement("li")
        basicInfoName.innerText = "Name: "+ node.results[i].name
        let basicInfoDiameter = document.createElement("li")
        basicInfoDiameter.innerText = "Diameter: "+node.results[i].diameter +"km"
        let basicInfoPopulation = document.createElement("li")
        basicInfoPopulation.innerText = "Population: "+node.results[i].population
        basicinfo.appendChild(basicInfoName)
        basicinfo.appendChild(basicInfoDiameter)
        basicinfo.appendChild(basicInfoPopulation)
        let moreInfo = document.createElement("div")
        moreInfo.classList.add("more-info")
       
        let moreInfoMore = document.createElement("li")
        moreInfoMore.innerText = "More Info"
        moreInfoMore.setAttribute("id", i)
        moreInfoMore.setAttribute("onclick", "reply_id(this.id)")
        moreInfo.appendChild(moreInfoMore)
        info.appendChild(basicinfo)
        info.appendChild(moreInfo)
        parantDiv.appendChild(info)
        countries.appendChild(parantDiv)
    }

}

const NextPage = ()=>{ console.log(mainUrl)
    if(node.next == null){
        console.log("last")
    }else{
        mainUrl = node.next; planetsAp();
    }



    if(node.next === null ){
        document.getElementById("next").style.display = 'none'
    } else{
        document.getElementById("next").style.display = 'inline'
        
        
    }
    if(node.previous === null ){
        document.getElementById("prev").style.display = 'none'
    } else{
        document.getElementById("prev").style.display = 'inline'
    }
}
const PrevPage = ()=>{
    if(node.previous == null){
        console.log("last")
    }else{
        mainUrl = node.previous; planetsAp()
    }
    
    
    if(node.next === null ){
        document.getElementById("next").style.display = 'none'
    } else{
        document.getElementById("next").style.display = 'inline'
        
    }}
    if(node.previous === null ){
        document.getElementById("prev").style.display = 'none'
    } else{
        document.getElementById("prev").style.display = 'inline'
    }


    





