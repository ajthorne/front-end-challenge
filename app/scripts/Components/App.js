import React from 'react';
import Hero from './Hero';
import Nav from './Nav';

const App = React.createClass({
  render: function () {
    return (
      <section className="content-container">
        <Hero/>
        <Nav/>
      </section>
    )
  }
})

export default App;
