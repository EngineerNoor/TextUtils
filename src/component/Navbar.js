import React from 'react';
export default function Navbar(props){
  // let myStyle={
  //   color:"white",
  //   backgroundColor:"blue"
  // }
    return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-white`}>
  <input className="form-check-input" type="checkbox" onClick={props.click} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.mode==="dark"?"white":"black"}}>{props.text}</label>
</div>
    </div>
  </div>
</nav>
    )
}
