import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import CategoryNav from './CategoryNav';
import Airport from './Airport';

const App = React.createClass({
  render: function () {
    return (
      <section className="content-container">
        <Hero/>
        <Nav/>
        <CategoryNav/>
        <Airport/>
      </section>
    )
  }
})

export default App;
