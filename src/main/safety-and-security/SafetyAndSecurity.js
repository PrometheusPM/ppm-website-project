import styled from "styled-components";
import { securitySystems } from "../../data";
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
        title="Safety and Security"
        items={securitySystems().map((system) =>
          context.mobile ? (
            <FrequentlyAskedQuestion
              question={system.title}
              answer={system.text}
            />
          ) : (
            <InfoBox heading={system.title} text={<ul>{system.text}</ul>} />
          )
        )}
        backgroundImage={backgroundImg}
      />
    </Style>
  );
}
