import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
    const news = useLoaderData()
    const {title, image_url, details, category_id} = news;
  return (
    <Card className="mb-5">
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link className="btn btn-dark" to={`/category/${category_id}`}>All News In this Category</Link>
      </Card.Body>
    </Card>
  );
};

export default News;
