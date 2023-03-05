import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import content from "../datasource/products.json"


const Products = () => {
const navigate = useNavigate();
    const {category} = useParams();

    if(category){
        let selectedCategory = content.data.filter(element => element.id == category && element.visible === true);
        if(selectedCategory.length === 0) {
            return <Navigate to="/error"></Navigate>
        }
        let selected = selectedCategory[0];
        return <>{selected.name}</>
    }
  return (
    <div className='Products'>
        <h1>Termékkategóriák</h1>
        <div className="row">
            {content.data.map(c => {
                return(
                    <div className="box" key={c.id}>
                        <button onClick={()=> navigate("/products/" + c.id)}>{c.name}</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Products