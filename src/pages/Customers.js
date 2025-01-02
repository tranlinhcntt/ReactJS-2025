import React from 'react';

function Customers() {
    const customers = [
        { id: 1, name: 'A', dob: '01/01/1985', gender: 'Nam', phone: '0901234567', email: 'abc@gmail.com', customerType: 'Gold', address: '123 đường Hoàn Kiếm' },
        { id: 2, name: 'B', dob: '15/06/1990', gender: 'Nữ', phone: '0919876543', email: 'bcd@gmail.com', customerType: 'Platinum', address: '456 Trần Hưng Đạo' },
        { id: 3, name: 'C', dob: '20/03/1988', gender: 'Nữ', phone: '0908765432', email: 'cde@gmail.com', customerType: 'Silver', address: '789 Mỹ Đình' },
    ];

    return (
        <div>
            <h2 className="text-center">Customer List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Customer Type</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={customer.id}>
                            <td>{index + 1}</td>
                            <td>{customer.name}</td>
                            <td>{customer.dob}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.email}</td>
                            <td>{customer.customerType}</td>
                            <td>{customer.address}</td>
                            <td>
                                <button className="btn btn-warning btn-sm mr-2">Edit</button>
                                <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Customers;
