"use strict";

var React = require('react');
var ActivityTile = require('./activityTile.jsx');
var axios = require('axios');

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
    this.setState({fetching: true});
    var endpoint = 'https://api.github.com/users/tnez/events';
    var thisTile = this;
    axios.get(endpoint)
      .then(function(response) {
        setTimeout(function() {
          thisTile.setState({quantity: thisTile.state.quantity + 1, fetching: false});
        }, 800);
      })
      .catch(function(response) {
        thisTile.setState({fetching: false});
      });
  },

  render: function() {
    return (
      <ActivityTile fetching={this.state.fetching} href={this.props.href} imgSrc={this.props.imgSrc} name={this.props.name} quantity={this.state.quantity} quantityType={this.props.quantityType} />
    );
  }

});

module.exports = BitBucketActivityTile;
