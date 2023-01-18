import styled from "styled-components";

export const PartyStyle = styled.section`
  h1,
  h3,
  p {
    text-align: center;
    margin-bottom: 1rem;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .services_container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 2rem;
    gap: 1rem;

    article {
      max-width: 24%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      img {
        height: 200px;
        max-width: 100%;
        object-fit: cover;
      }
    }
  }
`;
