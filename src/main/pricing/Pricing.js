import styled from "styled-components";
import { pricingModules } from "../../data";
import Main from "../../common/Main";
import FlexGrid from "../../common/FlexGrid";
import InfoBox from "../../common/InfoBox";
const Style = styled(Main)`
  min-height: ${(props) => props.theme.main.height};
`;

export default function () {
  return (
    <Style>
      <FlexGrid
        title="Pricing"
        items={pricingModules().map((pricing) => (
          <InfoBox heading={pricing.title} text={pricing.text} />
        ))}
        cols={3}
      />
    </Style>
  );
}
