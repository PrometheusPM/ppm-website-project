import styled from "styled-components";
import FlexGrid from "../../../common/FlexGrid";

const Style = styled.div`
  opacity: 0;
  animation: fade-in 1s forwards;
  height: inherit;
  @keyframes fade-in {
    100% {
      opacity: 1;
    }
  }
`;

export default function () {
  return (
    <Style>
      <FlexGrid />
    </Style>
  );
}
