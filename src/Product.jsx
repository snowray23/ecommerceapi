import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListProducts from './productcomponents/ListProducts';
import CreateProductForm from './productcomponents/CreateProduct';
import ReadProductDetails from './productcomponents/ProductDetails';
import UpdateProductForm from './productcomponents/UpdateProduct';
import DeleteProduct from './productcomponents/DeleteProduct';

function Product() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">List Products</Link>
            </li>
            <li>
              <Link to="/products/create">Create Product</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/products" element={<ListProducts />} />
          <Route path="/products/create" element={<CreateProductForm />} />
          <Route path="/product/:id" element={<ReadProductDetails />} />
          <Route path="/product/:id/update" element={<UpdateProductForm />} />
          <Route path="/product/:id/delete" element={<DeleteProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Product;
