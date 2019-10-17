import React from 'react';

export default class ImageSlider extends React.Component {

  state = {
    images: [
      "https://i2.wp.com/www.art-mine.com/collectorscorner/wp-content/uploads/2018/06/Tempting-Destiny.jpeg?w=1200&ssl=1",
      "https://i2.wp.com/www.art-mine.com/collectorscorner/wp-content/uploads/2018/06/Tempting-Destiny.jpeg?w=1200&ssl=1",
      "https://i2.wp.com/www.art-mine.com/collectorscorner/wp-content/uploads/2018/06/Tempting-Destiny.jpeg?w=1200&ssl=1",
      "https://i2.wp.com/www.art-mine.com/collectorscorner/wp-content/uploads/2018/06/Tempting-Destiny.jpeg?w=1200&ssl=1"
    ]
  };

  render() {
    return (
      <div>
        <img
          style={{
            width:400,
            height:400
          }}
          src={this.state.images[0]}
        />
      </div>
    );
  }
}
