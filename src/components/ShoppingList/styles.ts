import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1rem;

  & > li + li {
    margin-top: 1rem;
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  transition: all 0.25s ease;
`;

export const StyledInput = styled.input`
  background: rgba(128, 128, 128, 0.05);
  border: 1px solid rgba(128, 128, 128, 0.25);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  width: 100%;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
    border-color: rgba(64, 128, 64, 0.5);
    background: rgba(64, 128, 64, 0.05);
    color: rgba(32, 64, 32, 0.75);
  }
`;

export const StyledButton = styled.button`
  background: black;
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
