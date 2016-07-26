import React, { Component, PropTypes } from 'react';

const defaultStyle = {
};

class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { };
  }

  render() {
    return (
      <section className="main" style={defaultStyle}>

      </section>
    );
  }
}

export default MainSection;
