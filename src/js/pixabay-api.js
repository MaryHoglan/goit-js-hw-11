import axios from 'axios';

const API_KEY = '49357891-7b2a70058984a44bc943728d9';
const BASE_URL = 'https://pixabay.com/api/';



export async function fetchImages(query) {
    const response = await axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    });
    return response.data.hits;
}