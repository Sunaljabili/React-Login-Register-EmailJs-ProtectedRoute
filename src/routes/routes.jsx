import React from "react";
import { Route, Routes } from "react-router-dom";
import SiteLayout from "../layout/site/SiteLayout";
import Home from "../pages/site/Home";
import About from "../pages/site/About";
import Contact from "../pages/site/Contact";
import AdminLayout from "../layout/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import AddProduct from "../pages/admin/AddProduct";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/protectedRoute";
import Products from "../pages/site/Products";

const AppRoutes = () => {
  return (
    <>
     <Routes>
      {/* Site Routes */}
      <Route path="/" element={<SiteLayout />}>
     

        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={
          <ProtectedRoute>
            <Products/>
          </ProtectedRoute>
        } />
      </Route>
      {/* Protected Route */}
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="addProduct" element={<AddProduct />} />
        <Route path="prodcuts" element={<Products />} />
      </Route>
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
   
  );
};

export default AppRoutes;
