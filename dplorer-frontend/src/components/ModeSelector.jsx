import { NavLink } from 'react-router-dom';

export default function ModeSelector() {
  return (
    <nav className="mode-selector">
      <NavLink to="/general" className={({ isActive }) => isActive ? 'active' : ''}>
        General Query
      </NavLink>
      <NavLink to="/code-analysis" className={({ isActive }) => isActive ? 'active' : ''}>
        Code Analysis
      </NavLink>
    </nav>
  );
}