import React from "react";
import styled from "@emotion/styled";
import { DarkModeIcon, MoreIcon, SearchIcon } from "../../assets/icons";
import {
  Actions,
  IconButton,
  IconLink,
  PageHeaderContainer,
  PageTitle,
} from "../../styles/shared";

interface IHeaderProps {
  noSearch?: boolean;
}

const AppName = styled(PageTitle)``;

const Action = styled(IconButton)`
  & > svg {
    height: 28px;
  }
`;

const ActionLink = styled(IconLink)`
  & > svg {
    height: 28px;
  }
`;

const Header = ({ noSearch = false }: IHeaderProps) => {
  return (
    <PageHeaderContainer>
      <AppName>aegis</AppName>
      <Actions>
        {!noSearch && (
          <ActionLink to="/search">
            <SearchIcon />
          </ActionLink>
        )}
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
