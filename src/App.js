import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import backgroundImg from './components/assets/backgroundImg.png';
import youtubeLogo from './components/assets/youtube.png';
import spotifyLogo from './components/assets/spotify.png';
import appleMusicLogo from './components/assets/apple-music.png';

function App() {
    const [showFooterSocials, setShowFooterSocials] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (header) {
                const headerBottom = header.getBoundingClientRect().bottom;
                setShowFooterSocials(headerBottom < 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="App">
            <Header />
            <div className="welcome-section">
                <img src={backgroundImg} alt="Background" className="background-img" />
                <div className="welcome-text">
                    <h1>The Boy In Blue</h1>
                    <p>The Composer You Might be Looking For</p>
                </div>
            </div>
            <main>
                <section id="about">
                    <h2>About Me</h2>
                    <p>
                        I am a passionate musician with a love for creating unique and inspiring music. 
                        With years of experience in the industry, I have honed my skills in various genres 
                        and instruments. My journey began at a young age, and I have been dedicated to 
                        perfecting my craft ever since.
                    </p>
                </section>
                <section id="music">
                    <h2>My Music</h2>
                    <p>
                        Here you can find a collection of my latest tracks and albums. I strive to create 
                        music that resonates with my audience and evokes emotions. Feel free to explore 
                        and listen to my work.
                    </p>
                </section>
                <section id="contact">
                    <h2>Contact Me</h2>
                    <p>
                        If you would like to get in touch, please reach out via email or follow me on 
                        social media. I am always open to collaborations and new opportunities.
                    </p>
                </section>
            </main>
            <footer className={showFooterSocials ? 'show-socials' : ''}>
                <p>&copy; 2023 The Boy In Blue</p>
                <div className="footer-buttons">
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
            </footer>
        </div>
    );
}

export default App;