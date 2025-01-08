import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contracts() {
    const [contracts, setContracts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

   
    useEffect(() => {
        axios.get('http://localhost:3100/contracts')
            .then(response => {
                setContracts(response.data); 
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Failed to fetch contracts');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading contracts...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

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
                            <td>{contract.startDate}</td>
                            <td>{contract.endDate}</td>
                            <td>{contract.deposit}</td>
                            <td>{contract.total}</td>
                            <td>{contract.customerName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Contracts;
