import React, { useEffect, useState } from "react";

import Card from "../Component/Card";

const Bollywood = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://bloglabel.herokuapp.com//api/bolly";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      <h1 style={{ margin: "50px", display: "block" }}>BOLLYWOOD</h1>
      <div className="main__container">
        <div className="rightbar">
          {data
            .filter((article) => {
              return article.category === "Bollywood";
            })
            .map((n) => (
              <Card
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>
       
      </div>
    </div>
  );
};
export default Bollywood;
