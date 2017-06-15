import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01'); // This needs to change to Shine google-analytics id

class Footer extends Component {
  gaClick() {
    ReactGA.event({action: 'signup', category: 'CTA', label: 'advice.shinetext'});
  }
  render() {
    return (
      <footer>
        <div className="social-and-footer-nav">
          <div className="-social-icons">
            <a className="-icon-facebook" href="https://www.facebook.com/Shine-Text" target="_blank"></a>
            <a className="-icon-instagram" href="https://instagram.com/ShineText" target="_blank"></a>
            <a className="-icon-twitter" href="https://twitter.com/ShineText" target="_blank"></a>
          </div>
          <div className="page-links">
            <a href="/">Get Advice</a>
            <a href="http://www.shinetext.com/referrals">Invite Friends</a>
            <a href="http://www.shinetext.com/squad">The Squad</a>
            <a href="http://www.shinetext.com/faq">FAQ</a>
            <a href="http://www.shinetext.com/privacy-policy">Privacy Policy</a>
            <a href="http://www.shinetext.com/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    )
  }
}

ReactDOM.render(
  <Footer/>, document.getElementById('footer'));
