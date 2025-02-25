function GameCard({ game, onFavoriteToggle, isFavorite }) {
  return (
    <div className="game-card">
      <img src={game.background_image} alt={game.name} width="200" />
      <h3>{game.name}</h3>
      <button onClick={() => onFavoriteToggle(game)}>
        {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
      </button>
    </div>
  );
}

export default GameCard;
