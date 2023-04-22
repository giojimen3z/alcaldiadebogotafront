import React from "react";
import FaceIcon from './../icons/facebook';
import TwitterIcon from './../icons/twitter';

import './index.css';

const NoticeItem = ({ avatar, date, category, title }) => {
  return (
    <div className="notice-item">
      <div className="content-avatar">
        <img src={avatar} alt="" className="image" />
        <span className="date">
          {date}
        </span>
      </div>
      <div className="content-info">
        <span className="categoria">{category}</span>
        <h2 className="title">{title}</h2>
        <div className="social">
          <span className="categoria">Lee Antes de Compartir:</span>
          <FaceIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default NoticeItem;