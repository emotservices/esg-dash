import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Bar, Line } from "react-chartjs-2";

const environmentalData = [
  {
    indicator: "Carbon Emissions from Diesel Generators",
    value: "6,441 kCO2e",
    target: "12,000 kCO2e",
    status: "on track",
  },
  {
    indicator: "Carbon Intensity by Energy Management Systems (EMS)",
    value: "150 kgCO2e/MWh",
    target: "130 kgCO2e/MWh",
    status: "improving",
  },
  {
    indicator: "Renewable Energy Usage",
    value: "21%",
    target: "50%",
    status: "needs improvement",
  },
  {
    indicator: "Energy Savings from IoT Solutions",
    value: "8%",
    target: "10%",
    status: "on track",
  },
  {
    indicator: "Reduction in Diesel Consumption",
    value: "2341 liters",
    target: "4,000 liters",
    status: "needs improvement",
  },
];

const cityNames = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Patna",
  "Vadodara",
  "Ghaziabad",
];

const ghgEmissions = [
  300, 280, 250, 230, 200, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90,
  80, 70, 60, 50,
];

const historicalData = {
  labels: ["2020", "2021", "2022", "2023", "2024"],
  datasets: [
    {
      label: "Mumbai",
      data: [290, 295, 300, 305, 300],
      fill: false,
      borderColor: "rgba(75, 192, 192, 1)",
    },
    {
      label: "Delhi",
      data: [270, 275, 280, 285, 280],
      fill: false,
      borderColor: "rgba(153, 102, 255, 1)",
    },
    // Add more datasets for other cities if needed
  ],
};

const barData = {
  labels: cityNames,
  datasets: [
    {
      label: "GHG Emissions (in metric tons)",
      data: ghgEmissions,
      backgroundColor: "rgba(54, 162, 235, 0.7)",
    },
  ],
};

const fuelSpentData = {
  labels: ["BPCL", "HPCL", "IOCL"],
  datasets: [
    {
      label: "Vehicles",
      data: [1500, 1200, 1800],
      backgroundColor: "rgba(255, 99, 132, 0.7)",
    },
    {
      label: "Diesel Generators",
      data: [1000, 900, 1200],
      backgroundColor: "rgba(54, 162, 235, 0.7)",
    },
  ],
};

const brsrData = {
  labels: ["Energy Usage", "Water Usage", "Waste Management"],
  datasets: [
    {
      label: "BRSR Environmental Metrics",
      data: [85, 70, 60],
      backgroundColor: [
        "rgba(255, 99, 132, 0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(75, 192, 192, 0.7)",
      ],
    },
  ],
};

const EnvironmentalFramework = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="#">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Reports as per Framework
              </li>
            </ol>
            <h4 className="main-title mb-0">Environment Report</h4>
          </div>
        </div>

        <Card className="mt-3">
          <Card.Body>
            <h5>Current Value Report</h5>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Indicator</th>
                  <th>Current Value</th>
                  <th>Target</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {environmentalData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.indicator}</td>
                    <td>{item.value}</td>
                    <td>{item.target}</td>
                    <td>
                      <span
                        className={`badge bg-${
                          item.status === "on track"
                            ? "success"
                            : item.status === "improving"
                            ? "warning"
                            : "danger"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <Row className="g-3"></Row>

        <Row className="my-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>GHG Emissions by City</Card.Title>
                <Bar data={barData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Historical GHG Emissions</Card.Title>
                <Line data={historicalData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Fuel Spent on BPCL / HPCL / IOCL</Card.Title>
                <Bar data={fuelSpentData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>BRSR Environmental Disclosure</Card.Title>
                <Bar data={brsrData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default EnvironmentalFramework;
