import styled from "styled-components";
import FlexGrid from "../../../common/FlexGrid";
import IconText from "../../../common/IconText";
import { servicesKey } from "../../../data";

export default function () {
  return (
    <FlexGrid
      title="Our Services"
      items={Object.values(servicesKey()).map((service) => (
        <IconText text={service.title} src={service.icon} />
      ))}
      mobileCols={3}
    />
  );
}
