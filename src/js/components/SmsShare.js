import React from 'react';
import ReactDOM from 'react-dom';

const SmsShare = () => {
  let body =
    'Career and life advice from real people. Get daily fulfillment and read up on how to live your best life.';
  let op = '?'; // check if device is apple mobile
  if (
    window.navigator.userAgent.match(/iPhone/i) ||
    window.navigator.userAgent.match(/iPad/i) ||
    window.navigator.userAgent.match(/iPod/i)
  ) {
    op = '&';
  }
  return (
    <a
      className="fa fa fa-comment-o fa-2x social-icon sms-icon"
      href={`sms:${op}body=${body}&utm_source=Blog&utm_medium=Sms`}
      rel="external"
      ga-on="click"
      ga-event-category="Share"
      ga-event-action="sms"
      ga-event-label={window.location.href}
    />
  );
};

if (window.location.href.includes('articles')) {
  ReactDOM.render(<SmsShare />, document.getElementById('sms-share'));
}
