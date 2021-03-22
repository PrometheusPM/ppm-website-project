import styled from "styled-components";
import FlexGrid from "../../../common/FlexGrid";
import GoldText from "../../../common/GoldText";
import InfoBox from "../../../common/InfoBox";

const Style = styled.div`
  opacity: 0;
  animation: fade-in 1s forwards;
  height: inherit;
  @keyframes fade-in {
    100% {
      opacity: 1;
    }
  }
  .background {
    padding: 1rem;
    width: 50%;
    font-size: 2rem;
  }
  .test {
    position: absolute;
    top: 0;
    left: 0;
    height: 100px;
    width: 100px;
  }
`;

export default function () {
  return (
    <Style>
      <FlexGrid item={<InfoBox text="dsfsdfds" />} />
    </Style>
  );
}
