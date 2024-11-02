
import React from 'react'; // Import the React library




// Define a new class component called MyComponent that extends React.Component
export class MyComponent extends React.Component {
    // Constructor method, called when the component is first created
    constructor(props) {
        super(props); // Call the parent class's constructor with props
        console.log("Constructor Function Called"); // Log a message to indicate the constructor is called
        this.state = { number: 1 }; // Initialize the component's state with a number property set to 1
    }




    // Lifecycle method called once when the component is added to the DOM
    componentDidMount() {
        console.log("componentDidMount"); // Log a message to indicate the component has mounted
    }




    // Lifecycle method called after every re-render (state or prop change)
    componentDidUpdate() {
        console.log("componentDidUpdate"); // Log a message to indicate the component has updated
    }




    // Lifecycle method called just before the component is removed from the DOM
    componentWillUnmount() {
        console.log("componentWillUnmount"); // Log a message to indicate the component will unmount
    }




    // Method to update the number state when called
    updateNumber() {
        this.setState({ number: 1 }); // Update the state to set number to 1
    }



    
    // Render method to define the component's UI
    render() {
        return (
            <div>
                {/* Display the current value of number from the component's state */}
                <h3>Number : {this.state.number}</h3>
                {/* Button to trigger updateNumber when clicked */}
                <button onClick={() => this.updateNumber()}>Update</button>
            </div>
        );
    }
}

