import styled from "styled-components";
const Style = styled.div`
  box-sizing: border-box;
  display: inline-block;
  background-color: khaki;
  padding: 1rem;
  .heading {
    padding-bottom: 0.25rem;
  }
`;

export default function ({ heading, text }) {
  return (
    <Style>
      <h4 className="heading">{heading}</h4>
      <p>{Array.isArray(text) ? text.map((line) => line) : text}</p>
    </Style>
  );
}
