import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ProductPage from '../../pages/ProductPage';


export default function Categories() {

    const [Categories, setCategories] = useState([])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(json => setCategories(json))
    }, [])

    return (
        <>
            <div className="container">
                <div className="my-5 text-center">
                    <h1>CATEGORIES</h1>
                    <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, minus!</p>
                </div>
                <div className="row">
                    {
                       Categories.map((val, key) =>
                       <div className="col-md-4 my-3" key={key}>
                         <Link className='text-decoration-none' to={`/products/category/${val}`}>
                           <Card>
                             <Card.Body>
                               <Card.Title>{val.toUpperCase()}</Card.Title>
                             </Card.Body>
                           </Card>
                         </Link>
                       </div>
                     )
                    }

                </div>
            </div>
        <ProductPage />
        </>
    );
}