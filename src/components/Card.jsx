import "./../stylesheet/cards.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({ search = "",setSearch }) => {
  const [cardsData, setCardsData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    try {
      if (search) {
        const filtered = cardsData.filter((card) => {
          try {
            const headingMatch = card.heading
              ?.toLowerCase()
              .includes(search.toLowerCase());
            const subtitleMatch = card.subtitle
              ?.toLowerCase()
              .includes(search.toLowerCase());
            return headingMatch || subtitleMatch;
          } catch (err) {
            // If card is malformed, skip it
            return false;
          }
        });
        setFilteredCards(filtered);
      } else {
        setFilteredCards(cardsData);
      }
    } catch (error) {
      console.error("Filter error:", error);
      setFilteredCards([]);
    }
  }, [search, cardsData]);

  useEffect(() => {
    fetch("/home/homePageCards.json")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => setCardsData(data))
      .catch((error) => {
        console.error("Fetch error:", error);
        setCardsData([]);
      });
  }, []);

  return (
    <section className='cards pad cards__hidden'>
      {filteredCards.length === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#888', margin: 'auto', paddingTop: '10rem' }}>
          <span style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            {/* Use a search/empty icon from react-icons */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" /></svg>
          </span>
          <span style={{ fontSize: '1.5rem' }}>No results found from search</span>
          <span onClick={()=>{setSearch("")}} className="ancher" style={{fontSize: '1.5rem',fontWeight:700,cursor:"pointer" }}>View All Blogs</span>
        </div>
      )}
      {filteredCards.length > 0 &&
        filteredCards.map((card, i) => (
          <Link
            className='card'
            key={i}
            to={`/${card.id}`}
          >
            <div className='card__image--holder'>
              <img
                src={`/home/${card.img}`}
                alt={card.heading}
                className='card__image'
              />
            </div>
            <div className='card__content'>
              <h3 className='card__title'>{card.heading}</h3>
              <p className='card__text'>{card.subtitle}</p>
            </div>
          </Link>
        ))}
    </section>
  );
};

export default Cards;
