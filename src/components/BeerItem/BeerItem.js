import React from "react";
import style from "./BeerItem.module.css";

export const BeerItem = ({
  name,
  image_url,
  tagline,
  abv,
  description,
  first_brewed,
  food_pairing,
}) => {
  if (!name) return <div>Not found</div>;

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <div className={style.avb}>{abv}</div>
        <img src={image_url} className={style.img} alt={name} />
      </div>
      <div className={style.infoContainer}>
        <div className={style.name}>{name}</div>
        <div className={style.since}>Since {first_brewed}</div>
        <div className={style.tagline}>{tagline}</div>
        <div className={style.description}>{description}</div>
        <div className={style.description}>
          <div className={style.subtitle}>Food pairing: </div>
          <ol className={style.list}>
            {food_pairing.map((item, index) => (
              <li key={index} className={style.listItem}>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
