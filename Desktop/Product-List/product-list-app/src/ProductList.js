import React from 'react';

const ProductList = ({ products, onFilterChange }) => {
    return (
        <div>
            {/* Filter Section */}
            <section id="filter-section">
                <button onClick={() => onFilterChange('all')}>All</button>
                <button onClick={() => onFilterChange('Electronics')}>Electronics</button>
                <button onClick={() => onFilterChange('Clothing')}>Clothing</button>
            </section>

            {/* Product Display Area */}
            <main id="product-display-area">
                {products.map((product, index) => (
                    <div key={index} className="product-item">
                        <h2>{product.name}</h2>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default ProductList;
