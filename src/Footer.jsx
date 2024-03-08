import React from 'react';
import './Footer.css';

export default function Footer () {
    return (
        <footer>
            <div className="footer-container">
                <p>&copy; 2024 Gang of Four</p>
            
                <p>Follow us on
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <span className="icon icon-twitter"></span>
                    </a>
                    <a href="https://www.facebook.com/S20.officialPage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <span className="icon icon-facebook"></span>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <span className="icon icon-instagram"></span>
                    </a>
                </p>
            </div>
        </footer>
    );
}