import React from 'react';

const images = [
  '../../assets/carousel-hangars.png',
  '../../assets/carousel-terminal.png'
];

const Airport = React.createClass({
  render: function () {
    return (
      <a id="airports">
        <section className="airport-holder">
          <div className="airport-inner-holder">
            <div className="airport-header">
              <img src="../../assets/icon-airplane.png"/>
              <h1>Airports</h1>
              <span>Airports</span>
            </div>
            <div className="carousel-holder">
              <div className="arrow-holder">
                <img onClick={this.leftHandler} className="carousel-arrow-left" src="../../assets/icon-caret-left.png"/>
                <img onClick={this.rightHandler} className="carousel-arrow-right" src="../../assets/icon-caret-right.png"/>
              </div>
              <figure className="airport-carousel">
                <img className="carousel-img" src="../../assets/carousel-terminal.png"/>
                <figcaption>John F. Kennedy International Airport (JFK)<span>New York, New York</span></figcaption>
              </figure>
            </div>
            <div className="airport-copy">
              <p>There are three major Airports in the New York City area, two of which are in New York and one close by in New Jersey.</p>

              <p>If you are coming to New York from out of the country you will most likely be flying into <span className="airport-highlight">John F. Kennedy International Airport (JFK)</span> which lies South of the city near Queens. For easy access after your flight to the city itself, you can take the AirTrain. The Airtrain will take travelers straight from the airport to the city and close to main subway and train lines to get you to your destination once inside Manhattan.</p>

              <p>The second airport located in New York is the La Guardia Airport (LGA). Most domestic flights will end here rather than JFK. LGA is also located in Queens but is much closer to the city itself. There are multiple bus and subway routes that can get you to the city and of course iconic New York cabs waiting to take you to your destination.</p>

              <p>The 3rd and final airport is located in New Jersey, Newark Liberty International Airport (EWR) is used for both international and domestic flights. With its location outside of New York it is less crowded but a little out of the way. In an effort to make EWR more accessible for tourists and travelers you can now take a NJ AirTrain into Manhattan from the airport.</p>
            </div>
          </div>
        </section>
      </a>
    )
  }
})

export default Airport;
