import { Component } from "react"
import axios from "axios"
import Movie from "./Movie"

class App extends Component {
    state = {
        isLoading: true,
        movies: []
    }

    getMoives = async () => {
        const {
            data: {
                data: {movies}
            }
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
        this.setState({movies, isLoading: false})
    }
    componentDidMount(){
        this.getMoives()
    }
    render(){
        const { isLoading, movies } = this.state
        return(
            <section class="container">
                { isLoading 
                ? (<div class="loader"><img src="img/loading.gif" alt="loading"/></div>)
                : (<div class="movies">
                    {
                        movies.map((movie) => {
                            return (
                                <Movie 
                                    key = {movie.id}
                                    id = {movie.id}
                                    year = {movie.year}
                                    title = {movie.title}
                                    summary = {movie.summary}
                                    poster = {movie.medium_cover_image}
                                />
                            )
                        })
                    }</div>) 
                }
            </section>
        )
    }
}

export default App