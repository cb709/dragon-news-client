import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const {_id, rating, thumbnail_url, total_view, author, details, image_url, title} = news;
  return (
    <Card className="mb-4">
      <Card.Header>{author?.name}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          { details?.length > 250 ? 
          <p>{details.slice(0,250) + '...'} <Link to={`news/${_id}`}>Read More</Link></p> : 
          <p>{details}</p>}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="">{total_view}</Card.Footer>
    </Card>
  );
};

export default NewsCard;
