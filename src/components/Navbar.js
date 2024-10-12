import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light pink-light">
      <div className="container-fluid d-flex justify-content-center">
        <h1>My Currency Converter</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
