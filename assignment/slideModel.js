/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML

var slideExample = {
  slideNumber: 1,
  title: "My first slide",
  filter: function(geojsonFeature) { return true }
};
*/

var slide1 = {
  year: "2013",
  title: "Distribution of Drug Crime Prior to Marijuana Legalization",
  content: "A paragraph about what the map is showing and some information about crime trends leading up to this year.",
  img: "Consider inserting a time series graph showing change in city-wide drug crime.",
  featureFilter: function(geojsonFeature) { if (geojsonFeature.properties.year === "2013") {
    return true; }
  },
  pointFilter: function(geojsonPoint) { return false; }
};

var slide2 = {
  year: "2014",
  title: "Distribution of Drug Crime in the First Year of Legalization",
  content: "A paragraph about what the map is showing.",
  img: NA,
  featureFilter: function(geojsonFeature) { if (geojsonFeature.properties.year === "2014") {
    return true; }
  },
  pointFilter: function(geojsonPoint) { if (geojsonPoint.properties.year === "2010"|"2011"|"2012"|"2013"|"2014") {
    return true; }
  }
};

var slide3 = {
  year: "2015",
  title: "???",
  content: "A paragraph about what the map is showing.",
  img: NA,
  featureFilter: function(geojsonFeature) { if (geojsonFeature.properties.year === "2015") {
    return true; }
  },
  pointFilter: function(geojsonPoint) { if (geojsonPoint.properties.year === "2010"|"2011"|"2012"|"2013"|"2014"|"2015") {
    return true; }
  }
};

var slide4 = {
  year: "2016",
  title: "???",
  content: "A paragraph about what the map is showing.",
  img: NA,
  featureFilter: function(geojsonFeature) { if (geojsonFeature.properties.year === "2016") {
    return true; }
  },
  pointFilter: function(geojsonPoint) { if (geojsonPoint.properties.year === "2010"|"2011"|"2012"|"2013"|"2014"|"2015"|"2016") {
    return true; }
  }
};

var slide5 = {
  year: "2017",
  title: "???",
  content: "A paragraph about what the map is showing.",
  img: NA,
  featureFilter: function(geojsonFeature) { if (geojsonFeature.properties.year === "2017") {
    return true; }
  },
  pointFilter: function(geojsonPoint) { if (geojsonPoint.properties.year === "2010"|"2011"|"2012"|"2013"|"2014"|"2015"|"2016"|"2017") {
    return true; }
  }
};

var slide6 = {
  year: "2018",
  title: "Distribution of Drug Crimes Today",
  content: "A paragraph about what the map is showing.",
  img: NA,
  featureFilter: function(geojsonFeature) { if (geojsonFeature.properties.year === "2018") {
    return true; }
  },
  pointFilter: function(geojsonPoint) { if (geojsonPoint.properties.year === "2010"|"2011"|"2012"|"2013"|"2014"|"2015"|"2016"|"2017"|"2018") {
    return true; }
  }
};


var slideDeck = [slide1, slide2, slide3, slide4, slide5, slide6];
