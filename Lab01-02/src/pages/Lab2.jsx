import React from 'react';
import { useParams } from 'react-router-dom';
import { data as carData } from '../data/module-data';
import CarProfile from '../components/CarProfile';

function Lab2() {
  const { id } = useParams();
  const car = carData.find(car => car.id === parseInt(id));

  if (!id) {
    return <h2>Error: No ID provided</h2>;
  }

  if (!car) {
    return <h2>Error: No car found with ID {id}</h2>;
  }

  return (
    <div>
      <h1>Car Profile</h1>
      <CarProfile car={car} />
    </div>
  );
}

export default Lab2;
