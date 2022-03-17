// 1. Initialize leaflet and center the city of Los Angeles
const lat = 34.052235;
const long = -118.243683;
var map = L.map("mapid").setView([lat, long], 13);

// 2. Add Layer from mapbox
const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2FybG9zbWFkcmlnYWw4MyIsImEiOiJjbDB2ZGZucGYwbW00M2NrYmM4Mmo2M2Y5In0.V9SV-eNtPYBp_MokuX-hYQ';

L.tileLayer(
  `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`,
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_TOKEN,
  }
).addTo(map);

function metroBus(){
  fetch('https://api.metro.net/vehicle_positions/bus?output_format=json')
    .then(response => response.json())
    .then(data => data.entity.slice(0, 10).map(element => {
      const lat = element.vehicle.position.latitude;
      const long = element.vehicle.position.longitude;
      const resultado = [lat, long];
      console.log(resultado)
      
      L.marker([lat, long]).bindPopup('Prueba').addTo(map)
      //console.log(map)

    }));
    setTimeout(metroBus, 5000);
}
metroBus();
  
// 3. By using the metro API make a fetch to retrieve the data

// 4. Display in your map the public transports

// 5. Create a code to refresh each 5 seconds and retrieve the new positions of the public transports

