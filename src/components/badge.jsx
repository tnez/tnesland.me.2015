"use strict";

var React = require('react');

var Badge = React.createClass({
  getDefaultProps: function() {
    return {
      borderColor: "#3D6399",
      className: "",
      clickHandler: null,
      height: "12em",
      imgSrc: "",
      padding: "0.5em",
      width: "12em"
    };
  },
  render: function() {
    var style = {
      avatar: {
        border: "1em solid " + this.props.borderColor,
        borderRadius: "50%",
        cursor: "pointer",
        height: this.props.height,
        imgSrc: this.props.imgSrc,
        padding: this.props.padding,
        width: this.props.width
      }
    };
    return (
      <div className={this.props.className}>
        <img style={style.avatar} src={this.props.imgSrc} onClick={this.props.clickHandler}></img>
      </div>
    );
  }
});

module.exports = Badge;
