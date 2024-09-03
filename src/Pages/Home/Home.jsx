import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { filmsAPI } from '../../API';
import Output from '../../components/Output/Output';

const Home = () => {
    const [data, setData] = useState([])

    const getFilms = async () => {
        const res = await filmsAPI.getAllFilms()
        setData(res.data.items);
        console.log(res.data.items);
        
    }

    const getByName = async (value) => {
        const res = await filmsAPI.getByName(value)
        setData(res.data.films);
        console.log(res.data.films);
    }

    useEffect(() => {
        getFilms()
    }, [])

    return (
        <div>
            <Header search={getByName}/>
            <Output  data={data}/>
        </div>
    );
};

export default Home;