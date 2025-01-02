import React from 'react';

function Facilities() {
    const facilities = [
        { id: 1, name: 'Villa Ocean View', area: '200m²', cost: '10,000,000 VND', maxPeople: 10, rentType: 'Day', description: 'Luxury villa with ocean view' },
        { id: 2, name: 'Deluxe House', area: '120m²', cost: '7,000,000 VND', maxPeople: 8, rentType: 'Month', description: 'Comfortable house for family' },
        { id: 3, name: 'Single Room', area: '30m²', cost: '1,500,000 VND', maxPeople: 2, rentType: 'Day', description: 'Cozy room for couples' },
    ];

    return (
        <div>
            <h2 className="text-center">Facility List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Area</th>
                        <th>Cost</th>
                        <th>Max People</th>
                        <th>Rent Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {facilities.map((facility, index) => (
                        <tr key={facility.id}>
                            <td>{index + 1}</td>
                            <td>{facility.name}</td>
                            <td>{facility.area}</td>
                            <td>{facility.cost}</td>
                            <td>{facility.maxPeople}</td>
                            <td>{facility.rentType}</td>
                            <td>{facility.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Facilities;
