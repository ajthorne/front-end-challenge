import React from 'react';

const Footer = React.createClass({
  render: function () {
    return (
      <footer>
        <p className="footer-info">The rates or savings advertised are not necessarily available from all providers or advertisers listed on our site. Your actual rates or savings will vary based on factors like your driving history, coverage limits, deductibles, type of vehicle, location, & more. The Zebra is a licensed insurance broker, but we do not underwrite insurance policies.</p>

        <p className="footer-copyright">© 2016 Insurance Zebra. All Rights Reserved.</p>

        <p>Use of Insurance Zebra Insurance Services (DBA TheZebra.com) is subject to our Terms of Service, Privacy Policy and Licenses.</p>
      </footer>
    )
  }
})

export default Footer;
