import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('../multimedia/autobus.png'),
    iconSize: [20, 20],
    className: 'leaflet-div-icon'
});

export { iconPerson };