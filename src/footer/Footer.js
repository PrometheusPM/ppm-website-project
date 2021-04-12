import styled from "styled-components";
import { mainsKey } from "../data";
import Email from "../common/Email";

const Style = styled.footer`
  position: relative;
  top: ${(props) => props.theme.header.height};
  display: flex;
  flex-direction: ${(props) => props.theme.footer.flexDirection};
  justify-content: space-evenly;
  align-items: center;
  z-index: ${(props) => props.theme.footer.zIndex};
  background-image: url("background-images/header-background.jpg");
  background-size: 100% 150%;
  box-shadow: 0 0 8px black;

  .contact-info {
    text-align: center;
    max-width: 100%;
    .social-media {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 1rem;
      .social-media-icon {
        display: inline-block;
        width: 32px;
        img {
          width: 100%;
        }
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
  .footer-logo {
    padding: 1rem;
    width: ${(props) => props.theme.footer.logoWidth};
  }
`;
//icons and email
export default function () {
  return (
    <Style>
      <div className="footer-logo">
        <img src="icons/footer-logo.png" width="100%" />
      </div>
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
          <a
            href="https://www.facebook.com/Prometheus-Property-Management-112117210975183"
            className="social-media-icon"
          >
            <img src="icons/fb-icon.png" />
          </a>
          <a
            href="https://www.instagram.com/prometheus_ppm/"
            className="social-media-icon"
          >
            <img src="icons/insta-icon.png" className="social-media-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/72637985/admin/"
            className="social-media-icon"
          >
            <img src="icons/linkedin-icon.png" className="social-media-icon" />
          </a>
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
      </div>
    </Style>
  );
}
