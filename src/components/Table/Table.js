import React from 'react'
import style from './Table.module.css'
import {BeerCard} from "../BeerCard/BeerCard";


export const Table = ({data,handleClickBeer}) => {
    return <div className={style.table}>
        {data.map((item,) => <BeerCard key={item.id} {...item} handleClickBeer={handleClickBeer}/>)}
    </div>
}