import { Col, Row } from "react-bootstrap";
import "./style.scss";

export default function Card({ experience }) {
  return (
    <>
      <div className="my-card mb-3">
        <Row>
          <Col
            md={12}
            className=""
          >
            <div className="d-flex justify-content-center align-items-center company-logo">
              <img
                src={`./${experience.image}`}
                alt="company-logo"
              />
            </div>
          </Col>
          <Col md={12}>
            <div className="">
              <div className="title-section mb-2">
                <span className="text-title-card">{experience.title}</span>{" "}
                <span className="text-period">{experience.period}</span>
                <p className="card-text role">
                  {experience.role}
                </p>
              </div>
              <p className="text-title-card">Job Description</p>
              <ul>
                {experience.jobdesk.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
