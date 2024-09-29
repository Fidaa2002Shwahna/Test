
import React, { useState } from 'react';
import ProductList from './ProductList';
import './style.css';

const App = () => {
    // State management for products and filtering
    const [products] = useState([
        { name: "Laptop", category: "Electronics", price: 999 },
        { name: "Smartphone", category: "Electronics", price: 499 },
        { name: "T-shirt", category: "Clothing", price: 19 },
        { name: "Jeans", category: "Clothing", price: 39 },
        { name: "Headphones", category: "Electronics", price: 89 },
        { name: "Smartwatch", category: "Electronics", price: 199 },
    ]);

    const [activeFilter, setActiveFilter] = useState('all');

    // Function to filter products based on the selected category
    const filteredProducts = products.filter(product => 
        activeFilter === 'all' || product.category === activeFilter
    );

    // Function to handle filter button clicks
    const handleFilterChange = (category) => {
        setActiveFilter(category);
    };

    return (
        <div className="app">
            <h1>Product List</h1>
            <ProductList 
                products={filteredProducts} 
                activeFilter={activeFilter} 
                onFilterChange={handleFilterChange} 
            />
        </div>
    );
};

export default App;
