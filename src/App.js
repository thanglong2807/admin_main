import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoutes from './ProtectedRoutes';
import Home from './pages/Home';
import Product from './pages/Product';
function App() {
  return (

    <div className="App">

      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
