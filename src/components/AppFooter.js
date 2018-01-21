import React, { Component } from 'react';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="App-footer">
        <h4>&copy; 2018 Steven J Burns</h4>
        <p>The information used here was obtained free of charge from and is copyrighted by Retrosheet.  Interested parties may contact Retrosheet at "www.retrosheet.org".</p>
      </footer>
    );
  }
}

export default Footer;