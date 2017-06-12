$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

var movietemplate = '<div class="movie-item">' +
                    '<h2 class="title"></h2>' +
                    '<img class="posterImage">' +
                    '<p class="tags"></p>' +
                    '<p class="rtRating"></p>' +
                    '<p class="myRating"></p>' +
                    '<p class="synopsis"></p>' +
                    '<p class="review"></p>' +
                    '<p class="recommendations"></p>' +
                    '<p class="releasedate"></p>' +
                    '<video class="trailer">' +
                    '</div>';

var posterTempMovie = '<div class="movie-poster">' +
                      '<img class="posterImage">' +
                      '<p class="myRating"></p>' +
                      '</div>';


var prev_handler = window.onload;
window.onload = function displayAllPosters(event) {
    for (i = 0; i < movies.length; i++) { 
        console.log(movies[i]);
        var movie = movies[i];
        var elem = $.parseHTML(movietemplate);
        $("#all-the-movies").append(elem);
        $(elem).find("img.posterImage").attr("src", movie.posterImage);
        $(elem).find("p.myRating").html(movie.myRating);
    }   
    sortMovieTitle(event);
     event.preventDefault();

}
if (prev_handler) {
    prev_handler();
}
function comparemovieTitle(a, b) {
  return a.name.localeCompare(b.name);
}

 function sortMovieTitle(event) {
    console.log("sort by alphabet");
    movies.sort(comparemovieTitle);
    $("#all-the-movies").empty();
    displayAllPosters(event);
    console.log(movies);
    event.preventDefault();
}

$( ".posterImage" ).click(function displayAllPosters(event) {
    for (i = 0; i < movies.length; i++) { 
        console.log(movies[i]);
        var movie = movies[i];
        var elem = $.parseHTML(movietemplate);
        $(elem).attr("id", movie.name );
        $("#all-the-movies").append(elem);
        $(elem).find("h2.title").html(movie.movieTitle);
        $(elem).find("img.posterImage").attr("src", movie.posterImage);
        $(elem).find("p.synopsis").html(movie.synopsis);
        $(elem).find("p.tags").html(movie.tags);
        $(elem).find("p.rtRating").html(movie.rtRating);
        $(elem).find("p.myRating").html(movie.myRating);
        $(elem).find("p.releasedate").html(movie.releasedate);
        $(elem).find("video.trailer").attr("src", movie.trailer);
    $(elem).find("p.recommendations").html(movie.recommendations);
    }   
     event.preventDefault();

});

/*
var prev_handler = window.onload;
window.onload = function displayAllPosters(event) {
    for (i = 0; i < movies.length; i++) { 
        console.log(movies[i]);
        var movie = movies[i];
        var elem = $.parseHTML(movietemplate);
        $(elem).attr("id", movie.name );
        $("#all-the-movies").append(elem);
        $(elem).find("h2.title").html(movie.movieTitle);
        $(elem).find("img.posterImage").attr("src", movie.posterImage);
        $(elem).find("p.synopsis").html(movie.synopsis);
        $(elem).find("p.tags").html(movie.tags);
        $(elem).find("p.rtRating").html(movie.rtRating);
        $(elem).find("p.myRating").html(movie.myRating);
        $(elem).find("p.releasedate").html(movie.releasedate);
        $(elem).find("video.trailer").attr("src", movie.trailer);
    $(elem).find("p.recommendations").html(movie.recommendations);
    }   
     event.preventDefault();
}
    if (prev_handler) {
        prev_handler();
    }
   function sortAlphabetically(event) {
    movies.sort(movies.movieTitle);
    $("#all-the-movies").append(movietemplate);
    event.preventDefault();
    console.log(movies);
}
*/

function displayAllMovies(event) {
    for (i = 0; i < movies.length; i++) { 
        console.log(movies[i]);
        var movie = movies[i];
        var elem = $.parseHTML(movietemplate);
        $(elem).attr("id", movie.name );
        $("#all-the-movies").append(elem);
        $(elem).find("h2.title").html(movie.movieTitle);
        $(elem).find("img.posterImage").attr("src", movie.posterImage);
        $(elem).find("p.synopsis").html(movie.synopsis);
        $(elem).find("p.tags").html(movie.tags);
        $(elem).find("p.rtRating").html(movie.rtRating);
        $(elem).find("p.myRating").html(movie.myRating);
        $(elem).find("p.releasedate").html(movie.releasedate); $(elem).find("p.recommendations").html(movie.recommendations);
    }   
     event.preventDefault();
}

function displayAllPosters(event) {
    for (i = 0; i < movies.length; i++) { 
        console.log(movies[i]);
        var movie = movies[i];
        var elem = $.parseHTML(posterTempMovie);
        $("#all-the-movies").append(elem);
        $(elem).find("img.posterImage").attr("src", movie.posterImage);
        $(elem).find("p.myRating").html(movie.myRating);
    }   
     event.preventDefault();
}

function compareByYear(lhs, rhs) {
  if (lhs.releasedate > rhs.releasedate) {
    return -1;
  }
  if (lhs.releasedate < rhs.releasedate) {
    return 1;
  }
  return 0;
}


 function sortByYear(event) {
    console.log("sort by year");
    movies.sort(compareByYear);
    $("#all-the-movies").empty();
    displayAllPosters(event);
    console.log(movies);
    event.preventDefault();
}


function addMovie(event) {
    $("#all-the-movies").append(movietemplate);
    console.log($("#all-the-movies"));
    event.preventDefault();
}

function comparemyRating(lhs, rhs) {
  if (lhs.myRating > rhs.myRating) {
    return -1;
  }
  if (lhs.myRating < rhs.myRating) {
    return 1;
  }
  return 0;
}

function comparemovieTitle(a, b) {
  return a.name.localeCompare(b.name);
}

 function sortMovieTitle(event) {
    console.log("sort by alphabet");
    movies.sort(comparemovieTitle);
    $("#all-the-movies").empty();
    displayAllPosters(event);
    console.log(movies);
    event.preventDefault();
}


 function sortByYear(event) {
    console.log("sort by year");
    movies.sort(compareByYear);
    $("#all-the-movies").empty();
    displayAllPosters(event);
    console.log(movies);
    event.preventDefault();
}


function sortByMyRating(event){
 console.log("sort by myRating");
 movies.sort(comparemyRating);
 $("#all-the-movies").empty();
displayAllPosters(event);
 console.log(movies);
 event.preventDefault();
}

function sortByTags(event){
 console.log("sort by Tags");
 $("#all-the-movies").empty();
 displayAllPosters(event);
 console.log(movies);
 event.preventDefault();
}

