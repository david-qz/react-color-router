import { useParams } from 'react-router-dom';
import './RGB.css';

export default function RGB() {
  const color = useParams();
  return <div style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` }}>
    {`rgb(${color.r}, ${color.g}, ${color.b})`}
  </div>;
}
