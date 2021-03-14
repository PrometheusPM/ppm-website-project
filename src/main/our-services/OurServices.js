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
  background-size: cover;
  .service-heading {
    position: absolute;
    top: 0;
    left: ${(props) => props.theme.ourServices.serviceNavWidth};
  }
`;

export default function ({ backgroundImg }) {
  const context = useContext(Context);
  const ref = useRef();
  document.addEventListener("scroll", function (e) {
    const scrollTop = e.target.scrollingElement.scrollTop;
    if (ref.current)
      Object.values(ref.current.children).forEach((service) => null);
  });
  return (
    <Style
      ref={ref}
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <Nav />
      {Object.values(servicesKey()).map((service, i) => {
        return <Service {...service} flip={i % 2 === 0} />;
      })}
      <div className="service-heading">
        <Title title="Our Services" />
      </div>
    </Style>
  );
}
