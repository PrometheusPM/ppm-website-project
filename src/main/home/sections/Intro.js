import { useContext } from "react";
import styled from "styled-components";
import FlexGrid from "../../../common/FlexGrid";
import GoldText from "../../../common/GoldText";
import Context from "../../../Context";

const Style = styled.div`
  height: inherit;

  .intro-background {
    text-align: center;
    width: 80%;
    font-size: ${(props) => props.theme.home.introFontSize};
    padding: 3rem;
  }
`;

export default function () {
  const fontSize = useContext(Context).theme.home.introFontSize;
  return (
    <Style>
      <FlexGrid
        item={
          <div className="intro-background frosted-glass-black">
            {[
              "Prometheus is Calgary's premier Airbnb and short-term ",
              "rental management company. Let our team of experienced,",
              "professional managers elevate your rental property to",
              "its highest and best use and maximize your return on investment.",
            ].map((line) => (
              <GoldText fontSize={fontSize}>{line}</GoldText>
            ))}
          </div>
        }
      />
    </Style>
  );
}
