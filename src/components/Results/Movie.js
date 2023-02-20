export default function Movie(movie) {
    movie = movie.Movie;
    return (
        <div className="movie">
            <div className="image">
                <img src={movie.imagePath} title={movie.title} alt={movie.title} />
            </div>
            <div className="desc">
                <h3>{movie.title}</h3>
                <p>{movie.summary}</p>
            </div>
        </div>
    );
}
