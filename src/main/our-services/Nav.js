import styled from "styled-components";
import { servicesKey } from "../../data";
import GoldLink from "./ServiceLink";

const Style = styled.section`
  position: fixed;
  z-index: ${(props) => props.theme.ourServices.serviceNavZIndex};
  left: -${(props) => props.theme.ourServices.serviceNavWidth};
  height: ${(props) => props.theme.main.height};
  width: ${(props) => props.theme.ourServices.serviceNavWidth};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-image: url("background-images/service-nav-background.jpg");
  background-size: 100% auto;
  text-align: center;
  animation: slide-in 0.5s forwards;
  box-shadow: 0px 4px 8px black;
  @keyframes slide-in {
    100% {
      left: 0;
    }
  }
`;

export default function () {
  return (
    <Style>
      {Object.values(servicesKey()).map((service) => (
        <div>
          <GoldLink text={service.title} href={service.href} />
        </div>
      ))}
    </Style>
  );
}
