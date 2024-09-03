import React, { useState } from 'react';

const Header = ({ search }) => {
    const [value, setValue] = useState('')

    return (
        <header>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Поиск фильмов'/>
            <button onClick={() => search(value)}>Поиск</button>
        </header>
    );
};

export default Header;