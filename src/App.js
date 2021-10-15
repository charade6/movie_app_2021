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
            <div>
                { isLoading 
                ? <img src="img/loading.gif" width="100px" height="100px" alt="loading"/> 
                : movies.map((movie) => {
                    return (
                        <Movie 
                            key = {movie.id}
                            id = {movie.id}
                            year = {movie.year}
                            title = {movie.title}
                            summary = {movie.summary}
                            poster = {movie.poster}
                        />
                    )
                }) }
            </div>
        )
    }
}

export default App