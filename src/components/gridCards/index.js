import React from "react";
import Card from "../card";
import ListItems from './listItems';

const GridCards = () => {
  return (
    <section className="container actualidad">
      <div className="grid-cards-cards">
        { ListItems.map((item) => {
          return (
            <div className={ item.large ? 'grid-cards-large' : 'grid-cards-single'}>
              <Card {...item} />
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default GridCards;