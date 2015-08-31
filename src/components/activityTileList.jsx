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

var style = {
  mainDiv: {
    fontSize: "1.4em",
    fontWeight: "200",
    color: "#2B5E74"
  },
  header: {
    paddingLeft: 0
  },
  selectorBox: {
    fontSize: "0.9em",
    height: "2.4em"
  }
}

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

  getDefaultProps: function() {
    return {
      className: ""
    }
  },

  getInitialState: function() {
    return {
      range: [this.intervals.alltime.start, this.intervals.alltime.end]
    };
  },

  updateInterval: function(selected) {
    var intervalData = _.find(this.intervals, function(interval) {
      return interval.label === selected;
    });
    this.setState({range: [intervalData.start, intervalData.end]});
  },

  render: function() {
    var intervalLabels = _.pluck(this.intervals, 'label');

    return (
      <div className={this.props.className} style={style.mainDiv}>
        <p style={style.header} className="col-xs-12 col-sm-6"><strong>My Activity</strong>:</p>
        <DropdownList className="col-xs-12 col-sm-6"
                      style={style.selectorBox}
                      defaultValue={intervalLabels[0]}
                      data={intervalLabels}
                      onChange={this.updateInterval} />
        <div style={style.cardBox} className="row">
          <GitHubActivityTile range={this.state.range} />
          <HackerRankActivityTile range={this.state.range} />
          <KaggleActivityTile range={this.state.range} />
          <CodeEvalActivityTile range={this.state.range} />
        </div>
      </div>
    );
  }
});

module.exports = ActivityTileList;
