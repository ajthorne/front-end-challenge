import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
  render: function () {
    return (
      <nav className="nav-container">
        <ul className="nav-list">
          <li>Compare Car Insurance</li>
          <li><img className="nav-arrow" src="../../assets/icon-caret-right.png" alt="right arrow"/></li>
          <li>New York</li>
          <li><img className="nav-arrow" src="../../assets/icon-caret-right.png" alt="right arrow"/></li>
          <li><Link to="#">New York City Transportation Guide</Link></li>
        </ul>
      </nav>
    )
  }
})

export default Nav;
