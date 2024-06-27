import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                const productData = data.products.map(product => ({
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    category: product.category,
                    price: product.price
                }));
                setProducts(productData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 className="text-center my-4" style={{fontFamily:"cursive"}}>Product List - Fetch API</h1>
            <table className="table table-striped shadow" border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.description}</td>
                            <td>{p.category}</td>
                            <td>{p.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
