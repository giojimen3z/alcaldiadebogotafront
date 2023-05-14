import React from "react";
import NoticeItem from "./../noticeItem"
import NoticeButton from "./../noticeButton"

import listItems from "./listItems";
import './index.css';

const Notice = () => {
  return (
    <div className="notice">
      {listItems.map((item) => (
        <NoticeItem {...item} />
      ))}
      <NoticeButton />
    </div>
  );
};

export default Notice;