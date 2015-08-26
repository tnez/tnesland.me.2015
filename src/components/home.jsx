"use strict";

var React = require('react');
var StyleSheet = require('react-style');
var Header = require('./header.jsx');
var Badge = require('./badge.jsx');
var Blurb = require('./Blurb.jsx');
var ActivityTileList = require('./activityTileList.jsx');

var style = {
  wrapper: {
    marginTop: "3em"
  },
  badgeBox: {

  },
  contentBox: {
    marginTop: "3em",
    marginBottom: "3em"
  },
  leftBox: {
    marginBottom: "3em"
  },
  rightBox: {
    marginBottom: "3em"
  }
};

var Home = React.createClass({
  render: function() {
    return (
      <div style={style.wrapper}>
        <div style={style.badgeBox} className="row text-center">
          <Badge className="col-lg-12"/>
        </div>
        <div style={style.contentBox} className="row">
          <div style={style.leftBox} className="col-lg-6">
            <Header />
            <Blurb />
          </div>
          <ActivityTileList style={style.rightBox} className="col-lg-6" />
        </div>
      </div>
    );
  }
});

module.exports = Home;
