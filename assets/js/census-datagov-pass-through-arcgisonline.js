var map = L.map('map').setView([38.8816, -77.0910], 12);
// L.esri.basemapLayer("DarkGray").addTo(map);

// var OpenStreetMap_Mapnik = L.tileLayer('http://localhost:8080/geoserver/CensusCounties5m/wms', {
// 	maxZoom: 19,
// 	attribution: 'testing1212'
// });

// OpenStreetMap_Mapnik.addTo(map)



var wmsLayer= L.tileLayer.wms("http://localhost:8080/geoserver/PostgreSQL-USCounties/wms", {
  layers: 'PostgreSQL-USCounties:uscounties_5m_wgs84_continental_v2',
  format: 'image/png',
  transparent: true,
  attribution: 'Socially Determined Inc.'
});
wmsLayer.addTo(map);

var wmsLayer2= L.tileLayer.wms("http://localhost:8080/geoserver/PostgreSQL-USCounties/wms", {
  layers: 'PostgreSQL-USCounties:uscounties_centroid)wgs84',
  format: 'image/png',
  transparent: true,
  attribution: 'Socially Determined Inc.'
});
wmsLayer2.addTo(map);

//////////////////2013//////////////////
    function getColor2013(d) {
        return d > 295 ? '#8B0000' :
               d > 180 ? '#FF4500' :
               d > 105 ? 'yellow' :
               d > 47 ? '#32CD32' :
               d > 1  ? '#006400' :
               // d > 1  ?   '' :
                          'white';
    }
    var legendTitle2013 = L.control({position: 'topright'});
    legendTitle2013.onAdd = function (map) {
        var title = L.DomUtil.create('div', 'info legendTitle')
        title.innerHTML = '2013 Census Age 5 to 17 Block Groups'
        return title;
    };
    var legend2013 = L.control({position: 'bottomright'});
    legend2013.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'),
            grades = [1,47,105,180,295],
            labels = [];
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor2013(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '');
        }
        return div;
    };
//////////////////2013//////////////////
//////////////////2014//////////////////
    function getColor2014(d) {
        return d > 295 ? '#8B0000' :
               d > 180 ? '#FF4500' :
               d > 105 ? 'yellow' :
               d > 47 ? '#32CD32' :
               d > 1  ? '#006400' :
               // d > 1  ?   '' :
                          'white';
    }
    var legendTitle2014 = L.control({position: 'topright'});
    legendTitle2014.onAdd = function (map) {
        var title = L.DomUtil.create('div', 'info legendTitle')
        title.innerHTML = '2014 Census Age 5 to 17 Block Groups'
        return title;
    };
    var legend2014 = L.control({position: 'bottomright'});
    legend2014.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'),
            grades = [1,47,105,180,295],
            labels = [];
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor2014(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '');
        }
        return div;
    };
//////////////////2014//////////////////
//////////////////2015//////////////////
function getColor2015(d) {
    return d > 295 ? '#8B0000' :
           d > 180 ? '#FF4500' :
           d > 105 ? 'yellow' :
           d > 47 ? '#32CD32' :
           d > 1  ? '#006400' :
           // d > 1  ?   '' :
                      'white';
}
var legendTitle2015 = L.control({position: 'topright'});
legendTitle2015.onAdd = function (map) {
    var title = L.DomUtil.create('div', 'info legendTitle')
    title.innerHTML = '2015 Census Age 5 to 17 Block Groups'
    return title;
};
var legend2015 = L.control({position: 'bottomright'});
legend2015.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [1,47,105,180,295],
        labels = [];
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor2015(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '');
    }
    return div;
};
//////////////////2015//////////////////
//////////////////2016//////////////////
function getColor2016(d) {
    return d > 295 ? '#8B0000' :
           d > 180 ? '#FF4500' :
           d > 105 ? 'yellow' :
           d > 47 ? '#32CD32' :
           d > 1  ? '#006400' :
           // d > 1  ?   '' :
                      'white';
}
var legendTitle2016 = L.control({position: 'topright'});
legendTitle2016.onAdd = function (map) {
    var title = L.DomUtil.create('div', 'info legendTitle')
    title.innerHTML = '2016 Census Age 5 to 17 Block Groups'
    return title;
};
var legend2016 = L.control({position: 'bottomright'});
legend2016.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [1,47,105,180,295],
        labels = [];
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor2016(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '');
    }
    return div;
};
//////////////////2016//////////////////
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
        color: 'white',
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
        color: 'white',
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
        color: 'white',
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
        color: 'white',
        weight: 1
      };
    }
  }
})


$("#censusDataGov1").on("click", function() {
  if (this.checked === true) {

    legendTitle2013.addTo(map);
    legend2013.addTo(map);
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
    map.removeControl(legendTitle2013)
    map.removeControl(legend2013)
  }
})

$("#censusDataGov2").on("click", function() {
  if (this.checked === true) {

    legendTitle2014.addTo(map);
    legend2014.addTo(map);
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
    map.removeControl(legendTitle2014)
    map.removeControl(legend2014)
  }
})

$("#censusDataGov3").on("click", function() {
  if (this.checked === true) {

    legendTitle2015.addTo(map);
    legend2015.addTo(map);
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
    map.removeControl(legendTitle2015)
    map.removeControl(legend2015)
  }
})

$("#censusDataGov4").on("click", function() {
  if (this.checked === true) {

    legendTitle2016.addTo(map);
    legend2016.addTo(map);
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
    map.removeControl(legendTitle2016)
    map.removeControl(legend2016)
  }
})

///////////////////PARKS////////////////////
var parks = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/Arlington_Parks/FeatureServer/0?token=K_wX2hbQdcqeKMcLoCRLw9hw1TEx1POdF06zRsAGGChJfdCHvQXXRzjMBOodiKrLIlHHC0PbdvRgdnNTaK2zZYX1F2pStnIBRjDHzRfVXRPJ5-r6ymWaKUaU3hGBxJXKdiO2zqxfGTOV5vBiopxWF2gBOsn8x4KwnNg4Dl5VOSFfxNnPAt-EVrCUmMOe00InSJTAGtIehoMz014kfDO86kLgchb_70tcooxRVE6AzDu7mQXJbjAiK89nfOGCo6RN",
  style: function(feature) {
      return {
        color: 'green',
        weight: 1,
        opacity: 1,
        fillOpacity: 1
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
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      };
    }
})
$("#parkingLots").on("click", function() {
  if (this.checked === true) {
    parkingLots.addTo(map);
    var popupTemplate = "<h5> Arlington County Parking Lot </h5>";
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
        color: '#FF6347',
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      };
    }
})
$("#airport").on("click", function() {
  if (this.checked === true) {
    airports.addTo(map);
    var popupTemplate = "<h5> Ronald Reagan International Airport</h5>";
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

///////////////////Census Block Groups /w Additional Information////////////////////
var censusBlocksWithoutLandCover = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/BlockGroup_Arl_with_GrowthRate_AddKids_Final_COMPLETE/FeatureServer/0?token=l3-0a82PTrW_1hbl6q8kaPWVnlT_cdCJTKS8QEizALawNZ3hbDKsuTl4ZWPx20V7e-5pSag6D5VMDHgaFGelL0ahK2nH7TjCGRoN28AxVNMSDe9YwyctPZAkR0rozbOd_a3Zsy6oaH2DhhWcsxgl9iFgXhcmXmdLC1csKxuqhcf0r9qq1_UYfRt-O4tBTaOztCAjgXDS44LVSaOjzGj8NLPdbqiajXjglHO6fVnfYHPFl8d5q6Yggl5lu4ZuCojI",
  style: function(feature) {
    if (feature.properties.Add2020 >= '100') {
      return {
        color: 'black',
        fillColor: '#641E16',
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      };
    } else if ((feature.properties.Add2020 < '100') & (feature.properties.Add2020 > '50')) {
      return {
        color: 'black',
        fillColor: '#E74C3C',
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      };
    } else if ((feature.properties.Add2020 < '50') & (feature.properties.Add2020 > '0')) {
      return {
        color: 'black',
        fillColor: '#D98880',
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      };
    } else if ((feature.properties.Add2020 < '0') & (feature.properties.Add2020 >= '-50')) {
      return {
        color: 'black',
        fillColor: '#A9CCE3',
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      };
    }   else if ((feature.properties.Add2020 < '-50') & (feature.properties.Add2020 >= '-100')) {
      return {
        color: 'black',
        fillColor: '#2980B9',
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      };
    }    else if ((feature.properties.Add2020 < '-100') & (feature.properties.Add2020 >= '-201')) {
      return {
        color: 'black',
        fillColor: '#154360',
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      };
    }   else {
      return {
        color: 'black',
        fillColor: 'black',
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      };
    }
  }
})

function getColorBlock(d) {
    return d > 100 ? '#641E16' :
           d > 50 ? '#E74C3C' :
           d > 1 ? '#D98880' :
           d > -50 ? '#A9CCE3' :
           d > -100 ? '#2980B9' :
           d > -201  ?   '#154360' :
           // d > 1  ?   '' :
                      'white';
}
var legendTitleBlock = L.control({position: 'topright'});
legendTitleBlock.onAdd = function (map) {
    var title = L.DomUtil.create('div', 'info legendTitle')
    title.innerHTML = '2016-2020 Projected Growth For Age 5 to 17 Per Block Group'
    return title;
};
var legendBlock = L.control({position: 'bottomright'});
legendBlock.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [-201, -100 , -50 , 1, 50, 100],
        labels = [];
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorBlock(grades[i] + 1) + '"></i> ' +
            grades[i] + '  ' + (grades[i + 1] ? '&ndash;' + '  ' + grades[i + 1] + '<br>' : '+');
    }
    return div;
};
$("#censusBlocksRemLandCover").on("click", function() {
  if (this.checked === true) {

    legendTitleBlock.addTo(map)
    legendBlock.addTo(map)
    censusBlocksWithoutLandCover.addTo(map);
    var popupTemplate = "<h3>Census Block Group</h3><h4>Urban %: <strong>{URBAN}</strong><h4><h5>Average Growth Rate 2013-2016: <strong>{AvgGrowthR}%<strong></h5><br><h5>Projected Additional/Reduction Age 5-17 2016-2020 to account for: <strong>{Add2020}<strong></h5>";
    censusBlocksWithoutLandCover.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
  } else {
    map.removeLayer(censusBlocksWithoutLandCover)
    map.removeControl(legendTitleBlock)
    map.removeControl(legendBlock)
  }
})
///////////////////Census Block Groups /w Additional Information////////////////////

///////////////////Planning Units 2030 /w Additional Information////////////////////
var planningUnits = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/School_Planning_Units_FINAL_COMPLETE_2030_v2/FeatureServer/0?token=vBWsbOy8XMDDnD3cft0M6GqbTZv8QvSxhMGw0t198BHhzQmXy0l8d_CreoLSnVUY6NNVfsIrqCzWBNpk9bD5HmLJ2be_d2jk-GnEXuA4QKav71xnHkKn2XfNafiSkuPBh-4StVcytHQyblsqR8yw3NB2XRlZyPwndJHZlUTRXBzlo3pOura0p3FcD8Eewl2Wm7lVARQNEAwFWyQv-s5D0BpmEbbWYrYrYwb6t818t2Z2b1e7FL9xgf9CjNwwNDuF",
  style: function(feature) {
    if (feature.properties.Avg_Add203 > '219') {
      return {
        color: 'black',
        fillColor: '#641E16',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
      };
    } else if ((feature.properties.Avg_Add203 < '219') & (feature.properties.Avg_Add203 >= '108')) {
      return {
        color: 'black',
        fillColor: '#922B21',
        weight: 2,
        opacity: 1,
        fillOpacity: 1
      };
    } else if ((feature.properties.Avg_Add203 < '108') & (feature.properties.Avg_Add203 >= '41')) {
      return {
        color: 'black',
        fillColor: '#A93226',
        weight: 2,
        opacity: 1,
        fillOpacity: 1
      };
    } else if ((feature.properties.Avg_Add203 < '41') & (feature.properties.Avg_Add203 >= '9.6')) {
      return {
        color: 'black',
        fillColor: '#CD6155',
        weight: 2,
        opacity: 1,
        fillOpacity: 1
      };
    } else if ((feature.properties.Avg_Add203 < '9.6') & (feature.properties.Avg_Add203 > '0')) {
      return {
        color: 'black',
        fillColor: '#D98880',
        weight: 2,
        opacity: 1,
        fillOpacity: 1
      };
    } else if ((feature.properties.Avg_Add203 < '0') & (feature.properties.Avg_Add203 >= '-29.4')) {
      return {
        color: 'black',
        fillColor: '#D4E6F1',
        weight: 2,
        opacity: 1,
        fillOpacity: 1
      };
    }  else if ((feature.properties.Avg_Add203 < '-29.4') & (feature.properties.Avg_Add203 >= '-61')) {
      return {
        color: 'black',
        fillColor: '#7FB3D5',
        weight: 2,
        opacity: 1,
        fillOpacity: 1
      };
    }  else if ((feature.properties.Avg_Add203 < '-61') & (feature.properties.Avg_Add203 >= '-125')) {
      return {
        color: 'black',
        fillColor: '#2471A3',
        weight: 2,
        opacity: 1,
        fillOpacity: 1
      };
    }   else if ((feature.properties.Avg_Add203 < '-125') & (feature.properties.Avg_Add203 >= '-413')) {
      return {
        color: 'black',
        fillColor: '#1F618D',
        weight: 2,
        opacity: 1,
        fillOpacity: 1
      };
    }   else if ((feature.properties.Avg_Add203 < '-413') & (feature.properties.Avg_Add203 >= '-560')) {
      return {
        color: 'black',
        fillColor: '#154360',
        weight: 2,
        opacity: 1,
        fillOpacity: 1
      };
    } else {
      return {
        color: 'black',
        fillColor: 'black',
        weight: 2,
        opacity: 1,
        fillOpacity: 1
      };
    }
  }
})
function getColorPlan(d) {
    return d > 219 ? '#641E16' :
           d > 108 ? '#922B21' :
           d > 41 ? '#A93226' :
           d > 9.6 ? '#CD6155' :
           d > 1  ?   '#D98880' :
           d > -29.4  ? '#D4E6F1' :
           d > -61  ? '#7FB3D5' :
           d > -125  ? '#2471A3' :
           d > -413  ? '#1F618D' :
           d > -560  ? '#154360' :
           // d > 1  ?   '' :
                      'white';
}
var legendTitlePlan = L.control({position: 'topright'});
legendTitlePlan.onAdd = function (map) {
    var title = L.DomUtil.create('div', 'info legendTitle')
    title.innerHTML = '2016-2030 Projected Growth For Age 5 to 17 Per Planning Unit'
    return title;
};
var legendPlan = L.control({position: 'bottomright'});
legendPlan.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [-560,-413,-125,-61,-29.4,1,9.6,41,108,219],
        labels = [];
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorPlan(grades[i] + 1) + '"></i> ' +
            grades[i] + ' ' + (grades[i + 1] ? '&ndash;' + '  ' + grades[i + 1] + '<br>' : '+');
    }
    return div;
};
$("#arlPlanningUnitsWithInformation").on("click", function() {
  if (this.checked === true) {

    legendTitlePlan.addTo(map)
    legendPlan.addTo(map)
    planningUnits.addTo(map);
    var popupTemplate = "<h3>Arlington Planning Unit: <strong>{PU}</strong></h3><h4>Average Urban %: <strong>{Avg_Urban_}</strong><h4><h5>Average Projected Additional Age 5-17 from 2016-2030 to account for: <strong>{Avg_Add203}<strong></h5>";
    planningUnits.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
  } else {
    map.removeLayer(planningUnits)
    map.removeControl(legendTitlePlan)
    map.removeControl(legendPlan)
  }
})
///////////////////Planning Units 2030 /w Additional Information////////////////////

///////////////////2030 Hot Spot Analysis////////////////////
var hotSpot = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/Hot_Spots_Avg_Add203_v3/FeatureServer/0?token=QWzty1OLHPSyLTjAwSecolFsjMNbWxWnExXOMX1rLwxFGZYHhWnzPi0I2A136hRi1vEIoQySSGooQ9MuOocOcssomiZLIjDpfn1SNSQDoCa2O0p-2O3veWqUqtBMbXuYfHMk6jrACsTgPV4eWZLksvAGy2xL7V8P3DO2vZicYcZ7az8jG3G-yRFgWaEc7pOeTIemAOPYwwo7vrBZpe1xUg9Z4mLthG7P4VPSe1RxWSFROvaDMndvODSDCMK0CNMk",
  style: function(feature) {
    if (feature.properties.Gi_Text === 'Hot Spot with 95% Confidence') {
      return {
        color: 'black',
        fillColor: '#A93226',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7
      };
    } else if (feature.properties.Gi_Text === 'Cold Spot with 95% Confidence') {
      return {
        color: 'black',
        fillColor: '#2471A3',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7
      };
    } else if (feature.properties.Gi_Text === 'Hot Spot with 99% Confidence') {
      return {
        color: 'black',
        fillColor: '#641E16',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7
      };
    } else if (feature.properties.Gi_Text === 'Cold Spot with 99% Confidence') {
      return {
        color: 'black',
        fillColor: '#154360',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7
      };
    } else if (feature.properties.Gi_Text === 'Cold Spot with 90% Confidence') {
      return {
        color: 'black',
        fillColor: '#7FB3D5',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7
      };
    } else if (feature.properties.Gi_Text === 'Hot Spot with 90% Confidence') {
      return {
        color: 'black',
        fillColor: '#D98880',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7
      };
    } else if (feature.properties.Gi_Text === 'Not Significant') {
      return {
        color: 'black',
        fillColor: '#D0D3D4',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7
      };
    }
    else {
     return {
       color: 'black',
       fillColor: '#D0D3D4',
       weight: 2,
       opacity: 1,
       fillOpacity: 0.7
     };
   }
  }
})
$("#hotSpot").on("click", function() {
  if (this.checked === true) {
    hotSpot.addTo(map);
    var popupTemplate = "<h5> {Gi_Text}</h5>";
    hotSpot.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
  } else {
    map.removeLayer(hotSpot)
  }
})
///////////////////2030 Hot Spot Analysis////////////////////

///////////////////2030 Outliers Analysis////////////////////
var outLiers = L.esri.featureLayer({
  url: "https://services9.arcgis.com/l04XU2PBEtisYkwN/arcgis/rest/services/Find_Outliers_Avg_Add203/FeatureServer/0?token=FTpNfcnhtaVvTEL_ozBuqBBm2_dIi9QI2ALJCc0_HJkfLpMjPnPHN8QBjBjooTZWKDH3OCHxKj6WzaWGK-8HVFDFs7mKWCeEdkKPeBXs7aGOUz-rHc6xxYCKVfYOYzdtKPR8GQEHAT0-vBb6cBva4pi6Vylo0FIgRN-NOtWkBb6mfMBKdggc6E0WXgDReY6Vz05xzXYtXz6b793d1xXSaPfrZnYBuadd2x9QuDapZJ6y17KE5VtI7iYSgWol-9it",
  style: function(feature) {
    if (feature.properties.Li_Text === 'Low-High outlier') {
      return {
        color: 'black',
        fillColor: '#154360',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7
      };
    } else if (feature.properties.Li_Text === 'Low-Low cluster') {
      return {
        color: 'black',
        fillColor: '#7FB3D5',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7
      };
    } else if (feature.properties.Li_Text === 'High-High cluster') {
      return {
        color: 'black',
        fillColor: '#D98880',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7
      };
    } else if (feature.properties.Li_Text === 'Not significant') {
      return {
        color: 'black',
        fillColor: 'white',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7
      };
    }
  }
})
$("#outLiers").on("click", function() {
  if (this.checked === true) {
    outLiers.addTo(map);
    var popupTemplate = "<h5> {Li_Text}</h5>";
    outLiers.bindPopup(function(e) {
      return L.Util.template(popupTemplate, e.feature.properties)
    });
  } else {
    map.removeLayer(outLiers)
  }
})
///////////////////2030 Outliers Analysis////////////////////
