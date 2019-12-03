import React, { Component } from 'react'
import { User } from '../components/User'
import { connect } from 'react-redux'
import * as usersActions from './../redux/actions/usersActions'

class Users extends Component {

  componentDidMount() {
    this.props.getAll()
  }

  usersList = () => {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((e, i) => {
              return <User key={i} {...e} />
            })}
          </tbody>
        </table>
      </div>
    )
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {this.usersList()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = reducers => {
  return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Users)
