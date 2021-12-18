var mymap = L.map('map').setView([47.390927, 8.512065 ], 15);  //47.390927 8.512065

L.tileLayer('https://api.mapbox.com/styles/v1/nwfwsb/ckwoztury4msb14o58yb5up61/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoibndmd3NiIiwiYSI6ImNrd2V3ZDlhMzA4dTUydnBtcnR3ejltMGoifQ.0Djoc1vvkfjJ8WVL487Tdg',
{
    maxZoom: 18,
    attribution:  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/map-feedback">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);







let radius_zuerich_city;
let radius_mexico_city;

// let radius_2;
// let radius_3;
let raduis_zuerich_city_biocapacity;
let raduis_mexico_city_biocapacity;


// radius_mexico_city =  forest_circling(21000,3.58);

radius_zuerich_city = forest_circling(36000,4.3);
radius_mexico_city = forest_circling(2938,4.3);

raduis_zuerich_city_biocapacity = global_hektar_area(36000,1.6);
raduis_mexico_city_biocapacity = global_hektar_area(2938,1.6);


// radius_zuerich_city= 1000; 
console.log('zürichCO2: ' + radius_zuerich_city);
console.log('scoleCO2: '  + radius_mexico_city);


console.log('zürichGHA: ' + raduis_zuerich_city_biocapacity);
console.log('scoleGHA: ' + raduis_mexico_city_biocapacity);


function forest_circling(population,co2_average){

    let forest_ha = 6;
    let value;
    let x;
    let radius;

     value = co2_average*population;
    value = value / forest_ha;
    value = value / 100; // km2
     x = value /  Math.PI;
    radius = Math.sqrt(x)
    radius = radius * 1000; //m2
    return radius;
}

function global_hektar_area(population,biocapacity){

   let radius;
   let value;
   let x;

   value = population*biocapacity;
   value = value/100;
   x = value /  Math.PI;
   radius = Math.sqrt(x);
   radius = radius * 1000; 

    return radius;
}

//ZUERICH
L.circle([47.390927, 8.512065], radius_zuerich_city, {
    color: '#24A184',
    fillColor: '#24A184',
    fillOpacity: 0.5
}).addTo(mymap); 

//ZUERICH - biocapacity
L.circle([47.390927, 8.512065], raduis_zuerich_city_biocapacity, {
    color: '#EEB471',
    // fillColor: 'red',
    // fillOpacity: 0.5
}).addTo(mymap); 

//MEXICO CITY
L.circle([47.390927, 8.512065], radius_mexico_city, {
    color: '#155B4B',
    fillColor: '#155B4B',
    fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am a circle.");

//ZUERICH - biocapacity
L.circle([47.390927, 8.512065], raduis_mexico_city_biocapacity, {
    color: '#7C572C',
    // fillColor: 'red',
    // fillOpacity: 0.5
}).addTo(mymap); 


//AREA BASE
L.circle([47.390927, 8.512065], 1100, {
    color: 'white',
    fillColor: 'white',
    fillOpacity: 0.2
}).addTo(mymap).bindPopup("I am a circle.");
// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
// }

// mymap.on('click', onMapClick);