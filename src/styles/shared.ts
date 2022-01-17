import styled from "@emotion/styled";
import Dialog from "@reach/dialog";
import { Link } from "react-router-dom";
import {
  primary,
  primaryHover,
  primaryLighter,
  secondary,
  secondaryLight,
  success,
  successLight,
  text,
  textInvert,
} from "./colors";

export const ActionButton = styled.button`
  height: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  display: grid;
  place-items: center;
  border: none;
  & > svg {
    height: 32px;
    width: auto;
    fill: ${textInvert};
  }
`;

export const SuccessActionButton = styled(ActionButton)`
  background: linear-gradient(150deg, ${success}, ${successLight});

  &:hover {
    background: linear-gradient(230deg, ${success}, ${successLight});
  }
`;

export const SecondaryActionButton = styled(ActionButton)`
  & > svg {
    fill: ${text};
  }
  background: linear-gradient(150deg, ${secondary}, ${secondaryLight});

  &:hover {
    background: linear-gradient(230deg, ${secondary}, ${secondaryLight});
  }
`;

export const ActionLink = styled(Link)`
  height: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  display: grid;
  place-items: center;
  border: none;
  & > svg {
    height: 32px;
    width: auto;
    fill: ${textInvert};
  }
`;

export const IconButton = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  & > svg {
    fill: ${primary};
    width: auto;
    &:hover {
      fill: ${primaryHover};
    }
  }
`;

export const IconLink = styled(Link)`
  border: none;
  padding: 0;
  background: transparent;
  & > svg {
    fill: ${primary};
    width: auto;
    &:hover {
      fill: ${primaryHover};
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const PageContainer = styled.section`
  min-height: 100vh;
  padding: 32px;
  position: relative;
`;

export const PageHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;
  color: ${primaryLighter};
`;

export const DialogHeader = styled.header`
  margin-bottom: 32px;
`;

export const DialogTitle = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 1px;
  color: ${primaryLighter};
`;

export const CollectionCards = styled.section`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin-bottom: 32px;
`;

export const CustomDialog = styled(Dialog)`
  border-radius: 10px;
  padding: 32px;
  width: 80%;
`;

export const DialogActions = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;
