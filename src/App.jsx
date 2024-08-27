import { Component } from "react";

class App extends Component {
    state = {
        fahrenheit: '', //important
        celsius: '', // important
    };

    changeHandler = (e) => {
        let fahrenheit = e.target.value;
        let celsius = (5 / 9) * (fahrenheit - 32);

        this.setState({
            fahrenheit: fahrenheit,
            celsius: celsius.toFixed(2), // Setting to 2 decimal places for clarity
        });
    };

    changeHandle = (e) => {
        let celsius = e.target.value;
        let fahrenheit = (9 / 5) * celsius + 32;

        this.setState({
            celsius: celsius,
            fahrenheit: fahrenheit.toFixed(2), // Setting to 2 decimal places for clarity
        });
    };

    render() {
        return (
            <>
                <h1>Hello, World!</h1>
                <h1>CONVERTER</h1>
                <input
                    type="text"
                    placeholder="Fahrenheit"
                    value={this.state.fahrenheit} // impoertant
                    onChange={this.changeHandler}
                /><br />
                <input
                    type="text"
                    placeholder="Celsius"
                    value={this.state.celsius}
                    onChange={this.changeHandle}
                />
            </>
        );
    }
}

export default App;
