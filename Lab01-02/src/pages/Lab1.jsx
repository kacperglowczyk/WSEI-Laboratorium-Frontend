import React from 'react';
import CarProfile from '../components/CarProfile';
import { data as carData } from '../data/module-data';

function Lab1() {
  return (
    <div>
      <h1>Laboratorium 1</h1>
      <div className="row">
        {carData.map(car => (
          <div className="col-md-4" key={car.id}>
            <CarProfile car={car} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lab1;
