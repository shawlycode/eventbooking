import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Carousel from "react-grid-carousel";
import "./home.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer" style={{ marginTop: 50 }}>
        <Carousel
          cols={2}
          rows={1}
          gap={5}
          loop
          autoplay={3000}
          breakpoint={767}
          className="carouselCon"
        >
          <Carousel.Item className="item">
            <img src={img3} alt="" />
            <div className="titles">
              <FontAwesomeIcon icon={faLocationDot} />
              <h3>Airport Res </h3>
              <h4>$400 / day</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item className="item">
            <img src={img1} alt="" />
            <div className="titles">
              <FontAwesomeIcon icon={faLocationDot} />
              <h3>Kasoa</h3>
              <h4>$200 /day</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item className="item">
            <img src={img4} alt="" />
            <div className="titles">
              <FontAwesomeIcon icon={faLocationDot} />
              <h3>Kasoa</h3>
              <h4>$200</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item className="item">
            <img src={img5} alt="" />
            <div className="titles">
              <FontAwesomeIcon icon={faLocationDot} />
              <h3>Kasoa</h3>
              <h4>$200</h4>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
