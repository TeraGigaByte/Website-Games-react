const API_KEY = import.meta.env.VITE_API_KEY; //Введите ваш API: "API_KEY"
const BASE_URL = "https://api.rawg.io/api";

export async function fetchGames(searchQuery = "") {
  try {
    const response = await fetch(
      `${BASE_URL}/games?key=${API_KEY}&search=${searchQuery}`
    );

    //Обработка ошибки response
    if (!response.ok) {
      throw new Error("Ошибка при загрузке данных");
    }

    //Обработка полученных данных
    const data = await response.json();
    return data.results;

    //Обработка ошибки
  } catch (error) {
    console.error("Ошибка API:", error);
    return [];
  }
}
