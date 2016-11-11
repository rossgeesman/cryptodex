import React from 'react'
import { browserHistory } from 'react-router'
import FormField from './FormField'

class LoginForm extends React.Component {

  constructor() {
    super()
    this.state = {
      fields: {}
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(evt) {
    evt.preventDefault()
    const user = this.state.fields
    
    return fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then((response) => { 
      if (response.status === 200 ) 
      response.json()
      .then((user) => {
        return browserHistory.push('/user/' + user.id)
      })
    })
    .catch((error) => {
        console.log(error)
    })
  }

  onInputChange({ name, value }) {
    const fields = this.state.fields

    fields[name] = value

    this.setState({ fields })
  }

  render() {
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.onFormSubmit}>

          <FormField
            placeholder='Email'
            name='email'
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />

          <br />

          <FormField
            placeholder='Password'
            name='password'
            value={this.state.fields.password}
            onChange={this.onInputChange}
          />

          <input type='submit' />
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  submit: React.PropTypes.func.isRequired,
}

export default LoginForm
