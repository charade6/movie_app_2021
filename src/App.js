import { Component } from "react";

class App extends Component {
    state = {
        isLoading: true
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 6000);
    }
    render(){
        const {isLoading} = this.state
        return(
            <div>
                {isLoading ? <img src="img/loading.gif" alt="loading"/> : '영화 데이터 출력'}
            </div>
        )
    }
}

export default App