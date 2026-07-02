import './App.css';

function App() {
  const memories = [
    {
      id: 1,
      title: 'First Capsule Memory',
      date: 'July 2026',
      mood: 'Soft chaos',
      text: 'A little memory saved for the future.',
      emoji: '📸',
    },
    {
      id: 2,
      title: 'Future Plan',
      date: 'Someday',
      mood: 'Dreamy',
      text: 'A place for trips, goals, and promises.',
      emoji: '🌙',
    },
    {
      id: 3,
      title: 'Tiny Moment',
      date: 'Today',
      mood: 'Warm',
      text: 'Small memories matter too.',
      emoji: '✨',
    },
  ];

  const diaryPosts = [
    {
      id: 1,
      mood: 'Cloudy',
      text: 'Today feels heavy, but this little capsule keeps the soft things safe.',
    },
    {
      id: 2,
      mood: 'Happy',
      text: 'One day we will look back at this and laugh at how dramatic we were.',
    },
  ];

  const capsules = [
    {
      id: 1,
      title: 'Open When You Miss Me',
      openDate: '2027',
      status: 'Locked',
    },
    {
      id: 2,
      title: 'Graduation Letter',
      openDate: 'Future',
      status: 'Locked',
    },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <h2>Digital Capsule</h2>

        <div className="nav-links">
          <a href="#memories">Memories</a>
          <a href="#diary">Diary</a>
          <a href="#capsules">Capsules</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-card">
          <p className="tagline">Private • Whimsical • Yours</p>

          <h1>Digital Capsule</h1>

          <p className="hero-text">
            A private digital diary and time capsule for memories, moods,
            photos, videos, dreams, and future letters.
          </p>

          <div className="hero-buttons">
            <button>Enter Capsule</button>
            <button className="secondary-button">Create Memory</button>
          </div>
        </div>
      </section>

      <section className="section" id="memories">
        <div className="section-header">
          <p className="small-title">Memory Gallery</p>
          <h2>Saved Moments</h2>
          <p>Photos, videos, moods, and little stories will live here.</p>
        </div>

        <div className="grid">
          {memories.map((memory) => (
            <div className="memory-card" key={memory.id}>
              <div className="memory-icon">{memory.emoji}</div>
              <p className="memory-date">{memory.date}</p>
              <h3>{memory.title}</h3>
              <p>{memory.text}</p>
              <span>{memory.mood}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section diary-section" id="diary">
        <div className="section-header">
          <p className="small-title">Digital Diary</p>
          <h2>Today’s Feelings</h2>
          <p>Short diary posts, like private tweets for your little universe.</p>
        </div>

        <div className="diary-list">
          {diaryPosts.map((post) => (
            <div className="diary-card" key={post.id}>
              <p className="mood">Mood: {post.mood}</p>
              <p>{post.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="capsules">
        <div className="section-header">
          <p className="small-title">Time Capsules</p>
          <h2>Letters for Later</h2>
          <p>Locked notes for future days, birthdays, sad days, and big dreams.</p>
        </div>

        <div className="grid">
          {capsules.map((capsule) => (
            <div className="capsule-card" key={capsule.id}>
              <div className="lock">🔒</div>
              <h3>{capsule.title}</h3>
              <p>Opens: {capsule.openDate}</p>
              <span>{capsule.status}</span>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>Made for memories that deserve a soft place to stay.</p>
      </footer>
    </div>
  );
}

export default App;