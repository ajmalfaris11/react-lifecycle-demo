import { useState } from 'react'; // Import useState hook from React

import { MyComponent } from './components/MyComponent'; // Import the MyComponent component

function App() {
    const [show, setShow] = useState(true); // Initialize state 'show' to true and create a function to update it

    return (
        <div>
            {/* Button to remove the component by setting 'show' to false */}
            <button onClick={() => setShow(false)}>Remove Component</button>
            <br />
            <br />
            <br />
            <br />
            {/* Conditionally render MyComponent based on the value of 'show' */}
            {show && <MyComponent />}
        </div>
    );
}

export default App; 
