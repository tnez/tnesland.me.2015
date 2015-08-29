"use strict";

var React = require('react/addons');
var Anim = React.addons.CSSTransitionGroup;
//var Carousel = require('react-slick');
var ProjectTile = require('./projectTile.jsx');
var ProjectData = require('../data/projects.json');

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
  getInitialState: function(){
    return {
      idx: 0
    };
  },
  transitionToIndex: function(oldIdx, newIdx){
    this.setState({idx: newIdx});
  },
  render: function() {
    return (
      <div style={style.mainDiv}>
        <p style={style.sectionHeader}><strong>Example Projects</strong>:</p>
        <Anim transitionName="project-tile">
          <div key={this.state.idx} style={style.carousel}>
            <ProjectTile key={this.state.idx}
                         idx={this.state.idx}
                         projectCount={ProjectData.projects.length}
                         slideMethod={this.transitionToIndex}
                         {...ProjectData.projects[this.state.idx]} />
          </div>
        </Anim>
      </div>
    );
  }

});

module.exports = Projects;
