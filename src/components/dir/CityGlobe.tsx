// import React from "react";
// import Globe from "react-globe.gl";

// type Props = {
//     labelsData: { [key: string]: any }
// }

// const CityGlobe: React.FC<Props> = ({ labelsData }) => {
//     return <>
//         <Globe
//             width={831}
//             height={500}
//             globeImageUrl={'//unpkg.com/three-globe/example/img/earth-night.jpg'}
//             backgroundImageUrl={'//unpkg.com/three-globe/example/img/night-sky.png'}
//             labelsData={labelsData}
//             labelLat={(data => data.properties.latitude)}
//             labelLng={(data => data.properties.longitude)}
//             labelText={(data => data.properties.name)}
//             labelDotRadius={1}
//             labelAltitude={0.1}
//             labelSize={1.5}
//             labelColor={(() => 'rgba(255, 165, 0, 0.75)')}
//             labelResolution={(2)}
//         />
//     </>
// }

// export default CityGlobe;