import FlexGrid from "../../../common/FlexGrid";
import Title from "../../../common/Title";
import { pricingModules } from "../../../data";
export default function () {
  return (
    <>
      <FlexGrid
        title="Pricing"
        items={pricingModules().map((module) => module.title)}
      />
    </>
  );
}
