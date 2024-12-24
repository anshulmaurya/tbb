import React from 'react';
import './Header.css';
import youtubeLogo from './assets/youtube.png';
import spotifyLogo from './assets/spotify.png';
import appleMusicLogo from './assets/apple-music.png';

const Header = () => {
    return (
        <header>
            <div className="logo">My Logo</div>
            <div className="middle-buttons">
                <button>Join Community</button>
                <button>Shop</button>
            </div>
            <div className="right-buttons">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeLogo} alt="YouTube" />
                </a>
                <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
                    <img src={spotifyLogo} alt="Spotify" />
                </a>
                <a href="https://apple.com/music" target="_blank" rel="noopener noreferrer">
                    <img src={appleMusicLogo} alt="Apple Music" />
                </a>
            </div>
        </header>
    );
};

export default Header;