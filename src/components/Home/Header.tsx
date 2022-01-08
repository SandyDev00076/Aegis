import React from "react";
import styled from "@emotion/styled";
import { DarkModeIcon, MoreIcon, SearchIcon } from "../../assets/icons";
import {
  Actions,
  IconButton,
  PageHeaderContainer,
  PageTitle,
} from "../../styles/shared";

const AppName = styled(PageTitle)``;

const Action = styled(IconButton)`
  & > svg {
    height: 28px;
  }
`;

const Header = () => {
  return (
    <PageHeaderContainer>
      <AppName>aegis</AppName>
      <Actions>
        <Action>
          <SearchIcon />
        </Action>
        <Action>
          <DarkModeIcon />
        </Action>
        <Action>
          <MoreIcon />
        </Action>
      </Actions>
    </PageHeaderContainer>
  );
};

export default Header;
