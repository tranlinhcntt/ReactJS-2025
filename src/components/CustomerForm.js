// import React, { useState } from 'react';

// function CustomerForm({ onSave, initialData }) {
//     const [customer, setCustomer] = useState(initialData || {
//         name: '',
//         dob: '',
//         phone: '',
//         idCard: '',
//         email: '',
//         customerType: '',
//         address: '',
//     });
//     const [errors, setErrors] = useState({});

//     const validate = () => {
//         const errors = {};
//         const nameRegex = /^[A-Z][a-z]*( [A-Z][a-z]*)*$/;
//         const phoneRegex = /^(090|091|\(84\)\+90|\(84\)\+91)\d{7}$/;
//         const idCardRegex = /^\d{9}|\d{12}$/;
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (!nameRegex.test(customer.name)) errors.name = 'Name must start with a capital letter and contain no numbers.';
//         if (!phoneRegex.test(customer.phone)) errors.phone = 'Invalid phone number format.';
//         if (!idCardRegex.test(customer.idCard)) errors.idCard = 'ID card must be 9 or 12 digits.';
//         if (!emailRegex.test(customer.email)) errors.email = 'Invalid email format.';
//         if (!customer.dob) errors.dob = 'Date of birth is required.';
//         if (!customer.customerType) errors.customerType = 'Customer type is required.';
//         if (!customer.address) errors.address = 'Address is required.';

//         setErrors(errors);
//         return Object.keys(errors).length === 0;
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCustomer({ ...customer, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             onSave(customer);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Name:</label>
//                 <input type="text" name="name" value={customer.name} onChange={handleChange} />
//                 {errors.name && <span>{errors.name}</span>}
//             </div>
//             <div>
//                 <label>Date of Birth:</label>
//                 <input type="date" name="dob" value={customer.dob} onChange={handleChange} />
//                 {errors.dob && <span>{errors.dob}</span>}
//             </div>
//             <div>
//                 <label>Phone:</label>
//                 <input type="text" name="phone" value={customer.phone} onChange={handleChange} />
//                 {errors.phone && <span>{errors.phone}</span>}
//             </div>
//             <div>
//                 <label>ID Card:</label>
//                 <input type="text" name="idCard" value={customer.idCard} onChange={handleChange} />
//                 {errors.idCard && <span>{errors.idCard}</span>}
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input type="email" name="email" value={customer.email} onChange={handleChange} />
//                 {errors.email && <span>{errors.email}</span>}
//             </div>
//             <div>
//                 <label>Customer Type:</label>
//                 <select name="customerType" value={customer.customerType} onChange={handleChange}>
//                     <option value="">Select Type</option>
//                     <option value="Diamond">Diamond</option>
//                     <option value="Platinum">Platinum</option>
//                     <option value="Gold">Gold</option>
//                     <option value="Silver">Silver</option>
//                     <option value="Member">Member</option>
//                 </select>
//                 {errors.customerType && <span>{errors.customerType}</span>}
//             </div>
//             <div>
//                 <label>Address:</label>
//                 <input type="text" name="address" value={customer.address} onChange={handleChange} />
//                 {errors.address && <span>{errors.address}</span>}
//             </div>
//             <button type="submit">Save</button>
//         </form>
//     );
// }

// export default CustomerForm;
