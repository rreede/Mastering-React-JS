function Movie({ id, genre, title, img, userRating }) {
  return (
    <div className="Movie">
      <img src={img} alt="" />

      <h2>{title}</h2>
      <p>{genre}</p>
      <p> User rating: {userRating} / 10</p>
    </div>
  );
}

export default Movie;
