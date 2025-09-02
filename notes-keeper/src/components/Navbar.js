import React from 'react'

function Navbar(props) {
  return (

     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input
            className="form-check-input"
            type="checkbox"
            onClick={props.toggleMode}
          />

          <label className="form-check-label">
            Enable {props.mode==='light'?'dark':'light'} Mode
          </label>

     </div>
      </div>
</nav>

  );
}

export default Navbar
