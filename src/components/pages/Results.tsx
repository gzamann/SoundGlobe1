import React, { useEffect, useState } from "react";
import Globe from "react-globe.gl";
import Button from "../dir/Button";
import { LOCAL_STORAGE_ITEMS, OPENCAGE_API } from "../appConstants";
import Loader from "../dir/Loader";
import { getLabelsData } from "../appUtils";

const Results: React.FC = () => {
    const [artistLabelsData, setArtistLabelsData] = useState()
    const [tempObj, setTempObj] = useState(false)

    useEffect(() => {
        const artists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEMS.UPDATED_ARTISTS))
        const localaritsts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEMS.FOLLOWED_ARTISTS))

        // console.log('localAritst -', localaritsts)
        // fetch city lat lng
        localaritsts.forEach((a) => {
            if (!(artists && artists[a.name])) return null

            const currentCity = artists[a.name].city

            fetch(`${OPENCAGE_API}&q=${encodeURIComponent(currentCity)}`)
                .then((response) => response.json())
                .then(result => {
                    const currentResult = result.results[0]
                    const resultObj = { name: a.name, city: currentCity, geometry: currentResult.geometry }

                    const currentLabels = localStorage.getItem('labels') || '{}'

                    const labelsData = JSON.parse(currentLabels)

                    const updatedLabels = labelsData

                    updatedLabels[a.name] = resultObj

                    // console.log('city details ----', updatedLabels)
                    localStorage.setItem('labels', JSON.stringify(updatedLabels))
                    // setArtistLabelsData(getLabelsData(updatedLabels))
                    localStorage.setItem('labelFlag', 'true')

                }).catch(error => console.log('opencage fetch error ---', error)).finally(() => {
                    // setArtists(updatedArtists);
                })
        })
    }, [])

    setTimeout(() => {
        console.log('time out called ', localStorage.getItem('labels'))
        setTempObj(true)
        if (localStorage.getItem('labels')) {
            setArtistLabelsData(getLabelsData(JSON.parse(localStorage.getItem('labels'))))
        }
        // window.location.reload()
    }, 3000);


    // useEffect(() => {
    //     if (tempObj && localStorage.getItem('labels')) {
    //         setArtistLabelsData(getLabelsData(JSON.parse(localStorage.getItem('labels'))))
    //     }
    // }, [tempObj])

    // console.log('final object - ', artistLabelsData, tempObj, localStorage.getItem('labels'))

    // if (!artistLabelsData) {
    if (!tempObj) {
        return <>
            <Loader />
        </>
    }

    return <>
        <div style={{ width: '100vw', display: 'grid', justifyContent: 'center', gap: '1em' }}>
            <p style={{
                fontSize: '30px',
                fontWeight: '600',
                lineHeight: '35.19px',
                textAlign: 'center',
            }}>Your Music Map</p>
            <div style={{ maxWidth: '831px', maxHeight: '650px' }}>
                <Globe
                    width={831}
                    height={500}
                    globeImageUrl={'//unpkg.com/three-globe/example/img/earth-night.jpg'}
                    backgroundImageUrl={'//unpkg.com/three-globe/example/img/night-sky.png'}
                    labelsData={artistLabelsData}
                    labelLat={(data => data.latitude)}
                    labelLng={(data => data.longitude)}
                    labelText={(data => data.name)}
                    labelDotRadius={1}
                    labelAltitude={0.1}
                    labelSize={1.5}
                    labelColor={(() => 'rgba(255, 165, 0, 0.75)')}
                    labelResolution={(2)}
                />
            </div>
            <div>
                <Button text='Share with friends' variantType="outline" />
            </div>
        </div>
    </>
}

export default Results;