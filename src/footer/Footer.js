import styled from "styled-components";

const Style = styled.footer`
  position: relative;
  z-index: ${(props) => props.theme.header.zIndex};
  height: 50px;
  background-color: orange;
`;

export default function () {
  return <Style></Style>;
}
