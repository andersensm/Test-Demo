var map = L.map('map').setView([37.5739280, -78.5291687], 7);
L.esri.basemapLayer("Streets").addTo(map);

//START/////Downloaded from Census.gov, unchanged//
var virginiaCounties = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/CensusCounties_VA_Shp/FeatureServer/0?token=i-6fulr7HvDsbK_kNQWbu175yX-CY_GIy2P2mdrekaeg4iJVB4LjGagkc3LeroET57DkujSm8WQ6wajDZSI5PPrBA7egl-__aE-m3yAEmZwckl-PidD-NA63UpqGexEQP2OB2NJRTAWeGnqLUJ_5Rlm7zktGPWdthPYTelYyDZIkFyjEryyumShszZZxcUApCQt4Tppx7btduI_LWgZZtRWV9PlnQ28bHnP4NEDeTy8qGbwJt95Jpl6mE-HPGhYa"
}).addTo(map);
//
var popupTemplate = "<h3>{NAMELSAD}</h3>{ALAND} Land Area<br><h4>Lat: {INTPTLAT}</h4><br><h4>Lng: {INTPTLON}</h4>";
//
virginiaCounties.bindPopup(function(e) {
  return L.Util.template(popupTemplate, e.feature.properties)
});
//END/////Downloaded from Census.gov, unchanged//
