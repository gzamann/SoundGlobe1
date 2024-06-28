export const getLabelsData = (artistsData) => {
    // format label data for Globe
    let labels = []
    Object.keys(artistsData).forEach((artistName) => {
        const currentArtist = artistsData[artistName]
        // console.log('current artist = ', currentArtist, artistsData[artistName])
        const data = {
            "name": currentArtist.city,
            "latitude": currentArtist && currentArtist.geometry && currentArtist.geometry.lat,
            "longitude": currentArtist && currentArtist.geometry && currentArtist.geometry.lng,
        }
        labels.push(data)
    })
    return labels;
}
