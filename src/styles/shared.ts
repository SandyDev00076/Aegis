import styled from "@emotion/styled";
import { Colors } from "./colors";

export const IconButton = styled.button`
    border: none;
    padding: none;
    background: transparent;
    & > svg {
    fill: ${Colors.primary};
    width: auto;
    &:hover {
        fill: ${Colors.primaryHover};
    }
    }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;