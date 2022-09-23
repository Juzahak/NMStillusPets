import { useMemo } from 'react';
import{ GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import styles from "../public/styles/Footer.module.css";


export default function Gmaps() {
    

    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyAjctI88nX5zQ-ft9cN_GBWR1Qr7UIHtUU", });

    if(!isLoaded) return <div>Carregando...</div>;

    return <Map />
}

function Map() {
    const center = useMemo(() => ({lat: -22.626428827487292, lng: -46.73680128050512}), []);
    
    return <GoogleMap zoom={16} center={center} mapContainerClassName={styles.mapContainer}>
        <Marker position={center} />
    </GoogleMap>
}