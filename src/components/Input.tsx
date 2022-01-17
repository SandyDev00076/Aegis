import styled from "@emotion/styled";
import { primary, primaryLighter } from "styles/colors";

const Input = styled.input`
  padding: 8px 0px;
  font-size: 1.1rem;
  border: none;
  width: 100%;
  border-bottom: 2px solid ${primaryLighter};
  &:focus {
    border-bottom-color: ${primary};
  }
`;

export default Input;
