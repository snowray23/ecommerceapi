import React from 'react';

function CustomerForm() {
  return (
    <div>
    <h2>Create Customer Form</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
);
}

export default CustomerForm;