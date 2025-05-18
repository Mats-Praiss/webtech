var map = L.map("map").setView([51.21225134996034, 4.432215024257159], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([51.21225134996034, 4.432215024257159]).addTo(map);
marker.bindPopup("<b>Borgerhout</b><br>Antwerpen, België").openPopup();

var greenIcon = L.icon({
  iconUrl: "./assets/Logo_Mats_Praiss?jpg",

  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

L.marker([51.5, -0.09], { icon: greenIcon }).addTo(map);
