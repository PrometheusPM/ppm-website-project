import styled from "styled-components";
import FlexGrid from "../../../common/FlexGrid";
import Heading from "../../../common/Heading";
import { securitySystems } from "../../../data";

const Style = styled.div`
  .whitesmoke-heading {
    padding: 2rem;
    width: 100%;
  }
`;

export default function () {
  return (
    <Style>
      <FlexGrid
        cols={3}
        title="Safety and Security"
        items={[
          ...Object.values(securitySystems()).map((system) => (
            <Heading heading={system.title} />
          )),
          <div className="whitesmoke-heading frosted-glass-black">
            The safety and security of your property and our guests is our
            number one concern at Prometheus. Utilizing cutting edge, smart home
            monitoring, smart locks and our team of experienced managers, you
            can rest assured that your property is safe and in good hands
          </div>,
        ]}
      />
    </Style>
  );
}
