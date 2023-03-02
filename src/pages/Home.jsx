import React from 'react'
import content from "../datasource/home.json"
const Home = () => {
  let descriptionMaxLength = 150;
  return (
    <div className='Home'>
      <h1>Akcióink, híreink</h1>
      <div className="content">
      {content.data.map(actual=> {
        return(
          <div className="box">
          <h2>{actual.title}</h2>
         <span> {actual.date}</span>
          <img src="https://via.placeholder.com/350x150" alt="" />
          <p>{actual.description.length > descriptionMaxLength ? actual.description.slice(0,descriptionMaxLength)+"...":actual.description }</p>
          <button>Bővebben</button>
          </div>
        )
       })}
      </div>
       
    {/* 4:26:57*/}
      
    </div>
  )
}

export default Home