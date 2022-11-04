import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function BrandCarousel() {
  const [index, setIndex] = useState(0);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category/01")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {news.map((n) => (
        <Carousel.Item key={n._id}>
          <img className="d-block w-100" src={n.image_url} alt="First slide" />
          <Carousel.Caption>
            <p>{n.title}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BrandCarousel;
