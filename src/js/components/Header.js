import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Header extends Component {
  componentDidMount() {
    $('#mobile-menu-button').click(this.toggleMobileMenu);
    $('#mobile-menu-button-close').click(this.toggleMobileMenu);
  }
  toggleMobileMenu() {
    $('body').toggleClass('mobile-menu-open');
    $('#mobile-menu').toggleClass('-open');
  }
  render() {
    return (
      <header>
        <div className="navbar">
          <a href="http://www.shinetext.com">
            <img
              className="shine-logo"
              src="https://images.contentful.com/awpxl2koull4/FFhnW3pbga4qmCOM24kmc/8c718dac9a5357db86c55b637461f4f3/Shine-logo-web.png?w=100"
            />
          </a>

          <div className="navbar-links-container">
            <div className="navbar-links">
              <a className="nav-open" href="/">Get Advice</a>
            </div>
            <div className="navbar-links">
              <a href="http://www.shinetext.com/referrals">Invite Friends</a>
            </div>
            <div className="navbar-links">
              <a href="http://www.shinetext.com/squad">The Squad</a>
            </div>
          </div>
          <i
            id="mobile-menu-button"
            className="fa fa-bars"
            aria-hidden="true"
          />
        </div>
        <div id="mobile-menu">
          <i
            id="mobile-menu-button-close"
            className="fa fa-times"
            aria-hidden="true"
          />
          <ul>
            <li>
              <a href="/">
                Get Advice{' '}
              </a>
              <i
                className="fa fa-plus plus-icon"
                onClick={() => {
                  $('#category-submenu').slideToggle();
                }}
              />
              <ul id="category-submenu">
                <li><a href="/categories/hustle">HUSTLE</a></li>
                <li><a href="/categories/life">LIFE</a></li>
                <li><a href="/categories/work">WORK</a></li>
              </ul>
            </li>
            <li>
              <a href="http://www.shinetext.com/referrals">Invite Friends</a>
            </li>
            <li>
              <a href="http://www.shinetext.com/squad">The Squad</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('header'));
