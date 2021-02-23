import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Criticism from './Criticism';
import { Navbar, Nav } from 'react-bootstrap';
import ErrorPage from './Error';

export default function App() {
return (
    <Router>
      <div>
        <Navbar sticky="top" variant="dark" bg="dark">
          <Link className="navbar-brand" to="/">Art Portfolio</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/criticism">Art Criticism</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/criticism">
            <Criticism />
          </Route>
          <Route path="*">
            <ErrorPage err="404"></ErrorPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
