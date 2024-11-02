import { useState } from "react"; // Import useState hook from React

import { MyComponent } from "./components/MyComponent"; // Import the MyComponent component
import { SecondComponent } from "./components/SecondComponent";

function App() {
  const [show, setShow] = useState(true); // Initialize state 'show' to true and create a function to update it
  const [show2, setShow2] = useState(false);
  return (
    <div>
      {/* Button to remove the component by setting 'show' to false */}
      <button onClick={() => setShow(false)}>Remove Component</button>
      <button onClick={() => setShow2(show => !show2)}>{show2?"Remove Timer" : "Start Timer"} Component</button>
      <br />
      <br />
      <br />
      <br />
      {/* Conditionally render MyComponent based on the value of 'show' */}
      {show && (
          <MyComponent />
      )}

      {show2 && (
          <SecondComponent />
      )}
    </div>
  );
}

export default App;
