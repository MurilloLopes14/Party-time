import styled from "styled-components";

export const HomeStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .parties_container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 0 2rem;

    p {
      text-align: center;
    }

    article {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      max-width: 380px;
      margin-bottom: 1rem;

      img {
        width: 100%;
      }

      .btn_secondary {
        max-width: 120px;
        text-align: center;
      }
    }
  }
`;
