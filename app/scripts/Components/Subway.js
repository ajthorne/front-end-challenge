import React from 'react';

const Subway = React.createClass({
  render: function () {
    return (
      <a id="subways">
        <section className="subway-holder">
          <div className="subway-inner-holder">
            <div className="subway-header">
              <img src="../../assets/icon-subway.png" alt="subway icon"/>
              <h1>Subways</h1>
              <span>Subways</span>
            </div>
            <div className="subway-copy">
              <figure className="subway-map-holder">
                <img src="../../assets/nyc-transit-map.png" alt="nyc subway map"/>
                <figcaption>New York City Subway System<p>New York City, New York</p></figcaption>
              </figure>

              <p>The Subway is the most popular mode of transportation in New York City. There are tons of access points and stops to get you around town if you’re in a hurry. Using the subway can seem stressful but it shouldn’t be intimidating. If you aren’t sure what train to take you can look at a subway map that is on the wall in every subway station.</p>

              <p>There are two types of trains, “local” which means they stop at every stop on their route and “express” which will skip stops in order to get you to a set destination faster. If you mix these up you could end up on the other side of town so be sure to check the train before getting on.</p>

              <p>Many people will refer to the trains by the color of the line, this is a bad idea. Once you travel outside of Manhattan the trains with the same color will split up and you will end up in the wrong place. When looking for a route pay attention to the number or letter.</p>

              <p>In some places on the map you will see a little black link connecting two stations, these are underground tunnels for pedestrians to make it easier to transfer trains. This makes it faster than going up the street level and walking over to the next station you need.</p>

              <p>You will see that many of the trains with have “Uptown”, “Downtown”, or the name of a borough. When you see “Uptown” it just means that it is North from where you are currently standing. “Downtown” means that is South from where you are currently standing. The name of a borough on the train just means the last stop, if that borough is North of you then you are going North and vice versa.</p>

              <p>Within the station itself, you will see signs hanging down with the number of the trains that stop at that station and the hours that it operates. To tell which train is pulling in currently look at the sign on the front and sides of the train to see what number it is and the direction it’s traveling in.</p>
            </div>
            <div className="subway-howtocopy">
              <h1>How to Ride the Subway in New York</h1>

              <p id="subway-intro-center">Once you find the correct station that you need to be at you can enter the station with a MetroCard. If you don’t have a card and need one you can purchase one from the station operators booth or a MetroCard Vending Machine.</p>

              <div className="subway-flexholder">
                <div className="subway-flexcopy">
                  <h3>Turnstiles</h3>
                  <p>When approaching the turnstile swipe your MetroCard on the right side of the turnstile and walk through once the screen reads “Ok”. If your card does not go through try swiping the card faster. If your card is still not working then see an attendant. Do not jump over the turnstile, if you jump over you can not only hurt yourself but you can also be arrested.</p>
                </div>
                <div className="subway-flexcopy">
                  <h3>Entering the Train</h3>
                  <p>Once you are on the platform wait behind the yellow line for your train. When your train pulls into the station wait for the people exiting to leave first and then walk in and take a seat. If you want a better chance of finding an available seat try the first and last cars. They tend to have fewer people in them and you might be able to take a seat and rest your feet for the ride.</p>
                </div>
                <div className="subway-flexcopy">
                  <h3>Transfers</h3>
                  <p>Sometimes when riding the subway you might have to transfer trains or stations. At some stops, there is an underground tunnel for riders to transfer from popular stations. Using these tunnels will save you time. You get one transfer for free on your MetroCard as long as it is within 2 hours from the start of your trip.</p>
                </div>
                <div className="subway-flexcopy">
                  <h3>Knowing When to Get Off</h3>
                  <p>Try to have an idea of how many stops your train will have until you have to get off. When you are coming into a station the conductor will announce what station you are at however it is often hard to hear and mumbled. It’s best to keep an eye out the window when you pull in, there will be the station number on the poles inside of the station and sometimes will be tiled into the wall of the station.</p>
                </div>
              </div>
                <h3>Apps to Help You Navigate the Subway</h3>
                <span>Citymapper</span>
                <p>Citymapper is a great app to have not only for the subway but for any transportation in New York City. Once you put your start and end destination in Citymapper will calculate different ways to get there while giving real-time delay updates. It will even tell you how many calories you’ll burn and the cost of your fare. This app is also available as a website.</p>
            </div>
          </div>
        </section>
      </a>
    )
  }
})

export default Subway;
