import { useState } from 'react';

const Home = () => {
    
    const [name, setName] = useState('mario'); // if name is just called without the use of setName then mario is returned
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('dayyan'); // this changes the name to luigi 
        setAge(20)
    } 

    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;