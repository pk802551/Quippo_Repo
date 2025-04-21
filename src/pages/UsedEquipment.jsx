"use client"

import { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Funnel, Grid, List } from "react-bootstrap-icons"
import "../pages/UsedEquipment.css"
import EquipmentCard from "../componets/EquipmentTabs"

const UsedEquipmentPage = () => {
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    keyword: "",
    category: "",
    brand: "",
    year: "",
    minPrice: "",
    maxPrice: "",
    location: "",
    isFeatured: false,
    isNew: false,
  })

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

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

  const filteredEquipment = UsedEquipment.filter((item) => {
    const {
      keyword,
      category,
      brand,
      year,
      minPrice,
      maxPrice,
      location,
      isFeatured,
      isNew,
    } = filters

    return (
      (!keyword || item.title.toLowerCase().includes(keyword.toLowerCase())) &&
      (!category || item.title.toLowerCase().includes(category)) &&
      (!brand || item.title.toLowerCase().includes(brand)) &&
      (!year || item.year.toString() === year) &&
      (!minPrice || item.price >= parseFloat(minPrice)) &&
      (!maxPrice || item.price <= parseFloat(maxPrice)) &&
      (!location || item.location.toLowerCase().includes(location.toLowerCase())) &&
      (!isFeatured || item.isFeatured) &&
      (!isNew || item.isNew)
    )
  })

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
                <h4 className="filters-title">Advanced Filters</h4>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Search Keyword</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Search by title or location"
                      name="keyword"
                      value={filters.keyword}
                      onChange={handleFilterChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select name="category" value={filters.category} onChange={handleFilterChange}>
                      <option value="">All</option>
                      <option value="excavator">Excavator</option>
                      <option value="tipper">Tipper</option>
                      <option value="backhoe">Backhoe Loader</option>
                      <option value="truck">Truck</option>
                      <option value="wheel-loader">Wheel Loader</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Brand</Form.Label>
                    <Form.Select name="brand" value={filters.brand} onChange={handleFilterChange}>
                      <option value="">All</option>
                      <option value="caterpillar">Caterpillar</option>
                      <option value="jcb">JCB</option>
                      <option value="komatsu">Komatsu</option>
                      <option value="volvo">Volvo</option>
                      <option value="mahindra">Mahindra</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Year</Form.Label>
                    <Form.Select name="year" value={filters.year} onChange={handleFilterChange}>
                      <option value="">All</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Price Range</Form.Label>
                    <div className="d-flex">
                      <Form.Control
                        type="number"
                        placeholder="Min"
                        name="minPrice"
                        className="me-2"
                        value={filters.minPrice}
                        onChange={handleFilterChange}
                      />
                      <Form.Control
                        type="number"
                        placeholder="Max"
                        name="maxPrice"
                        value={filters.maxPrice}
                        onChange={handleFilterChange}
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter location"
                      name="location"
                      value={filters.location}
                      onChange={handleFilterChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      name="isNew"
                      checked={filters.isNew}
                      onChange={handleFilterChange}
                      label="New Equipment"
                    />
                    <Form.Check
                      type="checkbox"
                      name="isFeatured"
                      checked={filters.isFeatured}
                      onChange={handleFilterChange}
                      label="Featured Only"
                    />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button variant="primary">Apply Filters</Button>
                    <Button variant="outline-secondary" onClick={() => setFilters({ keyword: "", category: "", brand: "", year: "", minPrice: "", maxPrice: "", location: "", isFeatured: false, isNew: false })}>
                      Reset
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          )}

          <Col lg={showFilters ? 9 : 12}>
            <Row xs={1} sm={viewMode === "list" ? 1 : 2} md={viewMode === "list" ? 1 : 3} className="g-4">
              {filteredEquipment.map((item) => (
                <Col key={item.id}>
                  <EquipmentCard equipment={item} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UsedEquipmentPage
