import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [newService, setNewService] = useState({
        name: '',
        area: '',
        price: '',
        maxPeople: '',
        rentType: '',
    });

    const [editService, setEditService] = useState(null);


    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3100/services')
            .then(response => {
                setServices(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Failed to fetch services');
                setLoading(false);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewService(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditService(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddService = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3100/services', newService)
            .then(response => {
                setServices(prevServices => [response.data, ...prevServices]);
                setNewService({
                    name: '',
                    area: '',
                    price: '',
                    maxPeople: '',
                    rentType: ''
                });
            })
            .catch(err => {
                console.error(err);
                setError('Failed to add service');
            });
    };

    const handleDeleteService = (id) => {
        axios.delete(`http://localhost:3100/services/${id}`)
            .then(() => {
                setServices(prevServices => prevServices.filter(service => service.id !== id));
            })
            .catch(err => {
                console.error(err);
                setError('Failed to delete service');
            });
    };

    const handleUpdateService = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3100/services/${editService.id}`, editService)
            .then(response => {
                setServices(prevServices => prevServices.map(service => 
                    service.id === editService.id ? response.data : service
                ));
                setEditService(null);
            })
            .catch(err => {
                console.error(err);
                setError('Failed to update service');
            });
    };

    if (loading) {
        return <p>Loading services...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2 className="text-center">Danh sách dịch vụ</h2>

            {/* Nút để hiển thị/ẩn form thêm mới */}
            <button
                className="btn btn-info mb-4"
                onClick={() => setShowAddForm(!showAddForm)}
            >
                {showAddForm ? 'Ẩn Form Thêm Mới' : 'Hiện Form Thêm Mới'}
            </button>

            {/* Form thêm mới dịch vụ */}
            {showAddForm && (
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title">Thêm mới</h5>
                        <form onSubmit={handleAddService}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tên Dịch vụ"
                                    name="name"
                                    value={newService.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Khu vực"
                                    name="area"
                                    value={newService.area}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Giá"
                                    name="price"
                                    value={newService.price}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="SL người"
                                    name="maxPeople"
                                    value={newService.maxPeople}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Loại"
                                    name="rentType"
                                    value={newService.rentType}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Thêm </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Hiển thị danh sách dịch vụ */}
            <div className="d-flex flex-wrap justify-content-center">
                {services.map(service => (
                    <div className="card m-2" style={{ width: "18rem" }} key={service.id}>
                        <div className="card-body">
                            <h5 className="card-title">{service.name}</h5>
                            <p>Khu vực: {service.area}</p>
                            <p>Giá: {service.price}</p>
                            <p>SL: {service.maxPeople}</p>
                            <p>Loại: {service.rentType}</p>
                            <button
                                className="btn btn-warning btn-sm mr-2"
                                onClick={() => setEditService(service)}
                            >
                                Sửa
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDeleteService(service.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Form chỉnh sửa dịch vụ */}
            {editService && (
                <div className="card mt-4">
                    <div className="card-body">
                        <h5 className="card-title">Sửa</h5>
                        <form onSubmit={handleUpdateService}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tên Dịch vụ"
                                    name="name"
                                    value={editService.name}
                                    onChange={handleEditChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Khu vực"
                                    name="area"
                                    value={editService.area}
                                    onChange={handleEditChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Giá"
                                    name="price"
                                    value={editService.price}
                                    onChange={handleEditChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="số lượng người"
                                    name="maxPeople"
                                    value={editService.maxPeople}
                                    onChange={handleEditChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Loại phòng"
                                    name="rentType"
                                    value={editService.rentType}
                                    onChange={handleEditChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-success">Cập nhật</button>
                            <button
                                type="button"
                                className="btn btn-secondary ml-2"
                                onClick={() => setEditService(null)}
                            >
                                Hủy bỏ
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Services;
