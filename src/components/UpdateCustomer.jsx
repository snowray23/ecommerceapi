import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UpdateCustomer({ history }) {
  const [customer, setCustomer] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
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
        setFormData(data);
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };

    fetchCustomerDetails();
  }, [customerId]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/customers/${customerId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to update customer');
      }
      
      history.push(`/customer/${customerId}`); 
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  return (
    <div>
      <h2>Update Customer</h2>
      {customer ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      ) : (
        <p>Loading customer details...</p>
      )}
    </div>
  );
}

export default UpdateCustomer;