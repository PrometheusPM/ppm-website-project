import FlexGrid from "../../../common/FlexGrid";
import Heading from "../../../common/Heading";
import { securitySystems } from "../../../data";
export default function () {
  return (
    <>
      <FlexGrid
        title="Safety and Security"
        items={Object.values(securitySystems()).map((system) => (
          <Heading heading={system.title} />
        ))}
      />
    </>
  );
}
