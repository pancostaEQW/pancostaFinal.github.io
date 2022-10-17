import React, { FC, useState } from "react";
import { ICard } from "../types";
import CardItem from "./CardItem";

interface CardListProps {
  cards: ICard[];
}

const CardList: FC<CardListProps> = ({ cards }) => {
  let [cardOpen, setCardOpen] = useState(false);

  return (
    <main onClick={() => setCardOpen((cardOpen = !cardOpen))}>
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </main>
  );
};

export default CardList;
