import styled from "styled-components";

export default styled.main`
  position: relative;
  min-height: ${(props) => props.theme.main.height};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;
