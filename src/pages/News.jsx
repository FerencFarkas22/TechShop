import React from 'react'
import content from "../datasource/home.json"
import {Navigate, useNavigate, Link, useParams} from "react-router-dom"
import "../styles/Home.css"


const News = () => {
    const {slug} = useParams();
  const navigate = useNavigate();

    const actualNews = content.data.filter(news=> news.slug === slug);
if(actualNews.length === 0){
  
    return <Navigate to="/error"></Navigate>
}

const actual = actualNews[0];

  return(
    <div className='News'>
        <h1>{actual.title}</h1>
        <h4>{actual.date}</h4>
        <div className="row">
            <div className="col-12">
                <img src={actual.image} alt="" />
            
           
            </div>
            <div className='content'>
                <p>{actual.description}</p>
            
           <Link to="/"><button>Home</button></Link>
            
            </div>
        </div>
    </div>
  )
}
export default News;