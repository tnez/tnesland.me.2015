"use strict";

var React = require('react');

var style = {
  mainDiv: {
    fontSize: "1.4em",
    fontWeight: "200",
    color: "#2B5E74",
  },
  header: {
    paddingLeft: 0
  },
  textArea: {
    width: "100%",
    fontSize: "0.8em",
    height: "19.4em"
  },
  button: {
    float: "right"
  },
  contactList: {
    padding: 0,
    marginTop: "0.5em",
    fontSize: "0.75em",
    textAlign: "left"
  },
  contactListItem: {
    display: "inline"
  },
  contactListSpacer: {
    paddingLeft: "0.25em",
    paddingRight: "0.25em"
  }
};

var Contact = React.createClass({

  getInitialState: function() {
    return {
      text: ""
    }
  },

  handleInput: function(event) {
    let newText = event.target.value;
    this.setState({text: newText});
  },

  submit: function(event) {
    event.preventDefault();
    let body = this.state.text;
    let subject = "Hello from your website";
    window.location.href = "mailto:tnesland@gmail.com?Subject=" + subject + "&Body=" + body;
    this.setState({text: ""});
  },

  render: function() {
    return (
      <div style={style.mainDiv}>
        <p style={style.header}><strong>Send me a note</strong>:</p>
        <textarea ref="textArea" style={style.textArea} placeholder="Enter your note here..." onChange={this.handleInput} value={this.state.text}></textarea>
        <button style={style.button} action="" type="submit" className="btn btn-default" onClick={this.submit}>Submit</button>
        <ul style={style.contactList}>
          <li style={style.contactListItem}>
            <a href="mailto:tnesland@gmail.com">tnesland@gmail.com</a>
          </li>
          <span style={style.contactListSpacer}>|</span>
          <li style={style.contactListItem}>
            <a href="https://github.com/tnez">github</a>
          </li>
          <span style={style.contactListSpacer}>|</span>
          <li style={style.contactListItem}>
            <a href="https://www.linkedin.com/in/tnesland">linkedin</a>
          </li>
          <span style={style.contactListSpacer}>|</span>
          <li style={style.contactListItem}>
            <a href="https://scholar.google.com/citations?user=R2m4jbUAAAAJ">google scholar</a>
          </li>
          <span style={style.contactListSpacer}>|</span>
          <li style={style.contactListItem}>
            <a href="tel:8599550007">859-955-0007</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Contact;
