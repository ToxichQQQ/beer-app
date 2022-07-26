import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {getBeer} from "../../service";
import {Loader} from "../../components/Loader/Loader";
import style from './BeerPage.module.css'
import {BeerItem} from "../../components/BeerItem/BeerItem";


export const Beer = () => {
    let navigate = useNavigate();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [currentBeer, setCurrentBeer] = useState([]);

    useEffect(() => {
        (async  function(){
            setLoading(true);

            const data = await getBeer(id);
            setCurrentBeer(data[0]);
            setLoading(false);
        })()
    }, [id]);

    const handleBackToAll = () => {
        navigate('/');
    };

    if (loading) return (<Loader />);

    return (
        <div className={style.container}>
            <div className={style.back} onClick={handleBackToAll}>Back to all Beers</div>
            <BeerItem {...currentBeer}/>
        </div>)
};