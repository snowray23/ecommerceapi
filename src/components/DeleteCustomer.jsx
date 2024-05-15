import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DeleteCustomer({ onDelete }) {
  const [customer, setCustomer] = useState(null);
  const { customerId } = useParams();

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/customers/${customerId}`);
        if (!response.ok) {
          console.error('Failed to fetch customer details');
          return;
        }
        const data = await response.json();
        setCustomer(data);
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };

    fetchCustomerDetails();
  }, [customerId]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/customers/${customerId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        console.error('Failed to delete customer');
        return;
      }
      onDelete(); 
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <div>
      <h2>Delete Customer</h2>
      {customer ? (
        <div>
          <p>Are you sure you want to delete customer {customer.name}?</p>
          <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      ) : (
        <p>Loading customer details...</p>
      )}
    </div>
  );
}

export default DeleteCustomer;