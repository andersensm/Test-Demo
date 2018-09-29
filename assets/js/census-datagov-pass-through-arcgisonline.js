var map = L.map('map').setView([38.9072, -77.0369], 10);
L.esri.basemapLayer("Streets").addTo(map);

//

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

///////////////////PARKS////////////////////
var parks = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/Arlington_Parks/FeatureServer/0?token=K_wX2hbQdcqeKMcLoCRLw9hw1TEx1POdF06zRsAGGChJfdCHvQXXRzjMBOodiKrLIlHHC0PbdvRgdnNTaK2zZYX1F2pStnIBRjDHzRfVXRPJ5-r6ymWaKUaU3hGBxJXKdiO2zqxfGTOV5vBiopxWF2gBOsn8x4KwnNg4Dl5VOSFfxNnPAt-EVrCUmMOe00InSJTAGtIehoMz014kfDO86kLgchb_70tcooxRVE6AzDu7mQXJbjAiK89nfOGCo6RN",
  style: function(feature) {
      return {
        color: 'green',
        weight: 2
      };
    }
})
$("#parks").on("click", function() {
  if (this.checked === true) {
    parks.addTo(map);
    var popupTemplate = "<h3>Arlington County Parks</h3><h4><strong>{ParkName}</strong><h4><h5>Ownership: <strong>{Ownership}<strong></h5>";
    parks.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
  } else {
    map.removeLayer(parks)
  }
})
///////////////////PARKS////////////////////

///////////////////PARKING LOTS////////////////////
var parkingLots = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/Arlington_Parking_Lots/FeatureServer/0?token=eNY3D2aBKbf2u4E4bJgGNsceNEmVEL8f9-DXCXuK2khlkXptoYfLIb-NBZjsIkCYy2ZDfrevFi_sGs3TkASIIduYDE0xPQRMtkjuUI0OLnxzVw09b_xxFLs2yd0FCAxmM0uMkplW7Wl4hMshhuk01tBv-NB8hg1mbjlSJ3FIddZgktAH7isn8M3z5PoZsxPYlm9772bmGnb_T_wUgouBwV70yMpgbcAQxhs9wGetdzTho5AD_mNB4zw2iXcSk7S5",
  style: function(feature) {
      return {
        color: 'black',
        weight: 2
      };
    }
})
$("#parkingLots").on("click", function() {
  if (this.checked === true) {
    parkingLots.addTo(map);
    var popupTemplate = "<h3> Arlington County Parking Garage </h3>";
    parkingLots.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
  } else {
    map.removeLayer(parkingLots)
  }
})
///////////////////PARKING LOTS////////////////////

///////////////////AIRPORTS////////////////////
var airports = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/Arlington_Airport/FeatureServer/0?token=D-RVGLp719W0zbYh0nux3gAp2qy7YTe4vnC9GkoLuD0m7uq4MsnpxHUGBH9Gfx5u2FOY3biEFlCnr7TJWJbRKvMCWBFyKNen5mA-j_9ldTI2ay6c8Lg6vw7JHt9179_e4DGh2UcLOtiT0XVAF1CH7FUz3MO8h8M8e6iVtoCLXpHSHSzZE-XFsx0a4jx0xz7qEaTZ6m3ogtvaDJUNuL-e7D2l9amK-Y4ZZoSRYtS2QXIBN18S42IZrxI6oQc7S2iZ",
  style: function(feature) {
      return {
        color: '#008B8B',
        weight: 2
      };
    }
})
$("#airport").on("click", function() {
  if (this.checked === true) {
    airports.addTo(map);
    var popupTemplate = "<h3> Ronald Reagan International Airport</h3>";
    airports.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
  } else {
    map.removeLayer(airports)
  }
})
///////////////////AIRPORTS////////////////////

///////////////////SCHOOLS////////////////////
var schoolsLevel = {
  elementarySchool: L.ExtraMarkers.icon({
    icon: 'fa-school',
    markerColor: 'orange-dark',
    shape: 'circle',
    prefix: 'fa'
  }),
  middleSchool: L.ExtraMarkers.icon({
    icon: 'fa-school',
    markerColor: 'yellow',
    shape: 'circle',
    prefix: 'fa'
  }),
  highSchool: L.ExtraMarkers.icon({
    icon: 'fa-school',
    markerColor: 'cyan',
    shape: 'circle',
    prefix: 'fa'
  }),
  alternate: L.ExtraMarkers.icon({
    icon: 'fa-school',
    markerColor: 'pink',
    shape: 'circle',
    prefix: 'fa'
  })
};
var schools = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/Arlington_Point_Schools/FeatureServer/0?token=rPWpaOQY_xsiF440TBy4004W0CfDfBBhIyJdY1Q2viIyp0TjPMsbcWg6-zAKWX1Efbir3CAEkarmt5gmESNh9fK_p4o5f6o-V4o88t2bJ-cYUqniIEbQmNVlI8QRZL3eUmEvPApXGPNb9MIRxIB4tkp4jAwCqZ5RJ55Hu9AI_6WAfdLRND8sm_FgyT6W3Nfm1JpV9r0ix4ewxy3iqoO0XPuImyYXdntQeFLRKP6r-1CC0HM5oJJPxvlc58JK8dn2",
  pointToLayer: function(feature, latlng) {
    if (feature.properties.SYMBOL === 'ES') {
      return L.marker(latlng, {
        icon: schoolsLevel.elementarySchool
      })
    } else if (feature.properties.SYMBOL === 'MS') {
      return L.marker(latlng, {
        icon: schoolsLevel.middleSchool
      })
    } else if (feature.properties.SYMBOL === 'HS') {
      return L.marker(latlng, {
        icon: schoolsLevel.highSchool
      })
    } else {
      return L.marker(latlng, {
        icon: schoolsLevel.alternate
      })
    }
  }
})
$("#schools").on("click", function() {
  if (this.checked === true) {
    schools.addTo(map);
    var popupTemplate = "<h3>{NAME}</h3><h4>Education Level: <strong>{SYMBOL}</strong><h4><h5>Address: <strong>{ADDRESS}<strong></h5>";
    schools.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
  } else {
    map.removeLayer(schools)
  }
})
///////////////////SCHOOLS////////////////////

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
