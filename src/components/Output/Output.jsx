import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Output.css';

const Output = ({ data }) => {
    return (
        <div className="output-container">
            {data.length > 0 ? (
                data.map((el) => (
                    <Card className="film-card" key={el.kinopoiskId || el.filmId}>
                        <Link to={`/detail/${el.nameRu}/${el.kinopoiskId || el.filmId}`} className="film-link">
                            <CardMedia
                                component="img"
                                height="300"
                                image={el.posterUrl}
                                alt={el.nameRu}
                                className="film-poster"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {el.nameRu}
                                </Typography>
                                <Box className="rating-container">
                                    {el.ratingImdb ? (
                                        <>
                                            <Rating
                                                name="imdb-rating"
                                                value={el.ratingImdb / 2} // 10-бальная шкала на 5-бальную
                                                precision={0.5}
                                                readOnly
                                            />
                                            <Typography variant="body2" color="textSecondary" className="rating-text">
                                                {el.ratingImdb}
                                            </Typography>
                                        </>
                                    ) : (
                                        <Typography variant="body2" color="textSecondary">
                                            Нет рейтинга
                                        </Typography>
                                    )}
                                </Box>
                            </CardContent>
                        </Link>
                    </Card>
                ))
            ) : (
                <h2>Фильмы не найдены!</h2>
            )}
        </div>
    );
};

export default Output;
