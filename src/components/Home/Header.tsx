import React from "react";
import styled from "@emotion/styled";
import { DarkModeIcon, MoreIcon, SearchIcon } from "assets/icons";
import {
  Actions,
  IconButton,
  IconLink,
  PageHeaderContainer,
} from "styles/shared";
import { useAuth0 } from "@auth0/auth0-react";

interface IHeaderProps {
  noSearch?: boolean;
}

const ProfileAvatar = styled.img`
  width: 64px;
  aspect-ratio: 1;
  border-radius: 50%;
`;

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
  const { user } = useAuth0();
  console.log(user);
  return (
    <PageHeaderContainer>
      {user && <ProfileAvatar src={user.picture} />}
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
