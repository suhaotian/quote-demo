import React, { Component } from 'react'
import BrowserRouter from 'react-router/BrowserRouter'
import HashRouter from 'react-router/HashRouter'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import Link from 'react-router/Link'

import { pages } from './routes'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            {
              pages.map((item, i) => (
                <li key={i}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))
            }
          </ul>

          <div>
            {
              pages.map((item, i) => (
                <Match
                  key={i}
                  pattern={item.path}
                  exactly={item.exactly}
                  component={item.load}
                />
              ))
            }
          </div>
        </div>
      </HashRouter>
    )
  }
}


export default App
