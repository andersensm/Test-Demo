var map = L.map('map').setView([38.9072, -77.0369], 10);
L.esri.basemapLayer("Streets").addTo(map);

var icons = {
  best: L.ExtraMarkers.icon({
    icon: 'fa-hospital-symbol',
    markerColor: 'green-dark',
    shape: 'circle',
    prefix: 'fa'
  }),
  secondBest: L.ExtraMarkers.icon({
    icon: 'fa-hospital-symbol',
    markerColor: 'green-light',
    shape: 'circle',
    prefix: 'fa'
  }),
  mediocre: L.ExtraMarkers.icon({
    icon: 'fa-hospital-symbol',
    markerColor: 'yellow',
    shape: 'circle',
    prefix: 'fa'
  }),
  secondWorste: L.ExtraMarkers.icon({
    icon: 'fa-hospital-symbol',
    markerColor: 'orange',
    shape: 'circle',
    prefix: 'fa'
  }),
  worste: L.ExtraMarkers.icon({
    icon: 'fa-hospital-symbol',
    markerColor: 'red',
    shape: 'circle',
    prefix: 'fa'
  })
};


var virginiaCounties = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/CensusCounties_VA_Shp/FeatureServer/0?token=i-6fulr7HvDsbK_kNQWbu175yX-CY_GIy2P2mdrekaeg4iJVB4LjGagkc3LeroET57DkujSm8WQ6wajDZSI5PPrBA7egl-__aE-m3yAEmZwckl-PidD-NA63UpqGexEQP2OB2NJRTAWeGnqLUJ_5Rlm7zktGPWdthPYTelYyDZIkFyjEryyumShszZZxcUApCQt4Tppx7btduI_LWgZZtRWV9PlnQ28bHnP4NEDeTy8qGbwJt95Jpl6mE-HPGhYa"
})

var cdcCounties = L.esri.featureLayer({
  url: "https://services3.arcgis.com/ZvidGQkLaDJxRSJ2/arcgis/rest/services/Socioeconomic_2014_Counties/FeatureServer/0",
  style: function(feature) {
    if (feature.properties.RPL_THEMES >= '0.80') {
      return {
        color: '#8B0000',
        weight: 2
      };
    } else if ((feature.properties.RPL_THEMES < '0.80') & (feature.properties.RPL_THEMES >= '0.60')) {
      return {
        color: 'orange',
        weight: 2
      };
    } else if ((feature.properties.RPL_THEMES < '0.60') & (feature.properties.RPL_THEMES >= '0.40')) {
      return {
        color: 'yellow',
        weight: 2
      };
    } else if ((feature.properties.RPL_THEMES < '0.40') & (feature.properties.RPL_THEMES >= '0.20')) {
      return {
        color: '#32CD32',
        weight: 1
      };
    } else {
      return {
        color: '#006400',
        weight: 2
      };
    }
  }
})

///Medicare & Medicaid Services Compare Information///////////
var hospitalRatings = L.esri.featureLayer({
  url: "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Hospital_General_Information/FeatureServer/0",
  pointToLayer: function(feature, latlng) {
    if (feature.properties.Hospital_overall_rating === '5') {
      return L.marker(latlng, {
        icon: icons.best
      })
    } else if (feature.properties.Hospital_overall_rating === '4') {
      return L.marker(latlng, {
        icon: icons.secondBest
      })
    } else if (feature.properties.Hospital_overall_rating === '3') {
      return L.marker(latlng, {
        icon: icons.mediocre
      })
    } else if (feature.properties.Hospital_overall_rating === '2') {
      return L.marker(latlng, {
        icon: icons.secondWorste
      })
    } else {
      return L.marker(latlng, {
        icon: icons.worste
      })
    }
  }
})

$("#censusDataGov").on("click", function() {
  if (this.checked === true) {
    //START/////Downloaded from Census.gov, unchanged//
    virginiaCounties.addTo(map);
    //
    var popupTemplate = "<h3>{NAMELSAD}</h3><br><h4>{ALAND} Land Area<h4><br><h5>Lat: {INTPTLAT}</h5><br><h5>Lng: {INTPTLON}</h5>";
    //
    virginiaCounties.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
    //END/////Downloaded from Census.gov, unchanged//
  } else {
    map.removeLayer(virginiaCounties)
  }
})

$("#cdc").on("click", function() {
  if (this.checked === true) {
    cdcCounties.addTo(map);
    var popupTemplate = "<h3>{LOCATION}</h3><br><h4>Socio Economic Vulnerability Index-CDC</h4><br><h5>Vulnerability Rating(1-High, 0-Low): <strong>{RPL_THEMES}<strong></h5>";
    cdcCounties.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
  } else {
    map.removeLayer(cdcCounties)
  }
})

$("#medicareMedicaid").on("click", function() {
  if (this.checked === true) {
    hospitalRatings.addTo(map);
    var popupTemplate = "<h3>{Hospital_Name}</h3><br><h4>Medicare & Medicaid Certified Hospital Ratings</h4><br><h5>Hospital Rating(5-Best, 1-Worste): <strong>{Hospital_overall_rating}<strong></h5>";
    hospitalRatings.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
  } else {
    map.removeLayer(hospitalRatings)
  }
})
