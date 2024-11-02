import { useEffect, useState } from 'react'; 

export function SecondComponent() {
    const [number, setNumber] = useState(0); 

    useEffect(() => {

        const interval = setInterval(() => { // Set up an interval to increment 'number' every second
            setNumber((number) => number + 1); // Update 'number' by incrementing its current value
            console.log("Number Incremented"); // Log message when number is incremented
        }, 1000);


// -----------------------------------------------------------------------------------------------------------
        return () => clearInterval(interval); // Clear interval on component unmount to avoid memory leaks
// -----------------------------------------------------------------------------------------------------------

    }, []); // Empty dependency array ensures useEffect runs only once on mount

    return (
        <div>
            <h1>Current Number : {number}</h1> {/* Display the current value of 'number' */}
        </div>
    );
}
