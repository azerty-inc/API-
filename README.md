# API-
var weeks = new Date(Date.now() + 12096e5);
console.log(weeks)
const apiKey =`9a310b7d46fbc7e00fbc62646ecc790c`
const requette = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=FR&region=FR&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&release_date.lte=2021-12-27&with_watch_monetization_types=flatrate`

fetch(requette)
.then (data => {
        if(data.ok){
            return data.json();
    
        }else{
             console.log("erreur");
        }
})
.then(data => 
    {
    let recup = data.results.forEach((item, i) => {
        console.log(item);
    });
})

