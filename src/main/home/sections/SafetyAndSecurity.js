import styled from "styled-components";
import FlexGrid from "../../../common/FlexGrid";
import Heading from "../../../common/Heading";
import { securitySystems } from "../../../data";

const Style = styled.div`
  .whitesmoke-heading {
    padding: 2rem;
    width: ${(props) => props.theme.safetyAndSecurity.width};
    font-size: ${(props) => props.theme.home.introFontSize};
  }
`;

export default function () {
  return (
    <Style>
      <FlexGrid
        cols={3}
        title="Safety and Security"
        item={
          <div className="whitesmoke-heading frosted-glass-black">
            The safety and security of your property and our guests is our
            number one concern at Prometheus. Utilizing cutting edge, smart home
            monitoring, smart locks and our team of experienced managers, you
            can rest assured that your property is safe and in good hands
          </div>
        }
      />
    </Style>
  );
}
