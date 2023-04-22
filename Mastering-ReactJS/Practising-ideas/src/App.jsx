import "./App.css";
import Movie from "./Movie";
import Header from "./Header";

const movies = [
  {
    id: 0,
    title: "Top Gun: Maverick",
    genre: "Action",
    movieImage: "1.jpg",
    userRating: "8",
  },
  {
    id: 1,
    title: "Logan",
    genre: "Action / Drama",
    movieImage: "./2.jpg",
    userRating: "8",
  },
  {
    id: 2,
    title: "John Wick 3",
    genre: "Action",
    movieImage: "./3.jpg",
    userRating: "6",
  },
  {
    id: 3,
    title: "Avatar",
    genre: "Action / Sci-Fi",
    movieImage: "./4.jpg",
    userRating: "9",
  },
  {
    id: 4,
    title: "The Godfather",
    genre: "Action",
    movieImage: "./5.jpg",
    userRating: "4",
  },
  {
    id: 5,
    title: "Batman: The Dark Knight",
    genre: "Action",
    movieImage: "./6.jpg",
    userRating: "6",
  },
  {
    id: 6,
    title: "Puss in Boots: The Last Wish",
    genre: "Comedy / Animation",
    movieImage: "./7.jpg",
    userRating: "6",
  },
  {
    id: 7,
    title: "Babylon",
    genre: "Action / Comedy",
    movieImage: "./8.jpg",
    userRating: "6",
  },
];

function App() {
  const movieItems = movies.map((movie) => (
    <Movie
      img={movie.movieImage}
      id={movie.id}
      title={movie.title}
      genre={movie.genre}
      userRating={movie.userRating}
    />
  ));

  return (
    <div className="App">
      <Header />
      <h2>Most Popular Movies</h2>
      <div className="movieContainer"> {movieItems}</div>
    </div>
  );
}

export default App;
