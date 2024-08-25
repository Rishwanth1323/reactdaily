import { Component } from "react";
import CustomToast from "./Toast/CustomToast";
class Button extends Component {
    state={
        isSubscribe:false,
        toast:false
    }
    clickHandler=()=>{
        this.setState({
             isSubscribe:!this.state.isSubscribe,
             toast:!this.state.toast
         })
    }
    render(){
        return(
            <div>
            <button type="button" onClick={this.clickHandler}>
                {this.state.isSubscribe? "Subscribe":"Unsubscribe" }
            </button>
            {this.state.toast && <CustomToast />}
            </div>
        )
    }
}
export default Button;