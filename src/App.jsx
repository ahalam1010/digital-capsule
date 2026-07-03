import { useState } from 'react';
import './App.css';

import noteSticker from './assets/note-sticker.png';

import memoryIcon from './assets/memory-icon.png';
import diaryIcon from './assets/diary-icon.png';
import capsuleIcon from './assets/capsule-icon.png';
import storyIcon from './assets/story-icon.png';

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

      <main className="landing-area">
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

        <section className="feature-section">
          <div className="feature-card pink-card">
            <div className="card-top">
              <div className="card-dots">
                <span></span>
                <span></span>
              </div>
              <button>×</button>
            </div>

            <div className="card-body">
              <div className="feature-icon-wrap">
                <img src={memoryIcon} alt="Memory Gallery" className="feature-icon" />
              </div>
              <h3>Memory Gallery</h3>
              <p>Store photos, videos, and voice notes from our favorite moments.</p>
              <button>Browse Memories ›</button>
            </div>
          </div>

          <div className="feature-card purple-card">
            <div className="card-top">
              <div className="card-dots">
                <span></span>
                <span></span>
              </div>
              <button>×</button>
            </div>

            <div className="card-body">
              <div className="feature-icon-wrap">
                <img src={diaryIcon} alt="Digital Diary" className="feature-icon" />
              </div>
              <h3>Digital Diary</h3>
              <p>Write about your day, your thoughts, and every little feeling.</p>
              <button>Start Writing ›</button>
            </div>
          </div>

          <div className="feature-card blue-card">
            <div className="card-top">
              <div className="card-dots">
                <span></span>
                <span></span>
              </div>
              <button>×</button>
            </div>

            <div className="card-body">
              <div className="feature-icon-wrap">
                <img src={capsuleIcon} alt="Time Capsules" className="feature-icon" />
              </div>
              <h3>Time Capsules</h3>
              <p>Create letters to your future selves and open them when the time is right.</p>
              <button>Create Capsule ›</button>
            </div>
          </div>

          <div className="feature-card pink-card" id="story">
            <div className="card-top">
              <div className="card-dots">
                <span></span>
                <span></span>
              </div>
              <button>×</button>
            </div>

            <div className="card-body">
              <div className="feature-icon-wrap">
                <img src={storyIcon} alt="Our Story" className="feature-icon" />
              </div>
              <h3>Our Story</h3>
              <p>A shared space just for us. Our journey, our way, our forever.</p>
              <button>Explore Story ›</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;