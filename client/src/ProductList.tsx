import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  sku: string;
  name: string;
  price: number;
  images: string[];
}

const mockProducts: Product[] = [
  {
    id: 1,
    sku: 'SKU001',
    name: 'Product 1',
    price: 100,
    images: ['https://via.placeholder.com/50'],
  },
  {
    id: 2,
    sku: 'SKU002',
    name: 'Product 2',
    price: 200,
    images: ['https://via.placeholder.com/50', 'https://via.placeholder.com/50/0000FF'],
  },
];

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Replace with API call
    setProducts(mockProducts);
  }, []);

  const handleAdd = () => {
    navigate('/form');
  };

  const handleEdit = (id: number) => {
    navigate(`/form/${id}`);
  };

  const handleDelete = (id: number) => {
    // Replace with API call
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <button onClick={handleAdd} className="add-product-btn">Add Product</button>
      <div className="table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Name</th>
              <th>Price</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.sku}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <div className="image-thumbnails">
                    {product.images.map((img, idx) => (
                      <img key={idx} src={img} alt={product.name} className="product-thumbnail" />
                    ))}
                  </div>
                </td>
                <td>
                  <button onClick={() => handleEdit(product.id)} className="edit-btn">Edit</button>
                  <button onClick={() => handleDelete(product.id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList; 