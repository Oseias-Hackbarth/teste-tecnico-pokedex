import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLinkHome = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.color};
  &:hover {
    color: #0000ff;
  }
`;