import styled from "styled-components";
import { servicesKey } from "../../data";

const Style = styled.section`
  position: fixed;
  z-index: ${(props) => props.theme.ourServices.serviceNavZIndex};
  height: ${(props) => props.theme.main.height};
  width: ${(props) => props.theme.ourServices.serviceNavWidth};
  background-color: red;
`;

export default function () {
  return (
    <Style>
      {Object.values(servicesKey()).map((service) => (
        <div>
          <a href={service.href}>{service.title}</a>
        </div>
      ))}
    </Style>
  );
}
