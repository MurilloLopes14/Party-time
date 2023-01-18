import styled from "styled-components";

export const FormStyle = styled.section`
  h2,
  p {
    text-align: center;
    margin-bottom: 1rem;
  }

  form {
    background-color: #acacac;
    border: ${({ theme }) => theme.border};
    max-width: 600px;
    border-radius: 12px;
    padding: 2rem;
    margin: 0 auto;
    margin-bottom: 2rem;

    label {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      input,
      textarea {
        padding: 0.5rem 1rem;
        border-radius: 5px;
        border: ${({ theme }) => theme.border};
      }
    }

    .services_container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      padding: 0;

      article {
        max-width: 24%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .service_name {
          font-weight: bold;
        }

        .service_price {
          color: var(--color1);
        }

        .checkbox_container {
          display: flex;
          align-items: center;
          flex-direction: row;
          gap: 0.5rem;

          p {
            color: var(--color1);
            font-size: 0.7rem;
            margin: 0;
          }
        }
      }
    }

    .btn {
      border: ${({ theme }) => theme.border};
      max-width: 150px;
      margin: 0 auto;
      font-size: 1.2rem;
    }
  }
`;
