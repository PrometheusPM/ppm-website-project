import styled from "styled-components";
import Email from "../common/Email";
import Heading from "../common/Heading";

const Style = styled.footer`
  position: relative;

  display: flex;
  flex-direction: ${(props) => props.theme.footer.flexDirection};
  justify-content: space-evenly;
  z-index: ${(props) => props.theme.footer.zIndex};

  background-color: darkgrey;
  box-shadow: 0 0 8px black;
  .footer-email {
  }
  .social-media-icons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    .social-media-icon {
      max-width: 64px;
    }
  }
`;
//icons and email
export default function () {
  return (
    <Style>
      <div className="social-media-icons">
        <img src="icons/fb-icon.png" className="social-media-icon" />
        <img src="icons/insta-icon.png" className="social-media-icon" />
        <img src="icons/linkedin-icon.png" className="social-media-icon" />
      </div>
      <div className="footer-email">
        <h3 className="whitesmoke-heading">Send us an email</h3>
        <Email cols={100} rows={5} />
      </div>
    </Style>
  );
}
