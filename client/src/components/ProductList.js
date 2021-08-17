import React from 'react'
import Footer from './Footer';
import Product from './Product'
import ProductDetails from './ProductDetails'
import "./CSS/ProductList.css"

const ProductList = (props) => {
    // console.log(props.product)
    const renderList = props.product.map((product) => {
        return (
            <Product
                product={product}

            />
        );
    });
    return (
        <div>
            <h1>list</h1>
            <div className="product">
                {renderList}



            </div>
            <Footer />
        </div>

    )
}

export default ProductList
