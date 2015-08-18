"use strict";

var _ = require('lodash');
var React = require('react');
var StyleSheet = require('react-style');
var ActivityTile = require('./activityTile.jsx');
var GitHubActivityTile = require('./GitHubActivityTile.jsx');
var BitBucketActivityTile = require('./BitBucketActivityTile.jsx');
var CodeEvalActivityTile = require('./CodeEvalActivityTile.jsx');
var HackerRankActivityTile = require('./HackerRankActivityTile.jsx');
var KaggleActivityTile = require('./KaggleActivityTile.jsx');

var styles = StyleSheet.create({
  tileList: {
    marginTop: "60px"
  },
  headerBox: {
    marginTop: "0px",
    marginBottom: "1em"
  },
  header: {
    color:"#355D73",
    marginTop: "0px",
    marginBottom: "0px",
  },
  select: {
    marginTop: "0.4em",
    marginBottom: "0px"
  }
});

var ActivityTileList = React.createClass({

  getInitialState: function() {
    return {
      range: [new Date(2007,0,1), new Date()]
    };
  },

  updateRange: function() {
    this.setState({range: [Date(2000,1,1), Date()]});
  },

  render: function() {
    return (
      <div style={styles.tileList}>
        <div style={styles.headerBox} className="row">
          <div className="col-xs-6">
            <h3 style={styles.header}>My Recent Activity</h3>
          </div>
          <div className="col-xs-6 text-right">

            <select style={styles.select} onChange={this.updateRange}>
              <option value="Week">Week</option>
              <option value="Month">Month</option>
              <option value="Year">Year</option>
              <option value="All">All Time</option>
            </select>
          </div>
        </div>
        <div className="row">
          <GitHubActivityTile range={this.state.range} />
          <BitBucketActivityTile range={this.state.range} />
          <CodeEvalActivityTile range={this.state.range} />
          <HackerRankActivityTile range={this.state.range} />
          <KaggleActivityTile range={this.state.range} />
        </div>
      </div>
    );
  }
});

module.exports = ActivityTileList;
