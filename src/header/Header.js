import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainsKey } from "../data";

const Style = styled.header`
  position: sticky;
  z-index: ${(props) => props.theme.header.zIndex};
  top: 0;
  width: 100%;
  height: ${(props) => props.theme.header.height};
  background-color: brown;
`;

export default function () {
  return (
    <Style>
      {Object.values(mainsKey()).map((main) => (
        <Link to={main.path}>{main.title}</Link>
      ))}
    </Style>
  );
}
