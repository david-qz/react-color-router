import { NavLink, useParams } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const { r, g, b } = useParams();
  const cssColor = `rgb(${r}, ${g}, ${b})`;

  return <header className='Header' style={{ '--current-color' : cssColor }}>
    <NavLink to="/rgb/95/15/64">purple</NavLink>
    <NavLink to="/rgb/227/100/20">orange</NavLink>
    <NavLink to="/rgb/15/76/92">blue</NavLink>
  </header>;
}
