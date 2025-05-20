import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Features from './pages/Features';
import Prices from './pages/Prices';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
    );
};

export default AppRoutes;