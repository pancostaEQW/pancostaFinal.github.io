import React, { FC, useState, useEffect } from "react";
import { ICard } from "../types";
import { AiOutlineHeart } from "react-icons/ai";
import { ImTruck } from "react-icons/im";
import { SiAdguard } from "react-icons/si";
import { TbAntennaBars5 } from "react-icons/tb";


interface CardItemProps {
  card: ICard;
}

const CardItem: React.FC<CardItemProps> = ({ card }) => {
  //изменение состояния при клике
  let [cardOpen, setCardOpen] = useState(false);

  //получение и обработка даты
  let dta = new Date(card.date).toLocaleString()

  return (
    <div
      onClick={() => setCardOpen((cardOpen = !cardOpen))}
      className={`item ${cardOpen && "active"}`}
      style={{ padding: 15 }}
    >
      <img src={"https://source.unsplash.com/random/" + card.id}></img>
      <text>{card.oldPrice} ₽</text>
      <h1>{card.price} ₽</h1>
      <p>{card.title}</p>
      <b style={{left: 5}} >{card.locality}</b>
      <b>{dta}</b>
      <SiAdguard className="add-to-guard"></SiAdguard>
      <ImTruck className="track"></ImTruck>
      <TbAntennaBars5 className="bass"></TbAntennaBars5>
      <AiOutlineHeart className="heart" />
      {cardOpen && (
        <p className='see'>Просмотрено</p>
      )}
    </div>
  );
};

export default CardItem;
