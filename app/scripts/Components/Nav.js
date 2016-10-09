import React from 'react';

const Nav = React.createClass({
  render: function () {
    return (
      <nav className="nav-container">
        <ul className="nav-list">
          <li>Compare Car Insurance</li>
          <li><img className="nav-arrow" src="../../assets/icon-caret-right.png"/></li>
          <li>New York</li>
          <li><img className="nav-arrow" src="../../assets/icon-caret-right.png"/></li>
          <li>New York City Transportation Guide</li>
        </ul>
      </nav>
    )
  }
})

export default Nav;
