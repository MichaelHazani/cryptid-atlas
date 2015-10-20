var beasts = [

  {
    name : "Ogopogo",
    verbalLoc : "Okanagan Lake, BC",
    lat : 49.833850,
    long : -119.523610,
    vidLink : "https://www.youtube.com/watch?v=7w7Kkatcnu0"
  },

  {
    name : "Mothman",
    verbalLoc : "Point Pleasant, WV, USA",
    lat : 38.844525,
    long : -82.137089,
    vidLink : "https://www.youtube.com/watch?v=pXoaWMD5A-M"
  },

  {
    name : "Momo",
    verbalLoc : "Dundee, MI, USA",
    lat : 41.957268,
    long : -83.659660,
    vidLink : "https://www.youtube.com/watch?v=ZxYfW4iufQ4"
  },

  {
    name : "Cottingley Fairies",
    verbalLoc : "Cottingley, UK",
    lat : 53.830186,
    long : -1.820804,
    vidLink : "https://www.youtube.com/watch?v=CN3DpHDKFMg"
  },

  {
    name : "Jersey Devil",
    verbalLoc : "Pine Barrens of southern NJ, USA",
    lat : 40.058324,
    long : -74.405661,
    vidLink : "https://www.youtube.com/watch?v=Q5x_3nCkMBw"
  },

  {
    name : "Crichton Leperchaun",
    verbalLoc : "Mobile, AL, USA",
    lat : 30.706301,
    long : -88.106112,
    vidLink : "https://youtu.be/nda_OSWeyn8"
  }


];

var Beast = function(data) {
  this.name = ko.observable(data.name);
  this.verbalLoc = ko.observable(data.verbalLoc);
  this.lat = ko.observable(data.lat);
  this.long = ko.observable(data.long);
  this.vidLink = ko.observable(data.vidLink);
}


var ViewModel = function() {
  var self = this;

  self.beastList = ko.observableArray([]);

  beasts.forEach(function(beast){
    self.beastList.push(new Beast(beast));
  });
console.log(self.beastList()[2].name());
}

ko.applyBindings(new ViewModel);

