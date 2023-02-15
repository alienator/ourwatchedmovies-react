function Movie(movie) {
    movie = movie.Movie;
    return (
        <div className="movie">
            <div className="image">
                <img src={movie.imagePaeth} />
            </div>
            <div className="desc">
                <h3>{movie.title}</h3>
                <p>{movie.summary}</p>
            </div>
        </div>
    );
}

export default Movie;
