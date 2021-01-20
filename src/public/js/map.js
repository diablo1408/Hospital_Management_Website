const deptId = document.getElementById("hiddenDept").value;
mapboxgl.accessToken = 'pk.eyJ1IjoicmFqbmlzaDE5OTkiLCJhIjoiY2tieXIwcms2MHgxcTJ5bzQyYWN6ejIyZCJ9.XMV7SHLkPdW61IzQ8alevA';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 9,
center: [77.1025, 28.7041]
});
async function getHospitals() {
    const response = await fetch(`/distanceWisePos/${deptId}`);
    const result = await response.json();
    console.log(result);
    const hospitals = result.data.map((hospital) => {
        
        return {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [hospital.locationFinder.location.coordinates[0], hospital.locationFinder.location.coordinates[1]]
            },
            properties: {
                storeName: hospital.hName,
                icon: 'shop'
            }
        }
    })
    loadMap(hospitals);
}
function loadMap(hospitals) {
    map.on('load', function() {
        map.addLayer({
            id: 'points',
            type: 'symbol',
            source: {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: hospitals
                }
            },
            layout: { //layout is all about the icon that is there in the map
                'icon-image': '{icon}-15',
                'icon-size': 1.5,
                'text-field': '{storeName}',
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                'text-offset': [0, 0.9],
                'text-anchor': 'top'
            }
        });
    });

    map.addControl(
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
        })
    );
}

getHospitals();