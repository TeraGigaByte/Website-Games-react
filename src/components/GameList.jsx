import { useEffect, useState } from "react";
import { fetchGames } from "../services/api";

function GameList() {
  const [games, setGames] = useState([]); // Храним список игр
  const [search, setSearch] = useState(""); // Храним поисковый запрос

  //Загружаем игры при запуске
  useEffect(() => {
    fetchGames().then(setGames);
  }, []);

  //Функция поиска
  const handleSearch = (event) => {
    event.preventDefault();
    fetchGames(search).then(setGames);
  };

  //Форма поиска
  return (
    <div className="container">
      <h1>Список игр 🎮</h1>

      {/* Форма для поиска */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Введите название игры..."
        />
        <button type="submit">🔍 Искать</button>
      </form>

      {/* Вывод списка игр */}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h3>{game.name}</h3>
            <img src={game.background_image} alt={game.name} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
