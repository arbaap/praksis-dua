import React from "react";
import { Container, Row, Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import backgroundsatu from "../assets/6.png";
import backgrounddua from "../assets/7.jpg";
import backgroundtiga from "../assets/8.png";

function Home() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}
        style={{
          maxWidth: "780px",
          margin: "0 auto",
        }}>
          <Carousel
            style={{
              width: "100%",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              backgroundColor: "white",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "20px",
              margin: " 20px 0 20px 0",
            }}
            
            slide={false}
          >
            <Carousel.Item>
              <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                <img
                  className="d-block w-100"
                  src={backgroundsatu}
                  alt="First slide"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <Carousel.Caption>
                <p>
                  Pemrosesan gambar dengan mengubah ukuran file, resolusi dan tipe gambar.
                </p>
                <Nav.Link
                  as={Link}
                  to="/image-convert"
                  className="custom-button btn-lg rounded-pill"
                >
                  Konversi Gambar
                </Nav.Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                <img
                  className="d-block w-100"
                  src={backgrounddua}
                  alt="Third slide"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <Carousel.Caption>
                <p>Pemrosesan audio dengan mengubah ukuran file dan memgonversi tipe audio sesuai keinginan.</p>
                <Nav.Link
                  as={Link}
                  to="/audio-convert"
                  className="custom-button btn-lg rounded-pill"
                >
                  Konversi Audio
                </Nav.Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                <img
                  className="d-block w-100"
                  src={backgroundtiga}
                  alt="Second slide"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <Carousel.Caption>
                <p>
                  Pemrosesan audio dengan menggabungkan dua file audio menjadi satu.
                </p>
                <Nav.Link
                  as={Link}
                  to="/audio-merge"
                  className="custom-button btn-lg rounded-pill"
                >
                  Merge Audio
                </Nav.Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
