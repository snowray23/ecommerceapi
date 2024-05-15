import React from 'react';

function ConfirmationModules({ title, message, onConfirm, onCancel }) {
  return (
    <div id="confirmationModal">
      <div>
        <div>
          <div>
            <h5>{title}</h5>
            <button type="button" aria-label="Close"></button>
          </div>
          <div>
            <p>{message}</p>
          </div>
          <div>
            <button type="button" onClick={onCancel}>Cancel</button>
            <button type="button" onClick={onConfirm}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModules;