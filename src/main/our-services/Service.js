import { useRef } from "react";
import styled from "styled-components";
import InfoIconBox from "../../common/InfoIconBox";
import FlexGrid from "../../common/FlexGrid";
const Style = styled.section`
  position: relative;
  height: ${(props) => props.theme.main.height};
  width: ${(props) => props.theme.ourServices.serviceWidth};
  margin-left: ${(props) => props.theme.ourServices.serviceNavWidth};
  padding-top: ${(props) => props.theme.header.height};
  background-color: lightblue;
  :nth-child(odd) {
    background-color: darkblue;
  }
`;

export default function ({ id, title, blurb, icon }) {
  const ref = useRef();
  document.addEventListener("scroll", function (e) {
    const scrollTop = e.target.scrollingElement.scrollTop;
    if (ref.current) {
      var top = Math.abs(ref.current.offsetTop - scrollTop);
      top -= 128;
      top = top < 0 ? 0 : top;
      ref.current.style.right = Math.pow(top / 2, 1.5) + "px";
    }
  });
  console.log(blurb);
  return (
    <Style ref={ref} id={id}>
      <FlexGrid
        item={<InfoIconBox heading={title} text={blurb} icon={icon} />}
      />
    </Style>
  );
}
