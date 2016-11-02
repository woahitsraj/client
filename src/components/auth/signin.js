import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions'
class Signin extends Component {

  handleFormSubmit({email, password }) {
    console.log(email,password)
    this.props.signinUser({email,password})
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>{this.props.errorMessage}</strong>
        </div>
      )
    }
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
            <input {...password} type="password" className="form-control"/>
          </label>
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}
function mapStateToProps (state) {
  return { errorMessage: state.auth.error }
}
export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin)