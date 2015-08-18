"use strict";

var _ = require('lodash');
var React = require('react');
var ActivityTile = require('./activityTile.jsx');
var KaggleData = require('../data/kaggle.json');

var KaggleActivityTile = React.createClass({

  getInitialState: function() {
    return {
      fetching: true,
      quantity: 0
    };
  },

  getDefaultProps: function() {
    return {
      href: "https://www.kaggle.com/tnesland",
      imgSrc: "https://www.kaggle.com/content/v/d6801c936e94/kaggle/img/site-logo.png",
      name: "Kaggle",
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
    var filteredData = _.filter(KaggleData.contestSubmissions, function(cs) {
      var subDate = new Date(cs.date);
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

module.exports = KaggleActivityTile;

