import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions'
class Signin extends Component {

  handleFormSubmit({email, password }) {
    console.log(email,password)
    this.props.signinUser({email,password})
  }

  render() {
    const { handleSubmit, fields: {email,password}} = this.props

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email: 
            <input {...email} type="text" className="form-control"/>
          </label>
        </fieldset>
        <fieldset className="form-group">
          <label>Password:
            <input {...password} type="text" className="form-control"/>
          </label>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
},null,actions)(Signin)