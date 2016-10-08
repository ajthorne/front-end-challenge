import React from 'react';
import Hero from './Hero';

const App = React.createClass({
  render: function () {
    return (
      <section className="content-container">
        <Hero/>
      </section>
    )
  }
})

export default App;
