import axios from "axios";

const instance = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/', 
    headers: {
        'X-API-KEY': 'ef840680-cb45-46e0-848f-784d70170480',
        'Content-Type': 'application/json',
    },
})
export const filmsAPI = {
    getAllFilms() {
        return instance.get('v2.2/films')
    },
    getByName(name) {
        return instance.get(`v2.1/films/search-by-keyword?keyword=${name}`)
    }, 
    getById(id) {
        return instance.get(`v2.2/films/${id}`)
    },
    
}