import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reports.css';

const Reports = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // دریافت اطلاعات محصولات
  useEffect(() => {
    // درخواست به API برای دریافت محصولات
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        const enrichedData = response.data.map((product) => ({
          ...product,
          sold: Math.floor(Math.random() * 500), // تعداد فروش تصادفی
          stock: Math.floor(Math.random() * 200), // موجودی تصادفی
          revenue: (Math.random() * 5000).toFixed(2), // درآمد تصادفی
        }));
        setProducts(enrichedData);
        setFilteredProducts(enrichedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // مدیریت تغییرات در جستجو
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="reports-container">
      <h1>Product Reports</h1>

      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      {filteredProducts.length > 0 ? (
        <table className="reports-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Sold</th>
              <th>Stock</th>
              <th>Revenue ($)</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.sold}</td>
                <td>{product.stock}</td>
                <td>{product.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-results">No products found.</p>
      )}
    </div>
  );
};

export default Reports;