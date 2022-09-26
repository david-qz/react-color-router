import { NavLink, useParams } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const { r, g, b } = useParams();
  const cssColor = `rgb(${r}, ${g}, ${b})`;

  return <header className='Header' style={{ '--current-color' : cssColor }}>
    <NavLink to="/rgb/255/0/0">color1</NavLink>
    <NavLink to="/rgb/0/255/0">color2</NavLink>
    <NavLink to="/rgb/0/0/255">color3</NavLink>
  </header>;
}
