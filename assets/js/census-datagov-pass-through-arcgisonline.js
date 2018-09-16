var map = L.map('map').setView([38.9072, -77.0369], 10);
L.esri.basemapLayer("Streets").addTo(map);

var iconsHospitalRankings = {
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

var iconsMedicareSpending = {
  best: L.ExtraMarkers.icon({
    icon: 'fa-usd-circle',
    markerColor: 'green-dark',
    shape: 'circle',
    prefix: 'fa'
  }),
  secondBest: L.ExtraMarkers.icon({
    icon: 'fa-usd-circle',
    markerColor: 'green-light',
    shape: 'circle',
    prefix: 'fa'
  }),
  mediocre: L.ExtraMarkers.icon({
    icon: 'fa-usd-circle',
    markerColor: 'yellow',
    shape: 'circle',
    prefix: 'fa'
  }),
  secondWorste: L.ExtraMarkers.icon({
    icon: 'fa-usd-circle',
    markerColor: 'orange',
    shape: 'circle',
    prefix: 'fa'
  }),
  worste: L.ExtraMarkers.icon({
    icon: 'fa-usd-circle',
    markerColor: 'red',
    shape: 'circle',
    prefix: 'fa'
  }),
  notAvailable: L.ExtraMarkers.icon({
    icon: 'fa-usd-circle',
    markerColor: 'black',
    shape: 'circle',
    prefix: 'fa'
  })
};


var dmvCounties = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/Completed_DMV_with_Household_Income/FeatureServer/0?token=O7UALJmhPTsiOKL_N28MLHJIzsZnU_VVALNxLHdhXnwSd_nad4IpCTrFRnuu6Lz1_Rexp-zw-IBEpyxFF9EWze1c4T9QKNqApNk6kjN5OvNsn_8eVZ85rk6OvcadRWuDbBm_rGeRF0OqsNzzzdmmlS96wJFATI6t4ZhKrkpiqrwdZATkq4THnWtY6-Riq2ENfkYOO5MANoe-NS6JulzHWor-eJNSz8WRrgJ_3bssZY3P2Bb6JYqgM1dWikJ40RGC",
  style: function(feature) {
    if (feature.properties.HC04_EST_1 >= 100000) {
      return {
        color: '#006400',
        weight: 2
      };
    } else if ((feature.properties.HC04_EST_1 < 100000) & (feature.properties.HC04_EST_1 >= 90000)) {
      return {
        color: '#32CD32',
        weight: 2
      };
    } else if ((feature.properties.HC04_EST_1 < 90000) & (feature.properties.HC04_EST_1 >= 80000)) {
      return {
        color: 'yellow',
        weight: 2
      };
    } else if ((feature.properties.HC04_EST_1 < 80000) & (feature.properties.HC04_EST_1 >= 70000)) {
      return {
        color: '#FF4500',
        weight: 1
      };
    } else if ((feature.properties.HC04_EST_1 < 70000) & (feature.properties.HC04_EST_1 >= 40000)) {
      return {
        color: 'red',
        weight: 1
      };
    } else if (feature.properties.HC04_EST_1 < 70000) {
      return {
        color: '#8B0000',
        weight: 1
      };
    }
  }
})

var cdcCounties = L.esri.featureLayer({
  url: "https://services3.arcgis.com/ZvidGQkLaDJxRSJ2/arcgis/rest/services/Overall_2014_Tracts/FeatureServer/1",
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
        icon: iconsHospitalRankings.best
      })
    } else if (feature.properties.Hospital_overall_rating === '4') {
      return L.marker(latlng, {
        icon: iconsHospitalRankings.secondBest
      })
    } else if (feature.properties.Hospital_overall_rating === '3') {
      return L.marker(latlng, {
        icon: iconsHospitalRankings.mediocre
      })
    } else if (feature.properties.Hospital_overall_rating === '2') {
      return L.marker(latlng, {
        icon: iconsHospitalRankings.secondWorste
      })
    } else {
      return L.marker(latlng, {
        icon: iconsHospitalRankings.worste
      })
    }
  }
})


$("#censusDataGov").on("click", function() {
  if (this.checked === true) {
    //START/////Downloaded from Census.gov, unchanged//
    dmvCounties.addTo(map);
    //
    var popupTemplate = "<h3>{GEO_displa}</h3><h4>{NAMELSAD}<h4><h5>Non-Family Household Mean Income: <strong>{HC04_EST_1}<strong></h5>";
    //
    dmvCounties.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
    //END/////Downloaded from Census.gov, unchanged//
  } else {
    map.removeLayer(dmvCounties)
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
