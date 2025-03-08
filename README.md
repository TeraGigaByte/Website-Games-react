# Website Games React | Сайт с играми на React

![image](https://github.com/user-attachments/assets/bc5467da-ed56-480c-bdc3-2cd071371cb9)


![image](https://github.com/user-attachments/assets/076668d0-9bef-49fd-885f-76a7c614e892)


Проект на React и Vite, который позволяет просматривать и искать игры через API RAWG. Включает динамическую интеграцию API, маршрутизацию, управление состоянием (localStorage) и кастомную стилизацию в тёмной тематике.

A React and Vite project that allows you to browse and search for games using the RAWG API. Includes dynamic API integration, routing, state management (localStorage), and custom styling in a dark theme.

## 🔥 Функции | Features

- **📋 Динамический список игр | Dynamic Game List**  
  Получение данных об играх через API RAWG и их интерактивное отображение в карточках.  
  Fetching game data from the RAWG API and displaying it in interactive cards.

- **🔍 Поиск по играм | Search Functionality**  
  Возможность поиска игр по названию.  
  Allows users to search for games by name.

- **❤️ Управление избранным | Favorites Management**  
  Добавление и удаление игр из избранного. Избранное сохраняется в `localStorage`.  
  Add or remove games from favorites. Favorites are stored in `localStorage`.

- **🚀 Маршрутизация | Routing**  
  Использует [react-router-dom](https://reactrouter.com/) для двух страниц:  
  Uses [react-router-dom](https://reactrouter.com/) for two pages:

  - **🏠 Главная (Home):** список игр и поиск.  
    **Home:** Displays the list of games and search interface.
  - **⭐ Избранное (Favorites):** сохранённые игры.  
    **Favorites:** Shows games marked as favorites.

- **🎨 Интерактивный UI | Responsive & Interactive UI**  
  Темная тема, эффекты при наведении на карточки  
  Dark theme, hover effects on game cards

---

## ⚙️ Технологии | Technologies

- **React** – UI-библиотека для создания интерфейсов.  
  UI library for building interfaces.
- **Vite** – быстрый инструмент для сборки и разработки.  
  Fast build tool and development server.
- **react-router-dom** – маршрутизация.  
  Client-side routing.
- **RAWG API** – источник данных об играх (требуется API-ключ).  
  Source of game data (requires an API key).
- **CSS** – кастомная стилизация в тёмной теме.  
  Custom styling in a dark theme.

---

## 🚀 Установка | Installation

1. **Склонировать репозиторий | Clone the repository:**

   ```bash
   git clone https://github.com/TeraGigaByte/Website-Games-react.git
   ```

2. **Перейти в папку проекта | Navigate to the project directory:**

   ```bash
   cd Website-Games-react
   ```

3. **Установить зависимости | Install dependencies:**

   ```bash
   npm install
   ```

4. **Настроить API-ключ | Configure your API key:**

   Создайте файл `.env` в корне проекта и добавьте ключ:  
   Create a `.env` file in the project root and add your RAWG API key:

   ```env
   VITE_API_KEY=your_api_key_here
   ```

5. **Запустить проект | Run the project:**

   ```bash
   npm run dev
   ```

---

## 📂 Структура проекта | Project Structure

```
/games-app
 ├── /src
 │    ├── /components
 │    │      ├── GameCard.jsx
 │    │      └── NavBar.jsx
 │    ├── /pages
 │    │      ├── Home.jsx
 │    │      └── Favorites.jsx
 │    ├── /services
 │    │      └── api.js
 │    ├── App.jsx
 │    └── main.jsx
 ├── .env
 ├── .gitignore
 ├── package.json
 └── vite.config.js
```

---

## 🕹️ Использование | Usage

- **🏠 Главная страница | Home Page:**

  - Просмотр списка игр с возможностью поиска.  
    View a dynamic list of games with a search bar.
  - При наведении на карточку появляется заголовок, год выпуска и кнопка-сердечко.  
    Hover over a game card to see its title, release year, and a heart icon.

- **⭐ Страница избранного | Favorites Page:**
  - Просмотр и управление избранными играми.  
    Review and manage your favorite games.
  - Данные сохраняются в `localStorage`, чтобы не терялись при обновлении страницы.  
    Changes are stored locally in your browser.
