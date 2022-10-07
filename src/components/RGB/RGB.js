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
      // https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#contrast-ratiodef
      // Threshold of 0.161 calculated according to above formula using black and --off-white luminance values.
      color: currentColor.luminance > 0.161 ? 'black' : 'var(--off-white)'
    }}
  >
    {`rgb(${r}, ${g}, ${b})`}
  </div>;
}
