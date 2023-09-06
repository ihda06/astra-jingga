import { Col, Row } from "react-bootstrap";
import "./style.scss";

export default function Card({ experience }) {
  return (
    <>
      <div className="my-card mb-3">
        <Row>
          <Col md={4} className="">
            <div className="d-flex justify-content-center align-items-center company-logo">
              <img src={`./${experience.image}`} alt="company-logo" />
            </div>
          </Col>
          <Col md={8}>
            <div className="">
              <div className="title-section mb-2">
                <a href={experience.companyweb} className="text-title-card">{experience.title}</a>
                <p className="card-text role">{experience.role}</p>
                <div className="d-flex align-items-center gap-1">
                  <span className="text-period">{experience.period}</span>
                  <span> • </span>
                  <span className="text-period">
                    ~ {experience.periodTime} Months
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
