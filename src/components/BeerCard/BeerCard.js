import React from "react";
import style from "./Beer.module.css";

export const BeerCard = ({
  abv,
  tagline,
  name,
  image_url,
  id,
  handleClickBeer,
  description,
}) => {
  const max_length = 140;

  return (
    <div className={style.card} onClick={() => handleClickBeer(id)}>
      <div className={style.abv}>{abv}%</div>
      <img src={image_url} className={style.img} alt={id} />
      <div>{name}</div>
      <div className={style.tagline}>{tagline}</div>
      <div className={style.tagline}>
        {description.length > max_length
          ? description.substring(0, 140) + "..."
          : description}
      </div>
    </div>
  );
};
