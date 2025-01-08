import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Services from './pages/Services';
import Customers from './pages/Customers';
import Contracts from './pages/Contracts';
import Facilities from './pages/Facilities';
import Carousel from './components/Carousel';


function App() {
    return (
        <Router>
            <Header />
            <Navigation />
            <main className="container my-4">
                <Routes>
                    <Route path="/" element={<Carousel></Carousel>} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/contracts" element={<Contracts />} />
                    <Route path="/facilities" element={<Facilities />} />

                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
