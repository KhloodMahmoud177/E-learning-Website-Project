<<<<<<< HEAD
import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import C1 from "../assests/c1.jpg";
import C2 from "../assests/c2.jpg";
import C3 from "../assests/c3.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useCart } from "../statestore/CartContext"; // Import useCart

export const CourseCard = () => {
  const { addToCart } = useCart(); //  addToCart from CartContext

  const courses = [
    {
      id: 1,
      title: "Front-End Developing Using React",
      price: 1500,
      lessons: 24,
      students: 10.4,
      rating: 4.9,
      image: C1,
    },
    {
      id: 2,
      title: "Front-End Developing Using Angular",
      price: 2000,
      lessons: 28,
      students: 15.4,
      rating: 5.2,
      image: C2,
    },
    {
      id: 3,
      title: "Back-End Developing Using .Net",
      price: 1500,
      lessons: 33,
      students: 9.5,
      rating: 4.5,
      image: C3,
    },
  ];

  return (
    <CardGroup>
      {courses.map((course) => (
        <Card key={course.id}>
          <Card.Img variant="top" src={course.image} />
          <Card.Body>
            <Card.Title>{course.title}</Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <div className="lesson d-flex align-items-center gap-1">
                  <i className="ri-book-open-fill"></i> {course.lessons} Lessons
                </div>
                <div className="students d-flex justify-content-between align-items-center">
                  <i className="ri-graduation-cap-fill"></i> {course.students}k
                </div>
                <div className="rating d-flex align-items-center gap-1">
                  <i className="ri-star-fill"></i> {course.rating}
                </div>
                <div className="price d-flex justify-content-between align-items-center">
                  <i className="bi bi-cash-coin"></i> {course.price} LE
                </div>
                <div className="enroll d-flex justify-content-between align-items-center">
                  <Button variant="light" onClick={() => addToCart(course)}>
                   Enroll Now
                  </Button>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  );
};
=======
import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import C1 from '../assests/c1.jpg'
import C2 from '../assests/c2.jpg'
import C3 from '../assests/c3.png'

export const CourseCard = () => {
    return (
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={C1} />
            <Card.Body>
              <Card.Title>Front_End Developing Using React</Card.Title>
              <Card.Text>
              <div className="d-flex justfy-content-between align-items-center">
                    {/* Replace <p> with <div> or <span> */}
                    <div className="lesson d-flex align-items-center gap-1">
                        <i className="ri-book-open-fill"></i> 6 Lessons
                    </div>
                    <div className="students d-flex justfy-content-between align-items-center">
                        <i className="ri-graduation-cap-fill"></i>10.4k
                    </div>
                    <div className="rating d-flex align-items-center gap-1">
                        <i className="ri-star-fill"></i> 4.9
                    </div>
                    <div className="enroll d-flex justfy-content-between align-items-center">
                        <a href="#">Enroll Now</a>
                    </div>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={C2} />
            <Card.Body>
              <Card.Title>Front_End Developing Using Angular</Card.Title>
              <Card.Text>
              <div className="d-flex justfy-content-between align-items-center">
                    <div className="lesson d-flex align-items-center gap-1">
                        <i className="ri-book-open-fill"></i> 6 Lessons
                    </div>
                    <div className="students d-flex justfy-content-between align-items-center">
                        <i className="ri-graduation-cap-fill"></i>15.4k
                    </div>
                    <div className="rating d-flex align-items-center gap-1">
                        <i className="ri-star-fill"></i> 5.2
                    </div>
                    <div className="enroll d-flex justfy-content-between align-items-center">
                        <a href="#">Enroll Now</a>
                    </div>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={C3} />
            <Card.Body>
              <Card.Title>Back_End Developing Using .Net</Card.Title>
              <Card.Text>
              <div className="d-flex justfy-content-between align-items-center">
                    <div className="lesson d-flex align-items-center gap-1">
                        <i className="ri-book-open-fill"></i> 6 Lessons
                    </div>
                    <div className="students d-flex justfy-content-between align-items-center">
                        <i className="ri-graduation-cap-fill"></i>9.5k
                    </div>
                    <div className="rating d-flex align-items-center gap-1">
                        <i className="ri-star-fill"></i> 4.5
                    </div>
                    <div className="enroll d-flex justfy-content-between align-items-center">
                        <a href="#">Enroll Now</a>
                    </div>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      );
}
>>>>>>> e01a430b9d2e4d2377f7661ad9c8c400f790ca01
