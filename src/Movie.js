import Proptypes from 'prop-types'

function Movie({id, title, year, summery, poster}) {
    return (
        <h4>{title}</h4>
    )
}

Movie.propTypes = {
    id: Proptypes.number.isRequired,
    year: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired
}

export default Movie