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
          <a href="https://www.shinetext.com">
            <img
              className="shine-logo"
              src="https://images.ctfassets.net/awpxl2koull4/6Ge2cCqfKg0IM8CIsOMiq6/bc0dee5dd91c1b37a155c220e95893d4/shine-logo-nav-122018.png?w=100"
            />
          </a>

          <div className="navbar-links-container">
            <div className="navbar-links">
              <a href="https://premium.shinetext.com">Shine Premium</a>
            </div>
            <div className="navbar-links">
              <a className="nav-open" href="/">
                Get Advice
              </a>
            </div>
            <div className="navbar-links">
              <a href="https://www.shinetext.com/squad/?utm_source=Shine&utm_medium=Blog&utm_campaign=Top_Nav">
                The Squad
              </a>
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
              <a href="https://premium.shinetext.com">Shine Premium</a>
            </li>
            <li>
              <a href="/">Get Advice </a>
              <i
                className="fa fa-plus plus-icon"
                onClick={() => {
                  $('#category-submenu').slideToggle();
                }}
              />
              <ul id="category-submenu">
                <li>
                  <a href="/categories/chill">CHILL</a>
                </li>
                <li>
                  <a href="/categories/grow">GROW</a>
                </li>
                <li>
                  <a href="/categories/hustle">HUSTLE</a>
                </li>
                <li>
                  <a href="/categories/play">PLAY</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://www.shinetext.com/squad?utm_source=Shine&utm_medium=Blog&utm_campaign=Top_Nav">
                The Squad
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('header'));
