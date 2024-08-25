import { Component } from "react";

class StateP extends Component {

    state={
        name: "John"
    }


    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
            </>
        )
    }
}
export default StateP;