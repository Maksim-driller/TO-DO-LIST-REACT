import React from "react";
import ReactDOM from "react-dom/client"; 
import { BrowserRouter } from "react-router-dom"; // Добавлено для маршрутизации
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Создаем root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
