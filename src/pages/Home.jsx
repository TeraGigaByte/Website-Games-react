import { useEffect, useState } from "react";
import { fetchGames } from "../services/api";
import GameCard from "../components/GameCard";

function Home() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  // Загружаем игры и избранные игры при монтировании компонента
  useEffect(() => {
    fetchGames().then(setGames);
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Функция поиска
  const handleSearch = (e) => {
    e.preventDefault();
    fetchGames(search).then(setGames);
  };

  // Обработка добавления/удаления из избранного
  const handleFavoriteToggle = (game) => {
    let updatedFavorites;
    // Если игра найдена, создаем новый массив, исключая её.
    if (favorites.some((fav) => fav.id === game.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== game.id);
      // Если игры нет, добавляем её в массив
    } else {
      updatedFavorites = [...favorites, game];
    }
    // Обновляем состояние и помещаем в localstorage
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1>Список игр 🎮</h1>

      {/* Форма поиска */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Введите название игры..."
        />
        <button type="submit">🔍 Искать</button>
      </form>

      {/* Список игр */}
      <div className="game-list">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onFavoriteToggle={handleFavoriteToggle}
            isFavorite={favorites.some((fav) => fav.id === game.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
