import React from 'react';

function Services() {
    const services = [
        { id: 1, name: 'Villa Deluxe', area: '200m²', price: '10,000,000 VND', maxPeople: 4, rentType: 'Day' },
        { id: 2, name: 'Luxury Room', area: '50m²', price: '5,000,000 VND', maxPeople: 2, rentType: 'Night' },
        { id: 3, name: 'House Premium', area: '120m²', price: '8,000,000 VND', maxPeople: 3, rentType: 'Month' },
    ];

    return (
        <div>
        <h2 className="text-center">Service List</h2>
        <div className="d-flex flex-wrap justify-content-center">
            {services.map(service => (
                <div className="card m-2" style={{ width: "18rem" }} key={service.id}>
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p>Area: {service.area}</p>
                        <p>Price: {service.price}</p>
                        <p>Max People: {service.maxPeople}</p>
                        <p>Rent Type: {service.rentType}</p>
                        <button className="btn btn-warning btn-sm mr-2 m-2">Edit</button>
                        <button className="btn btn-danger btn-sm">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    );
}

export default Services;
