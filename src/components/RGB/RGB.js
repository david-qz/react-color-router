import { useParams } from 'react-router-dom';
import Color from '../../utils/Color';
import './RGB.css';

export default function RGB() {
  const { r, g, b } = useParams();
  const currentColor = new Color(r, g, b);

  return <div
    className="RGB"
    style={{
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      color: currentColor.lightness > 0.45 ? 'black' : 'var(--off-white)'
    }}
  >
    {`rgb(${r}, ${g}, ${b})`}
  </div>;
}
