//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=05c29ad5481c70be52281708e669671e


var api_key = "api_key=05c29ad5481c70be52281708e669671e"
var base_link = "https://api.themoviedb.org/3"
var api_url = base_link + " /discover/movie?sort_by=popularity.desc&" + api_key

var form = document.getElementById("form");
var main = document.getElementById("main");
var search = document.getElementById("search");


var img_url = "https://image.tmdb.org/t/p/w500";
var searchUrl = base_link + "/search/movie?" + api_key;


// https://api.themoviedb.org/3/search/movie?&api_key=05c29ad5481c70be52281708e669671e






//  function getMovies(url) {
// fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=05c29ad5481c70be52281708e669671e")
//     .then(res => res.json())
//     .then(data => {
//      console.log(data.results)
//         showMovies(data.results)
//     })
// }  


// getMovies()

function getMovies(url) {
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=05c29ad5481c70be52281708e669671e")
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            showMovies(data.results)
        })
}

function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach(movie => {
        var { poster_path, title, vote_average, overview } = movie;
        var movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        // symbol `` write html code safy بون لبصيغة القديمة ام الكوتيشن 
        //$ declare variables

        movieEl.innerHTML = `
         <div class="card">
        <img src="${img_url + poster_path}" alt="${title}"/>
        // <div class="movie-info">
        // <h3>${title}</h3>
        // </div>
        <div class="overview">
        <h3> overview: </h3>
        ${overview}
        </div>
        </div>
        `
        main.appendChild(movieEl);
        movieEl.style.border = "1px solid gray"
        movieEl.style.display = "flex"
        movieEl.style.width = "300px"
        movieEl.style.backgroundColor = "black"
        movieEl.style.color = "gray"
        movieEl.style.boxShadow = "10px 10px 10px grey"
        movieEl.style.textAlign = "center"
        movieEl.style.fontSize = "smaller"
        movieEl.style.margin = "auto"
        movieEl.style.height = "490px"
        movieEl.style.marginTop = "15px"
    });



}

getMovies(api_url);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    var searchTerm = search.value
    if (searchTerm) {
        getMovies(searchUrl + '&query=' + searchTerm);
    } else {
        getMovies(api_url);
    }

})




















