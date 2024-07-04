import React, { useState } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import ReactApexChart from "react-apexcharts";
import { Bar, Doughnut } from "react-chartjs-2";

const seriesFive = [
  {
    type: "column",
    data: [
      [0, 0],
      [1, 40],
      [2, 55],
      [3, 40],
      [4, 30],
      [5, 20],
      [6, 34],
      [7, 45],
      [8, 35],
      [9, 20],
      [10, 40],
      [11, 20],
      [12, 35],
      [13, 30],
      [14, 35],
      [15, 50],
      [16, 30],
      [17, 25],
      [18, 15],
      [19, 20],
      [20, 32],
      [21, 40],
      [22, 55],
      [23, 40],
      [24, 30],
      [25, 20],
      [26, 34],
      [27, 45],
      [28, 35],
      [29, 20],
      [30, 40],
      [31, 20],
      [32, 35],
      [33, 30],
      [34, 35],
      [35, 50],
      [36, 30],
      [37, 25],
      [38, 15],
      [39, 20],
      [40, 32],
    ],
  },
  {
    type: "area",
    data: [
      [0, 82],
      [1, 80],
      [2, 85],
      [3, 80],
      [4, 76],
      [5, 70],
      [6, 74],
      [7, 75],
      [8, 75],
      [9, 70],
      [10, 71],
      [11, 72],
      [12, 75],
      [13, 80],
      [14, 85],
      [15, 80],
      [16, 70],
      [17, 95],
      [18, 95],
      [19, 90],
      [20, 92],
      [21, 90],
      [22, 95],
      [23, 90],
      [24, 90],
      [25, 90],
      [26, 84],
      [27, 85],
      [28, 85],
      [29, 80],
      [30, 70],
      [31, 70],
      [32, 75],
      [33, 70],
      [34, 75],
      [35, 80],
      [36, 75],
      [37, 85],
      [38, 78],
      [39, 70],
      [40, 82],
    ],
  },
];

const optionFive = {
  chart: {
    parentHeightOffset: 0,
    toolbar: { show: false },
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      filter: {
        type: "none",
      },
    },
  },
  colors: ["#3a59c4", "#e5e9f2"],
  plotOptions: {
    bar: { columnWidth: "45%" },
  },
  grid: {
    borderColor: "rgba(33,43,48,0.07)",
    padding: {
      top: -20,
      bottom: -5,
    },
    yaxis: {
      lines: { show: false },
    },
  },
  fill: {
    type: ["solid", "gradient"],
    gradient: {
      type: "vertical",
      opacityFrom: 0.35,
      opacityTo: 0.2,
      gradientToColors: ["#f3f5fc"],
    },
  },
  stroke: {
    curve: "straight",
    width: [0, 2],
  },
  xaxis: {
    type: "numeric",
    tickAmount: 8,
    decimalsInFloat: 0,
    labels: {
      style: {
        colors: "#6e7985",
        fontSize: "9px",
      },
    },
    axisBorder: { show: false },
  },
  yaxis: {
    show: false,
    min: 0,
    max: 100,
  },
  dataLabels: { enabled: false },
  legend: { show: false },
  tooltip: { enabled: false },
};

const lightingZoneBarData = {
  labels: ["Panel 6", "Panel 1", "Panel 5", "Panel 4", "Panel 2", "Panel 3"],
  datasets: [
    {
      label: "Energy (kWh)",
      data: [200, 250, 300, 350, 400, 450],
      backgroundColor: "rgba(54, 162, 235, 0.7)",
    },
  ],
};

const lightingZoneDoughnutData = {
  labels: ["Panel 6", "Panel 1", "Panel 5", "Panel 4", "Panel 2", "Panel 3"],
  datasets: [
    {
      data: [19.81, 11.61, 11.85, 18.25, 18.72, 19.77],
      backgroundColor: [
        "rgba(54, 162, 235, 0.7)",
        "rgba(75, 192, 192, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(153, 102, 255, 0.7)",
        "rgba(255, 159, 64, 0.7)",
        "rgba(255, 99, 132, 0.7)",
      ],
    },
  ],
};

const hvacUnitBarData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "HVAC 1 (kWh)",
      data: [200, 220, 210, 230, 240, 250, 260],
      backgroundColor: "rgba(54, 162, 235, 0.7)",
    },
    {
      label: "HVAC 2 (kWh)",
      data: [150, 170, 160, 180, 190, 200, 210],
      backgroundColor: "rgba(75, 192, 192, 0.7)",
    },
    {
      label: "HVAC 3 (kWh)",
      data: [100, 120, 110, 130, 140, 150, 160],
      backgroundColor: "rgba(255, 206, 86, 0.7)",
    },
    {
      label: "HVAC 4 (kWh)",
      data: [50, 70, 60, 80, 90, 100, 110],
      backgroundColor: "rgba(153, 102, 255, 0.7)",
    },
    {
      label: "HVAC 5 (kWh)",
      data: [30, 40, 50, 60, 70, 80, 90],
      backgroundColor: "rgba(255, 159, 64, 0.7)",
    },
    {
      label: "HVAC 6 (kWh)",
      data: [20, 30, 40, 50, 60, 70, 80],
      backgroundColor: "rgba(255, 99, 132, 0.7)",
    },
  ],
};

const hvacUnitDoughnutData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [200, 220, 210, 230, 240, 250, 260],
      backgroundColor: [
        "rgba(54, 162, 235, 0.7)",
        "rgba(75, 192, 192, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(153, 102, 255, 0.7)",
        "rgba(255, 159, 64, 0.7)",
        "rgba(255, 99, 132, 0.7)",
        "rgba(54, 162, 235, 0.7)",
      ],
    },
  ],
};

export default function Analytics() {
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
                Analytics
              </li>
            </ol>
            <h4 className="main-title mb-0">Analytics</h4>
          </div>
        </div>

        <Row className="g-3">
          <Row className="mb-4">
            <Col>
              <Form.Label>Site Group</Form.Label>
              <Form.Select>
                <option>Select</option>
                <option value="1">North</option>
                <option value="2">East</option>
                <option value="3">West</option>
                <option value="3">South</option>
              </Form.Select>
            </Col>

            <Col>
              <Form.Label>Building</Form.Label>
              <Form.Select>
                <option>Select</option>
                <option value="1">Mumbai</option>
                <option value="2">Delhi</option>
                <option value="3">Bangalore</option>
                <option value="4">Hyderabad</option>
                <option value="5">Ahmedabad</option>
                <option value="6">Chennai</option>
                <option value="7">Kolkata</option>
                <option value="8">Pune</option>
                <option value="9">Jaipur</option>
                <option value="10">Surat</option>
                <option value="11">Lucknow</option>
                <option value="12">Kanpur</option>
                <option value="13">Nagpur</option>
                <option value="14">Indore</option>
                <option value="15">Thane</option>
                <option value="16">Bhopal</option>
                <option value="17">Visakhapatnam</option>
                <option value="18">Pimpri-Chinchwad</option>
                <option value="19">Patna</option>
                <option value="20">Vadodara</option>
              </Form.Select>
            </Col>

            <Col>
              <Form.Label>Region</Form.Label>
              <Form.Select>
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>

            <Col>
              <Form.Label>Tenant</Form.Label>
              <Form.Select>
                <option>Select</option>
                <option value="1">HO</option>
                <option value="2">RO</option>
                <option value="3">LL</option>
              </Form.Select>
            </Col>
          </Row>

          {[
            {
              label: "Year to date 2024",
              icon: "ri-flashlight-line",
              value: "8,327 kwH",
              percent: "0.7",
              status: "down",
            },
            {
              label: "January - December 2023",
              icon: "ri-flashlight-line",
              value: "12,105 MWh",
              percent: "2.1",
              status: "up",
            },
            {
              label: "Year to date 2024",
              icon: "ri-flashlight-line",
              value: "8,327 kwH",
              percent: "0.7",
              status: "down",
            },
            {
              label: "January - December 2023",
              icon: "ri-flashlight-line",
              value: "12,105 MWh",
              percent: "2.1",
              status: "up",
            },
          ].map((card, index) => (
            <Col xs="6" xl="3" key={index}>
              <Card className="card-one">
                <Card.Body>
                  <Card.Title as="label" className="fs-sm fw-medium mb-1">
                    {card.label}
                  </Card.Title>
                  <h3 className="card-value mb-1">
                    <i className={card.icon}></i> {card.value}
                  </h3>
                  <small>
                    Change %{" "}
                    <span
                      className={
                        "d-inline-flex text-" +
                        (card.status === "up" ? "success" : "danger")
                      }
                    >
                      {card.percent}%{" "}
                      <i
                        className={
                          "ri-arrow-" +
                          (card.status === "up" ? "up" : "down") +
                          "-line"
                        }
                      ></i>
                    </span>
                  </small>
                </Card.Body>
              </Card>
            </Col>
          ))}

          <Col xs="6">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Branch wise Carbon Intensity</Card.Title>
              </Card.Header>
              <Card.Body className="px-3 pt-2">
                <ReactApexChart
                  series={seriesFive}
                  options={optionFive}
                  type="area"
                  height={300}
                  className="apex-chart-three"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xs="6">
            <Col xs="12">
              <Card>
                <Card.Body>
                  <Card.Title>Lighting Zone Energy Ranking</Card.Title>
                  <Bar data={lightingZoneBarData} />
                  {/* <Doughnut data={lightingZoneDoughnutData} /> */}
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>

        <Row className="my-6 col-12">
          <Col xs="6">
            <Card>
              <Card.Body>
                <Card.Title>HVAC Unit Energy Ranking</Card.Title>
                <Bar data={hvacUnitBarData} />
                <Doughnut data={hvacUnitDoughnutData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Footer />
      </div>
    </React.Fragment>
  );
}
