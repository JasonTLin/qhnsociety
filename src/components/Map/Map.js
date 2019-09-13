import React, {Component} from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import {Style, Icon} from 'ol/style.js';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import {fromLonLat} from 'ol/proj.js';
import Feature from 'ol/Feature.js';
import {Vector as VectorLayer} from 'ol/layer.js';
import {Vector as VectorSource} from 'ol/source.js';
import {Point} from 'ol/geom.js';

import "./Map.css";


class MapRender extends Component {
    constructor(props){
        super(props);
        this.state ={
            map: 0
        }
        
    }
    componentDidMount(){
        const markerSource = new VectorSource();
        var markerStyle = new Style({
            image: new Icon(/** @type {olx.style.IconOptions} */ ({
              anchor: [4, 4],
              anchorXUnits: 'pixels',
              anchorYUnits: 'pixels',
              opacity: 1,
              src: 'https://img.icons8.com/officel/40/000000/marker.png'
            }))
          });
          
        var map = new Map({
            target: 'map',
            layers: [
              new TileLayer({
                source: new XYZ({
                  url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                })
              }),
              new VectorLayer({
                  source: markerSource,
                  style: markerStyle
              })
            ],
            view: new View({
              center: fromLonLat([-76.4951, 44.2253]),
              zoom: 15
            })
          });

        this.setState({map: markerSource});
        this.addMarker(markerSource);
    }

    componentDidUpdate(){
        console.log("marker");
    }

    addMarker(markerSource){
        var marker = new Feature({
            geometry: new Point(
                fromLonLat([-76.4951, 44.2253])
            )
        });

        markerSource.addFeature(marker);
        console.log("marker");
    }

    render(){
        return(
            <div id="map" style={{height: "50vh"}}>

            </div>
        )
    }
}

export default MapRender;