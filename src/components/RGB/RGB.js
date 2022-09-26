import { useParams } from 'react-router-dom';
import './RGB.css';

export default function RGB() {
  const { r, g, b } = useParams();

  const cMax = Math.max(parseInt(r), parseInt(g), parseInt(b)) / 255;
  const cMin = Math.min(parseInt(r), parseInt(g), parseInt(b)) / 255;
  const lightness = cMax + cMin / 2;

  return <div
    className="RGB"
    style={{
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      color: lightness > 0.45 ? 'black' : 'var(--off-white)'
    }}
  >
    {`rgb(${r}, ${g}, ${b})`}
  </div>;
}
