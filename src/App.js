import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

class App extends Component {

  render () {
    return (
      <Router>
        <div className="App">
          <nav className="nav cook">
            <div className="nav-left">
              <p className="title is-4 nav-item"><Link to="/">Zomato in Jakarta</Link></p>
            </div>
            <div className="nav-right">
              <p className="subtitle is-6 nav-item"><Link to="/add">Add Restaurant</Link></p>
            </div>
          </nav>

          <Route exact path="/" />
          <Route path="/add" />
        </div>
      </Router>
    )
  }
}

export default App
