import React from 'react';

export default class ImageSlider extends React.Component {

  state = {
    images: [
      "https://i2.wp.com/www.art-mine.com/collectorscorner/wp-content/uploads/2018/06/Tempting-Destiny.jpeg?w=1200&ssl=1",
      "https://images.fineartamerica.com/images-medium-large-5/freedom-abstract-art-jaison-cianelli.jpg",
      "https://i2.wp.com/www.art-mine.com/collectorscorner/wp-content/uploads/2018/06/Tempting-Destiny.jpeg?w=1200&ssl=1",
      "https://images.fineartamerica.com/images-medium-large-5/freedom-abstract-art-jaison-cianelli.jpg"
    ],
    index: 0
  };

  handleNext = () => {
    if (this.state.index >= 0 && this.state.index < 3) {
      this.setState({
        index: this.state.index + 1
      });
    } else if (this.state.index === 3) {
      this.setState({
        index: this.state.index === 3
      });
    }
  }

  handlePrevious = () => {
    if (this.state.index >= 0 && this.state.index <= 3) {
      this.setState({
        index: this.state.index - 1
      });
    } else if (this.state.index === 0) {
      this.setState({
        index: this.state.index === 0
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleNext}>previous</button>
        <img
          style={{
            width:400,
            height:400
          }}
          src={this.state.images[this.state.index]}
        />
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}
