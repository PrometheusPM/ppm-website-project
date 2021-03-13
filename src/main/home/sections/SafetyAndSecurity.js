import FlexGrid from "../../../common/FlexGrid";
import Title from "../../../common/Title";
import { securitySystems } from "../../../data";
export default function () {
  return (
    <>
      <FlexGrid
        title="Safety and Security"
        items={Object.values(securitySystems()).map((system) => system.title)}
      />
    </>
  );
}
