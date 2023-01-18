//* Styles
import { FormStyle } from "./FormStyle";

//* Hooks
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "../../hooks/useToast";

//* Components
import partyFetch from "../../axios/config";
import { Loader } from "../../components/Loader/Loader";

export const EditParty = () => {
  const [party, setParty] = useState(null);
  const [services, setServices] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const updateParty = async (e) => {
    e.preventDefault();

    try {
      const res = await partyFetch.put(`/parties/${party._id}`, party);

      if (res.status === 200) {
        navigate(`/party/${id}`);
        useToast(res.data.msg);
      }
    } catch (error) {
      useToast(error.response.data.msg, "error");
    }
  };

  //* Add or remove services
  const handleServices = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    const filteredServices = services.filter((s) => s._id === value);

    let partyServices = party.services;

    if (checked) {
      partyServices = [...partyServices, filteredServices[0]];
    } else {
      (partyServices) => partyServices.filter((s) => s._id !== value);
    }

    setParty({ ...party, services: partyServices });
  };

  //* Load Parties & Services
  useEffect(() => {
    const loadServices = async () => {
      const res = await partyFetch.get("/services");

      setServices(res.data);

      loadParty();
    };

    const loadParty = async () => {
      const res = await partyFetch.get(`/parties/${id}`);

      const data = res.data.party;

      setParty(data);
    };

    loadServices();
  }, []);

  if (!party) return <Loader />;
  return (
    <FormStyle>
      <h2>Editando: {partyFetch.title}</h2>
      <p>Ajuste as informações da sua festa.</p>
      <form onSubmit={(e) => updateParty(e)}>
        <label>
          <span>Nome da festa:</span>
          <input
            type="text"
            placeholder="Seja criativo . . ."
            required
            onChange={(e) => setParty({ ...party, title: e.target.value })}
            value={party.title}
          />
        </label>
        <label>
          <span>Anfitrião:</span>
          <input
            type="text"
            placeholder="Quem está dando a festa?"
            required
            onChange={(e) => setParty({ ...party, author: e.target.value })}
            value={party.author}
          />
        </label>
        <label>
          <span>Descrição:</span>
          <textarea
            placeholder="Conte mais sobre a festa . . ."
            required
            onChange={(e) =>
              setParty({ ...party, description: e.target.value })
            }
            value={party.description}
          ></textarea>
        </label>
        <label>
          <span>Orçamento:</span>
          <input
            type="number"
            placeholder="Quanto você pretende investir?"
            required
            onChange={(e) => setParty({ ...party, budget: e.target.value })}
            value={party.budget}
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            placeholder="Insira a URL de um imagem"
            required
            onChange={(e) => setParty({ ...party, image: e.target.value })}
            value={party.image}
          />
        </label>
        <div>
          <h2>Escolha o s serviços:</h2>
          <div className="services_container">
            {services.length === 0 && <Loader />}
            {services.length > 0 &&
              services.map((service) => (
                <article key={service._id}>
                  <img src={service.image} alt={service.name} />
                  <p className="service_name">{service.name}</p>
                  <p className="service_price">R$:{service.price}</p>
                  <div className="checkbox_container">
                    <input
                      type="checkbox"
                      value={service._id}
                      onChange={(e) => handleServices(e)}
                      checked={
                        party.services.find(
                          (partyService) => partyService._id === service._id
                        ) || ""
                      }
                    />
                    <p>Marque para solicitar </p>
                  </div>
                </article>
              ))}
          </div>
        </div>
        <input type="submit" value="Criar Festa" className="btn" />
      </form>
    </FormStyle>
  );
};
