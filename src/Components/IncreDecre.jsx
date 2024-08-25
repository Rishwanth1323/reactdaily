import { Component } from "react";

class IncreDecre extends Component{
    state={
        count:0
    }
    incrementHandler = () => {
        this.setState({
            count: this.state.count+1
        })
    }
    decrementHandler = () => {
        this.setState({
            count: this.state.count-1
        })
    }
    resetHandler = () =>{
        this.setState({
            count: 0
        })
    }
    render(){
        return(
            <div>
                    <h1> {this.state.count} </h1>
                    <button type="button" onClick={this.incrementHandler}>Increment</button>
                    <button onClick={this.decrementHandler} >Decrement</button>
                    <button onClick={this.resetHandler} >Reset</button>
                    
            </div>
        )
    }
}
export default IncreDecre;