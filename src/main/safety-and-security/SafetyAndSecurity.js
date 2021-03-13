import styled from "styled-components";
import { securitySystems } from "../../data";
import Main from "../../common/Main";
import FlexGrid from "../../common/FlexGrid";
import InfoBox from "../../common/InfoBox";

const Style = styled(Main)`
  height: ${(props) => props.theme.main.height};
`;

export default function () {
  return (
    <Style>
      <FlexGrid
        title="Safety and Security"
        items={securitySystems().map((system) => (
          <InfoBox heading={system.title} text={system.text} />
        ))}
      />
    </Style>
  );
}
