import React, {Component} from 'react';

export default class Cover extends Component{

  render(){
    return (
      <div className="d-flex align-items-center section-aquamarine py-5 cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-white mt-5">
              <h1 className="display-2 d-none d-md-block">PocketSource</h1>
              <h1 className="display-4 d-block d-md-none">Conference Pingendo</h1>
              <p className="">Manage your resources which you came across in daily life</p>
              <a href="#discover" className="btn btn-lg mt-4 btn-outline-light">Discover Pockets</a>
              <a href="#discover">
                <i className="d-block fa fa-angle-down pt-5 fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}