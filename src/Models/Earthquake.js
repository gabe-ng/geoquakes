import axios from 'axios';

class EarthquakeModel {
    static all() {
        let request = axios.get('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson')
        return request;
    }
}

export default EarthquakeModel;