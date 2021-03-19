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


export function people_search()