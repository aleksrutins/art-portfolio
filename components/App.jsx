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
import ArtistStatement from './ArtistStatement';

export default function App() {
return (
    <Router>
      <div id="page-container">
        <div id="content-wrap">
        <Navbar sticky="top" variant="dark" bg="dark">
          <Link className="navbar-brand" to="/">Art Portfolio</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/criticism">Art Criticism</Link>
              <Link className="nav-link" to="/statement">Artist Statement</Link>
            </Nav>
            <Nav>
              <Nav.Link href="//aleks.rutins.com">Main Site</Nav.Link>
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
          <Route path="/statement">
            <ArtistStatement></ArtistStatement>
          </Route>
          <Route path="*">
            <ErrorPage err="404"></ErrorPage>
          </Route>
        </Switch>
        </div>
        <footer id="footer" className="text-light bg-dark">
          <p>Font: <a href="https://fonts.google.com/specimen/Red+Hat+Display">Red Hat Display</a></p>
        </footer>
      </div>
    </Router>
  );
}
