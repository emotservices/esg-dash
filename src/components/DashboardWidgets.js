import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";

const renewableData = {
  labels: ["Renewable", "Non-Renewable"],
  datasets: [
    {
      data: [1803, 201],
      backgroundColor: ["#36A2EB", "#CCCCCC"],
    },
  ],
};

const carbonData = {
  labels: ["Scope 1", "Scope 2", "Non Classified"],
  datasets: [
    {
      data: [3050, 1050, 2003],
      backgroundColor: ["#FF6384", "#FFCE56", "#4BC0C0"],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: ${context.raw} kCO2e`;
        },
      },
    },
  },
};

const DashboardWidgets = () => {
  return (
    <Row>
      <Col sm="6">
        <Card>
          <Card.Body>
            <h5>Renewable Energy Usage</h5>
            <p>8% of total consumption</p>
            <Doughnut data={renewableData} options={options} />
            <div className="text-center mt-3">
              <p>Total</p>
              <h6>
                <b>2004</b> MWh
              </h6>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm="6">
        <Card>
          <Card.Body>
            <h5>Carbon Footprint</h5>
            <p>GHG offsets included</p>
            <Doughnut data={carbonData} options={options} />
            <div className="text-center mt-3">
              <p>Total Emissions</p>
              <h6>
                <b>10,500</b> kCO2e
              </h6>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardWidgets;
