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
  .prometheus-logo-title {
    max-height: ${(props) => props.theme.main.height};
    max-width: 100%;
  }
`;

export default function () {
  return (
    <Style>
      <FlexGrid
        item={
          <img
            src="background-images/prometheus-logo-title-512.png"
            className="prometheus-logo-title frosted-glass-black"
          />
        }
      />
    </Style>
  );
}
