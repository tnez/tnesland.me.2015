"use strict";

var React = require('react');
var ActivityTile = require('./activityTile.jsx');

var BitBucketActivityTile = React.createClass({

  getInitialState: function() {
    return {
      fetching: true,
      quantity: 0
    };
  },

  getDefaultProps: function() {
    return {
      href: "https://bitbucket.org/tnez",
      imgSrc: "https://pbs.twimg.com/profile_images/550357080071094273/eP6Or4qB.png",
      name: "BitBucket",
      quantityType: "commits",
      range: [0, Date.now()]
    }
  },

  componentDidMount: function() {
    this.updateQuantity(this.state.range);
  },

  componentWillReceiveProps: function(newProps) {
    if(newProps.range) {
      this.updateQuantity();
    }
  },

  updateQuantity: function(range) {
    console.warn("updateQuantity not yet implemented");
  },

  render: function() {
    return (
      <ActivityTile fetching={this.state.fetching} href={this.props.href} imgSrc={this.props.imgSrc} name={this.props.name} quantity={this.state.quantity} quantityType={this.props.quantityType} />
    );
  }

});

module.exports = BitBucketActivityTile;
