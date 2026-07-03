import './App.css';

function App() {
  const memories = [
    {
      id: 1,
      title: 'First Memory',
      date: 'July 2026',
      mood: 'Soft chaos',
      text: 'A tiny saved moment from our little internet world.',
      emoji: '📸',
    },
    {
      id: 2,
      title: 'Future Plan',
      date: 'Someday',
      mood: 'Dreamy',
      text: 'Trips, goals, promises, and future nonsense live here.',
      emoji: '🌙',
    },
    {
      id: 3,
      title: 'Tiny Moment',
      date: 'Today',
      mood: 'Warm',
      text: 'Small memories deserve a dramatic archive too.',
      emoji: '✨',
    },
  ];

  const diaryPosts = [
    {
      id: 1,
      mood: 'Cloudy',
      text: 'Today feels heavy, but this capsule keeps the soft things safe.',
    },
    {
      id: 2,
      mood: 'Happy',
      text: 'One day we will look back at this and laugh at everything.',
    },
  ];

  const capsules = [
    {
      id: 1,
      title: 'Open When You Miss Me',
      openDate: '2027',
      status: 'LOCKED',
    },
    {
      id: 2,
      title: 'Graduation Letter',
      openDate: 'Future',
      status: 'LOCKED',
    },
  ];

  return (
    <div className="app">
      <div className="background-stickers">
        <span>✦</span>
        <span>♡</span>
        <span>☁</span>
        <span>✿</span>
        <span>★</span>
        <span>✉</span>
      </div>

      <nav className="navbar">
        <div className="logo">
          <span className="logo-face">☺</span>
          <h2>Digital Capsule</h2>
        </div>

        <div className="nav-links">
          <a href="#add-memory">add memory</a>
          <a href="#memories">memories</a>
          <a href="#diary">diary</a>
          <a href="#capsules">capsules</a>
        </div>
      </nav>

      <section className="hero">
        <div className="retro-window hero-window">
          <div className="window-bar">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>digital-capsule.exe</p>
            <button className="fake-close">x</button>
          </div>

          <div className="hero-content">
            <p className="mini-label">private bestie archive</p>

            <h1>Digital Capsule</h1>

            <p className="hero-text">
              A private retro diary and time capsule for memories, moods,
              photos, videos, future letters, and tiny dramatic feelings.
            </p>

            <div className="search-box">
              <span>🔍</span>
              <p>searching for soft memories...</p>
            </div>

            <div className="hero-buttons">
              <button>ENTER</button>
              <a href="#add-memory" className="button-link secondary-button">
                NEW MEMORY
              </a>
            </div>
          </div>
        </div>

        <div className="floating-card card-one">
          <p>NEW MESSAGE</p>
          <h3>Have a nice day!</h3>
          <button>OK</button>
        </div>

        <div className="floating-card card-two">
          <p>STATUS</p>
          <h3>happiness loading...</h3>
          <div className="loading-bar">
            <div></div>
          </div>
        </div>
      </section>

      <section className="section" id="add-memory">
        <div className="section-header retro-window">
          <div className="window-bar">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>new-memory-form</p>
            <button className="fake-close">x</button>
          </div>

          <div className="section-inner">
            <p className="mini-label">create memory</p>
            <h2>Add a New Memory</h2>
            <p>Save a photo, mood, date, and tiny story inside the capsule.</p>
          </div>
        </div>

        <form className="memory-form">
          <label>
            Memory Title
            <input type="text" placeholder="Example: Rainy day chaos" />
          </label>

          <label>
            Memory Date
            <input type="date" />
          </label>

          <label>
            Mood
            <select>
              <option>Happy</option>
              <option>Cloudy</option>
              <option>Soft chaos</option>
              <option>Dreamy</option>
              <option>Dramatic</option>
            </select>
          </label>

          <label>
            Upload Photo or Video
            <input type="file" />
          </label>

          <label className="full-width">
            Caption
            <textarea placeholder="Write the tiny story behind this memory..."></textarea>
          </label>

          <button type="button">SAVE MEMORY</button>
        </form>
      </section>

      <section className="section" id="memories">
        <div className="section-header retro-window">
          <div className="window-bar">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>memory-gallery</p>
            <button className="fake-close">x</button>
          </div>

          <div className="section-inner">
            <p className="mini-label">memory gallery</p>
            <h2>Saved Moments</h2>
            <p>Photos, videos, moods, and little stories will live here.</p>
          </div>
        </div>

        <div className="grid">
          {memories.map((memory) => (
            <div className="memory-card retro-card" key={memory.id}>
              <div className="memory-icon">{memory.emoji}</div>
              <p className="memory-date">{memory.date}</p>
              <h3>{memory.title}</h3>
              <p>{memory.text}</p>
              <span>{memory.mood}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="diary">
        <div className="section-header retro-window">
          <div className="window-bar">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>digital-diary</p>
            <button className="fake-close">x</button>
          </div>

          <div className="section-inner">
            <p className="mini-label">digital diary</p>
            <h2>Today’s Feelings</h2>
            <p>Short diary posts, like private tweets for your little universe.</p>
          </div>
        </div>

        <div className="diary-list">
          {diaryPosts.map((post) => (
            <div className="diary-card retro-card" key={post.id}>
              <p className="mood">Mood: {post.mood}</p>
              <p>{post.text}</p>
              <button className="tiny-button">send hug</button>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="capsules">
        <div className="section-header retro-window">
          <div className="window-bar">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>time-capsules</p>
            <button className="fake-close">x</button>
          </div>

          <div className="section-inner">
            <p className="mini-label">time capsules</p>
            <h2>Letters for Later</h2>
            <p>Locked notes for future days, birthdays, sad days, and big dreams.</p>
          </div>
        </div>

        <div className="grid">
          {capsules.map((capsule) => (
            <div className="capsule-card retro-card" key={capsule.id}>
              <div className="lock">🔒</div>
              <h3>{capsule.title}</h3>
              <p>Opens: {capsule.openDate}</p>
              <span>{capsule.status}</span>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>made for memories that deserve a soft place to stay ✿</p>
      </footer>
    </div>
  );
}

export default App;