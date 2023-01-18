//*Style
import { HomeStyle } from "./HomeStyle";

//* Hooks
import React, { useState, useEffect } from "react";

//* Components
import partyFetch from "../../axios/config";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";

export const Home = () => {
  const [parties, setParties] = useState("");

  //* Load Parties
  useEffect(() => {
    const loadParties = async () => {
      const res = await partyFetch.get("/parties");

      const data = res.data.parties;

      setParties(data);
    };

    loadParties();
  }, []);

  if (!parties) return <Loader />;

  return (
    <HomeStyle>
      <h1>Suas Festas</h1>

      <div className="parties_container">
        {parties.length === 0 && <p>Não há festas aqui! :(</p>}
        {parties &&
          parties.map((party) => (
            <article key={party._id}>
              <img src={party.image} alt={party._id} />
              <h3>{party.title}</h3>
              <Link to={`/party/${party._id}`} className="btn_secondary">
                Detalhes
              </Link>
            </article>
          ))}
      </div>
    </HomeStyle>
  );
};
