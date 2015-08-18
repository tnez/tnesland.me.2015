"use strict";

var _ = require('lodash');
var React = require('react');
var ActivityTile = require('./activityTile.jsx');
var HackerRankData = require('../data/hackerRank.json');

var HackerRankActivityTile = React.createClass({

  getInitialState: function() {
    return {
      fetching: true,
      quantity: 0
    };
  },

  getDefaultProps: function() {
    return {
      href: "https://hackerrank.com/tnesland",
      imgSrc: "https://d3keuzeb2crhkn.cloudfront.net//hackerrank//assets/brand/h_mark_sm-7875f3a7783e6e603853a87dbd001cf0.png",
      name: "HackerRank",
      quantityType: "contest submissions",
    }
  },

  componentDidMount: function() {
    this.updateQuantity(this.props.range);
  },

  componentWillReceiveProps: function(newProps) {
    if(newProps.range) {
      this.updateQuantity(newProps.range);
    }
  },

  updateQuantity: function(range) {
    this.setState({fetching: true});
    var thisTile = this;
    var filteredData = _.filter(HackerRankData.contestSubmissions, function(cs) {
      var subDate = new Date(cs.date);
      console.log("subDate:" + subDate);
      console.log("range(0):" + range[0]);
      console.log("range(1):" + range[1]);
      return subDate >= range[0] && subDate <= range[1];
    });
    this.setState({quantity: filteredData.length});
    setTimeout(function() {
      thisTile.setState({fetching: false});
    }, 800);
  },

  render: function() {
    return (
      <ActivityTile fetching={this.state.fetching} href={this.props.href} imgSrc={this.props.imgSrc} name={this.props.name} quantity={this.state.quantity} quantityType={this.props.quantityType} />
    );
  }

});

module.exports = HackerRankActivityTile;

