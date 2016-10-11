import React from 'react';

const AirportCarousel = React.createClass({
  //basic slider without animations
  getInitialState: function () {
    return {
      images: this.props.images,
      //passed from parent
      i: 0,
      slide: ''
    }
  },
  
  leftHandler() {
    let newI;
    if (this.state.i < (this.state.images.length - 1)) {
      newI = this.state.i + 1;
    } else if (this.state.i === (this.state.images.length -1)) {
      newI = 0;
    }
  this.setState({
    slide: 'slide-left'
  });
  window.setTimeout(() => {
    this.setState({
      i: newI,
      slide: 'slide-right',
    });
  }, 400);
},

rightHandler() {
  let newI;
  if (this.state.i > 0) {
    newI = this.state.i - 1;
  } else {
    newI = this.state.images.length - 1;
  }

  this.setState({
    slide: 'slide-right'
  });

  window.setTimeout(() => {
    this.setState({
      i: newI,
      slide: 'slide-left',
    });
  }, 400);
},

skipToImg(e) {
  this.setState({i: e.target.value})
},

componentDidMount() {
  this.setState({i: 0});
},

render: function () {
    return (
      <div className="carousel-holder">
        <div className="arrow-holder">
          <img onClick={this.leftHandler} className="carousel-arrow-left" src="../../assets/icon-caret-left.png" alt="left arrow"/>
          <img onClick={this.rightHandler} className="carousel-arrow-right" src="../../assets/icon-caret-right.png" alt="right arrow"/>
        </div>
        <div className="airport-carousel">
          <figure className="carousel-img" alt="jfk airport img" id={this.state.slide} style={{backgroundImage:`url(${this.state.images[this.state.i]})`}}>
          </figure>
          <figcaption>John F. Kennedy International Airport (JFK)<span>New York, New York</span></figcaption>
        </div>
      </div>
    )
  }
})

export default AirportCarousel;
