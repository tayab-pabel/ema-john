import React, { useState } from 'react';
import { hotelsDetail } from '../../fakeData/hotelsDetail';
import { 
	GoogleMap, 
	Marker, 
	withScriptjs, 
	withGoogleMap, 
	InfoWindow 
} from "react-google-maps";

const DestinationMap = () => {
    const [infoBox, setInfoBox] = useState(null);
    return (
        <GoogleMap 
        defaultZoom={12} 
        defaultCenter={{ lat: 21.4242785, lng: 91.9315097 
        }}>
			{hotelsDetail.map((hotel) => (
				<Marker
					position={{
						lat: hotel.lat,
						lng: hotel.lng,
					}}
					onClick={() => hotel}
				/>
			))}
			{infoBox && (
				<InfoWindow>
					<div>Hotel details</div>
				</InfoWindow>
			)}
		</GoogleMap>
    );
};

const WrappedMap = withScriptjs(withGoogleMap(DestinationMap));

const Map = () => {
	return (
		<div>
			<WrappedMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDNs1rPkavWdzRt_trYIiw2QsDOco8WTdU`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `702px` }} />}
				mapElement={<div style={{ width: "500px", height: "702px", borderRadius: "13px" }} />}
			/>
		</div>
	);
};

export default Map;