import React from 'react';
import { Link } from 'react-router-dom';


const Proco = () => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-light py-5">
      <div className="row">
        <div className="col text-center">
          <h1 className="display-3 mb-4">ProCo</h1>
          <p className="lead mb-5"> Collaborating Today For Innovation of Tomorrow</p>
          <Link to="/login" className="btn btn-primary btn-lg">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Proco;
