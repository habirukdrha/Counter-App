import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar{" "}
              <span className="badge bg-pill bg-secondary">
                {this.props.totalCounter}
              </span>
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
