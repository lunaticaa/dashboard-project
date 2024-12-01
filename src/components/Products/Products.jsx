import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: null });
  const [showModal, setShowModal] = useState(false); // برای کنترل نمایش فرم

  // دریافت محصولات از API
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // ویرایش محصول
  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowModal(true); // نمایش فرم برای ویرایش
  };

  const handleEditChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files.length > 0) {
      setEditingProduct({
        ...editingProduct,
        image: URL.createObjectURL(files[0])
      });
    } else {
      setEditingProduct({
        ...editingProduct,
        [name]: value
      });
    }
  };

  const saveEdit = () => {
    if (editingProduct) {
      // ویرایش محصول موجود
      const updatedProducts = products.map((product) =>
        product.id === editingProduct.id ? editingProduct : product
      );
      setProducts(updatedProducts);
      setEditingProduct(null);
    } else {
      // افزودن محصول جدید
      const newId = products.length ? products[products.length - 1].id + 1 : 1;
      const newProductWithId = { ...newProduct, id: newId };
      setProducts([...products, newProductWithId]);
      setNewProduct({ name: '', price: '', image: null });
    }
    setShowModal(false); // بستن فرم پس از ذخیره
  };

  // حذف محصول
  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  // باز کردن فرم افزودن محصول جدید
  const openAddProductModal = () => {
    setEditingProduct(null); // حذف هر گونه محصول در حال ویرایش
    setNewProduct({ name: '', price: '', image: null }); // تنظیم یک محصول جدید خالی
    setShowModal(true); // نمایش فرم افزودن
  };

  const handleNewProductChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files.length > 0) {
      setNewProduct({ ...newProduct, image: URL.createObjectURL(files[0]) });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  return (
    <div className="products-container">
      <h1>Product List</h1>
      <button className="add-product-btn" onClick={openAddProductModal}>+ Add Product</button>

      <div className="products-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button className="edit-btn" onClick={() => handleEdit(product)}>Edit</button>
            <button className="delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="edit-modal">
          <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={editingProduct ? editingProduct.name : newProduct.name}
            onChange={editingProduct ? handleEditChange : handleNewProductChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={editingProduct ? editingProduct.price : newProduct.price}
            onChange={editingProduct ? handleEditChange : handleNewProductChange}
          />
          <input type="file" name="image" onChange={editingProduct ? handleEditChange : handleNewProductChange} />
          <button className="save-btn" onClick={saveEdit}>Save</button>
          <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Products;