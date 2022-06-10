// first component created by me and we gonna learn about props 
// so props are basically some variable inside whose value will be difined/given by me 
// they are reusable and efficient 
// since this is jsx we write props inside curlly braces.

//propTypes 
// these are use define the type of props that we have used or declare in our code





import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'


export default function Navbar(props) {
 
  return (
    <>
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      {/*<Link className="navbar-brand" to="/">{props.title}</Link>*/}
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/*<Link className="nav-link active" aria-current="page" to="/home" onClick={props.colorTextArea}>{props.home}</Link>*/}
            <a className="nav-link active" aria-current="page" href="#" onClick={props.colorTextArea}>{props.home}</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link active" to="/about" onClick={props.colorAbout}>{props.about}</Link>
          </li> */}
        </ul>

        <label htmlFor="colorpicker">Color Picker:</label>
        <input type="color" id="colorpicker" value={props.color} onChange={props.handleAnyColorMode}/>

          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
          <input className="form-check-input" type="checkbox" aria-checked="false" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
      </div>
    </div>
  </nav>
  </>
  )
}

Navbar.propTypes={
    title : PropTypes.string,  // can use .isRequired here 
    home : PropTypes.string,
    about : PropTypes.string,
    search : PropTypes.string
}
Navbar.defaultProps={
    title: "Set title here",
    home: "Home page here please",
    about: "all about here",
    search: "this place is for search"
}
