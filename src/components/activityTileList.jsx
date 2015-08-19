"use strict";

var _ = require('lodash');
var React = require('react');
var StyleSheet = require('react-style');
var DropdownList = require('react-widgets/lib/DropdownList');
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
    marginTop: "30px",
    marginBottom: "30px",
    height: "2.6em",
    width: "100%"
  },
  header: {
    float: "left",
    fontSize: "2.1em",
    color:"#355D73",
    marginTop: "0"
  },
  spacer: {
    float: "left",
    fontSize: "1.6em",
    fontWeight: "300",
    marginTop: "0",
    marginLeft: "1.2em",
    marginRight: "1.2em"
  },
  selectInterval: {
    float: "left",
    width: "12em",
  }
});

var ActivityTileList = React.createClass({

  intervals: {
    alltime: {
      label: "All-time",
      start: new Date("Jan 1 2000"),
      end: new Date()
    },
    year: {
      label: "One year",
      start: new Date(new Date().setYear(new Date().getFullYear() - 1)),
      end: new Date()
    },
    month: {
      label: "One month",
      start: new Date(new Date().setMonth(new Date().getMonth() - 1)),
      end: new Date()
    },
    week: {
      label: "One week",
      start: new Date(new Date().setDate(new Date().getDate() - 7)),
      end: new Date()
    }
  },

  getInitialState: function() {
    return {
      range: [this.intervals.alltime.start, this.intervals.alltime.end]
    };
  },

  updateInterval: function(selected) {
    var intervalData = _.find(this.intervals, function(interval) {
      console.log(interval.label + " <-> " + selected);
      return interval.label === selected;
    });
    console.log("intervalData: " + intervalData);
    this.setState({range: [intervalData.start, intervalData.end]});
  },

  render: function() {
    var intervalLabels = _.pluck(this.intervals, 'label');

    return (
      <div style={styles.tileList}>
        <div style={styles.headerBox} className="row">
          <div className="col-xs-12">
            <h3 style={styles.header}>My Recent Activity</h3>
            <span style={styles.spacer}>|</span>
            <DropdownList style={styles.selectInterval}
                          defaultValue={intervalLabels[0]}
                          data={intervalLabels}
                          onChange={this.updateInterval} />
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
