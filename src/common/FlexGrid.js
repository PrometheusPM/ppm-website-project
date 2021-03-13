import styled from "styled-components";
import Title from "../common/Title";

const Style = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: yellow;
  .row {
    background-color: blueviolet;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export default function ({ title, padding = 0, item, items, cols = 4 }) {
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
    <Style>
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
