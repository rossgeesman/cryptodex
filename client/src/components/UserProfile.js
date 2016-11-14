import React from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class UserProfile extends React.Component {
  render() {
    if (this.props.data.user) {
      return (
        <div>
          <h1>User Profile</h1>
          <h2>Email</h2>
          <p>{this.props.data.user.email}</p> 
          <h2>Name</h2>
          <p>{this.props.data.user.name}</p> 
        </div>
      ) } else {
      return (
         <div>
          <h1>Loading...</h1>
         </div>
      )
    }
  }
}

UserProfile.propTypes = {
  data: React.PropTypes.shape({
    user: React.PropTypes.object,
  }).isRequired
}



const CURRENT_USER_QUERY = gql`
  query getCurrentUser($id: String!) { 
  	user(id: $id) {
  	  email,
  	  name
  	}
  }
`
const UserProfileWithData = graphql(CURRENT_USER_QUERY, {
	options: props => ({ variables:  {id: props.params.id } })
})(UserProfile)

export default UserProfileWithData
