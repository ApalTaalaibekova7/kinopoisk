import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Detail from '../../Pages/Details/Detail';


const Main = () => {
    return (
        <main>
            <Routes>
                <Route  path='/' element={<Home/>}/>
                <Route  path='/detail/:name/:id'
                element={<Detail /> }
                />
            </Routes>
        </main>
    );
};

export default Main;