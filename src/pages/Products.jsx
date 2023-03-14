import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import content from "../datasource/products.json"


const Products = () => {
    const navigate = useNavigate();
    const { category } = useParams();

    let descriptionMaxLength = 150;

    function addToCart(category, product) {
        let contentOfCart = localStorage.getItem("cart");
        if(contentOfCart !== undefined && contentOfCart !==null){
            contentOfCart = JSON.parse(contentOfCart);
        }else{
            contentOfCart = [];
        }
        contentOfCart.push({category:category, product:product})
        localStorage.setItem("cart", )
    }
    if (category) {
        let selectedCategory = content.data.filter(element => element.id == category && element.visible === true);
        if (selectedCategory.length === 0) {
            return <Navigate to="/error"></Navigate>
        }
        let selected = selectedCategory[0];
        return (
            <div className='Products'>
                <h1>{selected.name}</h1>
                <div className="content">
                    {selected.products.map(actual => {
                        return (
                            <div className="box" key={actual.id}>
                                <img src={actual.img} alt="" />
                                <h2>{actual.brand}</h2>
                                <p>{actual.description.length > descriptionMaxLength
                                    ? actual.description.slice(0, descriptionMaxLength) + "..."
                                    : actual.description}</p>
                                <button onClick={() => navigate("/news/" + actual.slug)}>Bővebben</button>
                                   
                                   
                                  <div className="row">
                                    <div>{actual.price}.-Ft</div>
                                    <button onClick={()=> addToCart(selected.id, actual.id)}>Kosárba</button>
                                    </div> 
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
    return (
        <div className='Products'>
            <h1>Termékkategóriák</h1>
            <div className="row">

                {content.data.filter(element=> element.visible === true).map(c => {
                    return (
                        <div className="box" key={c.id}>

                            <button onClick={() => navigate("/products/" + c.id)}>{c.name}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products