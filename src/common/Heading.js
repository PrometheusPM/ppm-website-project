import styled from "styled-components";

const Style = styled.div`
  box-sizing: border-box;
  position: relative;
  text-align: center;
  .outer {
    display: inline-block;
    padding: 0.5rem;
  }
  .inner {
    box-sizing: border-box;
    padding: 1rem;
    height: ${(props) => props.theme.common.heading.height};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-size: 1.5rem;
    color: whitesmoke;
    font-size: ${(props) => props.theme.font.heading.size};
  }
`;

export default function ({ heading, padding = 0 }) {
  return (
    <Style style={{ padding: padding + "rem" }}>
      <div className="outer frosted-glass">
        <div className="inner frosted-glass-black">
          <div className="title whitesmoke-heading">{heading}</div>
        </div>
      </div>
    </Style>
  );
}
