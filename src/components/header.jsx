"use strict";

var React = require('react');
var StyleSheet = require('react-style');
var Badge = require('./badge.jsx');

var styles = StyleSheet.create({
  headerBox: {
    marginBottom: "2.2em"
  },
  title: {
    color: "#3D6399",
    cursor: "pointer",
    textSize: "2em",
    marginTop: "-0.1em"
  },
  tagline: {
    color: "#3D6399",
    fontWeight: "300",
    fontSize: "1.75em",
    marginTop: "0em",
    marginBottom: "0.3em"
  },
  navBox: {
    fontSize: "1.4em",
    padding: 0
  },
  navLinkItem: {
    display: "inline",
    listStyleType: "none",
    paddingRight: "1em"
  },
  navLink: {
    color: "#CC2814"
  }
});

var Header = React.createClass({
    render: function() {
        return (
          <div style={styles.headerBox}>
            <div style={styles.titleBox}>
              <h1 style={styles.title}>Travis Nesland</h1>
              <h2 styles={styles.tagline}>Software Developer + Data Wrangler</h2>
            </div>
            <ul style={styles.navBox}>
              <li style={styles.navLinkItem}><a style={styles.navLink} className="active" href="/">home</a></li>
              <li style={styles.navLinkItem}><a style={styles.navLink} href="/">projects</a></li>
              <li style={styles.navLinkItem}><a style={styles.navLink} href="/">resume</a></li>
              <li style={styles.navLinkItem}><a style={styles.navLink} href="/">contact</a></li>
            </ul>
          </div>
        );
    }
});


module.exports = Header;
