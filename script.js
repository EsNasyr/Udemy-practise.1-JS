const numberOfFilms = "";

const firstAnswer = +prompt('Сколь фильмовс посмотрели?')

const personalMovieDB = {
    count: firstAnswer,
    movies: {

    },
    actors: {

    },
    genders: [],
    privat: false
};

const secondAnswer = prompt('Один из последних просмотренных фильмов?');
const thirdAnswer = prompt('На сколько оцените его?');
personalMovieDB.movies[secondAnswer] = thirdAnswer

console.log(personalMovieDB)