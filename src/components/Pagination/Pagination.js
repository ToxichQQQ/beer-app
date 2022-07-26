import React from "react";
import { useMemo } from 'react';
import style from './Pagination.module.css'

export const Pagination = ({active, onChange, isLastPage}) => {
    const currentRange = useMemo(() => {
        let start = active < 4 ? 1 : active - 2;
        let end = active < 3 ? 6 : active + 3;

        if (isLastPage) {
            end = active + 1;
            start = active - 4;
        }

        if(start < 0){
            start = 1
            end = 5
        }

        return Array(end - start).fill().map((_, idx) => start + idx)
    }, [active, isLastPage]);

    return (
        <div className={style.paginationContainer}>

            <button className={style.paginationButton} onClick={() => onChange(active - 1)} disabled={active === 1}>&laquo;</button>
            {currentRange.map(i => <button className={active === i ? style.paginationItemActive : style.paginationItem} key={i} onClick={() => onChange(i)}>{i}</button>)}
            <button className={style.paginationButton} onClick={() => onChange(active + 1)} disabled={isLastPage}>&raquo;</button>
        </div>
    );
};