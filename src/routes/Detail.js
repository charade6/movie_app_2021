import { Component } from "react"

class Detail extends Component {
    componentDidMount(){
        const {location, history} = this.props
        if(location.state === undefined){
            history.push("/")
        }
    }
    render (){
        // const {location} = this.props
        return(
            <span>hello</span>
            
        )
    }
}

export default Detail