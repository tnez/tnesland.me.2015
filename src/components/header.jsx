"use strict";

var React = require('react');
var StyleSheet = require('react-style');
var Badge = require('./badge.jsx');

var styles = StyleSheet.create({
    headerBox: {
        marginTop: "60px"
    },
    badgeBox: {
        float: "left",
        width: "120px",
        marginRight: "20px"
    },
    titleBox: {
        width: "540px"
    },
    title: {
        color: "red",
        cursor: "pointer",
        textSize: "2em",
        marginTop: "-0.1em"
    },
    tagline: {
        color: "#05415B",
        fontWeight: "300",
        fontSize: "1.75em",
        marginTop: "-0.4em"
    },
    navBox: {
        fontSize: "1.1em"
    },
    navButton: {
        marginTop: "-0.25em"
    }
});

var Header = React.createClass({
    render: function() {
        return (
            <div style={styles.headerBox} className="row">
                <div style={styles.badgeBox}>
                    <Badge />
                </div>
                <div style={styles.titleBox}>
                    <h1 style={styles.title}>Travis Nesland</h1>
                    <h2 styles={styles.tagline}>Software Developer + Data Wrangler</h2>
                </div>
                <ul style={styles.navBox} className="nav nav-pills">
                    <li style={styles.navButton} role="presentation" className="active"><a href="/">home</a></li>
                    <li style={styles.navButton} role="presentation"><a href="/">projects</a></li>
                    <li style={styles.navButton} role="presentation"><a href="/">resume</a></li>
                </ul>
            </div>
        );
    }
});


module.exports = Header;
