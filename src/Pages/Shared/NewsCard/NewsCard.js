import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaEye, FaStar, FaBookmark,FaShareAlt } from "react-icons/fa";
import { Image } from "react-bootstrap";

const NewsCard = ({ news }) => {
  const {
    _id,
    rating,
    total_view,
    author,
    details,
    image_url,
    title,
  } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <div className="me-3"><Image style={{height:"50px"}} roundedCircle src={author.img}></Image></div>
          <div>
            <p className="mb-0">{author.name || "Name Not Found" }</p>
            <p className="mb-0">{author?.published_date}</p>
          </div>
        </div>
        <div className="d-flex">
          <FaBookmark className="me-2"></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details?.length > 250 ? (
            <>
              {details?.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div><FaEye className="me-1"></FaEye> {total_view}</div>
        <div><FaStar></FaStar> {rating.number} {" "} {rating.badge} </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
