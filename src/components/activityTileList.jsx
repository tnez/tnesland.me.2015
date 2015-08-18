"use strict";

var _ = require('lodash');
var React = require('react');
var StyleSheet = require('react-style');
var ActivityTile = require('./activityTile.jsx');
var GitHubActivityTile = require('./GitHubActivityTile.jsx')

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
      range: [0, Date.now()]
    };
  },
  
  updateRange: function() {
    this.setState({range: [0, Math.random()]});
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
          <GitHubActivityTile range={[this.state.range]} />
          <ActivityTile name="BitBucket" quantityType="commits" href="https://bitbucket.org/tnez/" imgSrc="https://pbs.twimg.com/profile_images/550357080071094273/eP6Or4qB.png" />
          <ActivityTile name="CodeEval" quantityType="contest submissions" href="https://www.codeeval.com/profile/tnez/" imgSrc="https://tctechcrunch2011.files.wordpress.com/2012/08/codeeval-logo.jpg?w=150&h=146&crop=1" />
          <ActivityTile name="HackerRank" quantityType="contest submissions" href="https://www.hackerrank.com/tnesland" imgSrc="https://d3keuzeb2crhkn.cloudfront.net//hackerrank//assets/brand/h_mark_sm-7875f3a7783e6e603853a87dbd001cf0.png"/>
          <ActivityTile name="Kaggle" quantityType="contest submissions" href="https://www.kaggle.com/tnesland" imgSrc="https://www.kaggle.com/content/v/d6801c936e94/kaggle/img/site-logo.png"/>
          <ActivityTile name="Blogger" quantityType="blog posts" href="https://blog.tnesland.me" imgSrc="https://www.blogger.com/img/blogger-logo-small.png" />
        </div>
      </div>
    );
  }
});

module.exports = ActivityTileList;
