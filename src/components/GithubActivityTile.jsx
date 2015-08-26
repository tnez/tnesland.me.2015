"use strict";

var _ = require('lodash');
var React = require('react');
var ActivityTile = require('./activityTile.jsx');
var GithubData = require('../data/github.json');

var GitHubActivityTile = React.createClass({

  getInitialState: function() {
    return {
      fetching: true,
      quantity: 0
    };
  },

  getDefaultProps: function() {
    return {
      href: "https://github.com/tnez",
      imgSrc: "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png",
      name: "GitHub",
      quantityType: "commits"
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
    var filteredData = _.filter(GithubData.commits, function(commit) {
      var commitDate = new Date(commit.date);
      return commitDate >= range[0] && commitDate <= range[1];
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

module.exports = GitHubActivityTile;
