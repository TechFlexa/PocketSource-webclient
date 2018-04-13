import React, {Component} from 'react';

export default class Collections extends Component{

  render(){
    return (
      <div className="py-5 section-parallax" id="collections">
        <div className="container section-aquamarine">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-white mt-4 text-center">Collections</h1>
            </div>
          </div>
          <div className="row text-left text-dark">
            <div className="p-4 col-lg-4 col-md-4">
              <div className="card"></div>
              <div className="card">
                <img className="card-img-top" src="https://pingendo.com/assets/photos/wireframe/photo-1.jpg" alt="Collectioin Cover" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="p-4 col-lg-4 col-md-4">
              <div className="card"></div>
              <div className="card">
                <img className="card-img-top" src="https://pingendo.com/assets/photos/wireframe/photo-1.jpg" alt="Collectioin Cover" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="p-4 col-lg-4 col-md-4">
              <div className="card"></div>
              <div className="card">
                <img className="card-img-top" src="https://pingendo.com/assets/photos/wireframe/photo-1.jpg" alt="Collectioin Cover" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}