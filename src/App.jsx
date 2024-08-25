import { Component } from "react";
import CardCreation from "./Components/CardCreation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; 
class App extends Component {
  state = {
    addUser: false,
    array: [],
    newName: '',
    newDesignation: ''
  };

  addUser = () => {
    // Add a new user to the array
    const { newName, newDesignation, array } = this.state;
    if (newName && newDesignation) {
      this.setState({
        array: [...array, { name: newName, designation: newDesignation }],
        addUser: false, // Hide the input fields after adding
        newName: '',
        newDesignation: ''
      });
      toast.success("User added successfully!"); // Display success toast
    } else {
      toast.error("Failed to add user. Please provide both name and designation."); // Display error toast if fields are empty
    }
  };

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value });
  };

  handleDesignationChange = (event) => {
    this.setState({ newDesignation: event.target.value });
  };

  deleteUser = (index) => {
    // Remove the user at the specified index from the array
    const newArray = this.state.array.filter((_, i) => i !== index);
    this.setState({ array: newArray });
    toast.error("User deleted successfully!"); // Display error toast on delete
  };

  render() {
    const { addUser, array, newName, newDesignation } = this.state;

    return (
      <>
      <ToastContainer />  
        <button onClick={() => this.setState({ addUser: !addUser })}>
          {addUser ? 'Cancel' : 'Add a User'}
        </button>

        {addUser && (
          <>
            <input
              type="text"
              placeholder="name"
              value={newName}
              onChange={this.handleNameChange}
            />
            <input
              type="text"
              placeholder="designation"
              value={newDesignation}
              onChange={this.handleDesignationChange}
            />
            <button onClick={this.addUser}>Submit</button>
          </>
        )}

        {array.map((each, index) => (
          <CardCreation
            key={index}
            title={each.name}
            designation={each.designation}
            onDelete={() => this.deleteUser(index)}  // Pass the delete function
          />
        ))}

        
      </>
    );
  }
}

export default App;
