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
      {homeSections().map((item, i) => {
        const Component = sectionComponents[i];
        return (
          <>
            <Frame>
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
