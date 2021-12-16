# API-
var weeks = new Date(Date.now() + 12096e5)
const apiKey =`9a310b7d46fbc7e00fbc62646ecc790c`
const requette = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=FR&region=FR&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&release_date.lte=${weeks}&with_watch_monetization_types=flatrate`

fetch(requette)
.then (data => {
        if(data.ok){
            return data.json() 
    
        }else{
            let unElt = document.getElementById('erreur') 
            unElt.innerHTML = "<p>Bonjour, il y a une erreur</p>"
        }
})
.then(data => 
    {
    let recup = data.results.forEach((item, i) => {
    });
})

