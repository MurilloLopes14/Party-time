import styled from "styled-components";

export const NavbarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-bottom: 1rem;

  h2 {
    color: var(--color1);
  }

  ul li {
    font-size: 0.9rem;
  }

  button {
    border: ${({ theme }) => theme.border};
    padding: 5px 8px;
    border-radius: 15px;
    background: transparent;
    transition: 0.2s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 3px 1px #000;
    }
  }
`;
