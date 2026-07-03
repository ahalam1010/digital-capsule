import { useState } from 'react';
import './App.css';

import noteSticker from './assets/note-sticker.png';

function App() {
  const [secretCode, setSecretCode] = useState('');

  function handleEnter() {
    if (!secretCode.trim()) {
      alert('Enter the secret code first 💗');
      return;
    }

    alert('Capsule opening soon ✨');
  }

  return (
    <div className="app">
      <header className="browser-bar">
        <div className="browser-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="browser-title">✧ Digital Capsule ✧</div>

        <div className="browser-icon">☆</div>
      </header>

      <nav className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#story">Our Story</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">

            <h1>
              Digital <span>♡</span>
              <br />
              Capsule
            </h1>

            <p className="caption">
              A private digital diary and time capsule made for
              <strong> Ahlam and Afroz’s friendship.</strong>
            </p>

            <p className="soft-line">
              Our memories, our laughter, our little forever.
            </p>

            <div className="secret-box">
              <span>🔐</span>
              <input
                type="password"
                value={secretCode}
                onChange={(event) => setSecretCode(event.target.value)}
                placeholder="Enter secret code..."
              />
              <button onClick={handleEnter}>Unlock</button>
            </div>
          </div>

          <div className="hero-art">
            <img
              src={noteSticker}
              alt="Friendship note"
              className="note-hero-sticker"
            />

            <div className="floating-badge badge-one">forever</div>
            <div className="floating-badge badge-two">memories</div>
            <div className="sparkle-one">✦</div>
            <div className="sparkle-two">✧</div>
            <div className="sparkle-three">♡</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;