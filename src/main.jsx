$ = jQuery = require('jquery');

var React = require('react');
var Header = require('./components/header.jsx');
var Badge = require('./components/badge.jsx');
var Blurb = require('./components/Blurb.jsx');
var ActivityTileList = require('./components/activityTileList.jsx');

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
      page: "home",
      wrapperClassName: "wrapper-enter"
    }
  },

  componentDidMount: function() {
    console.log("componentDidMount: " + this.state.mainContentClassName );
    setTimeout(function() {
      this.setState({wrapperClassName: this.state.wrapperClassName + " wrapper-enter-active"});
    }.bind(this), 200);
    setTimeout(function() {
      this.setState({badgeClassName: this.state.badgeClassName + " badge-enter-active"});
    }.bind(this), 1000);
  },

  render: function() {
    return (
      <div style={style.wrapper} className={this.state.wrapperClassName}>
        <div style={style.badgeBox} className="row text-center">
          <Badge className={this.state.badgeClassName} />
        </div>
        <div style={style.contentBox} className="row">
          <div style={style.leftBox} className="col-lg-6">
            <Header />
            <Blurb />
          </div>
          <div style={style.rightBox} className={this.state.mainContentClassName} >
            {this.state.mainContent}
          </div>
        </div>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
