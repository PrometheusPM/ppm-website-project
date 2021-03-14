import Frame from "./Frame";
import GuestReviews from "./GuestReviews";
import { homeSections } from "../../data";
import sectionComponents from "./sections";
import styled from "styled-components";
import Main from "../../common/Main";

const Style = styled(Main)``;
export default function () {
  return (
    <Style>
      {homeSections().map((homeSection, i) => {
        const Component = sectionComponents[i];
        return (
          <>
            <Frame backgroundImage={homeSection.backgroundImage}>
              <Component />
            </Frame>
            {i === homeSections().length - 1 ? null : (
              <GuestReviews review={"heeeeeeeeeeeeeeeeeeey!"} />
            )}
          </>
        );
      })}
    </Style>
  );
}
