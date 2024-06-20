// src/Router.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reg_Login from './component/Reg_Login';
import Register from './component/Register';
import Login from './component/Login';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Reg_Login />} />
        <Route path="/reg_login" element={<Reg_Login />} />

        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
