"use strict";

var React = require('react');
var StyleSheet = require('react-style');

var styles = StyleSheet.create({
  avatar: {
    borderRadius: "50%",
    border: "1em solid #3D6399",
    padding: "0.5em",
    cursor: "pointer",
    minHeight: "142px"
  }
});

var Badge = React.createClass({

  getDefaultProps: function() {
    return {
      className: "",
      clickHandler: console.log("Someone clicked me face!")
    };
  },

  render: function() {
    return (
      <div className={this.props.className} style={styles.avatarContainer}>
        <img style={styles.avatar} src="https://yt3.ggpht.com/-G6JYvWHd7h8/AAAAAAAAAAI/AAAAAAAAAAA/oGiJe-uxM8I/s100-c-k-no/photo.jpg" onClick={this.props.clickHandler}></img>
      </div>
    );
  }
});

module.exports = Badge;
