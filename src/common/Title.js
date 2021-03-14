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
    padding: 0.25rem;
  }
  .title {
    color: transparent;
    font-size: 2rem;
  }
  .gold {
    position: relative;
    background-image: url("background-images/gold-gradient-text.jpg");
    background-size: 100% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .shadow {
    position: absolute;
    color: transparent;
    text-shadow: 0 0 1px black;
  }
`;

export default function ({ title, padding = 0 }) {
  return (
    <Style style={{ padding: padding + "rem" }}>
      <div className="outer frosted-glass">
        <div className="inner frosted-glass-black">
          <div className="title shadow">{title}</div>
          <div className="title gold">{title}</div>
        </div>
      </div>
    </Style>
  );
}
