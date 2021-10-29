import Proptypes from 'prop-types'
import "./Movie.css"

function Movie({title, year, summary, poster, genres}) {
    return (
        <div className="movie-data">
            <img src={poster} alt={title} title={title} />
            <h3 className="movie-title">{title}</h3>
            <h5 className="movie-year">{year}</h5>
            <ul className="movie-genres">
                {genres.map((genre, index) => {
                    return <li key={index} className="movie-genre">{genre}</li>
                })}
            </ul>
            <p className="movie-summary">{summary}</p>
        </div>
    )
}

Movie.propTypes = {
    year: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired
}

export default Movie