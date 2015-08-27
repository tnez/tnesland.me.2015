"use strict";

var React = require('react');
var Header = require('./header.jsx');
var Badge = require('./badge.jsx');
var Blurb = require('./Blurb.jsx');
var ActivityTileList = require('./activityTileList.jsx');

var style = {
  wrapper: {
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

  getInitialState: function() {
    return {
      mainContentClassName: "main-content content-enter col-lg-6",
      wrapperClassName: "wrapper-enter",
      badgeClassName: "col-lg-12 badge-enter"
    }
  },

  componentDidMount: function() {
    console.log("componentDidMount: " + this.state.mainContentClassName );
    setTimeout(function() {
      this.setState({mainContentClassName: this.state.mainContentClassName + " content-enter-active"});
    }.bind(this), 50);
    setTimeout(function() {
      this.setState({wrapperClassName: this.state.wrapperClassName + " wrapper-enter-active"});
    }.bind(this), 200);
    setTimeout(function() {
      this.setState({badgeClassName: this.state.badgeClassName + " badge-enter-active"});
    }.bind(this), 1000);
  },

  render: function() {
    return (
      <div style={style.wrapper} className={this.state.wrapperClassName}>
        <div style={style.badgeBox} className="row text-center">
          <Badge className={this.state.badgeClassName} />
        </div>
        <div style={style.contentBox} className="row">
          <div style={style.leftBox} className="col-lg-6">
            <Header />
            <Blurb />
          </div>
          <ActivityTileList style={style.mainContent} className={this.state.mainContentClassName} />
        </div>
      </div>
    );
  }
});

module.exports = Home;
