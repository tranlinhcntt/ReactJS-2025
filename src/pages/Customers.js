import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Customers() {
    const [customers, setCustomers] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [editCustomer, setEditCustomer] = useState(null); 
    const [newCustomer, setNewCustomer] = useState({
        name: '',
        dob: '',
        gender: '',
        phone: '',
        email: '',
        customerType: '',
        address: ''
    });
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        
        axios.get('http://localhost:3100/customers')
            .then(response => {
                setCustomers(response.data); 
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Failed to fetch customers');
                setLoading(false);
            });
    }, []);

    
    const handleNewCustomerChange = (e) => {
        const { name, value } = e.target;
        setNewCustomer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

   
    const handleAddCustomer = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3100/customers', newCustomer)
            .then(response => {
                setCustomers(prevCustomers => [response.data, ...prevCustomers]);
                setNewCustomer({
                    name: '',
                    dob: '',
                    gender: '',
                    phone: '',
                    email: '',
                    customerType: '',
                    address: ''
                }); 
                setShowAddForm(false); 
            })
            .catch(err => {
                console.error(err);
                setError('Failed to add customer');
            });
    };

   
    const handleEditCustomer = (customer) => {
        setEditCustomer(customer);
    };

    
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditCustomer(prevCustomer => ({
            ...prevCustomer,
            [name]: value
        }));
    };

    
    const handleUpdateCustomer = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3100/customers/${editCustomer.id}`, editCustomer)
            .then(response => {
                setCustomers(prevCustomers => 
                    prevCustomers.map(customer => 
                        customer.id === editCustomer.id ? response.data : customer
                    )
                );
                setEditCustomer(null);
            })
            .catch(err => {
                console.error(err);
                setError('Failed to update customer');
            });
    };

    
    const handleDeleteCustomer = (id) => {
        axios.delete(`http://localhost:3100/customers/${id}`)
            .then(() => {
                setCustomers(prevCustomers => 
                    prevCustomers.filter(customer => customer.id !== id)
                );
            })
            .catch(err => {
                console.error(err);
                setError('Failed to delete customer');
            });
    };

    if (loading) {
        return <p>Loading customers...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2 className="text-center">Danh sách khách hàng</h2>
            
            {/* ẩn hiện */}
            <button
                className="btn btn-primary mb-3"
                onClick={() => setShowAddForm(!showAddForm)}
            >
                {showAddForm ? 'ẩn thêm mới' : 'Thêm mới'}
            </button>

            {/* thêm */}
            {showAddForm && (
                <div className="card mb-4">
                    <div className="card-body">
                       
                        <form onSubmit={handleAddCustomer}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tên"
                                    name="name"
                                    value={newCustomer.name}
                                    onChange={handleNewCustomerChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="dob"
                                    value={newCustomer.dob}
                                    onChange={handleNewCustomerChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    className="form-control"
                                    name="gender"
                                    value={newCustomer.gender}
                                    onChange={handleNewCustomerChange}
                                    required
                                >
                                    <option value="Male">Nam</option>
                                    <option value="Female">Nữ</option>
                                    <option value="Other">Khác</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="SĐT"
                                    name="phone"
                                    value={newCustomer.phone}
                                    onChange={handleNewCustomerChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    value={newCustomer.email}
                                    onChange={handleNewCustomerChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    className="form-control"
                                    name="customerType"
                                    value={newCustomer.customerType}
                                    onChange={handleNewCustomerChange}
                                    required
                                >
                                    <option value="VIP">VIP</option>
                                    <option value="Regular">regular</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Địa chỉ"
                                    name="address"
                                    value={newCustomer.address}
                                    onChange={handleNewCustomerChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Thêm khách hàng</button>
                        </form>
                    </div>
                </div>
            )}

            {/* sửa */}
            {editCustomer && (
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title">Sửa</h5>
                        <form onSubmit={handleUpdateCustomer}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    value={editCustomer.name}
                                    onChange={handleEditChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="dob"
                                    value={editCustomer.dob}
                                    onChange={handleEditChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    className="form-control"
                                    name="gender"
                                    value={editCustomer.gender}
                                    onChange={handleEditChange}
                                    required
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone"
                                    name="phone"
                                    value={editCustomer.phone}
                                    onChange={handleEditChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    value={editCustomer.email}
                                    onChange={handleEditChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    className="form-control"
                                    name="customerType"
                                    value={editCustomer.customerType}
                                    onChange={handleEditChange}
                                    required
                                >
                                    <option value="Regular">Regular</option>
                                    <option value="VIP">VIP</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address"
                                    name="address"
                                    value={editCustomer.address}
                                    onChange={handleEditChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-success">Cập nhật</button>
                            <button
                                type="button"
                                className="btn btn-secondary ml-2"
                                onClick={() => setEditCustomer(null)}
                            >
                                Hủy
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* danh sách */}
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
                                <button
                                    className="btn btn-warning btn-sm mr-2"
                                    onClick={() => handleEditCustomer(customer)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDeleteCustomer(customer.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Customers;
