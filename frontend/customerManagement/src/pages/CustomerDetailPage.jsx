import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CustomerDetailPage() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://localhost:5000/api/customers/${id}`)
      .then((res) => setCustomer(res.data.data))
      .catch((err) => setError(err.response?.data?.error || "Failed to fetch customer"));
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!customer) return <p className="text-gray-500">Loading...</p>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-2">
        {customer.first_name} {customer.last_name}
      </h1>
      <p className="text-gray-700 mb-1">
        <strong>Email:</strong> {customer.email}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Phone:</strong> {customer.phone_number}
      </p>
      <p className="text-gray-700 mb-4">
        <strong>City:</strong> {customer.city}
      </p>
      <Link
        to="/"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Back to List
      </Link>
    </div>
  );
}
