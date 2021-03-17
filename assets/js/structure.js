let film_block = {
    title: null,
    release_date: null,
    director: null,
    producer: null,
    opening_crawl: null,
    characters:[
        {
            name: null,
            birth_year: null,
            gender: null,
            link: null
        }
    ],
    planets:[
        {
            name: null,
            climate: null,
            population: null,
            link: null
        }
    ],
    starships:[
        {
            name: null,
            model: null,
            cost_in_credits: null,
            link: null
        }
    ],
    vehicles:[
        {
            name: null,
            model: null,
            cost_in_credits: null,
            link: null
        }
    ],species:[
        {
            name: null,
            classification: null,
            homeworld: null,
        }
    ]
}


for(key in film_block){
    let li = document.createElement("li")
    li.innerText = key + " " + film_block[key]
    document.getElementById("main").appendChild(li)
}
