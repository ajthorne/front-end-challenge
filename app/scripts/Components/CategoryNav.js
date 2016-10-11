import React from 'react';
import $ from 'jquery';

const CategoryNav = React.createClass({
  scrollHandler: function(e) {
    e.preventDefault();
    console.dir(e.target.parentElement.textContent);
    let clickSection = e.target.parentElement.textContent.toLowerCase();
    $('html,body').animate({
        scrollTop: $(`#${clickSection}`).offset().top},
        600);
    //Using jQuery here because React does not handle 'smooth scrolling' easily. I believe this is because
    //it handles the view only. Ideally, I would choose not to mix jQuery and React since they both deal with DOM
    //manipulation. Previously, I've used an open source code to achieve the 'smooth scroll' effect with React.
  },

  render: function () {
    return (
      <section className="category-container">
        <h1 className="category-header">NYC Transportation Categories</h1>
        <nav className="category-nav">
          <ul className="category-list">
            <a onClick={this.scrollHandler} href="/#airports"><li><img id="plane-icon" src="../../assets/icon-airplane.png" alt="plane icon"/><div><p>Airports</p></div></li></a>
            <a onClick={this.scrollHandler} href="/#cabs"><li><img id="taxi-icon" src="../../assets/icon-taxi.png" alt="taxi icon"/><div><p>Cabs</p></div></li></a>
            <a onClick={this.scrollHandler} href="/#subway"><li><img id="subway-icon" src="../../assets/icon-subway.png" alt="subway icon"/><div><p>Subways</p></div></li></a>
            <a href="#"><li><img id="bus-icon" src="../../assets/icon-bus.png" alt="bus icon"/><div><p>Bus</p></div></li></a>
            <a href="#"><li><img id="car-icon" src="../../assets/icon-car.png" alt="car icon"/><div><p>Cars</p></div></li></a>
          </ul>
        </nav>
      </section>
    )
  }
})

export default CategoryNav;
