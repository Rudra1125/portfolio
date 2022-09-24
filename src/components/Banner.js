import { useState, useEffect } from 'react';
import React from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from '../assets/img/header-img.svg';
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web-Developer", "Coder", "Engineer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 500;

  useEffect(() => {
    let ticker=setInterval(() => {
      tick(); 
    }, delta);
  
    return () => {
      clearInterval(ticker)
    } 
  }, [text])
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta=>prevDelta/2)
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);

    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  }

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi I'm `}
                <span className="wrap">{text}</span>
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa dolore quod voluptates odio est quidem earum ea at iste repudiandae cupiditate minus laborum non consequuntur, amet tempora? Sit veniam possimus expedita voluptate sequi explicabo ipsam, ea commodi quis magni aut, quia rerum sapiente recusandae sed aspernatur quas nam culpa?</p>
              <button onClick={()=>console.log('connect')}/>Let's connect<ArrowRightCircle size={25}/>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Img"/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
