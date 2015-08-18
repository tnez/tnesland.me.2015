"use strict";

var React = require('react');
var StyleSheet = require('react-style');

var styles = StyleSheet.create({
  blurbBox: {
    marginTop: "0px",
    marginBottom: "0px",
    height: "6em",
    opacity: "0.65",
  },
  blurb: {
    color: "red",
    fontWeight: "200",
    fontSize: "2.6em"
  }
});

var Blurb = React.createClass({

  getInitialState: function() {
    return {
      blurb: ""
    };
  },

  getDefaultProps: function() {
    return {
      lines: [
        "I am a...",
        "I am a... developer...",
        "I am a... developer... who enjoys doing a bit of everything.",
        "",
        "I love developing...",
        "I love developing... efficient web services",
        "I love developing... beautiful user interfaces",
        "I love developing... snazzy mobile applications",
        "I am a developer who enjoys doing a bit of everything!"
      ]
    };
  },

  componentDidMount: function() {
    this.nextLine(0);
  },

  nextLine: function(idx) {
    if (idx < this.props.lines.length) {
      var next = this.nextLine;
      this.setState({blurb: this.props.lines[idx]});
      setTimeout(function() {
        next(idx + 1);
      }, 2000);
    }
  },

  render: function() {
    return (
      <div className="row" style={styles.blurbBox}>
        <div className="col-xs-12">
          <p style={styles.blurb} className="">{this.state.blurb}</p>
        </div>
      </div>
    )
  }
});

module.exports = Blurb;
