import React, { useEffect } from 'react'
import content from "../datasource/products.json"
const Cart = () => {
    let contentOfCart = [];
    useEffect(() => {
        contentOfCart = localStorage.getItem("cart");
        if (contentOfCart !== null && contentOfCart !== undefined) {
            contentOfCart = JSON.parse(contentOfCart);
        } else {
            contentOfCart = [];
        }
    })
    console.log(contentOfCart);
    let products = [];
    contentOfCart.foreact(product => {
        let exactCategories = content.data.filter(e=> e.id == product.category)
        if(exactCategories.length === 0){
            return;
        }
        let exactCategory = exactCategories[0]
        let excactProducts = exactCategory.products.filter(e=> e.id === product.product)
        if(excactProducts.length === 0) {
            return;
        }
        let excactProduct = excactProducts[0];
        products.push(<div>{excactProduct.brand}, {excactProduct.price}</div>)
    })
    return (
        <div className='Cart'>
            {products.map(product=> {
              return  product
            })}
        </div>
    )
}

export default Cart