"use strict";

var React = require('react');
var StyleSheet = require('react-style');

var styles = StyleSheet.create({
  card: {
    borderRadius: "1em",
    opacity: "0.80"
  },
  headline: {
    fontSize: "1.36em",
    fontWeight: "400",
    marginBottom: "0.25em"
  },
  quantline: {
    fontSize: "1.18em",
    fontWeight: "100"
  },
  imgBox: {
    height: "100px",
    width: "100px",
    margin: "auto auto"
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    textAlign: "center"
  },
  caption: {
    textAlign: "center"
  }
});

var ActivityTile = React.createClass({

  getInitialState: function() {
    return {
      number: Math.floor(Math.random() * 148)
    };
  },
  getDefaultProps: function() {
    return {
      href: "/",
      imgSrc: "http://www.fillmurray.com/g/200/200",
      name: "Some Place",
      quantityType: "things"
    };
  },
  render: function() {
    return (
      <div className="col-lg-3 col-sm-4 col-xs-6">
        <a href={this.props.href} style={styles.card} className="thumbnail">
          <div style={styles.caption} className="caption">
            <h3 style={styles.headline}>{this.props.name}</h3>
            <p style={styles.quantline}>{this.state.number} {this.props.quantityType}</p>            
          </div>
          <div style={styles.imgBox}>
            <img style={styles.icon} src={this.props.imgSrc}></img>
          </div>
        </a>
      </div>
    );
  }
});

module.exports = ActivityTile;
