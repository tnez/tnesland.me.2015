$ = jQuery = require('jquery');

var _ = require('lodash');
var React = require('react/addons');
var MediaQuery = require('react-responsive');
var Anim = React.addons.CSSTransitionGroup;
var Header = require('./components/header.jsx');
var Badge = require('./components/badge.jsx');
var Blurb = require('./components/Blurb.jsx');
var ActivityTileList = require('./components/activityTileList.jsx');
var Contact = require('./components/contact.jsx');
var Projects = require('./components/projects.jsx');

var style = {
  wrapper: {
  },
  badgeBox: {
  },
  contentBox: {
    marginTop: "3em",
    marginBottom: "3em"
  },
  leftBox: {
    marginBottom: "3em"
  },
  rightBox: {
    marginBottom: "3em"
  }
};

var App = React.createClass({
  getInitialState: function() {
    return {
      badgeClassName: "col-lg-12 badge-enter",
      mainContent: <ActivityTileList />,
      mainContentClassName: "main-content col-lg-6",
      route: "home",
      wrapperClassName: "wrapper-enter"
    }
  },

  componentDidMount: function() {
    setTimeout(function() {
      this.setState({wrapperClassName: this.state.wrapperClassName + " wrapper-enter-active"});
    }.bind(this), 200);
    setTimeout(function() {
      this.setState({badgeClassName: this.state.badgeClassName + " badge-enter-active"});
    }.bind(this), 1000);
  },

  switchPage: function(newRoute) {
    var mainContentForRoute = {
      "home": <ActivityTileList />,
      "projects": <Projects />,
      "resume": <p>Resume coming soon!</p>,
      "contact": <Contact />
    };
    if (this.state.route !== newRoute) {
      this.setState({route: newRoute, mainContent: mainContentForRoute[newRoute]});
    }
  },

  render: function() {
    return (
      <div style={style.wrapper} className={this.state.wrapperClassName}>
        <MediaQuery query="(min-device-width: 768px)">
          <div style={style.badgeBox} className="row text-center">
            <Badge className={this.state.badgeClassName}
                   imgSrc="./img/travis.nesland.face.jpg"
                   clickHandler={this.switchPage.bind(null, "home")} />
          </div>
        </MediaQuery>
        <div style={style.contentBox} className="row">
          <div style={style.leftBox} className="col-lg-6">
            <Header routingCallback={this.switchPage} />
            <Blurb />
          </div>
          <Anim transitionName="mainContent">
            <div key={this.state.route} className="mainContent col-lg-6">
              {this.state.mainContent}
            </div>
          </Anim>
        </div>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
