import React from "react";
import FaceIcon from './../icons/facebook';
import TwitterIcon from './../icons/twitter';

import './index.css';

const Card = ({
    large = false,
    carousel = false,
    category,
    color,
    image,
    title,
    text,
    date
  }) => {

    const handleLeft = () => {};
    const handleRight = () => {};

    return (
      <div className="card">
        <div className={`category ${color}`}>{category}</div>
        <div className={ large ? 'image-content-large' : 'image-content'}>
          {image.map(url => <img src={url} className="card-image" />)}
          {carousel && (
            <>
              <button className="icon btn-left" onclick={handleLeft}></button>
              <button className="icon btn-right" onclick={handleRight}></button>
            </>
          )}
        </div>
        <div className={ large ? 'text-content-large' : 'text-content'}>
          <h2>{title}</h2>
          { text && <p>{text}</p>}
          {date && <span className="date">{date}</span>}
        </div>
        <div className="social-media">
            <span className="social-share">Lee antes de compartir</span>
            <div className="social-buttons">
              <FaceIcon />
              <TwitterIcon />
            </div>
        </div>
      </div>
    );
}

export default Card;