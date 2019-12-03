import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './../redux/store'

import Users from '../pages/users'
import Navbar from './Navbar'

const Tasks = () => {
  return (
    <div>Hello</div>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <div className="margin">
            <Route exact path='/' component={Users} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/tasks' component={Tasks} />
          </div>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App

