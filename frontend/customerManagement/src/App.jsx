import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CustomerListPage from "./pages/CustomerListPage";
import CustomerFormPage from "./pages/CustomerFormPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <nav>
        <Link to="/">Customers</Link> |{" "}
        <Link to="/add-customer">Add Customer</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CustomerListPage />} />
        <Route path="/add-customer" element={<CustomerFormPage />} />
        <Route path="/customers/:id" element={<CustomerDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

