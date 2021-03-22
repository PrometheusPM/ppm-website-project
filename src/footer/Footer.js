import styled from "styled-components";
import { mainsKey } from "../data";
import Email from "../common/Email";

const Style = styled.footer`
  position: relative;
  top: ${(props) => props.theme.header.height};
  display: flex;
  flex-direction: ${(props) => props.theme.footer.flexDirection};
  justify-content: space-evenly;
  z-index: ${(props) => props.theme.footer.zIndex};
  background-image: url("background-images/header-background.jpg");
  background-size: 100% 150%;
  box-shadow: 0 0 8px black;
  .contact-info {
    text-align: center;
    max-width: 50%;
    .social-media {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 1rem;
      .social-media-icon {
        width: 32px;
      }
    }
    .non-social-media {
      padding: 1rem;
    }
  }
  .quick-links {
    .quick-link {
      display: block;
      padding: 0.5rem;
      text-decoration: none;
    }
  }
`;
//icons and email
export default function () {
  return (
    <Style>
      <div className="quick-links ">
        {Object.values(mainsKey()).map((main, i) =>
          i > 0 ? (
            <a className="quick-link whitesmoke-heading" href={main.path}>
              {main.title}
            </a>
          ) : null
        )}
      </div>
      <div className="contact-info">
        <div className="social-media whitesmoke-heading">
          <img src="icons/fb-icon.png" className="social-media-icon" />
          <img src="icons/insta-icon.png" className="social-media-icon" />
          <img src="icons/linkedin-icon.png" className="social-media-icon" />
        </div>
        <div className="whitesmoke-heading non-social-media">
          Email:
          <a
            href="mailto:prometheusPPM@outlook.com"
            className="whitesmoke-heading "
          >
            {" "}
            PrometheusPPM@outlook.com
          </a>
        </div>
        <div className="whitesmoke-heading non-social-media">
          Phone:
          <a href="tel:0000000000"> (XXX)XXX-XXXX</a>
        </div>
      </div>
    </Style>
  );
}
