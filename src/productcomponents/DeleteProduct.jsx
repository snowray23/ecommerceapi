import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DeleteProduct({ onDelete }) {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/products/${productId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      onDelete();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Delete Product</h2>
      {product ? (
        <div>
          <p>Are you sure you want to delete product {product.name}?</p>
          <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default DeleteProduct;