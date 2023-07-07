import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Row, Col, Container } from "react-bootstrap";
import Matching from "./matchimg.json";

function shuffleArray(array) {
  // Create a copy of the original array
  const shuffledArray = [...array];
  
  // Shuffle the array using Fisher-Yates algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  
  return shuffledArray;
}


function MatchThePairsQuestionForm() {


  return (
    <Container  >
      {Matching.qimages.map((imagez, index) => (
        <div className="display-flex "> 
          <Row id={index} style={{ padding: "11px" }}>
            <Col md={4}>
              <Image
                src={imagez.image}
                className="square bg-none rounded"
                style={{
                  width: "150px",
                  border: "5px solid blue",
                  padding: "20px",
                }}
              />
            </Col>
            <Col md={4} md-offset={1}>
              <Image
                src={imagez.image}
                className="square bg-none rounded"
                style={{
                  width: "150px",
                  border: "5px solid blue",
                  padding: "20px",
                }}
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default MatchThePairsQuestionForm;
