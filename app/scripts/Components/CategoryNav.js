import React from 'react';


const CategoryNav = React.createClass({
  render: function () {
    return (
      <section className="category-container">
        <h1 className="category-header">NYC Transportation Categories</h1>
        <nav className="category-nav">
          <ul className="category-list">
            <li><a href="/#airports"><img id="plane-icon" src="../../assets/icon-airplane.png"/><div><p>Airports</p></div></a></li>
            <li><a href="/#cabs"><img id="taxi-icon" src="../../assets/icon-taxi.png"/><div><p>Cabs</p></div></a></li>
            <li><a href="/#subway"><img id="subway-icon" src="../../assets/icon-subway.png"/><div><p>Subways</p></div></a></li>
            <li><a href="/#bus"><img id="bus-icon" src="../../assets/icon-bus.png"/><div><p>Bus</p></div></a></li>
            <li><a href="/#cars"><img id="car-icon" src="../../assets/icon-car.png"/><div><p>Cars</p></div></a></li>
          </ul>
        </nav>
      </section>
    )
  }
})

export default CategoryNav;
