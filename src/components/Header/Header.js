import { NavLink, useParams } from 'react-router-dom';
import Color from '../../utils/Color';
import './Header.css';

export default function Header({ colors }) {
  const { r, g, b } = useParams();
  const currentColor = new Color(r, g, b);

  return <header className='Header' style={{ '--current-color' : currentColor.toCss() }}>
    {
      colors.map((color) => (
        <NavLink key={color.toRoute()} to={color.toRoute()}>{color.name}</NavLink>
      ))
    }
  </header>;
}
