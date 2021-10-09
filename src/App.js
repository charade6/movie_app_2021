import { Component } from "react"
import axios from "axios"

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
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json')
        this.setState({movies, isLoading: false})
    }
    componentDidMount(){
        this.getMoives()
    }
    render(){
        const {isLoading} = this.state
        return(
            <div>
                {isLoading ? <img src="img/loading.gif" width="100px" height="100px" alt="loading"/> : '영화 데이터 출력'}
            </div>
        )
    }
}

export default App