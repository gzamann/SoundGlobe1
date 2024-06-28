// @ts-nocheck
import React, { useEffect, useState } from "react";
import { LOCAL_STORAGE_ITEMS, MUSIC_BRAINZ_API, SPOTIFY_ARTISTS_API } from "../appConstants";
import Loader from "../dir/Loader";
import { useNavigate } from "react-router-dom";

const SpotifyLogin: React.FC = () => {
    const [authToken, setAuthToken] = useState('')
    const [artists, setArtists] = useState(false);
    const [updatedArtists, setUpdatedArtists] = useState(false);

    const navigate = useNavigate()

    const redirectToResults = () => {
        navigate('/results')
    }

    const getFollowedArtists = (token: string) => {
        fetch(SPOTIFY_ARTISTS_API, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json()).then(result => {
            // console.log('results', result)
            const followedArtists = result.artists.items.map((artist: { name: string }) => {
                return {
                    name: artist.name
                }
            })
            setArtists(true)
            localStorage.setItem(LOCAL_STORAGE_ITEMS.FOLLOWED_ARTISTS, JSON.stringify(followedArtists))
        }).catch(error => console.log('---error--- ', error)).finally(() => {
            console.log('all fetched ', window.localStorage.getItem(LOCAL_STORAGE_ITEMS.FOLLOWED_ARTISTS))
        });
    }

    // fetch cities
    const getArtistsCity = () => {
        const aritsts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEMS.FOLLOWED_ARTISTS))
        let updatedArtists = {}

        // get city for each
        aritsts.forEach((artist) => {
            fetch(`${MUSIC_BRAINZ_API}&query=${encodeURIComponent(artist.name)}`)
                .then(response => response.json())
                .then(result => {
                    // console.log('artist -music brainz - ', result)
                    if (result.artists && result.artists[0]) {
                        const city = result.artists[0]['begin-area'] ? result.artists[0]['begin-area'].name : result.artists[0].area.name;
                        updatedArtists[artist.name] = { name: artist.name, city }
                    }
                }).catch((e) => console.log('error - ', e)).finally(() => {
                    // console.log('-----------=====', updatedArtists)
                    localStorage.setItem(LOCAL_STORAGE_ITEMS.UPDATED_ARTISTS, JSON.stringify(updatedArtists))
                })
        })
        setUpdatedArtists(true);
    }

    useEffect(() => {
        const params = window.location.href.split('#')

        const urlParams = new URLSearchParams(params[1])

        const paramsEntries = urlParams.entries();

        function paramsToObject(entries) {
            const result = {}
            for (const [key, value] of entries) {
                result[key] = value;
            }
            return result;
        }

        const paramsObject = paramsToObject(paramsEntries)

        // setting auth in local storage
        if (paramsObject.access_token) {
            localStorage.setItem(LOCAL_STORAGE_ITEMS.TOKEN, paramsObject.access_token)
            setAuthToken(paramsObject.access_token)
        }
        // console.log('here', paramsObject)
    }, [])

    useEffect(() => {
        // console.log('artists ---', artists)
        if (authToken) {
            if (!localStorage.getItem(LOCAL_STORAGE_ITEMS.FOLLOWED_ARTISTS)) {
                getFollowedArtists(authToken)
            } else if (artists && !updatedArtists) {
                getArtistsCity()
            } else if (artists && updatedArtists) {
                console.log('redirect ***', updatedArtists)
                redirectToResults()
            }
        }
    }, [authToken, artists, updatedArtists])

    return <>
        <Loader />
    </>
}

export default SpotifyLogin