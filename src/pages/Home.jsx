import React from 'react'
import content from "../datasource/home.json"
import {useNavigate} from "react-router-dom"
import "../styles/Home.css"


const Home = () => {

  const navigate = useNavigate();


  let descriptionMaxLength = 150;

  return (
    <div className='Home'>
      <h1>Akcióink, híreink</h1>

      <div className="content">
        {content.data.map(actual => {
          return (
            <div className="box" key={actual.id}>
              <h2>{actual.title}</h2>
              <span> {actual.date}</span>
              <img src="https://via.placeholder.com/350x150" alt="" />
              <p>{actual.description.length > descriptionMaxLength
                ? actual.description.slice(0, descriptionMaxLength) + "..."
                : actual.description}</p>
              <button onClick={()=> navigate("/news/"+ actual.slug) }>Bővebben</button>
            </div>
          )
        })}
      </div>

      {/* 5:52:54*/}

    </div>
  )
}

export default Home