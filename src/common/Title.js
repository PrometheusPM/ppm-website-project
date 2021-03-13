import styled from "styled-components";

const Style = styled.h1`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  text-align: center;
`;

export default function ({ title, padding = 0 }) {
  return <Style style={{ padding: padding + "rem" }}>{title}</Style>;
}
