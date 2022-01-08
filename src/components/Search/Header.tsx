import React from "react";
import styled from "@emotion/styled";
import { CloseIcon } from "../../assets/icons";
import {
  Actions,
  IconButton,
  PageHeaderContainer,
  PageTitle,
} from "../../styles/shared";
import { useNavigate } from "react-router-dom";

const Action = styled(IconButton)`
  & > svg {
    height: 28px;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <PageHeaderContainer>
      <PageTitle>search</PageTitle>
      <Actions>
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
