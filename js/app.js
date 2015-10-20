var beasts = [

    {
        name: "Ogopogo",
        verbalLoc: "Okanagan Lake, BC",
        lat: 49.833850,
        long: -119.523610,
        vidLink: "https://www.youtube.com/watch?v=7w7Kkatcnu0",
        markerRef: null
    },

    {
        name: "Mothman",
        verbalLoc: "Point Pleasant, WV, USA",
        lat: 38.844525,
        long: -82.137089,
        vidLink: "https://www.youtube.com/watch?v=pXoaWMD5A-M",
        markerRef: null
    },

    {
        name: "Momo",
        verbalLoc: "Dundee, MI, USA",
        lat: 41.957268,
        long: -83.659660,
        vidLink: "https://www.youtube.com/watch?v=ZxYfW4iufQ4",
        markerRef: null
    },

    {
        name: "Cottingley Fairies",
        verbalLoc: "Cottingley, UK",
        lat: 53.830186,
        long: -1.820804,
        vidLink: "https://www.youtube.com/watch?v=CN3DpHDKFMg",
        markerRef: null
    },

    {
        name: "Jersey Devil",
        verbalLoc: "Pine Barrens of southern NJ, USA",
        lat: 40.058324,
        long: -74.405661,
        vidLink: "https://www.youtube.com/watch?v=Q5x_3nCkMBw",
        markerRef: null
    },

    {
        name: "Crichton Leperchaun",
        verbalLoc: "Mobile, AL, USA",
        lat: 30.706301,
        long: -88.106112,
        vidLink: "https://youtu.be/nda_OSWeyn8",
        markerRef: null
    }


];

// var Beast = function(data) {
//     this.name = ko.observable(data.name);
//     this.verbalLoc = ko.observable(data.verbalLoc);
//     this.lat = ko.observable(data.lat);
//     this.long = ko.observable(data.long);
//     this.vidLink = ko.observable(data.vidLink);
// }


var ViewModel = function() {
    var self = this;
    //init beast array
    self.beastList = ko.observableArray(beasts);

    // //populate beast array
    // beasts.forEach(function(beast) {
    //     self.beastList.push(new Beast(beast));
    // });

    //search query
    self.query = ko.observable('');

    //search bar function
    self.search = ko.computed(function(){

      return ko.utils.arrayFilter(self.beastList(),function(beast){
      return beast.name.toLowerCase().indexOf(self.query().toLowerCase()) >=0;
      });
      });

      };

//let's go!
ko.applyBindings(new ViewModel);

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 11,
            lng: 0,
        },
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    var myLatLng = {
        lat: -25.363,
        lng: 131.044
    };

    for (var i = 0; i < beasts.length; i++) {
        beasts[i].markerRef = (i+1);
        var marker = new google.maps.Marker({

            map: map,
            draggable: false,
            label: (i + 1).toString(),
            position: new google.maps.LatLng(beasts[i].lat, beasts[i].long)
        });

    }
}
