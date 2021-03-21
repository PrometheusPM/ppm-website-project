import styled from "styled-components";
import { pricingModules } from "../../data";
import Main from "../../common/Main";
import FlexGrid from "../../common/FlexGrid";
import InfoBox from "../../common/InfoBox";
import FrequentlyAskedQuestion from "../frequently-asked-questions/FrequentlyAskedQuestion";
import { useContext } from "react";
import Context from "../../Context";
const Style = styled(Main)`
  min-height: ${(props) => props.theme.main.height};
`;
export default function ({ backgroundImg }) {
  const context = useContext(Context);
  return (
    <Style>
      <FlexGrid
        title="Pricing"
        items={pricingModules().map((pricing) =>
          context.mobile ? (
            <FrequentlyAskedQuestion
              question={pricing.title}
              answer={pricing.text}
              answerHeight="225px"
            />
          ) : (
            <InfoBox
              heading={pricing.title}
              text={<ul>{pricing.text.join(" ")}</ul>}
            />
          )
        )}
        cols={3}
        backgroundImage={backgroundImg}
      />
    </Style>
  );
}
