import React, {Component} from 'react';

export default class FooterPin extends Component{

  render(){
    return (
      <div className="py-5 section-aquamarine" id="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-md-left text-center">
              <h1 className="text-white">Know more about TechFlexa</h1>
              <p>When compared to mergers and acquisitions, a strategic alliance is a simpler and more effective way to penetrate a new market, create a new product, grow your brand, or manufacture at a lower cost. Rather than go it alone and grow a new business
                organically, strategic alliances can get you there faster and cheaper.</p>
            </div>
            <div className="col-md-4 align-self-center animate-in-right">
              <a href="https://techflexa.com/" className="btn btn-lg btn-light my-3">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}