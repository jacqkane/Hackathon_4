import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {

    return (
        <div className="header-container">
            <h1>Authors of Our Time</h1>
            <div className="header-nav">
                <Link to={'/'} > <a href="#home">Home</a> </Link>
            </div>
        </div>
    );
}