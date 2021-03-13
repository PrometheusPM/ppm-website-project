import styled from "styled-components";
import Main from "../../common/Main";
import Nav from "./Nav";
import Service from "./Service";
import { servicesKey } from "../../data";
import { useContext, useRef } from "react";
import Context from "../../Context";
import Title from "../../common/Title";

const Style = styled(Main)`
  position: relative;

  .service-heading {
    position: absolute;
    top: 0;
    left: ${(props) => props.theme.ourServices.serviceNavWidth};
  }
`;

export default function () {
  const context = useContext(Context);
  const ref = useRef();
  document.addEventListener("scroll", function (e) {
    const scrollTop = e.target.scrollingElement.scrollTop;
    if (ref.current)
      Object.values(ref.current.children).forEach((service) => null);
  });
  return (
    <Style ref={ref}>
      <Nav />
      {Object.values(servicesKey()).map((service) => {
        return <Service {...service} />;
      })}
      <div className="service-heading">
        <Title title="Our Services" />
      </div>
    </Style>
  );
}
