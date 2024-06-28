export const SPOTIFY_API = {
    clientId: '77de2cc31fec4558b0aec81a74d06602',
    REDIRECT_URI: 'http://localhost:5173/spotify-login',
    AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
    RESPONSE_TYPE: 'token',
}

export const SPOTIFY_AUTH_LINK = `${SPOTIFY_API.AUTH_ENDPOINT}?client_id=${SPOTIFY_API.clientId}&redirect_uri=${SPOTIFY_API.REDIRECT_URI}&response_type=${SPOTIFY_API.RESPONSE_TYPE}&scope=user-follow-read`

export const SPOTIFY_ARTISTS_API = "https://api.spotify.com/v1/me/following?type=artist"

export const OPENCAGE_API_KEY = "da3190834d104e0b997f45e6c12ba7c3";

export const OPENCAGE_API = `https://api.opencagedata.com/geocode/v1/json?key=${OPENCAGE_API_KEY}`;

export const MUSIC_BRAINZ_API = 'https://musicbrainz.org/ws/2/artist?fmt=json';

// const MUSIC_BRAINZ_API = 'https://musicbrainz.org/ws/2/artist?query=artrist:Drake&fmt=json'

export const labelsdata = [{
    "properties": {
        "name": "Houston",
        "latitude": 29.8199743846,
        "longitude": -95.3399792905,
    },
}, {
    "properties": {
        "name": "Bangalore",
        "latitude": 12.9767936,
        "longitude": 77.590082,
    },
},
{
    "properties": {
        "name": "Vatican City",
        "latitude": 41.9000122264,
        "longitude": 12.4478083889,
    }
}]

export const LOCAL_STORAGE_ITEMS = {
    TOKEN: 'token',
    FOLLOWED_ARTISTS: 'followedArtists',
    UPDATED_ARTISTS: 'updatedArtists'
}

export const DATA_STATES = {
    IDLE: 0,
    FETCH_CITIES: 1,
    FETCH_LAT_LNG: 2,
}

export const FETCH_STATES = {
    IDLE: 0,
    IN_PROGRESS: 1,
    SUCCESS: 2
}