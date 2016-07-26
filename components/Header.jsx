import React, { Component, PropTypes } from 'react';
import "./header.css";

class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { };
  }

  render() {
    return (
      <section>
          <div className="left"> AJ </div>
          <div className="right"> </div>​
      </section>
    );
  }
}

export default MainSection;
