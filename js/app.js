//init markers for KO communication
var markers = [];

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
    }

];

var ViewModel = function() {
    var self = this;
    //init beast array
    self.beastList = ko.observableArray(beasts);



    //search query
    self.query = ko.observable('');

    //search bar function
    self.search = ko.computed(function() {

        return ko.utils.arrayFilter(self.beastList(), function(beast) {
            return beast.name.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;
        });
    });

    self.openInfoWindow = function(e) {
      console.log(e);
      google.maps.event.trigger(markers[(e.markerRef-1)], 'click');
    }

        //cryptid wiki link logic
        $('#cryplink').on("click", function(){
        console.log("hi!");
        });

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
            }]
        }]

    });

    //marker implementation

    //init previous infoWindow for previous-infoWindow close logic
    var prev_infoWindow = false;

    //init cryptid wiki API access
      $("#cryptlink").on('click', function() {
      console.log();
    });

    for (var i = 0; i < beasts.length; i++) {
        beasts[i].markerRef = (i + 1);
        var marker = new google.maps.Marker({

            map: map,
            draggable: false,
            label: (i + 1).toString(),
            position: new google.maps.LatLng(beasts[i].lat, beasts[i].long)
        });
        markers.push(marker);
        var contentString = '<p>' + beasts[i].name + '<br>' + beasts[i].verbalLoc + '</p>' +
        '<a href="#" id="cryptlink">search the Cryptid Wiki for ' + beasts[i].name + '</a>' +
        '<br><br><iframe width="360" height="200" src="' + beasts[i].vidLink + '"frameborder="0"/>' +
        '</iframe>';

        var infoWindow = new google.maps.InfoWindow();
        bindInfo(marker, contentString, infoWindow)

        function bindInfo(marker, contentString, infoWindow) {
            google.maps.event.addListener(marker, 'click', function() {
                if (prev_infoWindow) {
                  prev_infoWindow.close();
                }

                prev_infoWindow = infoWindow;
                infoWindow.setContent(contentString);
                infoWindow.open(map, marker);

                //cryptid wiki API search function
                $("#cryptlink").on('click', function() {
               console.log(beasts[(marker.label-1)].name);
                 });
            });



        }
    }

}
