import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ReadProductDetails() {
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

  return (
    <div>
      {product ? (
        <div>
          <h2>Product Details</h2>
          <p>Name: {product.name}</p>
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default ReadProductDetails;