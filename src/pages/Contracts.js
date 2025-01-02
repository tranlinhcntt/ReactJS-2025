import React from 'react';

function Contracts() {
    const contracts = [
        { id: 1, contractNumber: 'C01', startDate: '01/01/2024', endDate: '07/01/2024', deposit: '5,000,000 VND', total: '20,000,000 VND', customerName: 'Trần Văn A' },
        { id: 2, contractNumber: 'C02', startDate: '10/01/2024', endDate: '15/01/2024', deposit: '3,000,000 VND', total: '12,000,000 VND', customerName: 'Nguyễn Thị B' },
        { id: 3, contractNumber: 'C03', startDate: '20/01/2024', endDate: '25/01/2024', deposit: '4,000,000 VND', total: '16,000,000 VND', customerName: 'Phan Văn C' },
    ];

    return (
        <div>
            <h2 className="text-center">Contract List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Contract Number</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Deposit</th>
                        <th>Total</th>
                        <th>Customer Name</th>
                    </tr>
                </thead>
                <tbody>
                    {contracts.map((contract, index) => (
                        <tr key={contract.id}>
                            <td>{index + 1}</td>
                            <td>{contract.contractNumber}</td>
                            <td>{contract.customerName}</td>
                            <td>{contract.startDate}</td>
                            <td>{contract.endDate}</td>
                            <td>{contract.deposit}</td>
                            <td>{contract.total}</td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Contracts;
