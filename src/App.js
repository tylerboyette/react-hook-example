import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Index }  from "./pages"
import { About }  from "./pages/about"

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index}></Route>
        <Route path="/about"  component={About}></Route>
      </div>
    </Router>
  )
}
