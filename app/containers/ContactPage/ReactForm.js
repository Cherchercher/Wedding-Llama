import styled from 'styled-components';
import React from 'react';

class ReactFormLabel extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
    )
  }
}

class ReactForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }
  
  handleChange = (e) => {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };
  
  handleSubmit = (e, message) => {
    e.preventDefault();

    let formData = {
      formSender: this.state.name,
      formEmail: this.state.email,
      formSubject: this.state.subject,
      formMessage: this.state.message
    }
    
    if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
      return false;
    }

    $.ajax({
      url: '/some/url',
      dataType: 'json',
      type: 'POST',
      data: formData,
      success: function(data) {
        if (confirm('Thank you for your message. Can I erase the form?')) {
          document.querySelector('.form-input').val('');
        }
      },
      error: function(xhr, status, err) {
        console.error(status, err.toString());
        alert('There was some problem with sending your message.');
      }
    });
    
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  render() {
    return(
      <form className='react-form' onSubmit={this.handleSubmit}>
        <h1>Book the Llamas Today!</h1>
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formName' title='Full Name:' />

          <input id='formName' className='form-input' name='name' type='text' ref='formName' required onChange={this.handleChange} value={this.state.name} />
        </fieldset>
        
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formEmail' title='Email:' />

          <input id='formEmail' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
        </fieldset>
        
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formSubject' title='Subject:'/>

          <input id='formSubject' className='form-input' name='subject' type='text' required onChange={this.handleChange} value={this.state.subject} />
        </fieldset>
        
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formMessage' title='Message:' />

          <textarea id='formMessage' className='form-textarea' name='message' required onChange={this.handleChange}></textarea>
        </fieldset>
        
        <div className='form-group'>
          <input id='formButton' className='btn' type='submit' placeholder='Send message' />
        </div>
      </form>
    )
  }
};

export default styled.ReactForm`
//whatever the board is called.

// Variables
$color-grey: #eee;
$color-grey-light: #f5f5f5;
$color-primary: #ffab00;
$radius: 3px;

// Function
@function remy($value, $base: 16px) {
 @return ($value / $base) * 1rem;
}

html {
 box-sizing: border-box;
 font-size: 16px;
}

*,
*:after,
*:before {
 box-sizing: border-box;
}

body {
 font: 100% 'Roboto', arial, sans-serif;
 background: $color-grey-light;
}

form {
 padding: remy(32px);
 margin-top: 2rem;
 margin-right: auto;
 margin-left: auto;
 max-width: remy(380px);
 background-color: #fff;
 border-radius: $radius;
 box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);
}

.form-group {
 padding: 0;
 border: 0;
 
 & + & {
  margin-top: 1rem;
 }
}

label {
 display: inline-block;
 margin-bottom: .5rem;
 font-size: .75rem;
 text-transform: uppercase;
 touch-action: manipulation;
}

input,
textarea {
 display: block;
 padding: .5rem .75rem;
 width: 100%;
 font-size: 1rem;
 line-height: 1.25;
 color: #55595c;
 background-color: #fff;
 background-image: none;
 background-clip: padding-box;
 border-top: 0;
 border-right: 0;
 border-bottom: 1px solid $color-grey;
 border-left: 0;
 border-radius: $radius;
 @include transition;
 
 &:focus {
  outline: 0;
  border-bottom-color: $color-primary;
 }
}

textarea {
 resize: vertical;
}

.btn {
 display: inline-block;
 padding: .75rem 1rem;
 margin-top: 1.618rem;
 font-weight: 400;
 text-align: center;
 text-transform: uppercase;
 color: #fff;
 vertical-align: middle;
 white-space: nowrap;
 background-color: $color-primary;
 border: 1px solid transparent;
 box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);
 cursor: pointer;
 user-select: none;
 @include transition;
 
 &:focus,
 &:hover {
  background-color: lighten($color-primary, 13%);
  box-shadow: 0 18px 35px rgba(50,50,93,.1),0 8px 15px rgba(0,0,0,.07);
 }
 
 &:focus {
  outline: 0;
 }
}
`;