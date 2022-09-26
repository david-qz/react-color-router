import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return <div className='NotFound'>
    <div>{"Sorry, we couldn't find that page..."}</div>
    <div><Link to="/">...would you like to go home?</Link></div>
    <div></div>
    <div></div>
    <div></div>
  </div>;
}
