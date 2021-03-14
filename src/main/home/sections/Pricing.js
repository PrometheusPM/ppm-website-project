import FlexGrid from "../../../common/FlexGrid";
import Heading from "../../../common/Heading";
import { pricingModules } from "../../../data";
export default function () {
  return (
    <>
      <FlexGrid
        title="Pricing"
        items={pricingModules().map((module) => (
          <Heading heading={module.title} />
        ))}
      />
    </>
  );
}
