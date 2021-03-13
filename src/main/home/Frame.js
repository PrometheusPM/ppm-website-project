import { useContext, useRef } from "react";
import styled from "styled-components";
import Context from "../../Context";

const Style = styled.article`
  position: relative;
  height: ${(props) => props.theme.main.height};

  .corner {
    position: absolute;
    height: 5%;
    width: 5%;
  }
  .tl {
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  }
  .tr {
    clip-path: polygon(100% 0%, 0% 0%, 100% 100%);
  }
  .br {
    clip-path: polygon(100% 100%, 0% 100%, 100% 0%);
  }
  .bl {
    clip-path: polygon(0% 100%, 100% 100%, 0% 0%);
  }
`;
const SCROLL_MULTIPLIER = 1;
const PERCENTAGE_MIN = 10;
export default function ({ children }) {
  const context = useContext(Context);
  const ref = useRef();
  document.addEventListener("scroll", function (e) {
    const scrollTop = e.target.scrollingElement.scrollTop;
    if (ref.current) {
      const top = ref.current.offsetTop - scrollTop;
      var percentOffset = Math.round(
        Math.abs((top * 100) / context.mainHeight)
      );
      percentOffset =
        percentOffset < 100
          ? percentOffset > PERCENTAGE_MIN
            ? percentOffset
            : PERCENTAGE_MIN
          : 100;

      Object.values(ref.current.children).forEach((corner, i) => {
        if (i < 4) {
          corner.style.height = percentOffset + "%";
          corner.style.width = percentOffset + "%";
        }
      });
    }
  });
  return (
    <Style ref={ref}>
      <div className="translucent-grey corner top left tl" />
      <div className="translucent-grey corner top right tr" />
      <div className="translucent-grey corner bottom right br" />
      <div className="translucent-grey corner bottom left bl" />
      {children}
    </Style>
  );
}
