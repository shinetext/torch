import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class StickyFooter extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    let body = document.getElementsByTagName("BODY")[0]
    let footerMsg = document.getElementById('sticky-footer');
    if (body.scrollTop > 90) {
      footerMsg.classList.add('show');
    } else {
      footerMsg.classList.remove('show');
    }

  }
  render() {
    return (
      <div>
        <div className="sticky-message">Get daily affirmations texted to you!</div>
        <a href="http://www.shinetext.com">
          <div className="signup-button">Sign Up</div>
        </a>
      </div>
    )
  }
}

ReactDOM.render(
  <StickyFooter/>, document.getElementById('sticky-footer'));

// ga-on="click"
// ga-event-category="CTA"
// ga-event-action="sticky signup"
// ga-event-label="<%= articleUrlPath %>">