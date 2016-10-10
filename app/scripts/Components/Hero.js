import React from 'react';

const Hero = React.createClass({
  render: function () {
    return (
      <div className="hero-container">
        <img className="hero-logo" src="../../assets/logo-zebra.png" alt="logo"/>
        <div className="hero-content">
          <h1 className="hero-header">The New York City Guide to Getting Around.</h1>
          <p className="hero-copy">We know that New York is exciting but it can also be intimidating. The secrets to navigating New York doesn’t just have to be for locals. The Zebra has put together this simple guide to getting around so you can navigate New York like a pro.</p>
        </div>
      </div>
    )
  }
})

export default Hero;
