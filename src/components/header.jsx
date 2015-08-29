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

  getDefaultProps: function() {
    return {
      routingCallback: function(newRoute) {
        console.log("I want to go to", newRoute);
      }
    };
  },

  componentDidMount: function() {
    $(React.findDOMNode(this.refs.home)).addClass("active");
  },

  handleLinkClick: function(event) {
    event.preventDefault();
    var route = $(event.target).data("route");
    this.props.routingCallback(route);
    $("#main-nav>li>a").removeClass("active");
    $(event.target).addClass("active");
  },

  render: function() {
    return (
      <div style={styles.headerBox}>
        <div style={styles.titleBox}>
          <h1 style={styles.title} data-route="home" onClick={this.handleLinkClick}>Travis Nesland</h1>
          <h2 styles={styles.tagline}>Software Developer + Data Wrangler</h2>
        </div>
        <ul id="main-nav" style={styles.navBox}>
          <li style={styles.navLinkItem}>
            <a style={styles.navLink} ref="home" data-route="home" href="/" onClick={this.handleLinkClick}>home</a>
          </li>
          <li style={styles.navLinkItem}>
            <a style={styles.navLink} ref="projects" data-route="projects" href="/projects" onClick={this.handleLinkClick}>projects</a>
          </li>
          <li style={styles.navLinkItem}>
            <a style={styles.navLink} ref="resume" href="http://public.tnesland.me/TravisNeslandResume.pdf" target="_blank">resume</a>
          </li>
          <li style={styles.navLinkItem}>
            <a style={styles.navLink} ref="contact" data-route="contact" href="/contact" onClick={this.handleLinkClick}>contact</a>
          </li>
        </ul>
      </div>
    );
  }
});


module.exports = Header;
