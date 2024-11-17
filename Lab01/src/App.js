import React from 'react';
import CarProfile from './components/CarProfile';
import { data as carData } from './data/module-data.js';

function App() {
    return (
        <div className="App">
            <h1>Car Profiles</h1>
            {carData.map((car) => (
                <CarProfile key={car.id} car={car} />
            ))}
        </div>
    );
}

export default App;
