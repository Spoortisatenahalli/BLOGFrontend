import React from 'react'
import { NavLink} from 'react-router-dom';
function a(){
  return "Image not found"
}

const CardHome = (props) => {
    const { imgUrl, title, description, articleid, fulldescription } = props;
    return (
        <NavLink state={{ title: title, img: imgUrl, description: description, fulldescription:fulldescription, id: articleid }} to={`/article/${articleid}`}>
          <div className={articleid}>
            <div className="card__Home" >
              <div className='card__image'>
                <img src={imgUrl} alt={a} />
              </div>
              <div className='home__bigcard__data'  >
                <h3 >{title}</h3>
                <p>{description}....</p>
              </div>
            </div>
            <hr style={{ fontWeigth: "30px", color: "black" }} />
          </div>
          </NavLink>
    )
          
}

export default CardHome;