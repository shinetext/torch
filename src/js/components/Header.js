import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Header extends Component {
  componentDidMount() {
    $('#mobile-menu-button').click(this.toggleMobileMenu.bind(this));
    $('#mobile-menu-button-close').click(this.toggleMobileMenu.bind(this));
    $('.plus-icon').click(this.togglePlusSpin);
  }
  toggleMobileMenu() {
    $('body').toggleClass('mobile-menu-open');
    this.togglePlusSpin();
    $('#mobile-menu').toggleClass('-open');
  }
  togglePlusSpin() {
    // spin animation for mobile menu plus icon
    if ($('.plus-icon').css('transform') == 'none') {
      $('.plus-icon').css('transform', 'rotate(360deg)');
    } else {
      $('.plus-icon').css('transform', '');
    }
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
            ga-on="click"
            ga-event-category="Behavior"
            ga-event-action="mobile menu click"
            ga-event-label="open"
          />
        </div>
        <div id="mobile-menu">
          <i
            id="mobile-menu-button-close"
            className="fa fa-times"
            aria-hidden="true"
            ga-on="click"
            ga-event-category="Behavior"
            ga-event-action="mobile menu click"
            ga-event-label="close"
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
