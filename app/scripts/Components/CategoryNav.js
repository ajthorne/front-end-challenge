import React from 'react';
import $ from 'jquery';

const CategoryNav = React.createClass({
  scrollHandler: function(e) {
    e.preventDefault();
    console.dir(e.target.parentElement.textContent);
    let clickSection = e.target.parentElement.textContent.toLowerCase();
    $('html,body').animate({
        scrollTop: $(`#${clickSection}`).offset().top},
        'slow');
  },


  render: function () {
    return (
      <section className="category-container">
        <h1 className="category-header">NYC Transportation Categories</h1>
        <nav className="category-nav">
          <ul className="category-list">
            <a onClick={this.scrollHandler} href="/#airports"><li><img id="plane-icon" src="../../assets/icon-airplane.png"/><div><p>Airports</p></div></li></a>
            <a onClick={this.scrollHandler} href="/#cabs"><li><img id="taxi-icon" src="../../assets/icon-taxi.png"/><div><p>Cabs</p></div></li></a>
            <a onClick={this.scrollHandler} href="/#subway"><li><img id="subway-icon" src="../../assets/icon-subway.png"/><div><p>Subways</p></div></li></a>
            <a href="#"><li><img id="bus-icon" src="../../assets/icon-bus.png"/><div><p>Bus</p></div></li></a>
            <a href="#"><li><img id="car-icon" src="../../assets/icon-car.png"/><div><p>Cars</p></div></li></a>
          </ul>
        </nav>
      </section>
    )
  }
})

export default CategoryNav;
