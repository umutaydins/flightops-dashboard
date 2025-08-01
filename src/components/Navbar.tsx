import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-semibold" to="/">FlightOps</Link>
        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/">Dashboard</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/tasks">Tasks</NavLink></li>
          </ul>
          <a className="btn btn-outline-secondary" href="https://github.com/umutaydins/flightops-dashboard" target="_blank">GitHub</a>
        </div>
      </div>
    </nav>
  );
}
