const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3100;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dữ liệu giả
let services = [
    { id: 1, name: 'Villa Deluxe', area: '200m²', price: '10,000,000 VND', maxPeople: 4, rentType: 'Day' },
    { id: 2, name: 'Luxury Room', area: '50m²', price: '5,000,000 VND', maxPeople: 2, rentType: 'Night' },
    { id: 3, name: 'House Premium', area: '120m²', price: '8,000,000 VND', maxPeople: 3, rentType: 'Month' },
];

let customers = [
    { id: 1, name: 'A', dob: '01/01/1985', gender: 'Nam', phone: '0901234567', email: 'abc@gmail.com', customerType: 'Gold', address: '123 đường Hoàn Kiếm' },
    { id: 2, name: 'B', dob: '15/06/1990', gender: 'Nữ', phone: '0919876543', email: 'bcd@gmail.com', customerType: 'Platinum', address: '456 Trần Hưng Đạo' },
    { id: 3, name: 'C', dob: '20/03/1988', gender: 'Nữ', phone: '0908765432', email: 'cde@gmail.com', customerType: 'Silver', address: '789 Mỹ Đình' },
];

let contracts = [
    { id: 1, contractNumber: 'C01', startDate: '01/01/2024', endDate: '07/01/2024', deposit: '5,000,000 VND', total: '20,000,000 VND', customerName: 'Trần Văn A' },
    { id: 2, contractNumber: 'C02', startDate: '10/01/2024', endDate: '15/01/2024', deposit: '3,000,000 VND', total: '12,000,000 VND', customerName: 'Nguyễn Thị B' },
    { id: 3, contractNumber: 'C03', startDate: '20/01/2024', endDate: '25/01/2024', deposit: '4,000,000 VND', total: '16,000,000 VND', customerName: 'Phan Văn C' },
];

// API cho dịch vụ
app.get('/services', (req, res) => {
    res.json(services);
});

app.post('/services', (req, res) => {
    const newService = req.body;
    newService.id = services.length ? services[services.length - 1].id + 1 : 1;
    services.push(newService);
    res.status(201).json(newService);
});

app.delete('/services/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = services.findIndex(service => service.id === id);

    if (index !== -1) {
        services.splice(index, 1);
        res.status(200).json({ message: 'Service deleted successfully' });
    } else {
        res.status(404).json({ message: 'Service not found' });
    }
});

app.put('/services/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = services.findIndex(service => service.id === id);

    if (index !== -1) {
        services[index] = { ...services[index], ...req.body };
        res.status(200).json(services[index]);
    } else {
        res.status(404).json({ message: 'Service not found' });
    }
});

// API cho khách hàng
app.get('/customers', (req, res) => {
    res.json(customers);
});

app.post('/customers', (req, res) => {
    const newCustomer = req.body;
    newCustomer.id = customers.length ? customers[customers.length - 1].id + 1 : 1;
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
});

app.delete('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = customers.findIndex(customer => customer.id === id);

    if (index !== -1) {
        customers.splice(index, 1);
        res.status(200).json({ message: 'Customer deleted successfully' });
    } else {
        res.status(404).json({ message: 'Customer not found' });
    }
});

app.put('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = customers.findIndex(customer => customer.id === id);

    if (index !== -1) {
        customers[index] = { ...customers[index], ...req.body };
        res.status(200).json(customers[index]);
    } else {
        res.status(404).json({ message: 'Customer not found' });
    }
});

// API cho hợp đồng
app.get('/contracts', (req, res) => {
    res.json(contracts);
});

app.post('/contracts', (req, res) => {
    const newContract = req.body;
    newContract.id = contracts.length ? contracts[contracts.length - 1].id + 1 : 1;
    contracts.push(newContract);
    res.status(201).json(newContract);
});

app.delete('/contracts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = contracts.findIndex(contract => contract.id === id);

    if (index !== -1) {
        contracts.splice(index, 1);
        res.status(200).json({ message: 'Contract deleted successfully' });
    } else {
        res.status(404).json({ message: 'Contract not found' });
    }
});

app.put('/contracts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = contracts.findIndex(contract => contract.id === id);

    if (index !== -1) {
        contracts[index] = { ...contracts[index], ...req.body };
        res.status(200).json(contracts[index]);
    } else {
        res.status(404).json({ message: 'Contract not found' });
    }
});

// Lắng nghe cổng
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
