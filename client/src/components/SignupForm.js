import React from 'react';
import { graphql } from 'react-apollo';
import { browserHistory } from 'react-router';
import gql from 'graphql-tag';


import FormField from './FormField'

class SignupForm extends React.Component {

  constructor() {
    super();
    this.state = {
      fields: {}
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(evt) {
    evt.preventDefault();

    const { submit } = this.props
    const user = this.state.fields
    
    return submit(user).then((res) => {
      if (!res.errors) {
        browserHistory.push('/user')
      } else {
        this.setState({ errors: res.errors })
      }
    })
  }

  onInputChange({name, value}) {
    const fields = this.state.fields;

    fields[name] = value

    this.setState({ fields })
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.onFormSubmit}>

          <FormField
            placeholder='Name'
            name='name'
            value={this.state.fields.name}
            onChange={this.onInputChange}
          />

          <br />

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

          <input type='submit'/>
        </form>
      </div>
    )
  }
}

SignupForm.propTypes = {
  submit: React.PropTypes.func.isRequired,
}

const SUBMIT_CREATE_USER_MUTATION = gql`
  mutation create_user($email: String!, $name: String!, $password: String!) {
    create_user(email: $email, name: $name, password: $password) {
      name,
      email
    }
  }
`
const SignUpFormWithData = graphql(SUBMIT_CREATE_USER_MUTATION, {
  props({ mutate }) {
    return {
      submit(user) {
        return mutate({ variables: user  });
      },
    }
  },
})(SignupForm)

export default SignUpFormWithData