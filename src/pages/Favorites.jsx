import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // При загрузке читаем данные с localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Функция для удаления игры из избранного
  const handleFavoriteToggle = (game) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== game.id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Если массив пуст

  if (favorites.length === 0) {
    return <h2>Избранных игр пока нет</h2>;
  }

  // Страница
  return (
    <div>
      <h1>Избранные игры</h1>
      <div className="game-list">
        {favorites.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onFavoriteToggle={handleFavoriteToggle}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
