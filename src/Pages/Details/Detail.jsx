import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { filmsAPI } from '../../API';
import './Deatil.css'

const Detail = () => {
    const { id } = useParams()
    const [film, setFilm] = useState({})

    const getDetail = async () => {
        const res = await filmsAPI.getById(id)
        console.log(res.data);
        setFilm(res.data); 
    }

    useEffect(() => {
        getDetail()
    }, [id])

    return (
        <div className="detail-container">
            <div className="detail-content">
                {film.posterUrl && <img className="poster" src={film.posterUrl} alt={film.nameRu} />}
                <div className="film-info">
                    <h2 className="film-title">{film.nameRu}</h2>

                    {film.genres && film.genres.length > 0 ? (
                        <div className="detail-section">
                            <h3>Жанры:</h3>
                            <ul className="genre-list">
                                {film.genres.map((genre, index) => (
                                    <li key={index} className="genre-item">{genre.genre}</li>
                                ))}
                            </ul>
                        </div>
                    ) : 
                        <h3>Жанры недоступны!</h3>
                    }

                    {film.countries && film.countries.length > 0 && (
                        <div className="detail-section">
                            <h3>Страны:</h3>
                            {film.countries.map((country, index) => (
                                <p key={index}>{country.country}</p>
                            ))}
                        </div>
                    )}

                    {film.filmLength ? (
                        <div className="detail-section">
                            <h3>Длительность фильма:</h3>
                            <p>{film.filmLength} минут</p>
                        </div>
                    ) : (
                        <p>Длительность фильма недоступна</p>
                    )}

                    {film.year ? (
                        <div className="detail-section">
                            <h3>Год выпуска:</h3>
                            <p>{film.year} год</p>
                        </div>
                    ) : (
                        <p>Год выпуска недоступен</p>
                    )}

                    {film.slogan ? (
                        <div className="detail-section slogan">
                            <h3>Слоган:</h3>
                            <p>{film.slogan}</p>
                        </div>
                    ) : (
                        <p>Слоган недоступен</p>
                    )}
                </div>
            </div>

            <div className='description'>
                <p>{film.description ? film.description : 'Описание недоступно'}</p>
            </div>
        </div>
    );
};

export default Detail;
