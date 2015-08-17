"use strict";

var React = require('react');
var StyleSheet = require('react-style');
var Header = require('./header.jsx');
var ActivityTileList = require('./activityTileList.jsx');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <hr />
        <ActivityTileList />
      </div>
    );
  }
});

module.exports = Home;
