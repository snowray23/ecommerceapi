import React from 'react';

function ProductConfirmationModule({ title, message, onConfirm, onCancel }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default ProductConfirmationModule;