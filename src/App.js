import { useEffect, useState } from "react";

import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import MainLogo from "./components/MainLogo/MainLogo";
import Link from "./components/Link/Link";

import { joinStrings } from "./utils/strings";

import quisLogo from "./images/quis-logo.svg";
import mobileQuisLogo from "./images/quis-logo-mobile.svg";
import partnersLogo from "./images/partners-logo.svg";
import mobilePartnersLogo from "./images/partners-logo-mobile.svg";
import syncLogo from "./images/sync-logo.svg";
import influenceLogo from "./images/influence-logo.svg";
import codingLogo from "./images/coding-logo.svg";
import servicesLogo from "./images/services-logo.svg";
import mobileServicesLogo from "./images/services-logo-mobile.svg";

import "./App.scss";

function App() {
  const stringsArray = Array(15).fill(
    <>
      <div className="content">WE BUY TRAFFIC</div>
      <div className="content-transparent">WE BUY TRAFFIC</div>
    </>
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTitle, setActiveTitle] = useState("title1");

  useEffect(() => {
    const handleEvent = () => {
      for (let i = 1; i < 6; i++) {
        const section = document.getElementById(`section${i}`);
        if (
          section.getBoundingClientRect().top >= 0 &&
          section.getBoundingClientRect().bottom <= window.innerHeight
        ) {
          setActiveTitle(`title${i}`);
        }
      }
    };

    document.addEventListener("mousemove", handleEvent, { passive: true });
    document.addEventListener("keydown", handleEvent, { passive: true });
    document.addEventListener("touchstart", handleEvent, { passive: true });
    document.addEventListener("touchend", handleEvent, { passive: true });
    document.addEventListener("scroll", handleEvent, { passive: true });
    return () => {
      document.removeEventListener("mousemove", handleEvent);
      document.removeEventListener("keydown", handleEvent);
      document.removeEventListener("touchstart", handleEvent);
      document.removeEventListener("touchend", handleEvent);
      document.removeEventListener("scroll", handleEvent);
    };
  }, []);

  return (
    <div className="App">
      <section className="quis" id="section1">
        <header className="header">
          <MainLogo />
          <div
            className={joinStrings([
              "header__button",
              isMenuOpen && "header__button--active",
            ])}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav
            className={joinStrings([
              "header__menu",
              isMenuOpen && "header__menu--active",
            ])}
          >
            <div className="header__menu-links">
              <Link title="Affiliates" />
              <Link title="Advertisers" />
              <Link title="Events" />
              <Link title="Blog" />
            </div>
            <Button title="Sign Up" />
          </nav>
        </header>
        <div className="quis__section">
          <img className="quis__section-image" alt="Logo" src={quisLogo} />
          <img
            className="quis__section-mobile-image"
            alt="Logo"
            src={mobileQuisLogo}
          />
          <div className="quis__section-description">
            <div className="quis__section-title">
              Lorem Ipsum Dolor Sit Amet Consectetur. Mi Cras{" "}
              <div
                id="title1"
                className={joinStrings([
                  "quis__section-title",
                  activeTitle === "title1" && "quis__section-title--active",
                ])}
              >
                Non Non Quis.
              </div>
            </div>
            <p className="quis__section-text">
              Lorem ipsum dolor sit amet consectetur. Faucibus nunc et mattis at
              feugiat sagittis volutpat. At netus diam ipsum cras turpis
              imperdiet diam vel consequat. Ultrices in faucibus sodales sed
              sed. Enim aenean dignissim sed a non mollis. Sed ut arcu enim
              ullamcorper.
            </p>
          </div>
        </div>
        <div className="quis__rows">
          <div className="marquee__yellow">
            <div className="marquee__yellow-row">
              {stringsArray.map((el) =>
                el.props.children.map((item) => {
                  return item;
                })
              )}
            </div>
          </div>
          <div className="marquee__purple">
            <div className="marquee__purple-row">
              {stringsArray.map((el) =>
                el.props.children.map((item) => {
                  return item;
                })
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="partners" id="section2">
        <div className="partners__section">
          <div className="partners__section-description">
            <div
              id="title1"
              className={joinStrings([
                "partners__section-title",
                activeTitle === "title2" && "partners__section-title--active",
              ])}
            >
              Our Exclusive Partners
            </div>
            <div className="partners__section-logos">
              <div className="partners__section-logo">
                <img alt="Logo" src={syncLogo} />
              </div>
              <div className="partners__section-second-logos">
                <div className="partners__section-logo">
                  <img alt="Logo" src={influenceLogo} />
                </div>
                <div className="partners__section-logo">
                  <img alt="Logo" src={codingLogo} />
                </div>
              </div>
            </div>
          </div>
          <img
            className="partners__section-image"
            alt="Logo"
            src={partnersLogo}
          />
          <img
            className="partners__section-mobile-image"
            alt="Logo"
            src={mobilePartnersLogo}
          />
        </div>
      </section>
      <section className="about" id="section3">
        <div className="about__section">
          <div
            className={joinStrings([
              "about__section-title",
              activeTitle === "title3" && "about__section-title--active",
            ])}
          >
            About Us
          </div>
          <div className="about__section-description">
            <div>
              <div className="about__section-description-heading">
                Lorem Ipsum Dolor Sit Amet Consectetur
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vel duis nibh sodales in
                gravida dolor in. Elementum netus rhoncus sagittis nunc mi non
                egestas est. Aliquam maecenas in sed vestibulum neque feugiat
                pulvinar. Volutpat auctor a in sem vulputate aliquam tempor sit.
                Nulla urna felis penatibus ut cras sit.
              </p>
            </div>
            <div>
              <div className="about__section-description-heading">
                Lorem Ipsum Dolor Sit Amet Consectetur
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vel duis nibh sodales in
                gravida dolor in. Elementum netus rhoncus sagittis nunc mi non
                egestas est. Aliquam maecenas in sed vestibulum neque feugiat
                pulvinar. Volutpat auctor a in sem vulputate aliquam tempor sit.
                Nulla urna felis penatibus ut cras sit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="services" id="section4">
        <div className="services__section">
          <div className="services__section-description">
            <div
              className={joinStrings([
                "services__section-heading",
                activeTitle === "title4" && "services__section-heading--active",
              ])}
            >
              Services
            </div>
            <div className="services__section-widgets">
              <div className="services__section-main-widget">
                <h2>Lorem Ipsum</h2>
                <ul>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul>
              </div>
              <div className="services__section-widget">
                <h2>Lorem</h2>
                <ul>
                  <li>Ipsum</li>
                  <li>Ipsum</li>
                </ul>
              </div>
              <div className="services__section-widget">
                <h2>Lorem</h2>
                <ul>
                  <li>Ipsum</li>
                  <li>Ipsum</li>
                </ul>
              </div>
            </div>
          </div>
          <img
            className="services__section-image"
            alt="Logo"
            src={servicesLogo}
          />
          <img
            className="services__section-mobile-image"
            alt="Logo"
            src={mobileServicesLogo}
          />
        </div>
      </section>
      <section className="choose" id="section5">
        <div className="choose__section">
          <span className="choose__section-title">
            Choose{" "}
            <span
              className={joinStrings([
                "choose__section-title",
                activeTitle === "title5" && "choose__section-title--active",
              ])}
            >
              Excellence,{" "}
            </span>
          </span>
          <span className="choose__section-title">
            Choose{" "}
            <span
              className={joinStrings([
                "choose__section-title",
                activeTitle === "title5" && "choose__section-title--active",
              ])}
            >
              Our Agency.
            </span>
          </span>
          <p className="choose__section-description">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <Button title="Sign Up" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
