import React, {useEffect, useState} from 'react'
import Card from '../Component/Card'

export const Technology = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
      const url = "https://ihappysoni-blog-app-backend.herokuapp.com/api/tech";
      fetch(url).then(res => res.json())
          .then(res => setData(res)  )
  },[])
  return (
    <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Technology</h1>

            <div className="main__container">
            <div className='rightbar'>
                  {
                    data.filter((article) =>{return article.category === "Technology"}).map((n)=>( <Card 

                      articleid={n.id}
                      imgUrl = {n.Image}
                      description={n.description.slice(0, 200)}
                      fulldescription = {n.description}
                      title={n.title}

                      />))
                  }
            </div>
            <div className="advertisement">
            <img
              id="adv"
              src="https://2.imimg.com/data2/IS/TN/MY-2561564/advertisement-designing-services-500x500.jpg"
              alt=""
            />
          </div>
            </div>
    </div>
  )
}

export default Technology