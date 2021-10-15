import Proptypes from 'prop-types'

function Movie({title, year, summary, poster}) {
    return (
        <div class="movie-data">
            <img src={poster} alt={title} title={title} />
            <h3 class="movie-title">{title}</h3>
            <h5 class="movie-year">{year}</h5>
            <p class="movie-summary">{summary}</p>
        </div>
    )
}

Movie.propTypes = {
    year: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired
}

export default Movie