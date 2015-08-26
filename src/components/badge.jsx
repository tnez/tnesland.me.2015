"use strict";

var React = require('react');
var StyleSheet = require('react-style');

var styles = StyleSheet.create({
  avatar: {
        borderRadius: "50%",
        border: "1em solid #3D6399",
        padding: "0.5em",
        opacity: "0.8",
    cursor: "pointer"
    }
});

var Badge = React.createClass({
    clickHandler: function() {
        console.log("Someone clicked my face!");
    },
    render: function() {
        return (
            <div style={styles.avatarContainer}>
              <img style={styles.avatar} src="https://yt3.ggpht.com/-G6JYvWHd7h8/AAAAAAAAAAI/AAAAAAAAAAA/oGiJe-uxM8I/s100-c-k-no/photo.jpg" onClick={this.clickHandler}></img>
            </div>
        );
    }
});

module.exports = Badge;
