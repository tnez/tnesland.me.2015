"use strict";

var React = require('react');
//var Carousel = require('react-slick');
var ProjectTile = require('./projectTile.jsx');

var style = {
  mainDiv: {
    fontSize: "1.4em",
    fontWeight: "200"
  },
  sectionHeader: {
    padding: 0,
    marginTop: 0,
    marginBottom: "1em"
  },
  carousel: {
    height: "17em",
  }
}

var Projects = React.createClass({
  render: function() {
    return (
      <div style={style.mainDiv}>
        <p style={style.sectionHeader}><strong>Example Projects</strong>:</p>
        <div style={style.carousel}>
          <ProjectTile title="D.O.T.S" screenshot="./img/dots.screenshot.png"
                       repoLink="github.com/tnez" demoLink="tnesland.me/projects/dots"
                       blurb="A simple game implemented in React.js, the objective of which is to stay away from the floating dots. Stay alive as long as you can!" />
        </div>
      </div>
    );
  }

});

module.exports = Projects;
