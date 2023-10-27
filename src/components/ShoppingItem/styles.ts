import styled from "styled-components";

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: rgba(128, 128, 255, 0.01);
  background-size: 101%;
  border-radius: 0.5rem;
  border: 1px solid rgba(128, 128, 128, 0.1);
  box-shadow: 0 0.5rem 1rem 0 rgba(128, 128, 255, 0.1);

  h4 {
    margin: 0;
  }
`;

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: rgba(255, 32, 64, 0.75);
`;
