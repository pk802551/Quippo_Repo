"use client"

import { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Funnel, Grid, List } from "react-bootstrap-icons"
import "./EquipmentPage.css"
import EquipmentCard from "../componets/EquipmentTabs"


// Mock data
const UsedEquipment = [
  {
    id: 101,
    title: "Brand New Caterpillar 320 GC Excavator",
    price: 195000,
    location: "New York, NY",
    year: 2023,
    image: require("../assets/image/newJcb.webp"),
    isNew: true,
    isFeatured: true,
  },
  {
    id: 102,
    title: "New JCB 3DX Backhoe Loader 2023 Model",
    price: 110000,
    location: "Chicago, IL",
    year: 2023,
    image: require("../assets/image/VolvoTruck.jpeg"),
    isNew: true,
    isFeatured: false,
  },
  {
    id: 103,
    title: "New Volvo FH16 750 Truck",
    price: 150000,
    location: "Dallas, TX",
    year: 2023,
    image: require("../assets/image/mahindra.jpeg"),
    isNew: true,
    isFeatured: true,
  },
  {
    id: 104,
    title: "New Komatsu PC210 Excavator",
    price: 180000,
    location: "Miami, FL",
    year: 2023,
    image:require("../assets/image/newcat.jpeg"),
    isNew: true,
    isFeatured: false,
  },
  {
    id: 105,
    title:"New Volvo FH16 750 Truck",
    price: 85000,
    location: "Seattle, WA",
    year: 2023,
    image: require("../assets/image/cat.jpeg"),
    isNew: true,
    isFeatured: false,
  },
  {
    id: 106,
    title: "New Mahindra Blazo X 28 Tipper",
    price: 78000,
    location: "Boston, MA",
    year: 2023,
    image: require("../assets/image/tipperNew.jpeg"),
    isNew: true,
    isFeatured: false,
  },
  {
    id: 107,
    title: "New CAT 950 GC Wheel Loader",
    price: 165000,
    location: "Phoenix, AZ",
    year: 2023,
    image: require("../assets/image/komatsu.webp"),
    isNew: true,
    isFeatured: true,
  },
  {
    id: 108,
    title: "New JCB 220LC Excavator",
    price: 145000,
    location: "Denver, CO",
    year: 2023,
    image: require("../assets/image/twocat.jpeg"),
    isNew: true,
    isFeatured: false,
  },
]

const NewEquipmentPage = () => {
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="equipment-page">
      <Container>
        <h1 className="page-title"> UsedEquipment</h1>

        <div className="equipment-controls">
          <Button variant="outline-secondary" className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
            <Funnel size={18} /> Filters
          </Button>

          <div className="view-options">
            <Button
              variant={viewMode === "grid" ? "primary" : "outline-secondary"}
              className="view-option"
              onClick={() => setViewMode("grid")}
            >
              <Grid size={18} />
            </Button>
            <Button
              variant={viewMode === "list" ? "primary" : "outline-secondary"}
              className="view-option"
              onClick={() => setViewMode("list")}
            >
              <List size={18} />
            </Button>
          </div>
        </div>

        <Row>
          {showFilters && (
            <Col lg={3} className="filters-column">
              <div className="filters-panel">
                <h4 className="filters-title">Filter By</h4>

                <Form>
                  <Form.Group className="mb-4">
                    <Form.Label>Category</Form.Label>
                    <Form.Select>
                      <option value="">All Categories</option>
                      <option value="excavator">Excavator</option>
                      <option value="tipper">Tipper</option>
                      <option value="backhoe">Backhoe Loader</option>
                      <option value="truck">Truck</option>
                      <option value="wheel-loader">Wheel Loader</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Brand</Form.Label>
                    <Form.Select>
                      <option value="">All Brands</option>
                      <option value="caterpillar">Caterpillar</option>
                      <option value="jcb">JCB</option>
                      <option value="komatsu">Komatsu</option>
                      <option value="volvo">Volvo</option>
                      <option value="tata">Tata</option>
                      <option value="mahindra">Mahindra</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Price Range</Form.Label>
                    <div className="d-flex">
                      <Form.Control type="number" placeholder="Min" className="me-2" />
                      <Form.Control type="number" placeholder="Max" />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Year</Form.Label>
                    <Form.Select>
                      <option value="">All Years</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter location" />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button variant="primary">Apply Filters</Button>
                    <Button variant="outline-secondary">Reset</Button>
                  </div>
                </Form>
              </div>
            </Col>
          )}

          <Col lg={showFilters ? 9 : 12}>
            <Row xs={1} sm={viewMode === "list" ? 1 : 2} md={viewMode === "list" ? 1 : 3} className="g-4">
              {UsedEquipment.map((item) => (
                <Col key={item.id}>
                  <EquipmentCard equipment={item} />
                </Col>
              ))}
            </Row>

            <div className="pagination-container">
              <Button variant="outline-secondary" disabled>
                Previous
              </Button>
              <div className="page-numbers">
                <Button variant="primary">1</Button>
                <Button variant="outline-secondary">2</Button>
                <Button variant="outline-secondary">3</Button>
                <span>...</span>
                <Button variant="outline-secondary">10</Button>
              </div>
              <Button variant="outline-secondary">Next</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NewEquipmentPage
