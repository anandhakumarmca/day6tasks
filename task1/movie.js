class Movie{// Create a Class as Movie
    constructor(title, studio, rating){ //*a)create a constructor for class Movie with title, studio, and rating as arguments and sets the respective class properties
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";//*b) set the class property rating to "PG" as default when no rating is provided
    }

    static getPG(movieArray){
        return movieArray.filter(movie => movie.rating === "PG");
    }//*c)getPG method returns a new array of only those movies in the input array with a rating of "PG"
}

const movies = [
  new Movie("Ponniyin Selvan", "LYCA", "PG"),
  new Movie("The Great Indian Kitchen", "KKR", "PG"),
  new Movie("Por Thozhil", "APPLAUSE", "PG-13"),
  new Movie("Viduthalai ", "GRASSROOT")// didn't set rating it will consider as "PG" which already mentioned in class
];//*c)create movieArray for the get method

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);//display the movie which has a rating as "PG"

const englishMovie = new Movie("Casino Royale", "Eon Productions", "PG13");//*d)creates an instance of the class Movie 
console.log(englishMovie);//display the englishMovie values
