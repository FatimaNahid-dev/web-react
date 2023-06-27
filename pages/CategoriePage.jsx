import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function CategoriePage() {
  const { categoryName } = useParams();
  const formattedCategoryName = categoryName ? categoryName.toUpperCase() : '';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((response) => setProducts(response.data));
  }, [categoryName]);


  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((response) => setProducts(response.data));
  }, [categoryName]);

  https://api.chec.io/v1/categories

  return (
    <div className="container">
      <div className="my-5 py-5 text-center">
        <h1>{formattedCategoryName}</h1>
      </div>

      <div className="row">
        {products.map((val, key) => (
          <div className="col-md-6 my-4" key={key}>
            <Link className="text-decoration-none" to={`/products/${val.id}`}>
              <Card>
                <Card.Img variant="top" src={val.image} />
                <Card.Body>
                  <Card.Title>{val.title} - {val.price}$</Card.Title>
                  <Card.Text>{val.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
