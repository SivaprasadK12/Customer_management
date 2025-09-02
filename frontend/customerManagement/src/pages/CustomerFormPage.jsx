import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CustomerForm from '../components/CustomerForm';

function CustomerFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/customers/${id}`)
        .then(res => setCustomer(res.data))
        .catch(err => console.error("Error fetching customer:", err));
    }
  }, [id]);

  const handleSubmit = (formData) => {
    if (id) {
      axios.put(`http://localhost:5000/api/customers/${id}`, formData)
        .then(() => navigate(`/customers/${id}`))
        .catch(err => console.error("Error updating customer:", err));
    } else {
      axios.post(`http://localhost:5000/api/customers`, formData)
        .then((res) => navigate(`/customers/${res.data.id}`))
        .catch(err => console.error("Error creating customer:", err));
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        {id ? "Edit Customer" : "New Customer"}
      </h1>
      <CustomerForm onSubmit={handleSubmit} initialData={customer} />
    </div>
  );
}

export default CustomerFormPage;
