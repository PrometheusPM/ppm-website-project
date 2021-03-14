import { useContext } from "react";
import styled from "styled-components";
import Title from "../common/Title";
import Context from "../Context";

const Style = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: ${(props) => props.theme.main.height};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export default function ({
  title,
  padding = 0,
  item,
  items,
  cols = 4,
  mobileCols = 1,
  backgroundImage,
}) {
  const context = useContext(Context);
  cols = context.mobile ? mobileCols : cols;
  const rows = [[]];
  var counter = 0;
  if (items) {
    items.forEach((item) => {
      if (counter === cols) {
        counter = 0;
        rows.push([]);
      }
      rows[rows.length - 1].push(item);
      counter++;
    });
  }
  return (
    <Style style={{ backgroundImage: `url(${backgroundImage})` }}>
      {title ? <Title title={title} padding={padding} /> : null}
      {items ? (
        rows.map((row) => (
          <section className="row">
            {row.map((col) => (
              <div style={{ width: `calc((90%/${cols}))` }}> {col} </div>
            ))}
          </section>
        ))
      ) : (
        <section className="row">{item}</section>
      )}
    </Style>
  );
}
