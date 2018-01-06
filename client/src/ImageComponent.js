import React, { PureComponent } from 'react';

export default class ImageComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      time: 0
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 5000);
  };

  render() {
    return (
      <div>
        <h3>The time: {this.state.time}</h3>
        <img
          src="https://us-east-1.tchyn.io/snopes-production/uploads/2016/08/panda.jpg"
          alt="Panda"
        />
      </div>
    );
  }
}
