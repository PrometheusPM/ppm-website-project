import FlexGrid from "../../common/FlexGrid";
import Main from "../../common/Main";
import Email from "../../common/Email";
import styled from "styled-components";

const Style = styled(Main)`
  background-image: url("background-images/contact-us-2048.jpg");
  .email {
    width: ${(props) => props.theme.contactUs.emailWidth};
  }
`;

export default function ({ backgroundImage }) {
  return (
    <Style>
      <FlexGrid
        title="Contact Us"
        item={
          <div className="email">
            <Email />
          </div>
        }
        backgroundImage={`url(${backgroundImage})`}
      />
    </Style>
  );
}
