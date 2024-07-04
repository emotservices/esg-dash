import React, { useState } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Table } from "react-bootstrap";
import DashboardWidgets from "../../components/DashboardWidgets";
import { Bar, Line } from "react-chartjs-2";

const data = [
  {
    city: "Mumbai",
    scope1: 2500,
    scope2: 1200,
    scope3: 800,
    change1: -0.02,
    change2: 0.01,
    change3: -0.01,
  },
  {
    city: "Delhi",
    scope1: 3000,
    scope2: 1500,
    scope3: 900,
    change1: 0.03,
    change2: 0.02,
    change3: 0.0,
  },
  {
    city: "Bangalore",
    scope1: 2800,
    scope2: 1100,
    scope3: 750,
    change1: -0.01,
    change2: -0.01,
    change3: -0.02,
  },
  {
    city: "Chennai",
    scope1: 2200,
    scope2: 1000,
    scope3: 700,
    change1: 0.0,
    change2: 0.0,
    change3: 0.01,
  },
  {
    city: "Kolkata",
    scope1: 2600,
    scope2: 1300,
    scope3: 850,
    change1: 0.02,
    change2: -0.02,
    change3: 0.01,
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

export default function GhgReport() {
  const currentSkin = localStorage.getItem("skin-mode") ? "dark" : "";
  const [skin, setSkin] = useState(currentSkin);

  return (
    <React.Fragment>
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="#">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                GHG Report
              </li>
            </ol>
            <h4 className="main-title mb-0">GHG Report</h4>
          </div>
        </div>

        <Card className="mt-3">
          <Card.Body>
            <h5>GHG Report for Regions</h5>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>City</th>
                  <th>Scope 1</th>
                  <th>Scope 2</th>
                  <th>Not Classified</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.city}>
                    <td>{row.city}</td>
                    <td>
                      {row.scope1} kCO2e
                      <span
                        style={{ color: row.change1 < 0 ? "green" : "red" }}
                      >
                        {row.change1 < 0 ? " ↓" : " ↑"}
                      </span>
                    </td>
                    <td>
                      {row.scope2} kCO2e
                      <span
                        style={{ color: row.change2 < 0 ? "green" : "red" }}
                      >
                        {row.change2 < 0 ? " ↓" : " ↑"}
                      </span>
                    </td>
                    <td>
                      {row.scope3} kCO2e
                      <span
                        style={{ color: row.change3 < 0 ? "green" : "red" }}
                      >
                        {row.change3 < 0 ? " ↓" : " ↑"}
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
        <Footer />
      </div>
    </React.Fragment>
  );
}
