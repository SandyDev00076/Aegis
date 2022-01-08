import styled from "@emotion/styled";
import { Colors } from "../../styles/colors";

export const AddButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 32px;
  height: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${Colors.textInvert};
  display: grid;
  place-items: center;
  border: none;
  background: linear-gradient(
    150deg,
    ${Colors.primary},
    ${Colors.primaryLight}
  );
  & > svg {
    height: 32px;
    width: auto;
    fill: ${Colors.textInvert};
  }

  &:hover {
    background: linear-gradient(
      230deg,
      ${Colors.primary},
      ${Colors.primaryLight}
    );
  }
`;
