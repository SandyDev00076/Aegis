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
  color: ${Colors.primaryLighter};
`;

export const CollectionCards = styled.section`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin-bottom: 32px;
`;