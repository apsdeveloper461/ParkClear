import "./../stylesheet/cards.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {

  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch("/home/homePageCards.json").then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    }).then(data => setCardsData(data)).catch(error => {
      console.error("Fetch error:", error);
      setCardsData([]);
    });
  }, []);

  return <section className="cards pad cards__hidden">
    {cardsData.length === 0 && <h1>Error Loading Content...</h1>}
    {cardsData.length > 0 && cardsData.map((card, i) =>
      <Link className="card" key={i} to={`/${card.id}`}>
        <div className="card__image--holder">
            <img src={`/home/${card.img}`} alt={card.heading}
                 className="card__image" />
        </div>
        <div className="card__content">
          <h3 className="card__title">{card.heading}</h3>
          <p className="card__text">
            {card.subtitle}
          </p>
        </div>
      </Link>)}
  </section>;

};

export default Cards;
