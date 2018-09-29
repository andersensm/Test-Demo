var map = L.map('map').setView([38.9072, -77.0369], 10);
L.esri.basemapLayer("Streets").addTo(map);

//
// var iconsHospitalRankings = {
//   best: L.ExtraMarkers.icon({
//     icon: 'fa-hospital-symbol',
//     markerColor: 'green-dark',
//     shape: 'circle',
//     prefix: 'fa'
//   }),
//   secondBest: L.ExtraMarkers.icon({
//     icon: 'fa-hospital-symbol',
//     markerColor: 'green-light',
//     shape: 'circle',
//     prefix: 'fa'
//   }),
//   mediocre: L.ExtraMarkers.icon({
//     icon: 'fa-hospital-symbol',
//     markerColor: 'yellow',
//     shape: 'circle',
//     prefix: 'fa'
//   }),
//   secondWorste: L.ExtraMarkers.icon({
//     icon: 'fa-hospital-symbol',
//     markerColor: 'orange',
//     shape: 'circle',
//     prefix: 'fa'
//   }),
//   worste: L.ExtraMarkers.icon({
//     icon: 'fa-hospital-symbol',
//     markerColor: 'red',
//     shape: 'circle',
//     prefix: 'fa'
//   })
// };
//
// var iconsMedicareSpending = {
//   best: L.ExtraMarkers.icon({
//     icon: 'fa-usd-circle',
//     markerColor: 'green-dark',
//     shape: 'circle',
//     prefix: 'fa'
//   }),
//   secondBest: L.ExtraMarkers.icon({
//     icon: 'fa-usd-circle',
//     markerColor: 'green-light',
//     shape: 'circle',
//     prefix: 'fa'
//   }),
//   mediocre: L.ExtraMarkers.icon({
//     icon: 'fa-usd-circle',
//     markerColor: 'yellow',
//     shape: 'circle',
//     prefix: 'fa'
//   }),
//   secondWorste: L.ExtraMarkers.icon({
//     icon: 'fa-usd-circle',
//     markerColor: 'orange',
//     shape: 'circle',
//     prefix: 'fa'
//   }),
//   worste: L.ExtraMarkers.icon({
//     icon: 'fa-usd-circle',
//     markerColor: 'red',
//     shape: 'circle',
//     prefix: 'fa'
//   }),
//   notAvailable: L.ExtraMarkers.icon({
//     icon: 'fa-usd-circle',
//     markerColor: 'black',
//     shape: 'circle',
//     prefix: 'fa'
//   })
// };


var censusBlockGroups2013 = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/CensuPop2013_to_2016_v2/FeatureServer/0?token=yZe85f22vr00NKYr-r_1we_vueI9ayM_xnxMUJR87SKrHtFkdp6mYWd2bRAFQ8fdSN-SH_8Y0OkjM369IMBKazSPejnmv6ONJrhy-re6xmRUskgD1SovPwtMrdLfH_oXtGKH0zeVeWFo77oW5KjyEH-8FUdOUYn7_p4kca3EomorRaktz4gaiR-Sd56LdQiOn3uaJEpvjCXzGK54LaM_p2QhDeVDwmPVs-aM44IzwYQIvSi7xwbOvI-GzsmbM99m",
  style: function(feature) {
    if (feature.properties.Pop_2013_5 >= '295') {
      return {
        color: '#8B0000',
        weight: 2
      };
    } else if ((feature.properties.Pop_2013_5 < '295') & (feature.properties.Pop_2013_5 >= '180')) {
      return {
        color: '#FF4500',
        weight: 2
      };
    } else if ((feature.properties.Pop_2013_5 < '180') & (feature.properties.Pop_2013_5 >= '105')) {
      return {
        color: 'yellow',
        weight: 2
      };
    } else if ((feature.properties.Pop_2013_5 < '105') & (feature.properties.Pop_2013_5 >= '47')) {
      return {
        color: '#32CD32',
        weight: 1
      };
    } else if ((feature.properties.Pop_2013_5 < '47') & (feature.properties.Pop_2013_5 >= '1')) {
      return {
        color: '#006400',
        weight: 1
      };
    } else if (feature.properties.Pop_2013_5 < '1') {
      return {
        color: 'black',
        weight: 1
      };
    }
  }
})

var censusBlockGroups2014 = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/CensuPop2013_to_2016_v2/FeatureServer/0?token=yZe85f22vr00NKYr-r_1we_vueI9ayM_xnxMUJR87SKrHtFkdp6mYWd2bRAFQ8fdSN-SH_8Y0OkjM369IMBKazSPejnmv6ONJrhy-re6xmRUskgD1SovPwtMrdLfH_oXtGKH0zeVeWFo77oW5KjyEH-8FUdOUYn7_p4kca3EomorRaktz4gaiR-Sd56LdQiOn3uaJEpvjCXzGK54LaM_p2QhDeVDwmPVs-aM44IzwYQIvSi7xwbOvI-GzsmbM99m",
  style: function(feature) {
    if (feature.properties.Pop_2014_5 >= '295') {
      return {
        color: '#8B0000',
        weight: 2
      };
    } else if ((feature.properties.Pop_2014_5 < '295') & (feature.properties.Pop_2014_5 >= '180')) {
      return {
        color: '#FF4500',
        weight: 2
      };
    } else if ((feature.properties.Pop_2014_5 < '180') & (feature.properties.Pop_2014_5 >= '105')) {
      return {
        color: 'yellow',
        weight: 2
      };
    } else if ((feature.properties.Pop_2014_5 < '105') & (feature.properties.Pop_2014_5 >= '47')) {
      return {
        color: '#32CD32',
        weight: 1
      };
    } else if ((feature.properties.Pop_2014_5 < '47') & (feature.properties.Pop_2014_5 >= '1')) {
      return {
        color: '#006400',
        weight: 1
      };
    } else if (feature.properties.Pop_2014_5 < '1') {
      return {
        color: 'black',
        weight: 1
      };
    }
  }
})

var censusBlockGroups2015 = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/CensuPop2013_to_2016_v2/FeatureServer/0?token=yZe85f22vr00NKYr-r_1we_vueI9ayM_xnxMUJR87SKrHtFkdp6mYWd2bRAFQ8fdSN-SH_8Y0OkjM369IMBKazSPejnmv6ONJrhy-re6xmRUskgD1SovPwtMrdLfH_oXtGKH0zeVeWFo77oW5KjyEH-8FUdOUYn7_p4kca3EomorRaktz4gaiR-Sd56LdQiOn3uaJEpvjCXzGK54LaM_p2QhDeVDwmPVs-aM44IzwYQIvSi7xwbOvI-GzsmbM99m",
  style: function(feature) {
    if (feature.properties.Pop_2015_5 >= '295') {
      return {
        color: '#8B0000',
        weight: 2
      };
    } else if ((feature.properties.Pop_2015_5 < '295') & (feature.properties.Pop_2015_5 >= '180')) {
      return {
        color: '#FF4500',
        weight: 2
      };
    } else if ((feature.properties.Pop_2015_5 < '180') & (feature.properties.Pop_2015_5 >= '105')) {
      return {
        color: 'yellow',
        weight: 2
      };
    } else if ((feature.properties.Pop_2015_5 < '105') & (feature.properties.Pop_2015_5 >= '47')) {
      return {
        color: '#32CD32',
        weight: 1
      };
    } else if ((feature.properties.Pop_2015_5 < '47') & (feature.properties.Pop_2015_5 >= '1')) {
      return {
        color: '#006400',
        weight: 1
      };
    } else if (feature.properties.Pop_2015_5 < '1') {
      return {
        color: 'black',
        weight: 1
      };
    }
  }
})

var censusBlockGroups2016 = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/CensuPop2013_to_2016_v2/FeatureServer/0?token=yZe85f22vr00NKYr-r_1we_vueI9ayM_xnxMUJR87SKrHtFkdp6mYWd2bRAFQ8fdSN-SH_8Y0OkjM369IMBKazSPejnmv6ONJrhy-re6xmRUskgD1SovPwtMrdLfH_oXtGKH0zeVeWFo77oW5KjyEH-8FUdOUYn7_p4kca3EomorRaktz4gaiR-Sd56LdQiOn3uaJEpvjCXzGK54LaM_p2QhDeVDwmPVs-aM44IzwYQIvSi7xwbOvI-GzsmbM99m",
  style: function(feature) {
    if (feature.properties.Pop_2016_5 >= '295') {
      return {
        color: '#8B0000',
        weight: 2
      };
    } else if ((feature.properties.Pop_2016_5 < '295') & (feature.properties.Pop_2016_5 >= '180')) {
      return {
        color: '#FF4500',
        weight: 2
      };
    } else if ((feature.properties.Pop_2016_5 < '180') & (feature.properties.Pop_2016_5 >= '105')) {
      return {
        color: 'yellow',
        weight: 2
      };
    } else if ((feature.properties.Pop_2016_5 < '105') & (feature.properties.Pop_2016_5 >= '47')) {
      return {
        color: '#32CD32',
        weight: 1
      };
    } else if ((feature.properties.Pop_2016_5 < '47') & (feature.properties.Pop_2016_5 >= '1')) {
      return {
        color: '#006400',
        weight: 1
      };
    } else if (feature.properties.Pop_2016_5 < '1') {
      return {
        color: 'black',
        weight: 1
      };
    }
  }
})

// var dmvTracks = L.esri.featureLayer({
//   url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/CensusTracks_Median_Household_Income_MD_VA_DC/FeatureServer/0?token=fUWvAEryKlQCZfJAXu3WvkdI8UI3AI7oYJP32IZZHvVLDrTrG5pt-egYMvc0nj3ocJnvE7-nS8Qr9UILfrx50iPrYqg-8d0B2qcSyzBdSotHW5VH-OQclub6QPSvZBYtE-LNYUwuKAxF3B6jrNSUjNpxZXZy-GuIZWHE0rm-RbA80cYUwrAALUNp9eDZwAXYehx2QF3n6c6DkvAh2NtcuUc8V3V2JjSjPgV_z4qxUgDcc3ZAxZTkcTIlLrU7hlFA",
//   style: function(feature) {
//     if (feature.properties.B19013e1 >= '100000') {
//       return {
//         color: '#006400',
//         weight: 2
//       };
//     } else if ((feature.properties.B19013e1 < '100000') & (feature.properties.B19013e1 >= '90000')) {
//       return {
//         color: '#32CD32',
//         weight: 2
//       };
//     } else if ((feature.properties.B19013e1 < '90000') & (feature.properties.B19013e1 >= '80000')) {
//       return {
//         color: 'yellow',
//         weight: 2
//       };
//     } else if ((feature.properties.B19013e1 < '80000') & (feature.properties.B19013e1 >= '70000')) {
//       return {
//         color: '#FF4500',
//         weight: 1
//       };
//     } else if ((feature.properties.B19013e1 < '70000') & (feature.properties.B19013e1 >= '40000')) {
//       return {
//         color: 'red',
//         weight: 1
//       };
//     } else if (feature.properties.B19013e1 < '70000') {
//       return {
//         color: '#8B0000',
//         weight: 1
//       };
//     }
//   }
// })

// var cdcTracks = L.esri.featureLayer({
//   url: "https://services3.arcgis.com/ZvidGQkLaDJxRSJ2/arcgis/rest/services/Overall_2014_Tracts/FeatureServer/1",
//   style: function(feature) {
//     if (feature.properties.RPL_THEMES >= '0.80') {
//       return {
//         color: '#8B0000',
//         weight: 2
//       };
//     } else if ((feature.properties.RPL_THEMES < '0.80') & (feature.properties.RPL_THEMES >= '0.60')) {
//       return {
//         color: 'orange',
//         weight: 2
//       };
//     } else if ((feature.properties.RPL_THEMES < '0.60') & (feature.properties.RPL_THEMES >= '0.40')) {
//       return {
//         color: 'yellow',
//         weight: 2
//       };
//     } else if ((feature.properties.RPL_THEMES < '0.40') & (feature.properties.RPL_THEMES >= '0.20')) {
//       return {
//         color: '#32CD32',
//         weight: 1
//       };
//     } else {
//       return {
//         color: '#006400',
//         weight: 2
//       };
//     }
//   }
// })
//
// ///Medicare & Medicaid Services Compare Information///////////
// var hospitalRatings = L.esri.featureLayer({
//   url: "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Hospital_General_Information/FeatureServer/0",
//   pointToLayer: function(feature, latlng) {
//     if (feature.properties.Hospital_overall_rating === '5') {
//       return L.marker(latlng, {
//         icon: iconsHospitalRankings.best
//       })
//     } else if (feature.properties.Hospital_overall_rating === '4') {
//       return L.marker(latlng, {
//         icon: iconsHospitalRankings.secondBest
//       })
//     } else if (feature.properties.Hospital_overall_rating === '3') {
//       return L.marker(latlng, {
//         icon: iconsHospitalRankings.mediocre
//       })
//     } else if (feature.properties.Hospital_overall_rating === '2') {
//       return L.marker(latlng, {
//         icon: iconsHospitalRankings.secondWorste
//       })
//     } else {
//       return L.marker(latlng, {
//         icon: iconsHospitalRankings.worste
//       })
//     }
//   }
// })
//
// var hospitalRatingDensity = L.esri.tiledMapLayer({
//   url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/Hospital_Information_Num_Rating_Density4/MapServer?token=MXl6qC994rUpFrWBmu_FVAehZPSfHo7dF2Dzv_FFhX4cXCKQGjN4O5gl020kB0x6si8Sf5dApD_Mj7q0vqEyazvfwQHCIxS0Nusw5Wmll6G0c8qnO1-N_DvAksuTgT0GFwPGByPT6t4QvLWB8uLW147iY1qPLh6VDF-QbE_zCcdHCF29OxgFGp6tXd2DRv7_MWddijNmIIhpYmzHCIxIG8dMxdwDne3kmwg3pMwYBPPdh7txEWeJ0w_2XmJT5MCX"
// })



$("#censusDataGov1").on("click", function() {
  if (this.checked === true) {
    //START/////Downloaded from Census.gov, table join with other census data to account for MEAN non-family household income information//
    censusBlockGroups2013.addTo(map);
    //
    var popupTemplate = "<h3>Arlington County Census: 2013</h3><h4>{NAMELSAD}<h4><h5>Population Ages' 5 to 17: <strong>{Pop_2013_5}<strong></h5>";
    //
    censusBlockGroups2013.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
    //END/////Downloaded from Census.gov//
  } else {
    map.removeLayer(censusBlockGroups2013)
  }
})

$("#censusDataGov2").on("click", function() {
  if (this.checked === true) {
    //START/////Downloaded from Census.gov, table join with other census data to account for MEAN non-family household income information//
    censusBlockGroups2014.addTo(map);
    //
    var popupTemplate = "<h3>Arlington County Census: 2014</h3><h4>{NAMELSAD}<h4><h5>Population Ages' 5 to 17: <strong>{Pop_2014_5}<strong></h5><br><h5>Population Ages' 5 to 17 Growth Rate: <strong>{Pop_2013_t}%<strong></h5>";
    //
    censusBlockGroups2014.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
    //END/////Downloaded from Census.gov//
  } else {
    map.removeLayer(censusBlockGroups2014)
  }
})

$("#censusDataGov3").on("click", function() {
  if (this.checked === true) {
    //START/////Downloaded from Census.gov, table join with other census data to account for MEAN non-family household income information//
    censusBlockGroups2015.addTo(map);
    //
    var popupTemplate = "<h3>Arlington County Census: 2015</h3><h4>{NAMELSAD}<h4><h5>Population Ages' 5 to 17: <strong>{Pop_2015_5}<strong></h5><br><h5>Population Ages' 5 to 17 Growth Rate: <strong>{Pop_2014_t}%<strong></h5>";
    //
    censusBlockGroups2015.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
    //END/////Downloaded from Census.gov//
  } else {
    map.removeLayer(censusBlockGroups2015)
  }
})

$("#censusDataGov4").on("click", function() {
  if (this.checked === true) {
    //START/////Downloaded from Census.gov, table join with other census data to account for MEAN non-family household income information//
    censusBlockGroups2016.addTo(map);
    //
    var popupTemplate = "<h3>Arlington County Census: 2016</h3><h4>{NAMELSAD}<h4><h5>Population Ages' 5 to 17: <strong>{Pop_2016_5}<strong></h5><br><h5>Population Ages' 5 to 17 Growth Rate: <strong>{Pop_2015_t}%<strong></h5>";
    //
    censusBlockGroups2016.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
    //END/////Downloaded from Census.gov//
  } else {
    map.removeLayer(censusBlockGroups2016)
  }
})

// $("#censusDataGov2").on("click", function() {
//   if (this.checked === true) {
//     //START/////Downloaded from Census.gov, table join with other census data to account for MEDIAN household income information//
//     dmvTracks.addTo(map);
//     var popupTemplate = "<h3>{NAMELSAD}<h3><h5>Median Household Income by Census Track: <strong>{B19013e1}<strong></h5>";
//     dmvTracks.bindPopup(function(e) {
//       return L.Util.template(popupTemplate, e.feature.properties)
//     });
//     //END/////Downloaded from Census.gov//
//   } else {
//     map.removeLayer(dmvTracks)
//   }
// })
//
// var cdcTracks2 = L.esri.featureLayer({
//   url: "https://services3.arcgis.com/ZvidGQkLaDJxRSJ2/arcgis/rest/services/Overall_2014_Tracts/FeatureServer/1",
//   style: function(feature) {
//       return {
//         color: 'black',
//         weight: 2
//       };
//     }
// })
//
// $("#cdc").on("click", function() {
//   if (this.checked === true) {
//     //START/////Downloaded from ArcGIS Online Living Atlas//
//     cdcTracks.addTo(map);
//     var popupTemplate = "<h3>{LOCATION}</h3><br><h4>Socio Economic Vulnerability Index-CDC</h4><br><h5>Vulnerability Rating(1-High, 0-Low): <strong>{RPL_THEMES}<strong></h5>";
//     cdcTracks.bindPopup(function(e) {
//       return L.Util.template(popupTemplate, e.feature.properties)
//     });
//     //END/////Downloaded from ArcGIS Online Living Atlas//
//   } else {
//     map.removeLayer(cdcTracks)
//   }
// })
//
//
// $("#medicareMedicaid").on("click", function() {
//   if (this.checked === true) {
//     hospitalRatings.addTo(map);
//     var popupTemplate = "<h3>{Hospital_Name}</h3><br><h4>Medicare & Medicaid Certified Hospital Ratings</h4><br><h5>Hospital Rating(5-Best, 1-Worste): <strong>{Hospital_overall_rating}<strong></h5>";
//     hospitalRatings.bindPopup(function(e) {
//       return L.Util.template(popupTemplate, e.feature.properties)
//     });
//   } else {
//     map.removeLayer(hospitalRatings)
//   }
// })
//
// $("#hospitalRatingDensity").on("click", function() {
//   if (this.checked === true) {
//     hospitalRatingDensity.addTo(map);
//   } else {
//     map.removeLayer(hospitalRatingDensity)
//   }
// })
