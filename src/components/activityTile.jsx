"use strict";

var React = require('react');
var StyleSheet = require('react-style');

var styles = StyleSheet.create({
  card: {
    borderRadius: "1em",
    opacity: "0.75",
    boxShadow: "-2px 4px 8px rgba(0, 0, 0, 0.2)"
  },
  headline: {
    fontSize: "1.36em",
    fontWeight: "400",
    marginBottom: "0.25em"
  },
  spinner: {
    fontSize: "2.4em",
    opacity: "0.80"
  },
  quantline: {
    fontSize: "1.18em",
    fontWeight: "100",
    opacity: "0.80"
  },
  noDataMessage: {
    fontSize: "1.18em",
    fontWeight: "100",
    color: "red"
  },
  imgSection: {
    height: "100%",
    width: "100%",
  },
  imgBox: {
    height: "100px",
    width: "100px",
    margin: "auto auto",
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

  getDefaultProps: function() {
    return {
      href: "/",
      imgSrc: "http://www.fillmurray.com/g/200/200",
      name: "Some Place",
      quantityType: "things",
      quantity: 0
    };
  },

  statics: {
    updateQuantity: function(start, end) {
      this.state.quantity = Math.floor(Math.random() * 100);
    }
  },

  render: function() {
    return (
      <div className="col-sm-4 col-xs-6">
        <a href={this.props.href} style={styles.card} className="thumbnail">
          <div style={styles.caption} className="caption">
            <h3 style={styles.headline}>{this.props.name}</h3>
            { this.props.fetching ?
             <i style={styles.spinner} className="fa fa-cog fa-spin"></i> :
             <p style={styles.quantline}>{this.props.quantity} {this.props.quantityType}</p>
            }
          </div>
          <div style={styles.imgSection}>
            <div style={styles.imgBox}>
              <img style={styles.icon} src={this.props.imgSrc}></img>
            </div>
          </div>
        </a>
      </div>
    );
  }
});

module.exports = ActivityTile;
