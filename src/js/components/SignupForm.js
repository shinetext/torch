import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormField from './FormField';

class SignupForm extends Component {
  render() {
    return (
      <form>
        <input label="First Name" type="text" fieldName="first_name" />
        <input label="Cell Number" type="tel" fieldName="phone" />
        <FormField type="hidden" fieldName="opt_in_path" value={null} />
        <button id="signup-submit" value="Get Shine Texts" />
      </form>
    );
  }
}

if (
  !window.location.href.includes('articles') &&
  document.getElementById('signup-form')
) {
  ReactDOM.render(<SignupForm />, document.getElementById('signup-form'));
}
