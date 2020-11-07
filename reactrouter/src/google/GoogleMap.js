import {Map, Polygon, Marker, GoogleApiWrapper} from 'google-maps-react';
import * as React from 'react';


export class MapContainer extends React.Component {
    constructor(props){
        super(props);
        let markers = []
        /* let markers = [{
            lat: 37.77484758908875,
            lng: -122.44252162500497
          },{
            lat: 37.78155013787093, 
            lng: -122.47137790613787
          },{
            lat: 37.77985420629088, 
            lng: -122.49541049891131
          }] */
        this.state ={
            markers:markers
        };
        this.onMapa = this.onMapa.bind(this);
    }
    onMapa(ref, map, ev){
        const latLng = ev.latLng;
        //console.log(e);
        const latitude = latLng.lat(); 
        const longitude = latLng.lng(); 
        console.log(latitude + ", " + longitude);  
        var coord = {}; 
        coord = {
            lat: latitude,
            lng: longitude,
        }
        let markers = []
        for(var x in this.state.markers){
            markers.push(this.state.markers[x]);
        }
        markers.push({
            lat: coord.lat,
            lng: coord.lng,
        }); 
        this.setState({markers: markers});
    }
    render() {
        return (
        <Map 
            onClick={this.onMapa}
            google={this.props.google} 
            initialCenter={{
                lat: 37.77484758908875,
                lng: -122.44252162500497
            }} 
            zoom={14}>
    
            {this.state.markers.map((forecast) =>
                <Marker 
                    position={{
                        lat: forecast.lat,
                        lng: forecast.lng
                    }} />
                )} 
            <Polygon 
                    paths={this.state.markers} />    
        </Map>
        );
    }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDZktO_JnnvrY4BnD2IyZo8PqNXiDTWP1w'
})(MapContainer)