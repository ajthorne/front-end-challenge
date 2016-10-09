import React from 'react';


const CategoryNav = React.createClass({
  render: function () {
    return (
      <section className="category-container">
        <h1 className="category-header">NYC Transportation Categories</h1>
        <nav className="category-nav">
          <ul className="category-list">
            <li><img src="../../assets/icon-airplane.png"/><div><p>Airports</p></div></li>
            <li><img src="../../assets/icon-taxi.png"/><div><p>Cabs</p></div></li>
            <li><img src="../../assets/icon-subway.png"/><div><p>Subways</p></div></li>
            <li><img src="../../assets/icon-bus.png"/><div><p>Bus</p></div></li>
            <li><img src="../../assets/icon-car.png"/><div><p>Cars</p></div></li>
          </ul>
        </nav>
      </section>
    )
  }
})

export default CategoryNav;
