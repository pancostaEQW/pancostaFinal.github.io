import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { ICard } from "./types";
import CardList from "./components/CardList";
import axios from "axios";
import "./index.css";
import Loader from "./Loader";
import swal from "sweetalert";

function App() {
  //изменение состояния карт по интерфесу
  const [cards, setCards] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCard();
  }, []);

  //получение данных с сервера и состояние лоадера
  async function fetchCard() {
    setIsLoading(true);
    try {
      const response = await axios.get<ICard[]>(
        "https://6075786f0baf7c0017fa64ce.mockapi.io/products"
      );
      setCards(response.data);
    } catch (e) {
      alert(e);
    }
    setIsLoading(false);
    swal("Карточек больше нет.");
  }

  return (
    <div className="wrapper">
      <Header />
      {isLoading ? <Loader /> : <CardList cards={cards} />}
    </div>
  );
}

export default App;
