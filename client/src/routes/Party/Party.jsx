//* Style
import { PartyStyle } from "./PartyStyle";

//* Hooks
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "../../hooks/useToast";

//* Components
import { Link } from "react-router-dom";
import partyFetch from "../../axios/config";
import { Loader } from "../../components/Loader/Loader";

export const Party = () => {
  const [party, setParty] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  //* Load Party
  useEffect(() => {
    const loadParty = async () => {
      const res = await partyFetch.get(`/parties/${id}`);

      const data = res.data.party;

      setParty(data);
    };
    loadParty();
  }, []);

  //* Delete this party
  const handleDelete = async () => {
    const res = await partyFetch.delete(`/parties/${id}`);

    if (res.status === 200) {
      navigate("/");

      useToast(res.data.msg);
    }
  };

  if (!party) return <Loader />;

  return (
    <PartyStyle>
      <h1>{party.title}</h1>
      <div className="actions">
        <Link className="btn" to={`/party/edit/${id}`}>
          Editar
        </Link>
        <button className="btn_secondary" onClick={handleDelete}>
          Excluir
        </button>
      </div>
      <p>Orçamento R$:{party.budget}</p>
      <h3>Serviços contratados:</h3>
      <div className="services_container">
        {party.services.map((service) => (
          <article key={service._id}>
            <img src={service.image} alt={service._id} />
            <p>{service.name}</p>
          </article>
        ))}
      </div>
    </PartyStyle>
  );
};
