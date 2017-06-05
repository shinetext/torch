import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Header extends Component {
  componentDidMount() {
    $(document).ready(function() {

      $('#mobile-menu-button').click(toggleMobileMenu);
      $('#mobile-menu-button-close').click(toggleMobileMenu);

      function toggleMobileMenu() {
        $('body').toggleClass('mobile-menu-open');
        $('#mobile-menu').toggleClass('-open');
      }

    });
  }
  render() {
    return (
      <header>
        <div className="navbar">
          <a href="http://www.shinetext.com">
            <img className="shine-logo" src="https://images.contentful.com/awpxl2koull4/FFhnW3pbga4qmCOM24kmc/8c718dac9a5357db86c55b637461f4f3/Shine-logo-web.png?w=100" />
          </a>

          <div className="navbar-links-container">
            <div className="navbar-links"><a href="/">Get Advice</a></div>
            <div className="navbar-links"><a href="http://www.shinetext.com/referrals">Invite Friends</a></div>
            <div className="navbar-links"><a href="http://www.shinetext.com/squad">The Squad</a></div>
            <div className="navbar-links"><a href="https://talk.shinetext.com">Shinevisor</a></div>
          </div>
          <i id="mobile-menu-button" className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div id="mobile-menu">
          <i id="mobile-menu-button-close" className="fa fa-times" aria-hidden="true"></i>
          <ul>
            <li><a href="/">Get Advice</a></li>
            <li><a href="http://www.shinetext.com/referrals">Invite Friends</a></li>
            <li><a href="http://www.shinetext.com/squad">The Squad</a></li>
            <li><a href="https://talk.shinetext.com">Shinevisor</a></li>
          </ul>
        </div>
      </header>
    )
  }
}

ReactDOM.render(<Header/>, document.getElementById('header'));
