import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";

const Block = lazy(() => import("./pages/block"));
const Transaction = lazy(() => import("./pages/txn"));
const Latest = lazy(() => import("./pages/latest"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading....</div>}>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <label className="navbar-brand">TEST</label>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Single Block</Link>
              </li>
              <li>
                {" "}
                <Link to="/txn">Single Transaction</Link>
              </li>
              <li>
                {" "}
                <Link to="/latest">Latest Block</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route exact path="/" component={Block} />
        <Route path="/txn" component={Transaction} />
        <Route path="/latest" component={Latest} />
      </Suspense>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
