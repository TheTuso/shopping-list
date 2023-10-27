import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 50%;
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  color: rgba(128, 128, 128, 0.75);
  left: 50%;
  transform: translateX(-50%);

  a {
    color: rgba(64, 128, 196, 0.75);
    transition: all 0.25s ease;

    &:hover {
      color: rgba(64, 128, 196, 1);
    }
  }
`;
