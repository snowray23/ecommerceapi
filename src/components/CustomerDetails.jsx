import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CustomerDetails() {
  const [customer, setCustomer] = useState(null);
  const { customerId } = useParams();

  useEffect(() => {
    
    const fetchCustomerDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/customers/${customerId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch customer details');
        }
        const data = await response.json();
        setCustomer(data);
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };

    fetchCustomerDetails();
  }, [customerId]);

  return (
    <div>
      <h2>Customer Details</h2>
      {customer ? (
        <div>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
         
        </div>
      ) : (
        <p>Loading customer details...</p>
      )}
    </div>
  );
}

export default CustomerDetails;