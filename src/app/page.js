"use client";
import styles from "./page.module.css";
import "./main.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Col,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

import { SiLaravel, SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiVuedotjs, } from "react-icons/si";
import TypewriterComponent from "typewriter-effect";
import Card from "./components/card/card";
// import Animate from "animate.css-react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Link from "next/link";
// import "animate.css/animate.css";

export default function Home() {
  const navClick = (target) => {
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
  };

  const experiences = [
    {
      title: "AVPN",
      companyweb: "https://avpn.asia/",
      image: "avpn.png",
      period: "(May - Aug 2022)",
      periodTime: "4",
      role: "Frontend Engineer Intern",
      jobdesk: [
        "Designing UI and UX for the website project with Figma",
        "Creating a mockup prototype for the website project with ReactJs",
        "Handle data mockup with nocode App Airtable",
      ],
    },
    {
      title: "Sekolah.mu",
      companyweb: "https://www.sekolah.mu/",
      image: "sekolahmu.png",
      period: "(Sep - Dec 2022)",
      periodTime: "4",
      role: "Frontend Engineer Intern",
      jobdesk: [
        "Designing 3 website components for design system",
        "Creating unit test for each component",
        "Achieve 95% coverage test on unit test for each component",
        "Participating to improve feature on payment page",
      ],
    },
    {
      title: "Antares",
      companyweb: "https://antares.id/",
      image: "antares2.png",
      period: "(Jan - Jun 2023)",
      periodTime: "6",
      role: "Developer Intern",
      jobdesk: [
        "Develop 5 simple sub menus for application needs such as create the database, create API, and front-end view",
        "Fix and improve more than 10 sub menu",
      ],
    },
  ];

  return (
    <main className={styles.main}>
      <Navbar expand="lg" className="bg-body-tertiary shadow fixed-top">
        <Container>
          <Navbar.Brand href="#home">Ihda Anwari</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse>
            <Nav className="">
              <Nav.Link
                onClick={() => {
                  navClick("#about");
                }}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navClick("#experience");
                }}
              >
                Experience
              </Nav.Link>
              <NavDropdown title="My Project" id="nav-dropdown">
                <NavDropdown.Item
                  eventKey="4.1"
                  href="https://github.com/ihda06"
                >
                  Github
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="4.2"
                  href="https://secreto-ihda.vercel.app/"
                >
                  Secreto
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section id="main" className="">
        <div className="main-box main margin-custom-1">
          <div className="main-content">
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <img
                  className="avatar animate__animated animate__bounceInLeft animate__delay-2s"
                  src="./logo.png"
                  alt="avatar"
                ></img>
              </Col>
              <Col>
                <div className="text-content">
                  <p className="text-1 hello animate__animated animate__bounceInRight animate__delay-1s">
                    Hello,
                  </p>
                  <div className="im animate__animated animate__bounceInRight">
                    <span className="text-1">{`I'm `}</span>
                    <span className="text-2">Ihda Anwari</span>
                  </div>
                  <div className="text-3 my-3 animate__animated animate__bounceInRight typewriter-animation">
                    <TypewriterComponent
                      options={{
                        strings: [
                          "Frontend Engineer",
                          "Graphics Designer",
                          "Traveler",
                          "Bachelor of Digital Business",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>
                <a href="./cv.pdf" download>
                  <Button
                    variant="outline-dark"
                    className="rounded-pill download animate__animated animate__bounceInRight"
                  >
                    Download CV
                  </Button>
                </a>
              </Col>
            </Row>
          </div>
          <div className="mini-nav text-center animate__animated animate__fadeIn">
            <Row>
              <Col className="mini-nav-link" onClick={() => navClick("#about")}>
                About Me
              </Col>
              <Col
                className="mini-nav-link"
                onClick={() => navClick("#experience")}
              >
                Experience
              </Col>
              <Col
                className="mini-nav-link"
                onClick={() => navClick("#project")}
              >
                My Project
              </Col>
            </Row>
          </div>
          <BsArrowRightCircle
            className="icon-next fs-2"
            onClick={() => {
              navClick("#about");
            }}
          />
        </div>
      </section>
      <section id="#about" className="py-1">
        <div className="main-box margin-custom-1">
          <div className="main-content text-center">
            <TrackVisibility once>
              {({ isVisible }) =>
                isVisible && (
                  <p className="text-title about-title animate__animated animate__fadeIn">
                    About Me
                  </p>
                )
              }
            </TrackVisibility>
            <TrackVisibility once>
              {({ isVisible }) =>
                isVisible && (
                  <p className="text-content about-content animate__animated animate__fadeIn">
                    I am a <b>digital business</b> graduate who has an interest
                    in <b>front-end developers, graphic designers,</b> and{" "}
                    <b> UI/UX designers.</b> I am capable of designing UI
                    Websites with <b>ReactJs</b>, I have experienced building
                    websites as a <b>full stack</b> with <b>Laravel.</b> I am
                    also familiar with design tools like{" "}
                    <b>Adobe XD, Adobe Photoshop, Figma, Canva,</b> and{" "}
                    <b>CorelDraw</b>
                  </p>
                )
              }
            </TrackVisibility>
          </div>

          <BsArrowRightCircle
            className="icon-next fs-2"
            onClick={() => {
              navClick("#experience");
            }}
          />
        </div>
      </section>
      <section id="#experience" className="py-1">
        <div className="main-box margin-custom-1 experience">
          <div className="main-content">
            <TrackVisibility once>
              {({ isVisible }) =>
                isVisible && (
                  <p className="text-title text-center animate__animated animate__fadeIn">
                    Experience
                  </p>
                )
              }
            </TrackVisibility>

            <TrackVisibility once>
              {({ isVisible }) =>
                isVisible && (
                  <Row className="mb-2">
                    {experiences.map((item, id) => (
                      <Col
                        key={id}
                        md={6}
                        lg={4}
                        className="card-exp animate__animated animate__backInRight"
                      >
                        <Card experience={item} className />
                      </Col>
                    ))}
                  </Row>
                )
              }
            </TrackVisibility>
            <TrackVisibility once>
              {({ isVisible }) =>
                isVisible && (
                  <p className="text-title text-center animate__animated animate__fadeIn">
                    Skills
                  </p>
                )
              }
            </TrackVisibility>
            <TrackVisibility once>
              {({ isVisible }) =>
                isVisible && (
                  <div className="icon-skill d-flex flex-wrap justify-content-center gap-2 w-100">
                    <SiReact className="react animate__animated animate__backInRight"></SiReact>
                    <SiVuedotjs className="vue animate__animated animate__backInRight"></SiVuedotjs>
                    <SiHtml5 className="html animate__animated animate__backInRight"></SiHtml5>
                    <SiCss3 className="css animate__animated animate__backInRight"></SiCss3>
                    <SiLaravel className="laravel animate__animated animate__backInRight"></SiLaravel>
                    <SiJavascript className="javascript animate__animated animate__backInRight"></SiJavascript>
                    <SiBootstrap className="bootstrap animate__animated animate__backInRight"></SiBootstrap>
                  </div>
                )
              }
            </TrackVisibility>
          </div>

          <BsArrowRightCircle
            className="icon-next fs-2"
            onClick={() => {
              navClick("#project");
            }}
          />
        </div>
      </section>
      <section id="#project" className="py-1">
        <div className="main-box project margin-custom-1">
          <TrackVisibility once>
            {({ isVisible }) =>
              isVisible && (
                <div className="main-content text-center">
                  <p className="text-title animate__animated animate__fadeIn">
                    My Project
                  </p>
                  <div className="image-github mb-5 animate__animated animate__fadeIn">
                    <img src="./github.png" alt="github-logo" />
                  </div>
                  <Button
                    variant="outline-dark"
                    className="rounded-pill animate__animated animate__fadeIn"
                    href="https://github.com/ihda06"
                  >
                    Go to Github
                  </Button>
                </div>
              )
            }
          </TrackVisibility>

          <BsArrowRightCircle
            className="icon-next fs-2"
            onClick={() => {
              navClick("#socmed");
            }}
          />
        </div>
      </section>
      <section id="#socmed" className="py-1">
        <div className="main-box socmed margin-custom-1 d-flex justify-content-center align-items-center">
          <div className="social-media-wrap text-center">
            <p className="text-title-2">Follow Me on Social Media</p>
            <div className="social-media">
              <Link href="https://www.instagram.com/ihda.anwari">
                <AiOutlineInstagram />
              </Link>
              <Link href="https://www.youtube.com/channel/UCIAAl6Y0-3LFjfL0RyzXOpA">
                <AiOutlineYoutube />
              </Link>
              <Link href="https://www.linkedin.com/in/ihda-anwari/">
                <AiOutlineLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
