import React from "react";
import styled from "@emotion/styled";
import { CloseIcon } from "../../assets/icons";
import {
  Actions,
  IconButton,
  PageHeaderContainer,
  PageTitle,
} from "../../styles/shared";

const Action = styled(IconButton)`
  & > svg {
    height: 28px;
  }
`;

const Header = () => {
  return (
    <PageHeaderContainer>
      <PageTitle>search</PageTitle>
      <Actions>
        <Action>
          <CloseIcon />
        </Action>
      </Actions>
    </PageHeaderContainer>
  );
};

export default Header;
