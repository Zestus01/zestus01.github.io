import {useState, useRef, useEffect} from 'react';
import ContentDisplay from './ContentDisplay';
import './css/styles.css'

export default function Navbar(props){
  const [page, setPage] = useState('Home');

  return(
    <div>
      <nav className="navbar navbar-expand-lg secondary-color">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold accent-text">Zestus</a>
            <button className="navbar-toggler accent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav d-flex container-fluid">
                <li className="nav-item">
                  <a className="m-1 button btn topnav accent nav-link active" aria-current="page" href="#" onClick={() => setPage('Home')}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="m-1 nav-link button btn topnav accent" onClick={() => setPage('Projects')}>Projects</a>
                </li>
                <li className="nav-item">
                  <a className="m-1 nav-link button btn topnav accent" href="#" onClick={() => setPage('Blogs')}>Blogs</a>
                </li>
                <li className="nav-item">
                  <a className="m-1 nav-link button btn topnav accent" href="#" onClick={() => setPage('About')}>About Me</a>
                </li>
                <li className="nav-item">
                  <a className="m-1 nav-link button btn topnav accent" href="https://github.com/Zestus01" target='_blank'>Github</a>
                </li>
                <li className="nav-item">
                  <a className="m-1 nav-link button btn topnav accent" href="https://drive.google.com/file/d/1Bm5uyAgVFSUrIeB5YFKuxQCsftnSfiL3/view?usp=sharing" target="_blank">Resume</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <ContentDisplay page={page} />
    </div>
  );
}


