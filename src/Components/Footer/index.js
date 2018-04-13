import React, {Component} from 'react';

export default class Footer extends Component{

  render(){
    return (
      <footer className="text-md-left text-center p-4 bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 my-3 align-self-center">
              <img className="img-fluid d-block mx-auto" src="/favicon.png" alt="TechFlexa Logo"/>
              <p className="text-center">
                <a href="https://techflexa.com">https://techflexa.com</a>
              </p>
            </div>
            <div className="my-3 col-lg-3 col-md-3">
              <h3>PocketSource</h3>
              <p className="text-muted">A product by TechFlexa
                <br />
                Wave us a hand at
                <b>hello@techflexa.com</b>
              </p>
              <p className="my-3">Raipur Chhattisgarh 492001 India</p>
            </div>
            <div className="my-3 col-lg-3 col-md-3">
              <h3>Contact us</h3>
              <form>
                <fieldset className="form-group my-3">
                  <input type="email" className="form-control" id="Input Email" placeholder="Email" /> 
                </fieldset>
                <fieldset className="form-group my-3">
                  <input type="message" className="form-control" id="Input Message" placeholder="Message" />
                </fieldset>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
              </form>
            </div>
            <div className="my-3 col-lg-3 col-md-3">
              <h3>Follow</h3>
              <a href="https://www.facebook.com" target="blank">
                <i className="fa fa-facebook-square text-muted fa-3x m-2"></i>
              </a>
              <a href="https://www.instagram.com" target="blank">
                <i className="fa fa-3x fa-instagram text-muted m-2"></i>
              </a>
              <a href="https://twitter.com" target="blank">
                <i className="fa fa-3x fa-twitter m-2 text-muted"></i>
              </a>
              <a href="https://plus.google.com" target="blank">
                <i className="fa fa-3x fa-google-plus-official text-muted m-2"></i>
              </a>
              <a href="https://pinterest.com" target="blank">
                <i className="fa fa-3x text-muted fa-pinterest-p m-2"></i>
              </a>
              <a href="https://www.youtube.com" target="blank">
                <i className="fa fa-3x text-muted fa-youtube-play m-2"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="text-muted">© Copyright 2018 TechFlexa - All rights reserved. </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}