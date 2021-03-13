import styled from "styled-components";

const Style = styled.div`
  background-color: purple;
`;
export default function ({ heading, icon, text }) {
  return (
    <Style>
      <img src={icon} />
      <h4>{heading}</h4>
      <p>{text}</p>
    </Style>
  );
}
