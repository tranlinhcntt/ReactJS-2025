// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Facilities() {
//     const [facilities, setFacilities] = useState([]); // State để lưu trữ danh sách facilities
//     const [loading, setLoading] = useState(true); // State để quản lý trạng thái loading
//     const [error, setError] = useState(null); // State để quản lý lỗi

//     // Lấy dữ liệu từ API khi component được render
//     useEffect(() => {
//         axios.get('http://localhost:3100/services')
//             .then(response => {
//                 setFacilities(response.data); // Lưu dữ liệu vào state
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.error(err);
//                 setError('Failed to fetch facilities');
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return <p>Loading facilities...</p>;
//     }

//     if (error) {
//         return <p>{error}</p>;
//     }

//     return (
//         <div>
//             <h2 className="text-center">Facility List</h2>
//             <table className="table table-striped">
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Name</th>
//                         <th>Area</th>
//                         <th>Cost</th>
//                         <th>Max People</th>
//                         <th>Rent Type</th>
//                         <th>Description</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {facilities.map((facility, index) => (
//                         <tr key={facility.id}>
//                             <td>{index + 1}</td>
//                             <td>{facility.name}</td>
//                             <td>{facility.area}</td>
//                             <td>{facility.cost}</td>
//                             <td>{facility.maxPeople}</td>
//                             <td>{facility.rentType}</td>
//                             <td>{facility.description}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Facilities;
