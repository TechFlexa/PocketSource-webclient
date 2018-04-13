import React, {Component} from 'react';
import '../../App.css';

export default class Navbar extends Component{
	constructor(props){
		super(props);
		this.state = {
			discover: this.refs.discover,
			collections: this.refs.collection
		}
	}

	handleClick(position){
		window.scrollTo(0, position)
	}

	render(){
		return (
			<nav className="navbar navbar-expand-md fixed-top bg-dark navbar-dark">
			<div className="container">
			  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse justify-content-center" id="navbar2SupportedContent">
			    <ul className="navbar-nav">
			      <li className="nav-item mx-2">
			        <a className="nav-link" href="">Home</a>
			      </li>
			      <li className="nav-item mx-2">
			        <a className="nav-link" onClick={this.handleClick(this.state.discover)}>Discover
			          <br /> </a>
			      </li>
			      <li className="nav-item mx-2">
			        <a className="nav-link" href="#collections">Collections
			          <br /> </a>
			      </li>
			      <li className="nav-item mx-2">
			        <a className="nav-link" href="https://techflexa.com">About TechFlexa</a>
			      </li>
			    </ul>
			    <a className="btn navbar-btn mx-2 text-white btn-outline-light" href="#register">Join PocketSource
			      <br /> </a>
			  </div>
			</div>
			</nav>
		)
	}
}