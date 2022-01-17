import React from "react";
import styled from "@emotion/styled";
import { CloseIcon, StarIcon, StarOutlineIcon } from "assets/icons";
import {
  Actions,
  IconButton,
  PageHeaderContainer,
  PageTitle,
} from "styles/shared";
import { useNavigate } from "react-router-dom";
import { Colors } from "styles/colors";

interface IHeaderProps {
  isFavorite: boolean;
  onFavoriteToggle: () => void;
}

const Action = styled(IconButton)`
  & > svg {
    height: 28px;
  }
`;

const FavoriteAction = styled(Action)`
  & > svg {
    fill: ${Colors.favorite};
    &:hover {
      fill: ${Colors.favoriteHover};
    }
  }
`;

const Header = ({ isFavorite, onFavoriteToggle }: IHeaderProps) => {
  const navigate = useNavigate();

  return (
    <PageHeaderContainer>
      <PageTitle>add</PageTitle>
      <Actions>
        <FavoriteAction onClick={onFavoriteToggle}>
          {isFavorite ? <StarIcon /> : <StarOutlineIcon />}
        </FavoriteAction>
        <Action
          onClick={() =>
            navigate("/", {
              replace: true,
            })
          }
        >
          <CloseIcon />
        </Action>
      </Actions>
    </PageHeaderContainer>
  );
};

export default Header;
