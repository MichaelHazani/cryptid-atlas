//init markers for KO communication
var markers = [];

// beasts DB
var beasts = [

    {
        name: "Ogopogo",
        verbalLoc: "Okanagan Lake, BC",
        lat: 49.833850,
        long: -119.523610,
        vidLink: "https://www.youtube.com/embed/7w7Kkatcnu0",
        markerRef: null
    },

    {
        name: "Mothman",
        verbalLoc: "Point Pleasant, WV, USA",
        lat: 38.844525,
        long: -82.137089,
        vidLink: "https://www.youtube.com/embed/pXoaWMD5A-M",
        markerRef: null
    },

    {
        name: "Momo",
        verbalLoc: "Dundee, MI, USA",
        lat: 41.957268,
        long: -83.659660,
        vidLink: "https://www.youtube.com/embed/ZxYfW4iufQ4",
        markerRef: null
    },

    {
        name: "Cottingley Fairies",
        verbalLoc: "Cottingley, UK",
        lat: 53.830186,
        long: -1.820804,
        vidLink: "https://www.youtube.com/embed/CN3DpHDKFMg",
        markerRef: null
    },

    {
        name: "Jersey Devil",
        verbalLoc: "Pine Barrens of southern NJ, USA",
        lat: 40.058324,
        long: -74.405661,
        vidLink: "https://www.youtube.com/embed/Q5x_3nCkMBw",
        markerRef: null
    },

    {
        name: "Crichton Leperchaun",
        verbalLoc: "Mobile, AL, USA",
        lat: 30.706301,
        long: -88.106112,
        vidLink: "https://www.youtube.com/embed/nda_OSWeyn8",
        markerRef: null
    },

    {
        name: "Mongolian Death Worm",
        verbalLoc: "Gobi Desert, Mongolia",
        lat: 43.413029,
        long: 104.326172,
        vidLink: "https://www.youtube.com/embed/pUHx_JRInYo",
        markerRef: null
    },

    {
        name: "Carnivorous Tree",
        verbalLoc: "Madagascar",
        lat: -18.766947,
        long: 46.869107,
        vidLink: "https://www.youtube.com/embed/slVRJR6TBVA",
        markerRef: null
    },


    {
        name: "Oklahoma Octopus",
        verbalLoc: "Oklahoma, USA",
        lat: -18.766947,
        long: 46.869107,
        vidLink: "https://www.youtube.com/embed/gdM_ILb9Dvk",
        markerRef: null
    },

    {
        name: "Lone Pine Mountain Devil",
        verbalLoc: "Lone Pine, CA, USA",
        lat: 36.606044,
        long: -118.062865,
        vidLink: "https://www.youtube.com/embed/t7I-2uUM-BA",
        markerRef: null
    },

    {
        name: "Ropen",
        verbalLoc: "New Guinea Island",
        lat: -4.185235,
        long: 136.825284,
        vidLink: "https://www.youtube.com/embed/QSxq9qnFau0",
        markerRef: null
    },

    {
        name: "Boggy Creek Monster",
        verbalLoc: "Fouke County, AK",
        lat: 33.364438,
        long: -93.936066,
        vidLink: "https://www.youtube.com/embed/b50_ZcPa-3s",
        markerRef: null
    },

    {
        name: "Orang Pendek",
        verbalLoc: "Sumatra",
        lat: -0.589724,
        long: 101.343106,
        vidLink: "https://www.youtube.com/embed/I_LStrhLkkc",
        markerRef: null
    },

    {
        name: "Merman",
        verbalLoc: "Thunder Bay, Lake Superior",
        lat: 47.723087,
        long: -86.940716,
        vidLink: "https://www.youtube.com/embed/G9dLoE47zLU",
        markerRef: null
    },

    {
        name: "Popobawa",
        verbalLoc: "Pemba Island",
        lat: -5.031935,
        long: 39.775557,
        vidLink: "https://www.youtube.com/embed/09AATWEGYsg",
        markerRef: null
    }
];

//init sidr
$('#sidebarlink').sidr({
    displace: false
});

var ViewModel = function() {
    var self = this;
    //init beast array
    self.beastList = ko.observableArray(beasts);



    //search query
    self.query = ko.observable('');


    // search bar function
    self.search = self.markerArray = ko.computed(function() {

        return ko.utils.arrayFilter(self.beastList(), function(beast) {
            var result = beast.name.toLowerCase().indexOf(self.query().toLowerCase());
            if (result > 0 || result < 0) {
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(null);
                }
            } else if (result === 0) {
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                }
            }
            return beast.name.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;
        });

    });

    self.openInfoWindow = function(e) {
        $.sidr('close', 'sidr');
        google.maps.event.trigger(markers[(e.markerRef)], 'click');
    };

};

//let's go!
ko.applyBindings(new ViewModel);

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 10,
            lng: -30,
        },
        zoom: 2,
        //map style from https://snazzymaps.com/, modified Pirate
        styles: [{
            "featureType": "all",
            "elementType": "all",
            "stylers": [{
                "color": "#d4b78f"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#0d0000"
            }, {
                "visibility": "on"
            }, {
                "weight": 1
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#98290e"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }, {
                "hue": "#ff0000"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "on"
            }, {
                "saturation": "-40"
            }, {
                "hue": "#ff0000"
            }, {
                "lightness": "-15"
            }, {
                "weight": "0.01"
            }]
        }, {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.province",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "administrative.locality",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#98290e"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#d4b78f"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "all",
            "stylers": [{
                "color": "#c4b17e"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#0d0000"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#d9be94"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#0d0000"
            }, {
                "visibility": "off"
            }, {
                "weight": 2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#a8ac91"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#98290e"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }],
        }],
    });

    //marker implementation

    //init previous infoWindow for previous-infoWindow close logic
    var prev_infoWindow = false;
    var prev_marker = false;
    for (var i = 0; i < beasts.length; i++) {
        beasts[i].markerRef = (i);
        var marker = new google.maps.Marker({

            map: map,
            draggable: false,
            number: beasts[i].markerRef,
            position: new google.maps.LatLng(beasts[i].lat, beasts[i].long)
        });
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
        markers.push(marker);
        var contentString = '<p>' + beasts[i].name + '<br>' + beasts[i].verbalLoc + '</p>' +
            '<a href="#" id="cryptlink">search the Cryptid Wiki for the ' + beasts[i].name + '</a>' +
            '<br><br><iframe width="360" height="200" src="' + beasts[i].vidLink + '"frameborder="0"/>' +
            '</iframe>';

        var infoWindow = new google.maps.InfoWindow();
        bindInfo(marker, contentString, infoWindow);

        function bindInfo(marker, contentString, infoWindow) {
            google.maps.event.addListener(marker, 'click', function() {
                if (prev_infoWindow) {
                    prev_infoWindow.close();
                }
                marker.setIcon('http://maps.google.com/mapfiles/ms/icons/purple-dot.png');
                if (prev_marker) {
                    prev_marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                }
                prev_infoWindow = infoWindow;
                prev_marker = marker;
                infoWindow.setContent(contentString);
                infoWindow.open(map, marker);

                //cryptid wiki API search function
                $("#cryptlink").on('click', function() {
                    var beastName = (beasts[(marker.number)].name).split(" ").join("%2B");
                    var apiQuery =
                        "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fcryptidz.wikia.com%2Fapi%2Fv1%2FSearch%2FList%3Fquery%3D" +
                        beastName +
                        "%26limit%3D25%26minArticleQuality%3D10%26batch%3D1%26namespaces%3D0%252C14'&format=xml&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?";
                    $.getJSON(apiQuery, function(data) {
                        showCryptid(data);
                    }).fail(function() {
                        alert("Error! \n Unable to retreive data from the Cryptid Wiki");
                    });
                });
            });
        }
    }
}

//display CryptidWiki API Scrape Results
function showCryptid(data) {
    if (data.results.length <= 0) {
        $("#cryptidresults").append("<p>No Results Found!</p>");
        $("#cryptiddiv").fadeIn("slow");
    } else {
        console.log(data);
        cryptData = JSON.parse(data.results[0].toString().replace("<body>", "").replace("</body>", ""));
        $("#cryptidresults").html("");

        for (var i = 0; i < cryptData.items.length; i++) {
            $("#cryptidresults").append("<a href=" + cryptData.items[i].url + " target='_blank' alt=cryptidWiki article for " + cryptData.items[i].title + ">" + cryptData.items[i].title + "</a><br>");
        }

        $("#cryptiddiv").fadeIn("slow");
    }
}
//hide window when clicked
$("#cryptidclose").click(function() {
    $("#cryptiddiv").fadeOut("slow");
});
