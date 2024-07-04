import React, { useState } from "react";
import {
  Card,
  Col,
  Nav,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Avatar from "../../components/Avatar";
import ReactApexChart from "react-apexcharts";
import { VectorMap } from "@react-jvectormap/core";
import { inMerc } from "@react-jvectormap/india";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import {
  dataPie2022,
  dataPie2023,
  carbonData2022,
  carbonData2023,
  renewableData2022,
  renewableData2023,
} from "../../data/data";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

export default function EsgDashboard() {
  const regStyle = {
    selected: {
      fill: "#506fd9",
    },
    initial: {
      fill: "#d9dde7",
    },
  };

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
    300, 280, 250, 230, 200, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100,
    90, 80, 70, 60, 50,
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
      {
        label: "Bangalore",
        data: [240, 235, 230, 225, 250],
        fill: false,
        borderColor: "rgba(255, 205, 86, 50)",
      },
      {
        label: "Hyderabad",
        data: [220, 215, 210, 205, 220],
        fill: false,
        borderColor: "rgba(255, 159, 64, 60)",
      },
      {
        label: "Ahmedabad",
        data: [200, 195, 190, 185, 180],
        fill: false,
        borderColor: "rgba(255, 99, 132, 10)",
      },
    ],
  };

  const barDataY = {
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

  // Reduced CF
  var dataPie = {
    labels: ["USD", "EUR"],
    datasets: [
      {
        data: [77, 15],
        backgroundColor: ["#506fd9", "#85b6ff"],
      },
    ],
  };

  const barData = {
    labels: [
      "Jun 4",
      "Jun 6",
      "Jun 8",
      "Jun 10",
      "Jun 12",
      "Jun 14",
      "Jun 16",
      "Jun 18",
      "Jun 20",
      "Jun 22",
      "Jun 24",
      "Jun 26",
      "Jun 28",
      "Jul 2",
    ],
    datasets: [
      {
        label: "Electricity ($)",
        data: [
          800, 900, 1000, 950, 850, 900, 950, 1000, 1050, 1000, 950, 900, 850,
          800,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Water ($)",
        data: [
          200, 250, 300, 250, 200, 250, 300, 250, 200, 250, 300, 250, 200, 250,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Gas ($)",
        data: [
          100, 150, 200, 150, 100, 150, 200, 150, 100, 150, 200, 150, 100, 150,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const pieData = {
    labels: ["Electricity ($)", "Water ($)", "Gas ($)"],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
      },
    ],
  };

  var dataPie1 = {
    labels: ["USD", "EUR"],
    datasets: [
      {
        data: [20, 15],
        backgroundColor: ["#506fd9", "#85b6ff"],
      },
    ],
  };

  var optionPie = {
    maintainAspectRatio: true,
    hover: { mode: null },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },

    rotation: -90,
    circumference: 180,
    cutout: "85%",
    responsive: true,
  };

  //Bar chart
  const barChart = [
    {
      name: "Carbon Footprint in Kg",
      data: [302, 459, 1200, 312],
    },
  ];

  const optionBarChart = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: "rgba(72,94,144, 0.07)",
      padding: {
        top: -20,
        left: 5,
      },
    },
    colors: ["#506fd9", "#7CE5EE", "#c8ccd4"],
    plotOptions: {
      bar: {
        columnWidth: "35%",
      },
    },
    stroke: {
      curve: "straight",
      lineCap: "square",
      width: 0,
    },
    tooltip: {
      enabled: true,
    },
    fill: { opacity: 1 },
    legend: { show: true },
    xaxis: {
      categories: ["East", "South", "North", "West"],
      tickAmount: 12,
    },
    yaxis: {
      tickAmount: 8,
      labels: {
        style: {
          colors: ["#a2abb5"],
          fontSize: "11px",
        },
      },
    },
  };

  //Reusable
  const optionDonut = {
    chart: {
      parentHeightOffset: 0,
    },
    colors: ["#506fd9", "#85b6ff", "#51596d", "#eff1f5"],
    dataLabels: { enabled: false },
    grid: {
      padding: {
        top: 0,
        bottom: 0,
      },
    },
    legend: { show: false },
  };

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
                ESG Dashboard
              </li>
            </ol>
            <h4 className="main-title mb-0">ESG Dashboard</h4>
          </div>
        </div>

        <Row className="g-3">
          <Col sm="12" xl="6">
            <Card className="card-one">
              <Card.Header className="border-0 pb-0">
                <Card.Title as="h6">
                  <h5>Reduce Carbon Footprint by 8%</h5>
                  <div className="status-badge">
                    <span className="badge bg-success">on track</span>
                  </div>
                </Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-around p-0">
                <div className="chart-donut-one mb-3">
                  <Doughnut
                    data={dataPie}
                    options={optionPie}
                    className="mb-0"
                  />
                  <div className="text-center mt-0">
                    <p>June 2023</p>
                    <h6>
                      <b>620290</b> KwH
                    </h6>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <b>VS</b>
                </div>
                <div className="chart-donut-one mb-3">
                  <Doughnut data={dataPie1} options={optionPie} />
                  <div className="text-center mt-0">
                    <p>July 2024</p>
                    <h6>
                      <b>558261</b> KwH
                    </h6>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Regions wise Carbon Footprint</Card.Title>
              </Card.Header>
              <Card.Body className="p-3">
                <ReactApexChart
                  series={barChart}
                  options={optionBarChart}
                  type="bar"
                  height={200}
                  className="apex-chart-twelve pt-3"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xl="8">
            <Card className="card-one card-vmap">
              <Card.Header>
                <Card.Title as="h6">States with Highest Emission</Card.Title>
                <Nav as="nav" className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href="">
                    <i className="ri-refresh-line"></i>
                  </Nav.Link>
                  <Nav.Link href="">
                    <i className="ri-more-2-fill"></i>
                  </Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3 p-xl-4">
                <VectorMap
                  map={inMerc}
                  backgroundColor={skin === "dark" ? "#192030" : "#fff"}
                  regionStyle={regStyle}
                  selectedRegions={[
                    "IN-MH",
                    "IN-GJ",
                    "IN-KA",
                    "IN-TN",
                    "IN-UP",
                  ]}
                  enableZoom={false}
                  className="ht-400 mb-4"
                />

                {/* <Table className="table-one">
                  <thead>
                    <tr>
                      <th>States</th>
                      <th>Orders</th>
                      <th>Earnings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        bg: "twitter",
                        name: "California",
                        orders: "12,201",
                        earnings: "$150,200.80",
                      },
                      {
                        bg: "primary",
                        name: "Texas",
                        orders: "11,950",
                        earnings: "$138,910.20",
                      },
                      {
                        bg: "teal",
                        name: "Colorado",
                        orders: "11,198",
                        earnings: "$132,050.00",
                      },
                      {
                        bg: "info",
                        name: "Missouri",
                        orders: "9,885",
                        earnings: "$127,762.10",
                      },
                      {
                        bg: "pink",
                        name: "New York",
                        orders: "8,560",
                        earnings: "$117,087.50",
                      },
                    ].map((item, index) => (
                      <tr key={index}>
                        <td className="fw-medium">
                          <span
                            className={"badge-dot me-2 bg-" + item.bg}
                          ></span>{" "}
                          {item.name}
                        </td>
                        <td>{item.orders}</td>
                        <td>{item.earnings}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table> */}
              </Card.Body>
            </Card>
          </Col>

          <Col xl="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Reusable Energy Usage</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href="">
                    <i className="ri-refresh-line"></i>
                  </Nav.Link>
                  <Nav.Link href="">
                    <i className="ri-more-2-fill"></i>
                  </Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="position-relative d-flex justify-content-center">
                <ReactApexChart
                  series={[35, 20]}
                  options={optionDonut}
                  height="auto"
                  type="donut"
                  className="apex-donut-two"
                />

                <div className="finance-donut-value">
                  <h1>1844 kwh</h1>
                  <p>86.24%</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Total Energy Usage</Card.Title>
                <Bar data={barData} />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Total Energy Distribution</Card.Title>
                <Pie data={pieData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>GHG Emissions by City</Card.Title>
                <Bar data={barDataY} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Row className="my-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Historical GHG Emissions</Card.Title>
                <Line data={historicalData} />
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
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

        <Footer />
      </div>
    </React.Fragment>
  );
}
