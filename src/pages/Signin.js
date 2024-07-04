import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logoColour from "../assets/img/logoColour.png";

export default function Signin() {
  const navigate = useNavigate();
  return (
    <div className="page-sign">
      <Card className="card-sign">
        <Card.Header>
          <div className="mb-3">
            <img src={logoColour} alt={"logo"} width={120} />
          </div>
          <Card.Title>Sign In</Card.Title>
          <Card.Text>Welcome back! Please signin to continue.</Card.Text>
        </Card.Header>
        <Card.Body>
          <Form method="get">
            <div className="mb-4">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <Form.Label className="d-flex justify-content-between">
                Password <Link to="">Forgot password?</Link>
              </Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </div>
            <Button
              type="submit"
              variant="primary"
              className="btn-sign"
              onClick={() => {
                navigate("/esg-dashboard");
              }}
            >
              Sign In
            </Button>

            {/* <div className="divider"><span>or sign in with</span></div>

            <Row className="gx-2">
              <Col><Button variant="" className="btn-facebook"><i className="ri-facebook-fill"></i> Facebook</Button></Col>
              <Col><Button variant="" className="btn-google"><i className="ri-google-fill"></i> Google</Button></Col>
            </Row> */}
          </Form>
        </Card.Body>
        {/* <Card.Footer>
          Don't have an account? <Link to="/pages/signup">Create an Account</Link>
        </Card.Footer> */}
      </Card>
    </div>
  );
}
