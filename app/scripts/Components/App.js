import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import CategoryNav from './CategoryNav';

const App = React.createClass({
  render: function () {
    return (
      <section className="content-container">
        <Hero/>
        <Nav/>
        <CategoryNav/>
      </section>
    )
  }
})

export default App;
