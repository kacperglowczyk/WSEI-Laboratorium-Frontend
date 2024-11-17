import React from 'react';

function CarProfile({ car }) {
    return (
        <div className="car-profile">
            <h2>Car Profile</h2>
            <p><strong>ID:</strong> {car.id}</p>
            <p><strong>Brand:</strong> {car.brand}</p>
            <p><strong>Production Year:</strong> {car.productionYear}</p>
            <p><strong>License Plate:</strong> {car.licensePlate}</p>
        </div>
    );
}

export default CarProfile;
