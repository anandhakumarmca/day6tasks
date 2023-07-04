class Movie{// Create a Class as Movie
    constructor(title, studio, rating){ //*a)create a constructor for class Movie with title, studio, and rating as arguments and sets the respective class properties
        this.title = title;
        this.studio = studio;
        this._rating = rating;
    }
    
    set rating(newRating) {//*b) set the class property rating to "PG" as default when no rating is provided
    if (newRating) {
      this._rating = newRating;
    } else {
      this._rating = "PG";
    }
  }

    static getPG(movieArray){
        return movieArray.filter(movie => movie._rating === "PG");
    }//*c)getPG method returns a new array of only those movies in the input array with a rating of "PG"
}

const movies = [
  new Movie("Ponniyin Selvan", "LYCA", "PG"),
  new Movie("The Great Indian Kitchen", "KKR", "PG"),
  new Movie("Por Thozhil", "APPLAUSE", "PG-13"),
  new Movie("Viduthalai ", "GRASSROOT")// didn't set rating it will consider as "PG" which already mentioned in class
];//*c)create movieArray for the get method


const spiderMan = new Movie("Spider Man", "Sony Pictures");
spiderMan.rating = "PG"; // Setting the rating using the setter
console.log("Displaying SpiderMan Values \n",spiderMan); // display the spiderMan values

const pgMovies = Movie.getPG(movies);
console.log("\nDisplaying All Movies Which has a rating as PG \n",pgMovies);//display the movie which has a rating as "PG"

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");//*d)creates an instance of the class Movie 
console.log("\nDisplaying casinoRoyale Values \n",casinoRoyale);//display the casinoRoyale values
