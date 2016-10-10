import React from 'react';

const Cab = React.createClass({
  render: function () {
    return (
      <section className="cab-holder">
        <div className="cab-header">
          <img src="../../assets/icon-taxi.png"/>
          <h1>Cabs</h1>
          <span>Cabs</span>
        </div>
        <div className="cab-copy">
          <p>New York City cabs are iconic. You often see in tv shows or movies people having a hard time catching a cab in NYC. Fortunately, it isn’t that hard in real life you just have to know what to look for.</p>
          <p>There are easy to read signs that can tell you the status of a cab. Cabs can be three things On-Duty, Occupied, and Off-Duty. You can tell the difference between these cabs by looking at the light on the top of the cab.</p>
        	<ol>
            <li>An On-Duty cab will have just the center of the light on highlighting the cabs number.</li>
            <li>An Occupied cab will not have any lights on the top on. This means that someone is already in the cab and it can’t stop for you.</li>
            <li>An Off-Duty cab will have all of its lights on the top on. Not only will the light highlighting the cab number be on but the lights on the sides of the topper will be on as well.</li>
          </ol>
        </div>
        <div className="cab-howtocopy">
          <h1>How to Use Cabs in New York</h1>
          <p id="cab-howto1">Now that you know how to tell if a cab is available you don’t have to go around chasing after taken cabs. If you don’t see any cabs in your area consider walking a block or two to a higher traffic road. Once you spot a cab stick your arm up, you can even try a whistle or two to try to get the cabbie’s attention.</p>
          <p id="cab-tip">LOCAL TIP: If you aren’t going very far make a “C’ with your hand when hailing a cab. It will let them know that you aren’t going far and even an Off-Duty cab might pick you up.</p>

          <p>Wait till you get in the cab to give your destination, once you are inside the cab they can’t refuse the trip. When giving your destination don’t give exact addresses. Instead, give landmarks or street corners, if you do this it gives the impression that you are local and they are less likely to “take the long way” to charge you extra.</p>

          <p>Taking a cab is often not the cheapest way travel around the city. When going through tolls you are expected to pay all tolls and fees associated with your travel. You also might have to pay for surcharges depending on the time of your ride. For more exact information about fares you can check out NYC’s website.</p>
          <h3>Hail a Taxis with This App</h3>
          <span>Arro</span>
          <p>Arro is special because before this app existed you could not schedule a cab or request one digitally, you had to do it the old fashion way. You can request a ride and pay for it automatically once the trip ends, you can even pay for a cab that you are already in.</p>
        </div>
      </section>

    )
  }
});

export default Cab;
