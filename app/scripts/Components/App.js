import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import CategoryNav from './CategoryNav';
import Airport from './Airport';
import Cab from './Cab';
import Subway from './Subway';
import Footer from './Footer';

const App = React.createClass({
  render: function () {
    return (
      <section className="content-container">
        <Hero/>
        <Nav/>
        <CategoryNav/>
        <Airport/>
        <Cab/>
        <Subway/>
        <Footer/>
      </section>
    )
  }
})

export default App;
