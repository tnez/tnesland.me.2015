"use strict";

var React = require('react');

var style = {
  mainDiv: {
    fontSize: "1.4em",
    fontWeight: "200",
    color: "#2B5E74"
  }
};

var Blurb = React.createClass({

  getDefaultProps: function() {
    return {
      className: ""
    }
  },

  render: function() {
    return (
      <div className={this.props.className} style={style.mainDiv}>
        <p><strong>Hello!</strong> My name is <strong>Travis</strong> and I <strong>love making things</strong>:</p>
        <ul className="fa-ul">
          <li><i className="fa-li fa fa-terminal"></i>I love digging into and visualizing data using tools like <a href="https://www.python.org/" target="_blank">Python</a>, <a href="https://www.r-project.org/" target="_blank">R</a>, and <a href="http://d3js.org/" target="_blank">D3.js</a></li>
          <li><i className="fa-li fa fa-terminal"></i>I enjoy writing web services with tools like <a href="http://rubyonrails.org/" target="_blank">Rails</a>, <a href="https://www.python.org" target="_blank">Python</a>, and <a href="https://expressjs.com" target="_blank">Express</a></li>
          <li><i className="fa-li fa fa-terminal"></i>I'm currently drinking the <a href="https://facebook.github.io/react/" target="_blank">React</a> cool-aid... I love it!</li>
          <li><i className="fa-li fa fa-terminal"></i>I've used my skills to contribute to some <a href="https://scholar.google.com/citations?user=R2m4jbUAAAAJ" target="_blank">cool reasearch</a></li>
          <li><i className="fa-li fa fa-terminal"></i>I've built some <a href="/projects/dots" target="_blank">fun things</a></li>
        </ul>
      </div>
    )
  }
});

module.exports = Blurb;
