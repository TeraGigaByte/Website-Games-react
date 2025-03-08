function GameCard({ game, onFavoriteToggle, isFavorite }) {
  // Проверяем, есть ли дата релиза. Если нет — выводим 'N/A'.
  const releaseYear = game.released
    ? new Date(game.released).getFullYear()
    : "N/A";

  return (
    <div
      className="game-card"
      style={{ backgroundImage: `url(${game.background_image})` }}
    >
      <div className="game-card-overlay">
        <h3>{game.name}</h3>
        <p className="release-year">{releaseYear}</p>

        <button
          onClick={() => onFavoriteToggle(game)}
          className="favorite-button"
          aria-label="Toggle Favorite"
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
}

export default GameCard;
