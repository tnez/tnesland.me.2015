"use strict";

var React = require('react');
var StyleSheet = require('react-style');

var styles = StyleSheet.create({
  card: {
    margin: "auto",
    marginTop: "0.75em",
    height: "8em",
    borderRadius: "1em",
    opacity: "0.75",
    boxShadow: "-2px 4px 8px rgba(0, 0, 0, 0.2)"
  },
  headline: {
    fontSize: "0.8em",
    fontWeight: "400",
    marginBottom: "0.25em"
  },
  spinner: {
    fontSize: "1em",
    opacity: "0.80"
  },
  quantline: {
    fontSize: "0.65em",
    fontWeight: "200",
    opacity: "0.80",
    marginBottom: 0
  },
  imgSection: {
    height: "100%",
    width: "100%",
  },
  imgBox: {
    height: "3em",
    width: "3em",
    margin: "auto auto",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    textAlign: "center",
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
      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-4 text-center">
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
