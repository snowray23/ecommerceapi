import React from 'react';
import CreateCustomerForm from './components/CustomerForm';
import ReadCustomerDetails from './components/CustomerDetails';
import UpdateCustomerForm from './components/UpdateCustomer';
import DeleteCustomerInformation from './components/DeleteCustomer';
import CustomerConfirmationModule from './components/Confirmation.Modules';

function CustomerManagementPage() {
  return (
    <div>
      <h1>Customer Management</h1>
      <CreateCustomerForm />
      <ReadCustomerDetails />
      <UpdateCustomerForm />
      <DeleteCustomerInformation />
      <CustomerConfirmationModule />
    </div>
  );
}

export default CustomerManagementPage;