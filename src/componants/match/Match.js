import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Row, Col, Container } from 'react-bootstrap';
import Matching from  './matchimg.json'
export default function Match() {
  return (<>
    <Container>
    
      {
         Matching.qimages.map((imagez,index)=>{

            return(
            <div  >

            <Row 
            id={index} 
            style={{ padding: '15px', }} 
            > 
            <Col
             md={1} 
            >
                <Image 
                src={imagez.image} 
                className="square bg-none rounded" 
                style={{width: '150px',
                border: '5px solid blue',
                padding: '20px'
                }}
                />
            </Col>
            </Row>
            </div>
            )

        })}  
    </Container>
    <Container>
        
    </Container>
  </>
  );
}

