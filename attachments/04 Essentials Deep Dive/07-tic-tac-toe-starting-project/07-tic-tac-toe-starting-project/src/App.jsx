function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              <span className="player-name">player 1</span>
              <span className="player-symbol">X</span>
            </span>
            <button>Edit</button>
          </li>
          <li>
            <span className="player">
              <span className="player-name">player 2</span>
              <span className="player-symbol">O</span>
            </span>
            <button>Edit</button>
          </li>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
