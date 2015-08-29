"use strict";

var React = require('react');

var ProjectTile = React.createClass({
  getDefaultProps: function(){
    return {
      blurb: "",
      demoLink: "https://github.com/tnez",
      idx: 0,
      projectCount: 0,
      repoLink: "https://github.com/tnez",
      screenshot: "http://www.fillmurray.com/600/400",
      slideMethod: function(oldIdx, newIdx){
        console.warn("Trying to move from " + oldIdx + " to " + newIdx + ", but no method defined");
      },
      textColor: "white",
      title: ""
    }
  },
  moveLeft: function(event) {
    var newIdx = this.props.idx - 1 < 0 ? this.props.projectCount - 1 : this.props.idx - 1;
    this.transitionTo(newIdx);
  },
  moveRight: function(event) {
    var newIdx = this.props.idx + 1 === this.props.projectCount ? 0 : this.props.idx + 1;
    this.transitionTo(newIdx);
  },
  transitionTo: function(newIdx) {
    this.props.slideMethod(this.props.idx, newIdx);
  },
  render: function(){
    var style = {
      mainDiv: {
        position: "relative",
        backgroundImage: "url(" + this.props.screenshot + ")",
        backgroundSize: "150% auto",
        backgroundPosition: "0% 0%",
        backgroundRepeat: "no-repeat",
        borderRadius: "1em",
        boxShadow: "2px 3px 8px rgba(0,0,0,0.75)",
        color: this.props.textColor,
        opacity: 0.75,
        height: "100%",
        width: "100%",
        fontSize: "1.2em",
        fontWeight: "100"
      },
      textVisor: {
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(20,204,40,0.9)",
        borderBottomLeftRadius: "1em",
        borderBottomRightRadius: "1em",
        margin: 0,
        padding: "1.4em",
        paddingTop: "0.8em",
        width: "100%",
      },
      header: {
        height: "2em",
        display: "inline"
      },
      title: {
        display: "inline-block",
        marginRight: "0.25em"
      },
      projLink: {
        paddingBottom: "0.35em",
        color: "white",
        fontSize: "0.8em",
        fontWeight: 300,
        textDecoration: "underline"
      },
      projLinkSpacer: {
        fontSize: "0.5em",
        marginLeft: "0.25em",
        marginRight: "0.25em"
      },
      blurb: {
        //
      },
      carouselNav: {
        paddingTop: "0.8em",
        paddingBottom: 0
      },
      leftArrow: {
        cursor: "pointer"
      },
      rightArrow: {
        cursor: "pointer"
      },
      pageIndicators: {
        marginLeft: "0.2em",
        marginRight: "0.2em",
        cursor: "pointer"
      }
    };
    var pageIndicators = [];
    for (var i=0; i < this.props.projectCount; i++){
      if(i === this.props.idx) {
        pageIndicators.push(
          <i key={i} style={style.pageIndicators} className="fa fa-circle"></i>
          );
      } else {
        pageIndicators.push(
          <i key={i} style={style.pageIndicators} className="fa fa-circle-o"
             onClick={this.transitionTo.bind(null, i)}></i>
          );
      }
    }
    var projectLinks = [];
    if (this.props.demoLink && this.props.demoLink !== "") {
      projectLinks.push(
        <a key="demoLink" style={style.projLink} href={this.props.demoLink} target="_blank">live demo</a>
      );
    }
    if (this.props.demoLink && this.props.demoLink !== "" &&
      this.props.repoLink && this.props.repoLink !== "") {
        projectLinks.push(<span key="spacer" style={style.projLinkSpacer}>|</span>)
    }
    if (this.props.repoLink && this.props.repoLink !== "") {
      projectLinks.push(
        <a key="repoLink" style={style.projLink} href={this.props.repoLink} target="_blank">source code</a>
      );
    }
    return(
      <div style={style.mainDiv}>
        <div style={style.textVisor}>
          <div style={style.header}>
            <h3 style={style.title}>{this.props.title}</h3>
            {projectLinks}
          </div>
          <p style={style.blurb}>{this.props.blurb}</p>
          <div style={style.carouselNav} className="row">
            <div style={style.leftArrow} className="col-xs-1" onClick={this.moveLeft}>
              <i className="fa fa-chevron-left"></i>
            </div>
            <div className="text-center col-xs-10">
              {pageIndicators}
            </div>
            <div style={style.rightArrow} className="col-xs-1" onClick={this.moveRight}>
              <i className="fa fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProjectTile;
