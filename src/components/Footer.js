// import React from 'react';

// function Footer() {
//     return (
//         <footer className="bg-dark text-white text-center py-3">
//             <p>&copy; 2024 Furama Resort. All Rights Reserved.</p>
//         </footer>
//     );
// }

// export default Footer;


import React from 'react';

function Footer() {
    return (
        <footer className="footer bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    {/* Logo and Description */}
                    <div className="col-md-4 text-center text-md-start">
                        <h5 className="fw-bold">Furama Nghỉ Dưỡng </h5>
                        <p>Khu nghỉ dưỡng cao cấp dành cho quý khánh hàng.</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="col-md-4 text-center">
                        <h5 className="fw-bold">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-white text-decoration-none">Trang chủ</a></li>
                            <li><a href="#about" className="text-white text-decoration-none">Giới thiệu</a></li>
                            <li><a href="#services" className="text-white text-decoration-none">Dịch vụ</a></li>
                            <li><a href="#contact" className="text-white text-decoration-none">Hợp đồng</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-md-4 text-center text-md-end">
                        <h5 className="fw-bold">Follow Us</h5>
                        <a href="https://facebook.com" className="text-white me-3">
                            <i className="fab fa-facebook fa-lg"></i>
                        </a>
                        <a href="https://twitter.com" className="text-white me-3">
                            <i className="fab fa-twitter fa-lg"></i>
                        </a>
                        <a href="https://instagram.com" className="text-white">
                            <i className="fab fa-instagram fa-lg"></i>
                        </a>
                    </div>
                </div>

                <hr className="bg-light my-4" />

                <div className="text-center">
                    <p className="mb-0">&copy; 2024 Furama Nghỉ Dưỡng 5 Sao.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
