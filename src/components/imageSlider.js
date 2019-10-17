import React from 'react';

export default class ImageSlider extends React.Component {

  state = {
    images: [
      "https://theosophical.files.wordpress.com/2011/06/zero.jpg",
      "https://www.centurioneurope.co.uk/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/4/2/42a78776-457e-462f-824e-2ec23c47094a_1.jpg",
      "https://images.homedepot-static.com/productImages/99750192-6a8d-4ec1-962e-cc7c05f135fd/svn/montague-metal-products-house-letters-numbers-hhn-2-16-64_1000.jpg",
      "https://images.homedepot-static.com/productImages/ed381ca0-e8be-45c5-b674-b829816f511f/svn/architectural-mailboxes-house-letters-numbers-3585b-3-64_1000.jpg"
    ],
    index: 0
  };

  handleNext = () => {
    if (this.state.index >= 0 && this.state.index < 3) {
      this.setState({
        index: this.state.index + 1
      });
    }
  }

  handlePrevious = () => {
    if (this.state.index >= 1 && this.state.index <= 3) {
      this.setState({
        index: this.state.index - 1
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePrevious}>previous</button>
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
